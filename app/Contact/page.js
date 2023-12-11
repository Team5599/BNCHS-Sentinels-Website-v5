'use client'

import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import SponsorBlock from '@components/SponsorBlock/SponsorBlock'

import {useRef, useState} from 'react';
import Link from 'next/link'

import { Button } from '@components/Button/Button'

const PhoneIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
		</svg>
	)
}

const InstagramIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
			<rect x="4" y="4" width="16" height="16" rx="4" />
			<circle cx="12" cy="12" r="3" />
			<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
		</svg>
	)
}

const EmailIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
			<path d="M3 7l9 6l9 -6"></path>
		</svg>
	)
}

const PinIconSVG = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
		icon : <InstagramIconSVG/>,
		text : "@sentinels_5599"
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
					borderWidth : '0px 0px 2px 0px',
					borderStyle : null,
					borderColor : '#ddd',
					height : 28,
					padding : 0,
					margin : 0,
					fontSize : 18
				}}
			/>
		</div>
	)
}


const ContactInputTextArea = ({inputRef, onChange, value, label}) => {
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
			<textarea
				ref={inputRef}
				onChange={(e, value) => {
					onChange(value);
				}}
				value={value}
				style={{
					borderWidth : '1px 1px 2px 1px',
					borderStyle : null,
					borderColor : '#ddd',
					height : 120,
					padding : 0,
					margin : 0,
					fontSize : 16,
					resize: 'vertical',
					minHeight: 120,
					maxHeight : 240
				}}
			/>
		</div>
	)
}

const SubmitButton = ({label, href = '/', target = ''}) => {
    return (
        <Button className={styles.submitButton} onPress={() => {
			console.log("SUBMIT")
		}}>
            <span
				style={{
					paddingLeft : 50,
					paddingRight : 50
				}}
			>
                {label}
            </span>
        </Button>
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
				className={styles.subjectRow}
			>
				<div
					style={{
						display: 'flex',
						gap : 5,
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
	const inputBodyRef = useRef(null);


	const [inputFirstName, setInputFirstName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputBody, setInputBody] = useState("");

	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						CONTACT US
					</h1>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify', backgroundColor : '#fdfdfd'}}>
				<div
					className={styles.contactBlock}
					style={{
						minHeight : 500,
						outline : '1px solid #000',
						marginTop : 0,
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
							<h3>
								Contact Information
							</h3>
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
							className={styles.inputRow}
						>
							<ContactInput inputRef={inputFirstNameRef} onChange={setInputFirstName} value={inputFirstName} label={"First Name"}/>
							<ContactInput inputRef={inputLastNameRef} onChange={setInputLastName} value={inputLastName} label={"Last Name"}/>
						</div>
						<div
							style={{
								display: 'flex',
								gap : 40
							}}
							className={styles.inputRow}
						>
							<ContactInput inputRef={inputEmailRef} onChange={setInputEmail} value={inputEmail} label={"Email Address"}/>
							<ContactInput inputRef={inputPhoneRef} onChange={setInputPhone} value={inputPhone} label={"Phone Number (Optional)"}/>
						</div>
						<ContactSubjectContainer/>
						<ContactInputTextArea inputRef={inputBodyRef} onChange={setInputBody} value={inputBody} label={"Contents"}/>
						<div
							style={{
								display : 'flex',
								justifyContent : 'flex-end'
							}}
						>
							<SubmitButton label={'Submit'}/>
						</div>
					</div>
				</div>
			</div>
			<SponsorBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
