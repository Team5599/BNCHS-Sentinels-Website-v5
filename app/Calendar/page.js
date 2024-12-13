'use client'

import './calendarCSSReset.css'
import styles from './page.module.css'

import { useState, useEffect, useReducer } from 'react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

import Link from 'next/link'

import GoogleCalendar from "@ericz1803/react-google-calendar";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API;

// TODO
// Host this in the database so members can edit the calendars
const CALENDAR_DATA = [
	{
		label : 'Team Calendar',
		calendarID : '76219f89bc192747b38f60157704797c34dc85cef427fdde8e6ca7c77bbfa65b@group.calendar.google.com',
		color : '#ff0000',
		enabledByDefault : true,
		requiresAuthentication : false
	},
	{
		label : 'Programming Calendar', 
		calendarID : 'classroom108355962532255578415@group.calendar.google.com',
		color : '#ffff00',
		enabledByDefault : true,
		requiresAuthentication : false
	}
]

const CalendarSidebarItem = ({calendarID, label, color, enabled, toggleCalendarID}) => {

	return (
		<div
			className={styles.calendarSidebarItem}
			style={{
				width : '100%',
				height : 20,
				fontSize : 14,
				color : '#fff',
				display : 'flex',
				alignItems : 'center',
				gap : 8,
				paddingLeft : 5,
				paddingRight : 5,
				paddingTop: 5,
				paddingBottom : 5,
				marginLeft : -5,
				marginRight : -5,
			}}
			onClick={() => {
				toggleCalendarID(calendarID)
			}}
		>
			<div
				style={{
					width : 16,
					height : 16,
					borderRadius : 2,
					backgroundColor : enabled ? color : 'unset',
					borderWidth : 2,
					borderStyle : 'solid',
					borderColor : color
				}}
			/>
			<span>
				{label}
			</span>
		</div>
	)
}

const CalendarAuthentiationNotification = () => {
	return (
		<div
			style={{
				position : 'absolute',
				bottom : 10,
				padding : 10,
				left : 0,
				color : '#fff',
				fontSize : 12,
				display : 'flex',
				flexDirection : 'column',
				alignItems : 'center',
				gap: 10,
				textAlign: 'center',
				marginBottom : 40
			}}
		>
			<span>
				Some calendars are hidden because they required authentication
			</span>
			<div
				style={{
					display : 'flex',
					flexDirection : 'row',
					gap : 30
				}}
			>
				<Link href={'/Calendar'}>
					Sign Up
				</Link>
				<Link href={'/SignIn'}>
					Sign In
				</Link>
			</div>
		</div>
	)
}

const CalendarSidebar = ({CALENDAR_DATA, enabledCalendarIDs, toggleCalendarID}) => {
	
	/* 
		If the screen is wide enough, this stays attached to the side
		If not, it becomes a pop-out sidebar
		The main calendar container should resize/recenter when the sidebar is popped out
	*/

	const isAuthenticated = false;

	const containsHiddenCalendars = (
		isAuthenticated == false && CALENDAR_DATA.some((calendarItem) => {
			return (calendarItem.requiresAuthentication == true)
		}) 
	)

	useEffect(() => {
		console.log("SHOW AUTH LOGIN", containsHiddenCalendars);
	}, [containsHiddenCalendars])

	return (
		<div
			style={{
				position : 'sticky',
				top : 0,
				width : 300,
				paddingTop : 40,
				paddingBottom : 40,
				backgroundColor : '#0f1725'
			}}
		>
			<button
				style={{
					position : 'absolute',
					left : 'calc(100% + 10px)',
					width : 46,
					height : 46,
					top : 26,
					border : 0,
					backgroundColor : '#000'
				}}
			>

			</button>
			<div
				style={{
					height : '100%',
					display : 'flex',
					flexDirection : 'column',
					overflowY : 'auto',
					padding : 10,
				}}
			>
				<button>
					Today
				</button>
				<div
					style={{
						marginTop : 20,
						marginBottom : 20,
						display : 'flex',
						flexDirection : 'column',
						gap : 10
					}}
				>
					{
						CALENDAR_DATA.filter((calendarItem) => {
							if (calendarItem.requiresAuthentication && isAuthenticated == false) return false;
							return true;
						}).map((calendarItem) => {
							return <CalendarSidebarItem key={calendarItem.calendarID} calendarID={calendarItem.calendarID} label={calendarItem.label} color={calendarItem.color} enabled={enabledCalendarIDs.includes(calendarItem.calendarID)} toggleCalendarID={toggleCalendarID}/>
						})
					}
				</div>
				{
					(containsHiddenCalendars) && <CalendarAuthentiationNotification/>
				}
			</div>
		</div>
	)
}

const CalendarRenderWrapper = ({enabledCalendarIDs, renderCalendars}) => {

	const [, forceUpdate] = useReducer(x => x + 1, 0);

	useEffect(() => {
		console.log("Force rerender", enabledCalendarIDs)
		forceUpdate();
	}, [enabledCalendarIDs])

	return (
		<GoogleCalendar
			apiKey={API_KEY}
			calendars={enabledCalendarIDs.length == 0 ? [{calendarId : null}] : renderCalendars}
			styles={{
				today : {
					backgroundColor : '#e0e9f5'
				},
				eventText : {
					fontSize : 14
				}

			}}
		/>
	)
}

export default function Calendar() {

	const [loaded, setLoaded] = useState(false);

	const isAuthenticated = false;

	const [enabledCalendarIDs, setEnabledCalendarIDs] = useState(
		CALENDAR_DATA.filter((calendarItem) => {
			if (calendarItem.enabledByDefault == false) return false;
			if (calendarItem.requiresAuthentication && !isAuthenticated) return false;
			return true;
		}).map((calendarItem) => {
			return calendarItem.calendarID;
		})
	) 

	const toggleCalendarID = (calendarID) =>{
		const indexOfCalendarID = enabledCalendarIDs.indexOf(calendarID);
		if (indexOfCalendarID == -1) {
			setEnabledCalendarIDs([...enabledCalendarIDs, calendarID]);
		} else {
			const newArray = enabledCalendarIDs.filter((_calendarID) => {return _calendarID !== calendarID});
			setEnabledCalendarIDs(newArray)
		}
	}

	const renderCalendars = CALENDAR_DATA.filter((calendarItem) => {
		return enabledCalendarIDs.includes(calendarItem.calendarID);
	}).map((calendarItem) => {
		return {
			calendarId : calendarItem.calendarID,
			color : calendarItem.color
		}
	})

	useEffect(() => {
		console.log("ECI", renderCalendars);
	}, [renderCalendars]);

	useEffect(() => {
		setLoaded(true);
	}, [])

	return (
		<div>
			<Navbar/>
			<div
				style={{
					display : 'flex',
					flex : 1,
					overflowX : 'hidden',
					marginBottom : -60
				}}
			>
				{/* <CalendarSidebar CALENDAR_DATA={CALENDAR_DATA} enabledCalendarIDs={enabledCalendarIDs} toggleCalendarID={toggleCalendarID}/> */}
				<div className={`container ${styles.calendarCSSReset}`} style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 120, paddingBottom : 120, maxWidth : 1200, justifyContent : 'center',  textAlign : 'justify'}}>
					
					{
						(loaded) ?
						<CalendarRenderWrapper enabledCalendarIDs={enabledCalendarIDs} renderCalendars={renderCalendars}/>
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
			</div>
			<Footer/>
		</div>
	)
}
