'use client'

import { useState, useEffect, useMemo } from 'react';

import Link from 'next/link';
import Image from 'next/image';
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

        console.logS("sdata", sponsorsData);

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
            const sponsorsData = await getSponsorsData();


            console.log("Preloading image metadata");
            // Preload images and get their dimensions
            const sponsorImageMetadata = await Promise.allSettled( 
                sponsorsData.map((sponsorData) => {
                    return getImageDimensionsFromURL(sponsorData.id, sponsorData.imageUrl)
                })
            )

            console.log("Getting column weights")
            // Get their 'column weight' to determine their weight (1, 2, 3)
            sponsorImageMetadata.forEach((imageMetadata) => {

                let sponsorData = sponsorsData.find((_sponsorData) => {
                    return _sponsorData.id == imageMetadata.id
                })

                let weight = Math.round(imageMetadata.width / imageMetadata.height);
                sponsorData.metadata = {width : imageMetadata.width, height : imageMetadata.height, columnWeight : weight}

            })

            console.log(sponsorsData);
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

        if (sponsorsData.length == 0) return;

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

        return result;

    }

    const packedSponsorItems = useMemo(() => {
        packSponsorItems(numGridColumns, sponsorsData)
    }, [numGridColumns, sponsorsData])

    return (
        <div>

        </div>
    )
}

export default Sponsors;