import {useRef, useMemo, useState} from 'react';
import NextImage from 'next/image';
import Link from 'next/link';

import { useContainerDimensions } from '@lib/useContainerDimensions';
import shuffleArray from '@lib/shuffleArray';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import styles from './sponsorMasonryGrid.module.css';

/*
    render layout looks clean because numGridColumns is a multiple of the max column-weight clamp
*/
function calculateNumGridColumns(screenWidth) {
    if (screenWidth < 768) return 4;
    if (screenWidth < 992) return 6;
    if (screenWidth < 1200) return 9;
    if (screenWidth < 1400) return 9;
    return 12;
}

const FILLERBLOCK_BACKGROUND_COLORS = [
    '#eeeeee',
    // '#027bff40',
    // '#f6831330'
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FillerBlock = () => {


    const [backgroundColorIndex, setBackgroundColorIndex] = useState(getRandomInt(0, FILLERBLOCK_BACKGROUND_COLORS.length - 1));

    const iterateBackgroundColor = () => {
        setBackgroundColorIndex((current) => {
            if (current + 1 >= FILLERBLOCK_BACKGROUND_COLORS.length) {
                return 0;
            }
            return current + 1;
        })
    }

    return <AnimationOnScroll
        offset={0}
        animatePreScroll={true}
        animateIn="animate__zoomIn"
        animateOnce={true}
        onPointerEnter={iterateBackgroundColor}
        onPointerDown={iterateBackgroundColor}
        style={{
            display: 'flex',
            gridArea : `span 1 / span 1`,
            transition: 'background-color 0.2s',
            backgroundColor: FILLERBLOCK_BACKGROUND_COLORS[backgroundColorIndex],
        }}
    />

}

const SponsorMasonryGrid = ({sponsorsData, displaySeasonValue}) => {
    
    console.log("SPONSORS", sponsorsData, displaySeasonValue);

    sponsorsData = sponsorsData.filter((sponsorData) => {
        return (sponsorData.seasons.includes(displaySeasonValue.value.toString()));
    })

    const containerRef = useRef(null);

    const { width : containerWidth} = useContainerDimensions(containerRef);

    const GUTTER = 20;

    const numGridColumns = useMemo(() => {
        return calculateNumGridColumns(containerWidth)
    },  [containerWidth])

    // containerWidth = (itemWidth * numGridColumns) + (GUTTER * (numGridColumns - 1))
    // itemWeight = (containerWidth - (GUTTER * (numGridColumns - 1)))/numGridColumns

    const absurdHeightCalculation = useMemo(() => {
        const width = (containerWidth - (GUTTER * (numGridColumns - 1)))/numGridColumns;
        return width;
    }, [containerWidth, numGridColumns])

    // Mobile fix:
    // If there are any items that have a columnWeight greater than the numGridColumns breakpoint, clamp them

    const totalColumnWeights = useMemo(() => {

        const needsClamp = sponsorsData.find((sponsorItem) => {
            return (sponsorItem.metadata.columnWeight > numGridColumns);
        }) !== undefined;

        function getCorrectWeight(columnWeight){
            if (needsClamp == false) return columnWeight;
            if (columnWeight > numGridColumns) return numGridColumns;
            return columnWeight;
        }

        return sponsorsData.reduce((curr, sponsorItem) => {
            return (curr + getCorrectWeight(sponsorItem.metadata.columnWeight))
        }, 0)

    }, [numGridColumns, sponsorsData])

    const roundUpToNearestMultiple = (n, multiple) => {
        if (n > 0) {
            return Math.ceil(n / multiple) * multiple;
        } else if (n < 0) {
            return Math.floor(n / multiple) * multiple;
        } else {
            return multiple;
        }
    }

    const remainingTiles = roundUpToNearestMultiple(totalColumnWeights, numGridColumns) - totalColumnWeights;

    if (remainingTiles > 0) {
        console.log("Remaining Tiles", remainingTiles);
        let fillers = new Array(remainingTiles).fill("FILLER");
        sponsorsData = sponsorsData.concat(fillers); // shuffleArray(sponsorsData.concat(fillers));
    }

    return (
        
        <div
            ref={containerRef}
            style={{
                display : 'grid',
                gridTemplateColumns : `repeat(${numGridColumns}, ${absurdHeightCalculation}px)`,
                gridAutoRows : `${absurdHeightCalculation}px`,
                gridAutoFlow : 'dense',
                gap : GUTTER,
            }}
        >
            {
                sponsorsData.map((sponsorItem, index) => {

                    if (sponsorItem == 'FILLER') {
                        return <FillerBlock key={`FILLER-${index}`}/>
                    }

                    return (
                        <AnimationOnScroll
                            key={sponsorItem.id}
                            data-tooltip-id="tooltip" data-tooltip-content={sponsorItem.name}
                            offset={0}
                            animatePreScroll={true}
                            animateIn="animate__zoomIn"
                            animateOnce={true}
                            style={{
                                display : 'flex',
                                position : 'relative',
                                gridArea : `span 1 / span ${sponsorItem.metadata.columnWeight > numGridColumns ? numGridColumns : sponsorItem.metadata.columnWeight}`,
                                overflow : 'hidden',
                                backgroundColor : (() => {
                                    if (sponsorItem.metadata.hasTransparency) return '#eeeeee';
                                    const [r, g, b] = sponsorItem.metadata.palette[0];
                                    if (r < 10 && g < 10 && b < 10) { /* Annoying hack to force grays to be black */
                                        return '#000'
                                    }
                                    return `rgb(${r}, ${g}, ${b})`;
                                })()
                            }}
                        >
                            <NextImage
                                unoptimized
                                src={sponsorItem.srcURL}
                                alt={sponsorItem.name}
                                fill={true}
                                style={{
                                    objectFit : 'contain',
                                    flex : 1
                                    // backgroundColor : sponsorItem.hasTransparency ? 'transparent' : (() => {
                                    //     const [r, g, b] = sponsorItem.metadata.palette[0];
                                    //     return `rgb(${r}, ${g}, ${b})`;
                                    // })()
                                }}
                                
                            />
                            {
                                (sponsorItem.destinationURL !== undefined && sponsorItem.destinationURL.replace(/ /g, "") !== "") && <Link
                                    href={sponsorItem.destinationURL} target='blank'
                                    style={{position: 'absolute', top : 0, left : 0, right : 0, bottom : 0}}
                                />
                            }
                        </AnimationOnScroll>
                    )
                })
            }
        </div>
    )
}

export default SponsorMasonryGrid;