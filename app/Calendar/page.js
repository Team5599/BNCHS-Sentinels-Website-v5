'use client'

import styles from './page.module.css'

import { useState, useEffect } from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

import GoogleCalendar from "@ericz1803/react-google-calendar";

const API_KEY = ""
const calendars = [
	{
		calendarID : 'uhq028g80bg92lfr1lq4ft27ik@group.calendar.google.com'
	}
]

export default function Calendar() {

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, [])
	

	return (
		<div>
			<Navbar/>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 120, paddingBottom : 120, maxWidth : 1200, justifyContent : 'center',  textAlign : 'justify'}}>
				{
					(loaded) ?
					<GoogleCalendar calendars={calendars}/>
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
