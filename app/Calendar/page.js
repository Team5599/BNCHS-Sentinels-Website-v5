'use client'

import styles from './page.module.css'

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
	return (
		<div>
			<Navbar/>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify'}}>
				<GoogleCalendar calendars={calendars}/>
			</div>
			<Footer/>
		</div>
	)
}
