'use client'

import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import {useRef, useState} from 'react';

const PhoneIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
		</svg>
	)
}

const EmailIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
			<path d="M3 7l9 6l9 -6"></path>
		</svg>
	)
}

const PinIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
			<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
		</svg>
	)
}

const contactInformation = [
	{
		icon : <PhoneIconSVG/>,
		text : "(347) 858 5959"
	},
	{
		icon : <EmailIconSVG/>,
		text : "sentinels@team5599.com"
	},
	{
		icon : <PinIconSVG/>,
		text : "123 ADDRESS LANE\nBAYSIDE, NEW YORK 11365"
	}
]

const ContactInput = ({inputRef, onChange, value, label}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection : 'column',
				flex : 1
			}}
		>
			<span
				style={{
					fontSize: '0.8rem',
					fontWeight : 600
				}}
			>
				{label}
			</span>
			<input
				ref={inputRef}
				onChange={(e, value) => {
					onChange(value);
				}}
				value={value}
				style={{
					border : 0,
					borderStyle : null,
					borderBottomWidth : 2,
					borderBottomColor : '#ddd',
					height : 32,
					padding : 0,
					margin : 0,
					fontSize : 22
				}}
			/>
		</div>
	)
}

const ContactSubjectContainer = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection : 'column',
				gap : 10
			}}
		>
			<span
				style={{
					fontSize: '0.8rem',
					fontWeight : 600
				}}
			>
				Subject
			</span>
			<div
				style={{
					display: 'flex',
					justifyContent : 'space-between',
				}}
			>
				<div
					style={{
						display: 'flex',
						gap : 5,
						justifyContent : 'center'
					}}
				>
					<input type="radio" name="choice" value="general" style={{transform: 'scale(1)'}}/>
					<span
						style={{
							fontSize : 14,
							marginTop : 2
						}}
					>
						General Inquiry
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						gap : 5,
						justifyContent : 'center'
					}}
				>
					<input type="radio" name="choice" value="sponsorship" style={{transform: 'scale(1)'}}/>
					<span
						style={{
							fontSize : 14,
							marginTop : 2
						}}
					>
						Sponsorship
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						gap : 5,
						justifyContent : 'center'
					}}
				>
					<input type="radio" name="choice" value="technical" style={{transform: 'scale(1)'}}/>
					<span
						style={{
							fontSize : 14,
							marginTop : 2
						}}
					>
						Technical Inquiry (?)
					</span>
				</div>
			</div>
		</div>
	)
}

export default function Contact() {

	const inputFirstNameRef = useRef(null);
	const inputLastNameRef = useRef(null);
	const inputEmailRef = useRef(null);
	const inputPhoneRef = useRef(null);


	const [inputFirstName, setInputFirstName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPhone, setInputPhone] = useState("");

	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						Contact Us
					</h1>
				</div>
			</Header>
			<SubheaderShape size='sm'/>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify', backgroundColor : '#fdfdfd'}}>
				<div
					style={{
						display: 'flex',
						minHeight : 500,
						outline : '1px solid #000',
						marginTop : 80,
						marginBottom : 80
					}}
				>
					<div
						style={{
							backgroundColor : '#000',
							flex : 2,
							color : '#fff',
							padding : 40,
							display: 'flex',
							flexDirection : 'column',
							justifyContent : 'space-between'
						}}
					>
						<div>
							<h5>
								Contact Information
							</h5>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap : 40
							}}
						>
							{
								contactInformation.map((contactItem, index) => {
									return <div
										key={index}
										style={{
											display: 'flex',
											gap : 20,
											alignItems : 'center'
										}}
									>
										{
											contactItem.icon
										}
										<span
											style={{
												whiteSpace: 'pre'
											}}
										>
											{contactItem.text}
										</span>
									</div>
								})
							}
						</div>
						<div>
							<span>
								Social Media Icons
							</span>
						</div>
						
					</div>
					<div
						style={{
							backgroundColor: '#fff',
							flex : 3,
							padding : 40,
							display: 'flex',
							flexDirection : 'column',
							gap : 40
						}}
					>
						<div
							style={{
								display: 'flex',
								gap : 40
							}}
						>
							<ContactInput inputRef={inputFirstNameRef} onChange={setInputFirstName} value={inputFirstName} label={"First Name"}/>
							<ContactInput inputRef={inputLastNameRef} onChange={setInputLastName} value={inputLastName} label={"Last Name"}/>
						</div>
						<div
							style={{
								display: 'flex',
								gap : 40
							}}
						>
							<ContactInput inputRef={inputEmailRef} onChange={setInputEmail} value={inputEmail} label={"Email Address"}/>
							<ContactInput inputRef={inputPhoneRef} onChange={setInputPhone} value={inputPhone} label={"Phone Number (Optional)"}/>
						</div>
						<ContactSubjectContainer/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
