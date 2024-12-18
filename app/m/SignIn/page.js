import styles from './page.module.css'
import Image from 'next/image';

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import { Button } from '@components/Button/Button'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'

import { Divider, OrDivider } from '../components/Dividers'

import { Input } from "@/app/components/shadcn/ui/input"
import { Checkbox } from "@/app/components/shadcn/ui/checkbox"

const ICON_Discord = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord">
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
	</svg>
}


export default function SignIn() {
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
					<Image
							src="/images/logo.png"
							width={144}
							height={144}
							alt="The Sentinels Logo"
							style={{
								marginTop : 20,
								marginBottom : 20
							}}
					/>
					<Input type="email" placeholder="Email or OSIS" className="dark" style={{height : 44, color : '#fff'}}/>
					<Input type="password" placeholder="Password" className="dark" style={{height : 44, color : '#fff', marginTop : -10}}/>
					<div className={`flex items-center space-x-2 dark ${styles.authenticationHover}`} style={{width: 'calc(100% + 10px)', alignItems : 'center', marginTop : -10}}>
						<Checkbox id="keepme" className="dark" />
						<label
							htmlFor="keepme"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark"
							style={{
								color : '#fff',
								fontSize : 12
							}}
						>
							Keep me signed in on this device
						</label>
					</div>
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
							Sign In
						</span>
					</Button>
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
							href={"/m/Register"}
						>
							Create an account
						</a>
						<a
							className={styles.authenticationLink}
							href={"/m/Recover"}
						>
							Forgot your email or password?
						</a>
					</div>
					<Divider/>
					<span
						className='text-muted'
						style={{
								fontSize : 12,
								textWrap : 'wrap',
								width : 220,
								textAlign : 'center'
							}}
						>
						Already have an account and connected it with Discord?
					</span>
					<Button
						className={styles.button}
						style={{
							backgroundColor : '#5865f2',
							'--hoverBackgroundColor' : '#5865f2',
							whiteSpace : 'nowrap',
						}}
					>
						<div
							style={{
								paddingLeft : 10,
								paddingRight : 10,
								gap : 10,
								display : 'flex',
								flexDirection : 'row',
								justifyContent : 'space-between',
								alignItems : 'center'
							}}
						>
							<ICON_Discord/>
							<span style={{textTransform : 'initial'}}>
								Sign In with Discord
							</span>
						</div>
					</Button>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
