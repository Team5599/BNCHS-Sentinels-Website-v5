'use client'

import { useState, useEffect, useMemo } from 'react';

import Link from 'next/link';
import NextImage from 'next/image';
import styles from './sponsors.module.css';

import useWindowDimensions from '@lib/useWindowDimensions';

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

const getImageDimensionsFromURL = (id, imageUrl) => {

    return new Promise((resolve, reject) => {

        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            resolve({id, width : img.width, height : img.height});
        };

        img.onerror = (err) => {
            console.log("Failed to calculate diimensions from image url", imageUrl);
            console.error(err);
            reject();
        };
    })

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

			console.log("1", sponsorsData);


            console.log("Preloading image metadata");
            // Preload images and get their dimensions
            const sponsorImageMetadata = await Promise.allSettled( 
                sponsorsData.map((sponsorData) => getImageDimensionsFromURL(sponsorData.id, sponsorData.srcURL))
            )

			console.log("2", sponsorImageMetadata);

            console.log("Getting column weights")
			
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

            console.log("3", sponsorsData);
            setSponsorsData(sponsorsData);

        })();

    }, [])

    function calculateNumGridColumns(screenWidth) {
        if (screenWidth < 992) return 3;
        return 5;
    }

    const { _, width } = useWindowDimensions();
 
    const numGridColumns = useMemo(() => {
        return calculateNumGridColumns(width)
    },  [width])

    const packSponsorItems = (numGridColumns, sponsorsData) => {

        if (sponsorsData.length == 0) return [];

        const maxWeight = numGridColumns;

        const result = [];

        let currentBin = [];
        let currentWeight = 0;

        for (const item of sponsorsData) {
            if (currentWeight + item.metadata.columnWeight <= maxWeight) {
                currentBin.push(item);
                currentWeight += item.metadata.columnWeight;
            } else {
                while (currentWeight < maxWeight) {
                    for (const candidate of sponsorsData) {
                        if (currentWeight + candidate.metadata.columnWeight <= maxWeight) {
                            currentBin.push(candidate);
                            currentWeight += candidate.metadata.columnWeight;
                        }
                    }
                }
                result.push(currentBin);
                currentBin = [item];
                currentWeight = item.metadata.columnWeight;
            }
        }

        if (currentBin.length > 0) {
            while (currentWeight < maxWeight) {
                for (const candidate of sponsorsData) {
                    if (currentWeight + candidate.metadata.columnWeight <= maxWeight) {
                        currentBin.push(candidate);
                        currentWeight += candidate.metadata.columnWeight;
                    }
                }
            }
            result.push(currentBin);
        }

		console.log("PACKED", numGridColumns, sponsorsData.length, result);
        return result;

    }

    const packedSponsorItems = useMemo(() => packSponsorItems(numGridColumns, sponsorsData), [numGridColumns, sponsorsData])

    return (
		<>
			<div
				style={{
					display : 'flex',
					justifyContent : 'center',
					flexDirection : 'column',
					gap : 20
				}}
			>
				{
					packedSponsorItems.map((row, index) => {
						return <div
							key={index}
							style={{
								display : 'flex',
								flexDirection : 'row',
							}}
						>
							{
								row.map((sponsorItem) => {
									return <div
										key={sponsorItem.id}
										style={{
											display : 'flex',
											width : sponsorItem.metadata.columnWeight * 120,
											aspectRatio : sponsorItem.metadata.columnWeight/1,
											backgroundColor : '#eee',
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
						</div>
					})
				}
			</div>
			<Link className={styles.sponsorsMoreButton} href={''} target={''}>
				<span>
					Learn more about Sponsorship Incentives and how you can help here
				</span>
			</Link>
		</>
    )
}

export default Sponsors;