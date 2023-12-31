import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

export default function Template() {
	return (
		<div>
			<Navbar/>
			<Header size='lg' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						WE ARE THE SENTINELS
					</h1>
					<h2>
						FIRST (C) Robotics Competition Team 5599, from Benjamin N. Cardozo High School in Bayside, New York
					</h2>
				</div>
			</Header>
			<SubheaderShape>
				<div className='container'>
					<p className='subheading' style={{color : '#fff'}}>
						{ /* eslint-disable-next-line react/no-unescaped-entities */ }
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
			</SubheaderShape>
			<Header size='md' imageClass={styles.headerOne} masked={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2>
						FIRST (C) Robotics Competition Team 5599, from Benjamin N. Cardozo High School in Bayside, New York
					</h2>
				</div>
			</Header>
			<Header size='md' imageClass={styles.headerOne} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2>
						FIRST (C) Robotics Competition Team 5599, from Benjamin N. Cardozo High School in Bayside, New York
					</h2>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify'}}>
				<h2 style={{textAlign : 'center'}}>
					TITLE
				</h2>
				<p>
					The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
				</p>
				<p>
					FRC Team 5599, participates in the annual FIRST® Robotics Competition (FRC). In a six week time span, we raise funds, design, and construct a fully-functional robot.
				</p>
			</div>
			<Footer/>
		</div>
	)
}
