import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

export default function SignIn() {
	return (
		<div>
			<Navbar/>
			<Header height={700} imageClass={styles.headerOne} gradient={true}>
				<div style={{color : '#fff', maxWidth : 800, textAlign: 'center', marginBottom : 60}}>
					<p style={{fontWeight : 900, fontSize: 64}}>
						WE ARE THE SENTINELS
					</p>
					<p style={{fontWeight : 500, fontSize : 24, letterSpacing: '0.03rem'}}>
						FIRST (C) Robotics Competition Team 5599, from Benjamin N. Cardozo High School in Bayside, New York
					</p>
				</div>
			</Header>
			<SubheaderShape>
				<div className='container'>
					<p style={{color : '#fff', textAlign : 'justify', fontSize : 24, fontWeight : 350, letterSpacing: '0.03rem'}}>
						{ /* eslint-disable-next-line react/no-unescaped-entities */ }
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
			</SubheaderShape>
		</div>
	)
}
