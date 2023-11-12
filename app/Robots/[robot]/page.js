import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import { getRobotData } from '../page'
import Link from 'next/link'

import SponsorBlock from '@components/SponsorBlock/SponsorBlock'

export async function generateStaticParams() {
	const robotData = await getRobotData();
   
	return robotData.map((robotItem) => ({
	  	id: robotItem.name.replace(/ /g, ""),
	}))
}

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

export default async function Robot({params}) {

	/* 
		At the moment, there is no way to pass the robots data fetched from the /Robots route down to this dynamic child prop- just the ID for the slug.
		Until then, we have to do this dirty dirty re-fetching
		I am under the impression that NextJS and react de-dupe and cache this duplicated requests, so hopefully we're only really only sending out one request
	*/

	const robotData = await getRobotData();

	const robotItem = robotData.find((robotItem) => {
		return robotItem.name.replace(/ /g, "") == params.robot
	})


	return (
		<div>
			<Navbar/>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 120, textAlign : 'justify'}}>
				<h3>{robotItem.name}</h3>
				<h5>{robotItem.type} {robotItem.season}</h5>
				<div
					style={{
						width : '100%',
						height : 500,
						display : 'flex',
						flexDirection : 'column',
						gap : 10
					}}
				>
					<div
						style={{
							backgroundColor : '#ddd',
							width : '100%',
							flex : 1,
							flexGrow : 1
						}}
					>

					</div>
					<div
						style={{
							backgroundColor : '#ddd',
							width : '100%',
							height : 160
						}}
					>

					</div>
				</div>
				<div
					style={{
						display: 'flex',
						gap : 20,
						minHeight : 200
					}}
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
						style={{
							width : 280,
							display : 'flex',
							flexDirection : 'column',
							gap : 20
						}}
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
								gap : 10
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
			</div>
			<SponsorBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
