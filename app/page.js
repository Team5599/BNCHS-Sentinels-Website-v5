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
import SponsorMarquee from './components/SponsorBlock/SponsorMarquee'




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
				<p>
					In 2014, the team was awarded the Future Glory Award at the Brunswick Eruption 2014 off-season competition. In 2015, the team took home the Rookie Inspiration Award from the New York City 2015 Regional Competition. In 2017, the team was the leading alliance in finals at the Hudson Valley Rally off-season competition in Yonkers, New York. In 2018, the team played in the quarter-finals in the New York City 2018 Regional Competition on an alliance with specialized school Brooklyn Technical High School and Long Island City High School. At the time Vice-Captain and Director of Marketing, Danielle Louie, was a Dean's Lists Award semi-finalist. At the 2019 SBPLI Long Island Regional Competition (#2), Nazifa Prapti was a Dean's List Award semi-finalist, and was also awarded the MVP Achievement in recognition of their "Individual excellence, contribution, and achievement" during the competition season. At the New York City 2019 Regional, Nazifa was a Dean's List Award finalist, one of the highest acclaimed awards in the entire FIRST Robotics program. The team placed in the semi-finals during the 2019 Half Hallow Hills Robotics Invitational off-season event.
				</p>
			</div>
			<HomeTiles/>
			<Header size='md'>
				<iframe width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none'}}
					src="https://www.youtube.com/embed/q976KWsvT7I?autoplay=0&mute=1&loop=1">
				</iframe>
			</Header>
			<FIRSTSection/>
			
			<Header size='md' imageClass={styles.headerOne} masked={false}>
				<NewsletterSubscriptionInput/>
			</Header>
			<Blog/>
			{/* <Header size='sm' imageClass={styles.headerOne} masked={false}>
				<div className='container' style={{color : '#fff', textAlign: 'center', backgroundColor: '#00000099', paddingTop : 40, paddingBottom : 40, paddingLeft : 40, paddingRight : 40}}>
					<h2 style={{textAlign : 'center', fontSize : '2.25rem', fontWeight : 750}}>
						OUR SPONSORS
					</h2>
				</div>
			</Header> */}
			{/* <div className='container' style={{display: 'flex', paddingTop : 120, paddingBottom : 120, justifyContent : 'center', flexDirection : 'column', gap : 40}}>
				<Sponsors/>
			</div> */}
			<Header size='md'>
				<iframe width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none'}}
					src="https://www.youtube.com/embed/q976KWsvT7I?autoplay=0&mute=1&loop=1">
				</iframe>
			</Header>
			<SponsorMarquee sponsorSize={128}/>
			<Footer/>
		</div>
	)
}
