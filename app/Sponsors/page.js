'use client'

import styles from './page.module.css'

import {useState, useEffect} from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

import { Button } from '@components/Button/Button'
import Sponsors from '@components/Sponsors/Sponsors'
import SponsorBlock from '@components/SponsorBlock/SponsorBlock'
import Select from 'react-select'
import getImageDimensionsFromURL from '@/lib/getImageDimensionsFromURL';

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

        console.log("sdata", sponsorsData);

        return sponsorsData;
    } catch (err) {
        console.log(err);
        return [];
    }

}


export default function SponsorsPage() {

	const dateNow = new Date();
	const currentSeason = (dateNow.getMonth() < 8 ?  dateNow.getFullYear() : dateNow.getFullYear() + 1);
	const earliestSeason = 2015;

	const [sponsorsData, setSponsorsData] = useState([]);

	const formatSeason = (season) => {
		return `${season - 1} — ${season} Season`
	}

	const [displaySeasonValue, setDisplaySeasonValue] = useState({value : currentSeason, label : formatSeason(currentSeason)});


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

			console.log("setting state", sponsorsData);

            setSponsorsData(sponsorsData);

        })();

    }, [])

	let options = [];
	for (let season = earliestSeason; season < currentSeason; season++) {
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
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify'}}>
				<div
					style={{
						display : 'flex',
						flexDirection : 'column',
						gap : 4,
						marginBottom : 40,
					}}
				>
					<Select
						value={displaySeasonValue}
						onChange={setDisplaySeasonValue}
						options={options}
						style={{
							height : 64
						}}
					/>
				</div>
				<Sponsors sponsorsData={sponsorsData} displaySeasonValue={displaySeasonValue}/>
				
			</div>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 80, paddingBottom : 120, textAlign : 'justify'}}>
				<h2 style={{textAlign : 'center'}}>
					SPONSORSHIP INCENTIVES
				</h2>
				<p>
					The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
				</p>
			</div>
			<SponsorBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
