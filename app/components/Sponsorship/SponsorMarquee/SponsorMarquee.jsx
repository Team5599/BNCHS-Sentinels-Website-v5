'use client'

import {useState, useEffect} from 'react';
import Image from "next/image";
import Marquee from "react-fast-marquee";
import getImageDimensionsFromURL from '@/lib/getImageDimensionsFromURL';
import { ButtonLink } from '@components/Button/Button';
import styles from './sponsorMarquee.module.css';
import { Tooltip } from 'react-tooltip'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Link from 'next/link';


const getSponsorsData = async () => {

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/sponsors`,
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

        return sponsorsData;
    } catch (err) {
        console.log(err);
        return [];
    }

}

function moveElementsToEndOfArray(arr, x) {
 
    let n = arr.length;
 
    // if x is greater than length 
    // of the array
    x = x % n;
 
    let first_x_elements = arr.slice(0, x);
 
    let remaining_elements = arr.slice(x, n);
 
    // Destructuring to create the desired array
    arr = [...remaining_elements, ...first_x_elements];
 
    return arr;
}


const SponsorMarquee = ({sponsorSize = 64}) => {

    const [sponsorsData, setSponsorsData] = useState([]);

    useEffect(() => {

        (async () => {

            const dateNow = new Date();
            const currentSeason = (dateNow.getMonth() < 8 ?  dateNow.getFullYear() - 1 : dateNow.getFullYear());

            // Get SponsorsData
            let sponsorsData = await getSponsorsData();

            // Filter for current season
            sponsorsData = sponsorsData.filter((sponsorData) => {
                return (sponsorData.seasons.includes(currentSeason.toString()));
            })

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
            <div>
                <Marquee
                    style={{
                        backgroundColor : '#fff',
                        minHeight : 120,
                        paddingTop : 20,
                        paddingBottom : 0,
                    }}
                >
                    {
                        moveElementsToEndOfArray([...sponsorsData], 2).map((sponsorData) => {
                            if (sponsorData.destinationURL !== undefined && sponsorData.destinationURL.replace(/ /g, "") !== "") {
                                return <Link
                                    key={sponsorData.name}
                                    data-tooltip-id="tooltip" data-tooltip-content={sponsorData.name}
                                    href={sponsorData.destinationURL}
                                    target='blank'
                                    style={{
                                        marginLeft : 40,
                                        marginRight : 40
                                    }}
                                >
                                    <Image
                                        src={sponsorData.srcURL}
                                        alt={sponsorData.name}
                                        unoptimized
                                        height={sponsorSize}
                                        width={sponsorData.metadata.columnWeight * sponsorSize}
                                    />
                                </Link>
                            }
                            return <Image
                                data-tooltip-id="tooltip" data-tooltip-content={sponsorData.name}
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
                <Marquee
                    style={{
                        backgroundColor : '#fff',
                        minHeight : 120,
                        paddingTop : 40,
                        paddingBottom : 0,
                    }}
                >
                    {
                        sponsorsData.map((sponsorData) => {
                            if (sponsorData.destinationURL !== undefined && sponsorData.destinationURL.replace(/ /g, "") !== "") {
                                return <Link
                                    key={sponsorData.name}
                                    data-tooltip-id="tooltip" data-tooltip-content={sponsorData.name}
                                    href={sponsorData.destinationURL}
                                    target='blank'
                                    style={{
                                        marginLeft : 40,
                                        marginRight : 40
                                    }}
                                >
                                    <Image
                                        src={sponsorData.srcURL}
                                        alt={sponsorData.name}
                                        unoptimized
                                        height={sponsorSize}
                                        width={sponsorData.metadata.columnWeight * sponsorSize}
                                    />
                                </Link>
                            }
                            return <Image
                                data-tooltip-id="tooltip" data-tooltip-content={sponsorData.name}
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
            </div>
            <Tooltip id="tooltip" noArrow={true} float={true} style={{zIndex : 100}}/>
            <div className={`container`}>
                <AnimationOnScroll delay={400} duration={1.4} animateIn="animate__fadeInUp" animateOnce={true}>
                    <ButtonLink
                        className={styles.sponsorsMoreButton}
                        style={{
                            backgroundColor: 'transparent',
                            '--hoverBackgroundColor' : '#000',
                            outlineColor : '#000',
                            '--activeBackgroundColor' : '#444'
                        }}
                        variant={'inverted'}
                        href={'/Sponsors/Incentives'}
                        target={''}
                    >
                        <span style={{
                            paddingTop : 8,
                            paddingBottom : 8
                        }}>
                            Learn more about Sponsorship Incentives and how you can help here
                        </span>
                    </ButtonLink>
                </AnimationOnScroll>
            </div>
        </div>
        
    )
}

export default SponsorMarquee;