'use client'
import styles from './page.module.css'
import Image from 'next/image';

import { useState } from 'react';

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import { Button, ButtonLink } from '@components/Button/Button'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import { Divider, OrDivider } from '../components/Dividers'

import { Input } from "@/app/components/shadcn/ui/input"
import { Checkbox } from "@/app/components/shadcn/ui/checkbox"
import { Label } from "@/app/components/shadcn/ui/label"
import { Button as ShadButton } from "@/app/components/shadcn/ui/button"
import { Undo2, CircleArrowRight } from "lucide-react"


export default function Register() {

	const [page, setPage] = useState(1);

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
						position : 'relative'
					}}
				>
					{
						(page == 2) && <div
							style={{
								position : 'absolute',
								width: '100%',
								top : 10,
								left : 10
							}}
						>
							<ShadButton
								onClick={() => {
									setPage(1);
								}}
							>
								<Undo2 /> Back
							</ShadButton>
						</div>
					}
					
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
						<span
							style={{
								fontSize : 22,
								color : '#fff',
								fontWeight : 'bold',
								marginBottom : 10
							}}
						>
							Register
						</span>
					</div>
					{
						(page == 1) ? <div
							style={{
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
								<a
									className={styles.authenticationLink}
									href={"/m/SignIn"}
								>
									Already have an account? Click here to Sign in.
								</a>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5 text-white" style={{marginBottom : -10}}>
								<Label htmlFor="email">Email</Label>
							</div>
							<Input type="email" placeholder="Email Address" className="dark" style={{height : 44, color : '#fff'}}/>
							<div className="grid w-full max-w-sm items-center gap-1.5 text-white" style={{marginBottom : 0}}>
								<Label htmlFor="password">Password</Label>
							</div>
							<Input type="text" placeholder="Password" className="dark" style={{height : 44, color : '#fff', marginTop : -10}}/>
							<Input type="text" placeholder="Re-enter Password" className="dark" style={{height : 44, color : '#fff', marginTop : -10}}/>
							<div
								style={{
									width : '100%',
									height : '1px',
									backgroundColor : '#27272a'
								}}
							/>
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
									setPage(2);
								}}
							>
								<span
									style={{
										paddingLeft : 50,
										paddingRight : 50,
										display : 'flex',
										flexDirection : 'row',
										alignItems : 'center',
										gap : 8
									}}
								>
									Continue <CircleArrowRight />
								</span>
							</Button>
						</div> :
						<div
							style={{
								display : 'flex',
								flexDirection : 'column',
								alignItems : 'center',
								gap : 20
							}}
						>
							<div className="grid w-full max-w-sm items-center gap-1.5 text-white" style={{marginBottom : -10}}>
								<Label htmlFor="name">Name</Label>
							</div>
							<Input type="text" placeholder="First Name" className="dark" style={{height : 44, color : '#fff'}}/>
							<Input type="text" placeholder="Last Name" className="dark" style={{height : 44, color : '#fff', marginTop : -10}}/>
							<div
								style={{
									width : '100%',
									height : '1px',
									backgroundColor : '#27272a'
								}}
							/>
							<div className="grid w-full max-w-sm items-center gap-1.5 text-white" style={{marginBottom : -10}}>
								<Label htmlFor="osis">Student ID</Label>
							</div>
							<Input type="number" placeholder="Student ID" className="dark" style={{height : 44, color : '#fff'}}/>
							<Input type="number" placeholder="Re-enter Student ID" className="dark" style={{height : 44, color : '#fff', marginTop : -10}}/>
							<div className={`flex items-center space-x-2 dark ${styles.authenticationHover}`} style={{width: 'calc(100% + 10px)', alignItems : 'center', marginTop : -10}}>
								<Checkbox id="noosis" className="dark" />
								<label
									htmlFor="noosis"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark"
									style={{
										color : '#fff',
										fontSize : 12
									}}
								>
									I do not have an OSIS / Student ID Number
								</label>
							</div>
							<Divider/>
							<ButtonLink
								className={styles.button}
								style={{
									color: '#000',
									backgroundColor : '#fff',
									'--hoverBackgroundColor' : '#ddd',
									whiteSpace : 'nowrap',
									textTransform : 'initial'
								}}
								href={`/m/Verify?email={EMAIL}&type=0`}
							>
								<span
									style={{
										paddingLeft : 50,
										paddingRight : 50,
										display : 'flex',
										flexDirection : 'row',
										alignItems : 'center',
										gap : 8
									}}
								>
									Continue <CircleArrowRight />
								</span>
							</ButtonLink>
						</div>
					}
					
				</div>
			</div>
			<Footer/>
		</div>
	)
}
