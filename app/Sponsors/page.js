'use client'

import styles from './page.module.css'

import {useState, useEffect} from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

import { Button, ButtonLink } from '@components/Button/Button'
import SponsorPackedGrid from '@/app/components/Sponsorship/SponsorPackedGrid/SponsorPackedGrid'
import SponsorMasonryGrid from '@components/Sponsorship/SponsorMasonryGrid/SponsorMasonryGrid'
import SponsorshipIncentivesBlock from '@/app/components/Sponsorship/SponsorshipIncentivesBlock/SponsorshipIncentivesBlock'
import Select from 'react-select'
import getImageDimensionsFromURL from '@/lib/getImageDimensionsFromURL';

import { Tooltip } from 'react-tooltip'

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
				destinationURL : sponsorData.destination,
                seasons : sponsorData.seasons // array with years as strings
            }
        });

        return sponsorsData;
    } catch (err) {
        console.log(err);
        return [];
    }

}

const LoadingBlock = () => {
	return (
		<span
			style={{
				backgroundColor : '#000',
				display : 'block',
				color : '#fff',
				padding : 40,
				textAlign : 'center',
				fontSize : '1.4rem',
				marginTop : 80,
				marginBottom : 80,
				fontWeight : 600
			}}
		>
			LOADING SPONSORS
		</span>
	)
}

const NoDataBlock = () => {
	return (
		<div
			style={{
				display : 'flex',
				flexDirection : 'column',
				gap : 0,
				backgroundColor : '#000',
				color : '#fff',
				padding : 40,
				textAlign : 'center',
				marginTop : 80,
				marginBottom : 80,
				whiteSpace: 'pre-wrap'
			}}
		>
			<span
				style={{
					fontSize : '1.4rem',
					fontWeight : 600
				}}
			>
				NO DATA
			</span>
			<span>
				{'\n'}Sorry, we don't have any data for this season!
			</span>
		</div>
	)
}


export default function SponsorsPage() {

	const dateNow = new Date();
	const currentSeason = (dateNow.getMonth() < 8 ?  dateNow.getFullYear() - 1 : dateNow.getFullYear());
	const earliestSeason = 2015;

	const [sponsorsData, setSponsorsData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const formatSeason = (season) => {
		return `${season} — ${season + 1} Season`
	}

	const [displaySeasonValue, setDisplaySeasonValue] = useState({value : currentSeason, label : formatSeason(currentSeason)});


	useEffect(() => {

        (async () => {

            // Get SponsorsData
            let sponsorsData = await getSponsorsData();

            // Preload images and get their dimensions
            const sponsorImageMetadata = await Promise.allSettled( 
                sponsorsData.map((sponsorData) => getImageDimensionsFromURL(sponsorData.id, sponsorData.srcURL, true))
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

				if (weight > 6) weight = 6;

				const {width, height, palette, hasTransparency} = imageMetadata;

                sponsorData.metadata = {width, height, columnWeight : weight, palette, hasTransparency}

            })

			// Remove any sponsor items where the image metadata failed to be grabbed 
			sponsorsData = sponsorsData.filter((sponsorData) => {
				return (sponsorData.hasOwnProperty('metadata'));
			})

            setSponsorsData(sponsorsData);
			setLoading(false);

        })();

    }, [])

	let options = [];
	for (let season = earliestSeason; season <= currentSeason; season++) {
		options.push({
			value : season,
			label : formatSeason(season)
		})
	}
	options = options.reverse();

	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true} divider={true} masked={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{marginBottom : 20}}>
						OUR SPONSORS
					</h1>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 120, textAlign : 'justify'}}>
				<div
					style={{
						display : 'flex',
						flexDirection : 'column',
						gap : 40,
						marginBottom : 40,
					}}
				>
					<Select
						value={displaySeasonValue}
						onChange={setDisplaySeasonValue}
						options={options}
						styles={{
							control : (styles) => {
								return ({...styles, height : '48px'})
							}
						}}
					/>
					<div
						style={{
							textAlign : 'center',
							display : 'flex',
							flexDirection : 'column',
							gap : 20
						}}
					>
						<h3>
							A Special Thanks to Our Sponsors!
						</h3>
						<p>
							Thanks to their generous support, we are able to provide more opportunities for our students.
						</p>
					</div>
				</div>
				{
					(isLoading) ? <LoadingBlock/> : (
						(sponsorsData.length == 0) ? <NoDataBlock/> : <SponsorMasonryGrid sponsorsData={sponsorsData} displaySeasonValue={displaySeasonValue}/> // <SponsorPackedGrid sponsorsData={sponsorsData} displaySeasonValue={displaySeasonValue}/>
					)
				}
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
                    href={'/Sponsors/Incentives'}
                    target={''}
                >
                    <span>
                        Learn more about Sponsorship Incentives and how you can help here
                    </span>
                </ButtonLink>
			</div>
			<SponsorshipIncentivesBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Tooltip id="tooltip" noArrow={true} float={true} style={{zIndex : 100}}/>
			<Footer/>
		</div>
	)
}
