import Image from 'next/image'
import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

export default function Home() {
	return (
		<div>
			<Navbar/>
			<Header size='lg' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						WE ARE THE SENTINELS
					</h1>
					<h3>
						FIRST (C) Robotics Competition Team 5599, from Benjamin N. Cardozo High School in Bayside, New York
					</h3>
				</div>
			</Header>
			<SubheaderShape>
				<div className='container'>
					<p className='subheading' style={{color : '#fff'}}>
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
			</SubheaderShape>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify'}}>
				<h2 style={{textAlign : 'center'}}>
					TITLE
				</h2>
				<p>
					The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
				</p>
				<p>
					The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
				</p>
			</div>
		</div>
	)
}
