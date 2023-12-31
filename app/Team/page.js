'use client'
import styles from './page.module.css'

import {useState, useEffect} from 'react'

import Select from 'react-select'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Divider from '@components/Divider/Divider'

import PersonCard from '@components/PersonCard/PersonCard'
import {PersonCardTwo} from '@components/PersonCard/PersonCard'

import SponsorshipIncentivesBlock from '@/app/components/Sponsorship/SponsorshipIncentivesBlock/SponsorshipIncentivesBlock'

import FilterHeader from '@components/FilterHeader/FilterHeader'
import { Button } from '@components/Button/Button'

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
			LOADING MEMBERS
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
				{'\n'}Sorry, we don't have any data on this section for this season!
			</span>
		</div>
	)
}

const PersonCardContainer = ({title, size, isLoading, members, contrast, displaySeasonValue}) => {
	return (
		<div className={`container ${styles.personBody}`}>
			<h2 style={{
				textAlign: 'center',
				color : contrast ? '#fff' : '#000',
				marginBottom : 20
			}}>
				{title}
			</h2>
			{
				(isLoading) ? <LoadingBlock/> : (
					(members.length == 0) ? <NoDataBlock/> : <div className={styles.personBodyContents}>
						{
							members.map((personItem) => {
								return <PersonCardTwo key={personItem._id} personData={personItem} contrast={contrast} displaySeasonValue={displaySeasonValue}/>
							})
						}
					</div>
				)
				
			}
			
		</div>
	)
}

const LeadershipContainer = ({members, displaySeasonValue, isLoading}) => {
	return (
		<div className={styles.leadershipSection}>
			<svg className={styles.triangleSVG} width="100%" height="40px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 120L0 120 307.75 0 1200 120z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
			<div className={styles.leadershipBlock}>
				<PersonCardContainer title={'LEADERSHIP'} size='lg' isLoading={isLoading} members={members} contrast={true} displaySeasonValue={displaySeasonValue}/>				
			</div>
			<svg className={styles.triangleSVG} width="100%" height="120px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 892.25 120 1200 0z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
		</div>
	)
}

const getTeamData = async (season) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/team/${season || 'current'}`,
            {
                method: 'GET'
            }
        );

        const teamData = await res.json();

        return teamData.payload;

    } catch (err) {
        console.log(err);
        return [];
    }
}


const FilterDivider = ({options, displaySeasonValue, setDisplaySeasonValue}) => {

	return (
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
				styles={{
					control : (styles) => {
						return ({...styles, height : '48px'})
					}
				}}
			/>
		</div>
	)
}

export default function Team() {

	const dateNow = new Date();
	const currentSeason = (dateNow.getMonth() < 8 ?  dateNow.getFullYear() : dateNow.getFullYear() + 1);
	const earliestSeason = 2015;

	const [isLoading, setLoading] = useState(true);

	const [teamData, setTeamData] = useState(
		{
			leadership : [],
			mentors : [],
			roster : [],
			media : {url : '', caption : ''}
		}
	);

	const formatSeason = (season) => {
		return `${season - 1} — ${season} Season`
	}

	const [displaySeasonValue, setDisplaySeasonValue] = useState({value : currentSeason, label : formatSeason(currentSeason)});

    useEffect(() => {

        if (typeof window === 'undefined') return;

        const fetchData = async () => {

            setTeamData(await getTeamData(displaySeasonValue.value));
			setLoading(false);
        }

        fetchData();

    }, [displaySeasonValue])

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
			<Header size='md' imageClass={styles.headerOne} gradient={true} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						MEET THE TEAM
					</h1>
				</div>
			</Header>
			<div className={`container`}>
				<FilterDivider options={options} displaySeasonValue={displaySeasonValue} setDisplaySeasonValue={setDisplaySeasonValue}/>
			</div>
			{/* <div className='container'>
				<FilterHeader/>
			</div> */}
			<LeadershipContainer isLoading={isLoading} members={teamData.leadership} displaySeasonValue={displaySeasonValue}/>
			<PersonCardContainer title={'MEMBERS'} size='md' isLoading={isLoading} members={teamData.roster} displaySeasonValue={displaySeasonValue}/>	
			<PersonCardContainer title={'MENTORS'} size='md' isLoading={isLoading} members={teamData.mentors} displaySeasonValue={displaySeasonValue}/>
			<SponsorshipIncentivesBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
