'use client'

import { useState } from 'react'

import styles from './page.module.css'
import Image from 'next/image';

import { useSearchParams } from 'next/navigation'

import { Divider, OrDivider } from '../components/Dividers'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import { Button } from '@components/Button/Button'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import { Input } from "@/app/components/shadcn/ui/input"
import { Checkbox } from "@/app/components/shadcn/ui/checkbox"

/*
	RECOVER
	- Handles the entry point where a user can make the initial request, when sends a recovery email
	- Endpoint for a recovery email, lets user set the new password
*/

const MainBody = () => {

	// Needs an ISPENDING state
	const [didSubmitRequest, setDidSubmitRequest] = useState(false);

	if (didSubmitRequest == true) {
		return (
			<>
				<div
					style={{
						width : '100%'
					}}
				>
					<span
						style={{
							color : '#fff',
							fontSize : 14
						}}
					>
						A recovery email was sent to <b>PARTIAL REDACTED EMAIL</b>. Please check your email for a link to reset your password.
					</span>
				</div>
			</>
		)
	}
	return (
		<>
			<div
				style={{
					width : '100%'
				}}
			>
				<span
					style={{
						color : '#fff',
						fontSize : 14
					}}
				>
					Enter your Email address or Student ID / OSIS to reset your password.
				</span>
			</div>
			<Input type="email" placeholder="Email" className="dark" style={{height : 44, color : '#fff'}}/>
			<OrDivider/>
			<Input type="text" placeholder="Student ID / OSIS" className="dark" style={{height : 44, color : '#fff'}}/>
			<Divider/>
			<Button
				className={styles.button}
				style={{
					color: '#000',
					backgroundColor : '#fff',
					'--hoverBackgroundColor' : '#ddd',
					whiteSpace : 'nowrap',
					textTransform : 'initial'
				}}
				onClick={() => {
					setDidSubmitRequest(true)
				}}
			>
				<span
					style={{
						paddingLeft : 50,
						paddingRight : 50
					}}
				>
					Request Password Reset
				</span>
			</Button>
		</>
	)
}

const RecoveryBody = () => {
	return (
		<>
			<div
				style={{
					width : '100%'
				}}
			>
				<span
					style={{
						color : '#fff',
						fontSize : 14
					}}
				>
					Enter your new password
				</span>
			</div>
			<Input type="text" placeholder="New Password" className="dark" style={{height : 44, color : '#fff'}}/>
			<Input type="text" placeholder="Re-enter New Password" className="dark" style={{height : 44, color : '#fff', marginTop : -10}}/>
			<Divider/>
			<Button
				className={styles.button}
				style={{
					color: '#000',
					backgroundColor : '#fff',
					'--hoverBackgroundColor' : '#ddd',
					whiteSpace : 'nowrap',
					textTransform : 'initial'
				}}
			>
				<span
					style={{
						paddingLeft : 50,
						paddingRight : 50
					}}
				>
					Reset Password
				</span>
			</Button>
		</>
	)
}


export default function Recover() {

	const searchParams = useSearchParams()
  
  const token = searchParams.get('token');

	return (
		<div>
			<Navbar/>
			<div
				style={{
					width : '100%',
					minHeight : '100dvh',
					display : 'flex',
					justifyContent : 'center',
					alignItems : 'center',
					backgroundImage : 'url("../images/splash/background-1.jpg")',
					backgroundSize : 'cover',
					paddingBottom : 40,
					marginBottom : -60
				}}
			>
				<div
					style={{
						padding : 40,
						paddingTop : 40,
						backgroundColor : '#0f1725',
						minWidth : 380,
						minHeight : 320,
						display : 'flex',
						flexDirection : 'column',
						alignItems : 'center',
						gap : 20
					}}
				>
					<div
						style={{
							display : 'flex',
							flexDirection : 'column',
							gap : 5,
							justifyContent : 'center',
							alignItems : 'center'
						}}
					>
						<Image
							src="/images/logo.png"
							width={64}
							height={64}
							alt="The Sentinels Logo"
							style={{
								marginTop : 20,
								marginBottom :0
							}}
						/>
						{
							(token == null) ?
							<>
								<span
									style={{
										fontSize : 22,
										color : '#fff',
										fontWeight : 'bold',
										marginBottom : 10
									}}
								>
									Recover Account
								</span>
								<div
									style={{
										display : 'flex',
										flexDirection : 'column',
										gap : 5,
										justifyContent : 'center',
										alignItems : 'center'
									}}
								>
									<a
										className={styles.authenticationLink}
										href={"/m/SignIn"}
									>
										Trying to sign in? Click here.
									</a>
								</div>
							</> :
							<span
								style={{
									fontSize : 22,
									color : '#fff',
									fontWeight : 'bold',
									marginBottom : 10
								}}
							>
								Reset Password
							</span>
						}
					</div>
					<Divider/>
					{
						(token == null) ?  <MainBody/> : <RecoveryBody/>
					}
				</div>
			</div>
			<Footer/>
		</div>
	)
}
