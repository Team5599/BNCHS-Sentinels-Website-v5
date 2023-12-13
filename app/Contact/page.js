'use client'

import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import { Tooltip } from 'react-tooltip'
import { useForm, Controller } from 'react-hook-form'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SocialMediaIcons from '@components/SocialMediaIcons/SocialMediaIcons'

import SponsorBlock from '@components/SponsorBlock/SponsorBlock'

import {useRef, useState} from 'react';
import Link from 'next/link'

import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input/input'

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
		text : "(347) 858-5959"
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

const ContactInput = ({label, inputType = "text", inputKey, register, required = false, pattern, error}) => {
	return (
		<div
			style={{
				position: 'relative',
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
			{
				error && <span
					style={{
						fontSize : 12,
						color : 'red',
						position : 'absolute',
						right : 0, top : 0
					}}
				>
					{
						(error.type == 'required') ? '*Required' : '*Invalid'
					}
				</span>
			}
			<input
				label={inputKey}
				type={inputType}
				style={{
					borderWidth : '0px 0px 2px 0px',
					borderStyle : null,
					borderColor : '#ddd',
					height : 28,
					padding : 0,
					margin : 0,
					fontSize : 18
				}}
				
				{...register(inputKey, {required : required, pattern : pattern})}
			/>
		</div>
	)
}

const ContactPhoneNumberInput = ({label, inputKey, control, error}) => {
	return (
		<div
			style={{
				position : 'relative',
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
			{
				error && <span
					style={{
						fontSize : 12,
						color : 'red',
						position : 'absolute',
						right : 0, top : 0
					}}
				>
					{
						(error.type == 'required') ? '*Required' : '*Invalid'
					}
				</span>
			}
			<Controller
				name={inputKey}
				control={control}
				rules={{
					validate: (value) => {
						if (value == undefined) return true;
						return isValidPhoneNumber(value)
					}
				}}
				render={({ field: { onChange, value } }) => (
					<PhoneInput
						value={value}
						onChange={onChange}
						id={inputKey}
						style={{
							borderWidth : '0px 0px 2px 0px',
							borderStyle : null,
							borderColor : '#ddd',
							height : 28,
							padding : 0,
							margin : 0,
							fontSize : 18,
						}}
					/>
				)}
			/>
		</div>
	)
}


const ContactInputTextArea = ({label, inputKey, register, required = false, error}) => {
	return (
		<div
			style={{
				position : 'relative',
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
			{
				error && <span
					style={{
						fontSize : 12,
						color : 'red',
						position : 'absolute',
						right : 0, top : 0
					}}
				>
					{
						(error.type == 'required') ? '*Required' : '*Invalid'
					}
				</span>
			}
			<textarea
				label={inputKey}
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
				{...register(inputKey, {required : required})}
			/>
		</div>
	)
}


const SubmitButton = ({label, onClick, disabled}) => {
    return (
        <Button className={styles.submitButton} onClick={onClick} disabled={disabled}>
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

const ContactSubjectContainerRadio = ({radioKey, onChange, value, label}) => {

	const onRadioPressed = () => {
		onChange(radioKey);
	}

	return (
		<div
			style={{
				display: 'flex',
				gap : 5,
			}}
			onClick={() => {
				onRadioPressed();
			}}
		>
			<input type="radio" name={radioKey} value={radioKey} checked={radioKey == value} onChange={onRadioPressed} style={{transform: 'scale(1)'}} />
			<span
				style={{
					fontSize : 14,
					marginTop : 2,
					display : 'flex',
					justifyContent : 'center',
					alignItems : 'center',
					gap : 5
				}}
			>
				{label}
			</span>
		</div>
	)
}

const ContactSubjectContainer = ({inputKey, control}) => {
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
				<Controller
					name={inputKey}
					control={control}
					defaultValue={'general'}
					rules={{
						validate: (value) => (value == 'general' || value == 'sponsorship' || value == 'technical' )
					}}
					render={({ field: { onChange, value } }) => (
						<>
							<ContactSubjectContainerRadio radioKey={"general"} onChange={onChange} value={value} label={"General Inquiry"}/>
							<ContactSubjectContainerRadio radioKey={"sponsorship"} onChange={onChange} value={value} label={"Sponsorship"}/>
							<ContactSubjectContainerRadio radioKey={"technical"} onChange={onChange} value={value} label={
								<>
									Technical Inquiry
									<svg data-tooltip-id="tooltip" data-tooltip-content="Technical inquiries are sent directly to our programming team" style={{width : 18, height : 18, marginTop : 4, color : '#000000aa'}} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<circle cx="12" cy="12" r="9" />
										<line x1="12" y1="8" x2="12.01" y2="8" />
										<polyline points="11 12 12 12 12 16 13 16" />
									</svg>
								</>
							}/>
						</>
					)}
				/>
				<Tooltip id="tooltip" noArrow={true} />
			</div>
		</div>
	)
}

export default function Contact() {

	const [submitEnabled, setSubmitEnabled] = useState(true);

	const {
		register,
		handleSubmit,
		control,
		formState : {errors}
	} = useForm({
		firstName : "",
		lastName : "",
		email : "",
		phoneNumber : "",
		subject : "technical",
		messageBody : ""
	});

	const toastID = useRef(null);

	const handleRegistration = async (data) => {

		setSubmitEnabled(false);

		toastID.current = toast.info("Sending Inquiry . . .", {autoClose : false});;

		try {
			const _response = await fetch(
				`${process.env.NEXT_PUBLIC_API_BASE}/api/v2/Contact`,
				{
					method: 'POST',
					body : JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (_response.status == 200) {
				toast.update(toastID.current, {
					render : "Inquiry Sent!",
					type : toast.TYPE.SUCCESS,
					autoClose : 5000
				});
				setSubmitEnabled(true);
				return;
			}
	
			const response = await _response.json();

			toast.update(toastID.current, {
				render : `There was an issue with your request. ${response.message}`,
				type : toast.TYPE.ERROR,
				autoClose : 5000
			});

			setSubmitEnabled(true);

	
		} catch (err) {
			console.log(err);
			toast.update(toastID.current, {
				render : "We're sorry, an unexpected error has occurred. Please try again later",
				type : toast.TYPE.ERROR,
				autoClose : 5000
			});
			setSubmitEnabled(true);

		}

	}
	
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
						className={styles.contactBlockSocials}
					>
						<div>
							<h3>
								Contact Information
							</h3>
						</div>
						<div
							className={styles.contactSocialContainer}
						>
							{
								contactInformation.map((contactItem, index) => {
									return <div
										key={index}
										className={styles.contactItem}
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
						<div className={styles.socialIconsContainer}>
							<SocialMediaIcons/>
						</div>
						
					</div>
					<form
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
							<ContactInput label={"First Name"} inputKey={'firstName'} register={register}/>
							<ContactInput label={"Last Name"} inputKey={'lastName'} register={register}/>
						</div>
						<div
							style={{
								display: 'flex',
								gap : 40
							}}
							className={styles.inputRow}
						>
							<ContactInput
								label={"Email Address"}
								type={'email'}
								inputKey={'email'}
								register={register}
								required={true}
								error={errors['email']}
								pattern={
									{
										value :  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message : "Invalid Email Address"
									}
								}
							/>
							<ContactPhoneNumberInput label={"Phone Number (Optional)"} inputKey={'phoneNumber'} control={control} error={errors['phoneNumber']}/>
						</div>
						<ContactSubjectContainer inputKey={'subject'} control={control} />
						<ContactInputTextArea label={"Contents"} inputKey={'messageBody'} register={register} required={true} error={errors['messageBody']}/>
						<div
							style={{
								display : 'flex',
								justifyContent : 'flex-end'
							}}
						>
							<SubmitButton
								label={'Submit'}
								disabled={!submitEnabled}
								onClick={() => {
									handleSubmit(handleRegistration)()
								}}
							/>
						</div>
					</form>
				</div>
			</div>
			<SponsorBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
			<ToastContainer/>
		</div>
	)
}
