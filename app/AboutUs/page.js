import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Link from 'next/link'
import Image from 'next/image'

import SponsorshipIncentivesBlock from '@/app/components/Sponsorship/SponsorshipIncentivesBlock/SponsorshipIncentivesBlock'

import { ButtonLink } from '@components/Button/Button'

const SectionButton = ({label, href = '/', target = ''}) => {
    return (
        <ButtonLink
			className={styles.button}
			href={href}
			target={target}
			style={{
				backgroundColor : '#000'
			}}
		>
            <span
				style={{
					paddingLeft : 60,
					paddingRight : 60,
					whiteSpace: 'nowrap'
				}}
			>
                {label}
            </span>
        </ButtonLink>
    )
}


export default function AboutUs() {
	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						ABOUT US
					</h1>
				</div>
			</Header>
			<SubheaderShape size='sm'>
				<div className='container'>
					<p className='subheading' style={{color : '#fff'}}>
						{ /* eslint-disable-next-line react/no-unescaped-entities */ }
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
			</SubheaderShape>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 80, paddingBottom : 120, textAlign : 'justify'}}>
				<h2 style={{textAlign : 'center'}}>
					WHO WE ARE
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
				<div className={styles.teamPhotoContainer}>

				</div>
				<h2 style={{textAlign : 'center', marginTop : 80}}>
					OUR MISSION
				</h2>
				<p>
					Our mission is to inspire leadership through hands-on projects and activities while fostering a passion for fields in STEM and providing invaluable skills in networking, communication, problem-solving, and teamwork in a fun and engaging environment.
				</p>
				<p>
					We envision a world where everyone is provided with the opportunities to learn and develop a passion in STEM in a uplifting environment through hands-on projects and collaboration.
				</p>
				<div
					className={styles.buttonSection}
				>
					<SectionButton label={'Our Members'} href={'/'}/>
					<SectionButton label={'Our History'} href={'/'}/>
				</div>
			</div>
			<SponsorshipIncentivesBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
