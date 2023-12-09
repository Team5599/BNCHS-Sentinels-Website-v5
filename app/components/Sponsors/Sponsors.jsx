'use client'

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';

import Link from 'next/link';
import NextImage from 'next/image';
import styles from './sponsors.module.css';

import useWindowDimensions from '@lib/useWindowDimensions';
import { useContainerDimensions } from '@/lib/useContainerDimensions';
import getImageDimensionsFromURL from '@/lib/getImageDimensionsFromURL';

import { ButtonLink } from '@components/Button/Button';

const getSponsorsData = async () => {

    try {
        const res = await fetch(
            `https://beta.team5599.com/api/v1/sponsors`,
            {
                method: 'GET'
            }
        );

        const data = await res.json();
    
        const sponsorsData = data.payload.map((sponsorData) => {
            return {
                id : sponsorData._id,
                srcURL : sponsorData.image,
                name : sponsorData.name,
                seasons : sponsorData.seasons // array with years as strings
            }
        });

        console.log("sdata", sponsorsData);

        return sponsorsData;
    } catch (err) {
        console.log(err);
        return [];
    }

}


const FILLERBLOCK_BACKGROUND_COLORS = [
    '#eeeeee',
    '#027bff40',
    '#f6831330'
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FillerBlock = ({itemHeight, row_index, column_index}) => {


    const [backgroundColorIndex, setBackgroundColorIndex] = useState(getRandomInt(0, FILLERBLOCK_BACKGROUND_COLORS.length - 1));

    const iterateBackgroundColor = () => {
        setBackgroundColorIndex((current) => {
            console.log("curr", current);
            if (current + 1 >= FILLERBLOCK_BACKGROUND_COLORS.length) {
                return 0;
            }
            return current + 1;
        })
    }

    return <div
        key={`filler-${row_index}-${column_index}`}
        onPointerEnter={iterateBackgroundColor}
        onPointerDown={iterateBackgroundColor}
        style={{
            display: 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            gridColumn : `span 1`,
            height : itemHeight,
            gridRow : `${row_index} / span 1`,
            transition: 'background-color 0.2s',
            backgroundColor: FILLERBLOCK_BACKGROUND_COLORS[backgroundColorIndex],
        }}
    />

}

const Sponsors = () => {

    /*
        Sponor Blocks can be 1x1 or 2x1 (wxh)
        We fill row by row. If there is 1x1 slot left and only 2x1 items left, swap the last 1x1 out and fill. Repeat.
    */

    /*
        Fetch and preload all the sponsor images
        Calculate 'best-fit' using image dimensiosn (mark them as 1x1, 2x1, or even 3x1)
        Begin memoized packing algorithm
    */

    const [sponsorsData, setSponsorsData] = useState([]);

    useEffect(() => {

        (async () => {

            console.log("Getting sponsors data");

            // Get SponsorsData
            let sponsorsData = await getSponsorsData();

            // Preload images and get their dimensions
            const sponsorImageMetadata = await Promise.allSettled( 
                sponsorsData.map((sponsorData) => getImageDimensionsFromURL(sponsorData.id, sponsorData.srcURL))
            )
			
            // Get their 'column weight' to determine their weight (1, 2, 3)
            sponsorImageMetadata.forEach((imageMetadataPromise) => {

				if (imageMetadataPromise.status == 'rejected') return;

				const imageMetadata = imageMetadataPromise.value;

                let sponsorData = sponsorsData.find((_sponsorData) => {
                    return _sponsorData.id == imageMetadata.id
                })

				if (sponsorData == undefined){
					console.log("Failed to find sponsor data with id", imageMetadata.id);
					return;
				}

                let weight = Math.round(imageMetadata.width / imageMetadata.height);
                sponsorData.metadata = {width : imageMetadata.width, height : imageMetadata.height, columnWeight : weight}

            })

			// Remove any sponsor items where the image metadata failed to be grabbed 
			sponsorsData = sponsorsData.filter((sponsorData) => {
				return (sponsorData.hasOwnProperty('metadata'));
			})

            setSponsorsData(sponsorsData);

        })();

    }, [])

    function calculateNumGridColumns(screenWidth) {
        if (screenWidth < 768) return 2;
        if (screenWidth < 992) return 4;
        if (screenWidth < 1200) return 5;
        if (screenWidth < 1400) return 6;
        return 7;
    }

    const { _, width } = useWindowDimensions();
 
    const numGridColumns = useMemo(() => {
        return calculateNumGridColumns(width)
    },  [width])


    const packSponsorItems = useCallback((numGridColumns, sponsorsData, disableBacktracking, shuffleInFillers) => {

        if (sponsorsData.length == 0) return [];

        let items = [...sponsorsData].reverse();
        let fitItemsNo = 0;

        const rows = [];
        let currentRow = [];
        let currentRowWeight = 0;

        let lastFitAttemptTracker = {};

        if (shuffleInFillers) {

            function seededRandomNumber(seed) {
                const x = Math.sin(seed++) * 10000;
                return x - Math.floor(x);
            }
        
            function shuffle(array, seed) {
                let currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle.
                while (currentIndex > 0) {
              
                    // Pick a remaining element.
                    randomIndex = Math.floor(seededRandomNumber(seed) * currentIndex);
                    currentIndex--;
                
                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]
                    ];
                    ++seed;
                }
              
                return array;
            }

            const sponsorsDataTotalWeight = sponsorsData.reduce((acc, curr) => {
                return acc + curr.metadata.columnWeight;
            }, 0)

            let numFillers = numGridColumns - (sponsorsDataTotalWeight % numGridColumns);

            if (numFillers == numGridColumns) {
                numFillers = 0;
            }

            console.log(`Requires ${numFillers} fillers to fill grid`);

            items.push(...Array(numFillers).fill({
                id : 'filler',
                metadata : {columnWeight : 1},
                type : 'prefill'
            }))

            for (let i = 0; i < 3; i++){
                items = shuffle(items, 10);
            }
            

        }

        

        /*
            Iterate through each sponsor item.
            If an item can be placed in the current row, place it and remove it from the available pool
            If it cannot be placed in the row, try the next item until exhausted
            If no items fit in the row, create a new row and repeat. Fill the abandoned row with 1x1 fillers

            If disableBacktracking is true, we only do one pass over all the items. As soon as an item can't fit in a row, we fill it with spacers, create a new row, and proceed iterating over the items.
        */

        let iteration = 0;

        console.log("Fitting", [...items], "in columns:", numGridColumns);

        iteration_loop : while (items.length > 0){

            console.log("Iteration", iteration, items.length);
            // Attempt to fill current row with all sponsor items
            for (let i = items.length - 1; i >= 0; i--){

                const sponsorItem = items[i];

                if (sponsorItem.metadata.columnWeight >= numGridColumns){
                    // Unique case where the item is as wide as or wider than the available columns, so we force it into it's own row
                    rows.push([sponsorItem]);
                    fitItemsNo++;
                    items.splice(i, 1);

                    console.log("Whole row fit for item", sponsorItem);
                    continue;
                }

                if (currentRowWeight + sponsorItem.metadata.columnWeight <= numGridColumns) {
                    // Add to current row
                    currentRow.push(sponsorItem);
                    currentRowWeight = currentRowWeight + sponsorItem.metadata.columnWeight;
                    fitItemsNo++;
                    // Remove from list of available items
                    items.splice(i, 1);

                    console.log("Good fit for item", sponsorItem);
                    
                    // If we are out of items
                    // If there was backtracking, fill remaining space with fillers and send the current row off
                    // If there was NO backtracking, do not fill the space with fillers, attempt to fill with remaining items . . .
                    if (items.length == 0){


                        if (disableBacktracking == true){
                            let remainingWeight = numGridColumns - currentRowWeight;
                        
                            currentRow.push(...Array(remainingWeight).fill({
                                id : 'filler',
                                metadata : {columnWeight : 1}
                            }));
                        }
                        
                        rows.push(currentRow);

                        continue;
                    }

                    // If the row is full, send it off and create a new row to fill
                    if (currentRowWeight == numGridColumns) {
                        rows.push(currentRow);
                        currentRow = [];
                        currentRowWeight = 0;
                        console.log("New row (from filled)");
                    }

                    continue;
                }

                // If the item doesn't fit, and backtracking is disabled (or we're in a loop and can't fit an item), fill the current row with fillers, send it off, and create a new row with the item that didn't fit.

                if (disableBacktracking || (lastFitAttemptTracker[sponsorItem.id] && lastFitAttemptTracker[sponsorItem.id] > 1)) {

                    // Fill the current row with fillers and send it off
                    let remainingWeight = numGridColumns - currentRowWeight;
                
                    currentRow.push(...Array(remainingWeight).fill({
                        id : 'filler',
                        metadata : {columnWeight : 1}
                    }));
                    rows.push(currentRow);

                    // Create a new row with the item that didn't fit
                    currentRow = [sponsorItem];
                    currentRowWeight = sponsorItem.metadata.columnWeight;
                    fitItemsNo++;

                    // Remove from list of available items
                    items.splice(i, 1);
                    
                    console.log("New row (from disableBacktracking)");


                } else {
                    console.log("Skipping fit for item", sponsorItem);

                    if (iteration > 100){
                        console.log("Fit Overflow");
                        break iteration_loop;
                    }

                    if (lastFitAttemptTracker[sponsorItem.id]) {
                        lastFitAttemptTracker[sponsorItem.id]++
                    } else {
                        lastFitAttemptTracker[sponsorItem] = 1;
                    }
                }

                
            }

            if (items.length == 0) break;

            // There are items left that did not fit in the current row
            // Fill any remaining space in the row if it's a non-empty row
            if (currentRowWeight !== 0 && disableBacktracking == true && shuffleInFillers == true){

                let remainingWeight = numGridColumns - currentRowWeight;
            
                currentRow.push(...Array(remainingWeight).fill({
                    id : 'filler',
                    metadata : {columnWeight : 1}
                }));
                rows.push(currentRow);

                // Create a new row and try to fill the remaining items
                currentRow = [];
                currentRowWeight = 0;

            }


            iteration++;
        }
        

        console.log("PACKED", numGridColumns, sponsorsData.length, fitItemsNo, rows);
        return rows;
    }, [])


    const packedSponsorItems = useMemo(() => packSponsorItems(numGridColumns, sponsorsData, false, true), [numGridColumns, packSponsorItems, sponsorsData])

    const containerRef = useRef();
    const { width : containerWidth} = useContainerDimensions(containerRef);
    const gridGap = 20;
    const itemHeight = useMemo(() => {
        return (containerWidth - (gridGap * (numGridColumns - 1)))/numGridColumns;
    }, [containerWidth, numGridColumns])
    
    

    // item height = [(width of container) - (gap * n - 1)]/(n)

    return (
		<>
			<div
                ref={containerRef}
				style={{
                    display : 'grid',
                    gridTemplateColumns: `repeat(${numGridColumns}, 1fr)`,
                    gap : gridGap
				}}
			>
				{
					packedSponsorItems.map((row, row_index) => {
						return <>
							{
								row.map((sponsorItem, column_index) => {
                                    if (sponsorItem.id == "filler") {
                                        return <FillerBlock key={`filler-${row_index}-${column_index}`} row_index={row_index} column_index={column_index} itemHeight={itemHeight}/>
                                    }
									return <div
										key={sponsorItem.id}
										style={{
											display : 'flex',
                                            gridColumn : `span ${sponsorItem.metadata.columnWeight > numGridColumns ? numGridColumns : sponsorItem.metadata.columnWeight}`,
                                            height : itemHeight,
                                            gridRow : `${row_index} / span 1`,
                                            position : 'relative',
										}}
									>
										<NextImage
											unoptimized
											src={sponsorItem.srcURL}
											fill={true}
											alt={sponsorItem.name}
											style={{
												aspectRatio : sponsorItem.metadata.columnWeight/1,
												objectFit : 'contain',
											}}
										/>
									</div>
								})
							}
						</>
					})
				}
			</div>
			<ButtonLink
                className={styles.sponsorsMoreButton}
                style={{
                    marginTop : 80,
                    backgroundColor: 'transparent',
                    '--hoverBackgroundColor' : '#000',
                    outlineColor : '#000',
                    '--activeBackgroundColor' : '#444'
                }}
                variant={'inverted'}
                href={''}
                target={''}
            >
				<span>
					Learn more about Sponsorship Incentives and how you can help here
				</span>
			</ButtonLink>
		</>
    )
}

export default Sponsors;