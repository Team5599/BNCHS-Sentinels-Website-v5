'use client'

import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import {useRef, useState} from 'react';

const contactInformation = [
	{
		icon : "PHONE",
		text : "(347) 858 5959"
	},
	{
		icon : "EMAIL",
		text : "sentinels@team5599.com"
	},
	{
		icon : "PIN",
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
										<span
											style={{
												width : 40,
												height : 40,
												backgroundColor: '#aaa'
											}}
										>
											ICON
										</span>
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
