'use client'

import {useState, useEffect} from 'react';
import Image from "next/image";
import Marquee from "react-fast-marquee";
import getImageDimensionsFromURL from '@/lib/getImageDimensionsFromURL';
import { ButtonLink } from '@components/Button/Button';
import styles from './sponsorBlock.module.css';

const getSponsorsData = async () => {

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/sponsors/current`,
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

const SponsorMarquee = ({sponsorSize = 64}) => {

    const [sponsorsData, setSponsorsData] = useState([]);

    useEffect(() => {

        (async () => {

            console.log("Getting sponsors data for marquee");

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

    return (
        <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                gap : 120,
                marginTop : 120,
                marginBottom : 80
            }}
        >
            <Marquee
                style={{
                    backgroundColor : '#fff',
                    paddingTop : 40,
                    paddingBottom : 20,
                }}
            >
                {
                    sponsorsData.map((sponsorData) => {
                        return <Image
                            key={sponsorData.name}
                            src={sponsorData.srcURL}
                            alt={sponsorData.name}
                            unoptimized
                            height={sponsorSize}
                            width={sponsorData.metadata.columnWeight * sponsorSize}
                            style={{
                                marginLeft : 40,
                                marginRight : 40
                            }}
                        />
                    })
                }
            </Marquee>
            <div className={`container`}>
                <ButtonLink
                    className={styles.sponsorsMoreButton}
                    style={{
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
            </div>
        </div>
        
    )
}

export default SponsorMarquee;