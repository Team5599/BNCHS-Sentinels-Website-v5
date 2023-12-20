"use client"
import styles from './page.module.css'
import { useState, useEffect } from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import MediaContainer from './MediaContainer'
import { getRobotData } from '../page'
import Link from 'next/link'
import { ButtonLink } from '@components/Button/Button'

import SponsorBlock from '@components/SponsorBlock/SponsorBlock'

// export async function generateStaticParams() {
// 	const robotData = await getRobotData();
   
// 	return robotData.map((robotItem) => ({
// 	  	id: robotItem.name.replace(/ /g, ""),
// 	}))
// }

// TODO
// Add {<- previous robot} {next robot ->} buttons to bottom right of page

// TODO
// Squeeze BACK button in at top of page to return to grid view

const EventItem = ({eventData}) => {
	return (
		<Link
			href={eventData.url}
			className={styles.eventButton}
			style={{
				color : '#fff',
				padding : 10
			}}
		>
			<span>
				{eventData.name}
			</span>
		</Link>
	)
}


export default function Robot({params}) {

	/* 
		At the moment, there is no way to pass the robots data fetched from the /Robots route down to this dynamic child prop- just the ID for the slug.
		Until then, we have to do this dirty dirty re-fetching
		I am under the impression that NextJS and react de-dupe and cache this duplicated requests, so hopefully we're only really only sending out one request
	*/

	const [robotData, setRobotData] = useState(null);

	useEffect(() => {
		
		async function getRobotDataWrapper() {
			const robotData = await getRobotData();
			setRobotData(robotData)
		}

		getRobotDataWrapper();

	}, [])

	if (robotData == null){
		return <span>
			Loading
		</span>
	}

	const {robotItem, previousRobotItem, nextRobotItem} = (() => {
		const robotItemIndex = robotData.findIndex((robotItem) => {
			return robotItem.name.toLowerCase().replace(/ /g, "") == params.robot.toLowerCase();
		})
		return {
			robotItem : robotData[robotItemIndex],
			previousRobotItem : (robotItemIndex > 0) ? robotData[robotItemIndex - 1] : null,
			nextRobotItem : (robotItemIndex < robotData.length - 1) ? robotData[robotItemIndex + 1] : null
		}
	})()


	console.log("robot", robotItem, previousRobotItem, nextRobotItem, robotItem.media)

	return (
		<div>
			<Navbar/>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify'}}>
				<div
					style={{
						display : 'flex'
					}}
				>
					<ButtonLink
						className={styles.button}
						href={'/Robots'}
						style={{
							backgroundColor : '#000'
						}}
					>
						<span
							style={{
								paddingLeft : 20,
								paddingRight : 20,
								verticalAlign : 'bottom',
								whiteSpace : 'nowrap'
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up-double" style={{marginRight : 10, verticalAlign : 'bottom'}} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M13 14l-4 -4l4 -4" />
								<path d="M8 14l-4 -4l4 -4" />
								<path d="M9 10h7a4 4 0 1 1 0 8h-1" />
							</svg>
							<span>
								Back to Robots
							</span>
						</span>
					</ButtonLink>
				</div>
				
				<h3>{robotItem.name}</h3>
				<h5>{robotItem.type} {robotItem.season}</h5>
				<MediaContainer robotItem={robotItem}/>
				<div
					className={styles.bodyColumns}
				>
					<div
						style={{
							display: 'flex',
							flex : 1,
							flexGrow : 1,
							flexDirection : 'column',
							gap : 10
						}}
					>
						<h5>About {robotItem.name}</h5>
						<span
							style={{
								display : 'inline-block',
								whiteSpace : 'pre-wrap'
							}}
						>
							{robotItem.biography}
						</span>
					</div>
					<div
						className={styles.sideDataContainer}
					>
						<div
							style={{
								display: 'flex',
								flexDirection : 'column',
								gap : 10
							}}
						>
							<h5>Awards</h5>
							<span
								style={{
									fontStyle : 'italic'
								}}
							>
								No API Route
							</span>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection : 'column',
								gap : 10,
							}}
						>
							<h5>Events</h5>
							<div
								style={{
									display : 'flex',
									flexDirection : 'column',
									gap : 10,
									flex : 1,
									flexGrow : 1
								}}
							>
								{
									Object.entries(robotItem.competitions).map(([eventID, eventData]) => {
										return <EventItem key={eventID} eventData={eventData}/>
									})
								}
							</div>
						</div>
					</div>
				</div>
				<div
					className={styles.navigationButtons}
				>
					<ButtonLink
						className={styles.button}
						href={previousRobotItem ? `/Robots/${previousRobotItem.name.replace(/ /g, "")}` : '/Robots'}
						style={{
							backgroundColor : '#000'
						}}
						disabled={previousRobotItem == null}
					>
						<span
							style={{
								paddingLeft : 20,
								paddingRight : 20,
								verticalAlign : 'bottom',
								whiteSpace : 'nowrap'
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left-filled" style={{marginRight : 8, verticalAlign : 'bottom'}} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />
							</svg>
							<span>
								Previous Robot
							</span>
						</span>
					</ButtonLink>
					<ButtonLink
						className={styles.button}
						href={nextRobotItem ? `/Robots/${nextRobotItem.name.replace(/ /g, "")}` : '/Robots'}
						style={{
							backgroundColor : '#000'
						}}
						disabled={nextRobotItem == null}
					>
						<span
							style={{
								paddingLeft : 20,
								paddingRight : 20,
								verticalAlign : 'bottom',
								whiteSpace : 'nowrap',
							}}
						>
							<span>
								Next Robot
							</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right-filled" style={{marginLeft : 8, verticalAlign : 'bottom'}} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" stroke-width="0" fill="currentColor" />
							</svg>
						</span>
					</ButtonLink>
				</div>
			</div>
			<SponsorBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
