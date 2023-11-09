'use client'
import styles from './page.module.css'

import {useState, useEffect} from 'react'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

import PersonCard from '@components/PersonCard/PersonCard'
import {PersonCardTwo} from '@components/PersonCard/PersonCard'

import FilterHeader from '@components/FilterHeader/FilterHeader'

const PersonCardContainer = ({title, size, members, contrast}) => {
	return (
		<div className={`container ${styles.personBody}`}>
			<h5 style={{
				color : contrast ? '#fff' : '#000'
			}}>
				{title}
			</h5>
			<div className={styles.personBodyContents}>
				{
					members.map((personItem) => {
						return <PersonCardTwo key={personItem._id} personData={personItem} contrast={contrast}/>
					})
				}
			</div>
		</div>
	)
}

const LeadershipContainer = ({members}) => {
	return (
		<div className={styles.leadershipSection}>
			<svg className={styles.triangleSVG} width="100%" height="120px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 120L0 120 307.75 0 1200 120z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
			<div className={styles.leadershipBlock}>
				<PersonCardContainer title={'LEADERSHIP'} size='lg' members={members} contrast={true}/>				
			</div>
			<svg className={styles.triangleSVG} width="100%" height="120px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 892.25 120 1200 0z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
		</div>
	)
}

const getTeamData = async (season) => {
    try {
        const res = await fetch(
            `https://beta.team5599.com/api/v1/Team/${season || 'current'}`,
            {
                method: 'GET'
            }
        );

        const teamData = await res.json();

        console.log(teamData);

        return teamData.payload;

    } catch (err) {
        console.log(err);
        return [];
    }
}

export default function Team() {

	const [teamData, setTeamData] = useState(
		{
			leadership : [],
			mentors : [],
			roster : [],
			media : {url : '', caption : ''}
		}
	);

    useEffect(() => {

        if (typeof window === 'undefined') return;

        const fetchData = async () => {
            setTeamData(await getTeamData(2020));
        }

        fetchData();

    }, [])

	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2 style={{fontWeight : 900, marginBottom : 20}}>
						MEET THE TEAM
					</h2>
				</div>
			</Header>
			<div className='container'>
				<FilterHeader/>
			</div>
			<LeadershipContainer members={teamData.leadership}/>
			<PersonCardContainer title={'MEMBERS'} size='md' members={teamData.roster}/>	
			<PersonCardContainer title={'MENTORS'} size='md' members={teamData.mentors}/>	
			<Footer/>
		</div>
	)
}
