'use client'

import './calendarCSSReset.css'
import styles from './page.module.css'

import { useState, useEffect } from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

import GoogleCalendar from "@ericz1803/react-google-calendar";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API;

// TODO
// Host this in the database so members can edit the calendars
const CALENDAR_DATA = [
	{
		label : 'Team Calendar',
		calendarID : '76219f89bc192747b38f60157704797c34dc85cef427fdde8e6ca7c77bbfa65b@group.calendar.google.com',
		color : '#ff0000',
		enabledByDefault : true
	}
]

export default function Calendar() {

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, [])

	const calendars = CALENDAR_DATA.map((calendarItem) => {
		return {
			calendarId : calendarItem.calendarID,
			color : calendarItem.color
		}
	})


	return (
		<div>
			<Navbar/>
			<div className={`container ${styles.calendarCSSReset}`} style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 120, paddingBottom : 120, maxWidth : 1200, justifyContent : 'center',  textAlign : 'justify'}}>
				{
					(loaded) ?
					<GoogleCalendar
						apiKey={API_KEY}
						calendars={calendars}
						styles={{
							today : {
								backgroundColor : '#e0e9f5'
							},
							eventText : {
								fontSize : 14
							}

						}}
					/>
					: <div
						style={{
							backgroundColor : '#eee',
							width : '100%',
							maxWidth : 1200,
							height : '50vh',
							display: 'flex',
							justifyContent : 'center',
							alignItems : 'center'
						}}
					>
						<span
							style={{
								fontSize : 22,
								fontWeight : 600,
								backgroundColor : '#000',
								padding : '20px 80px',
								color : '#fff'
							}}
						>
							Loading Calendar
						</span>
					</div>
				}
			</div>
			<Footer/>
		</div>
	)
}
