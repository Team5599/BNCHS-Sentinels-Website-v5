import Image from 'next/image'
import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import HomeTiles from './components/HomeTiles/HomeTiles'
import FIRSTSection from './components/FIRSTSection/FIRSTSection'
import NewsletterSubscriptionInput from './components/NewsletterSubscriptionInput/NewsletterSubscriptionInput'
import Blog from './components/Blog/Blog';
import Sponsors from '@components/Sponsors/Sponsors';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import Footer from '@components/Footer/Footer';
import HomeTypingHeader from '@components/HomeTypingHeader/HomeTypingHeader'




export default function Home() {
	return (
		<div>
			<Navbar/>
			<Header size='lg' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<HomeTypingHeader/>
					<h5>
						FIRST (C) Robotics Competition Team 5599, from Benjamin N. Cardozo High School in Bayside, New York
					</h5>
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
					FRC Team 5599, participates in the annual FIRST® Robotics Competition (FRC). In a six week time span, we raise funds, design, and construct a fully-functional robot.
				</p>
			</div>
			<HomeTiles/>
			<Header size='md'>
				<iframe width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none'}}
					src="https://www.youtube.com/embed/q976KWsvT7I?autoplay=0&mute=1&loop=1">
				</iframe>
			</Header>
			<FIRSTSection/>
			<Header size='lg' imageClass={styles.headerOne} masked={true}>
				<NewsletterSubscriptionInput/>
			</Header>
			<Blog/>
			<Header size='md' imageClass={styles.headerOne} masked={true}>
				<div className='container' style={{color : '#fff', textAlign: 'center', backgroundColor: '#00000099', paddingTop : 40, paddingBottom : 40, paddingLeft : 40, paddingRight : 40}}>
					<h2 style={{textAlign : 'center', fontSize : '2.25rem', fontWeight : 750}}>
						OUR SPONSORS
					</h2>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', paddingTop : 120, paddingBottom : 120, justifyContent : 'center', flexDirection : 'column', gap : 40}}>
				<Sponsors/>
			</div>
			<Footer/>
		</div>
	)
}
