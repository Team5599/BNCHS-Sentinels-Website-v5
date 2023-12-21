import styles from './page.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Divider from '@components/Divider/Divider'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import PlaylistPlayer from '@components/PlaylistPlayer/PlaylistPlayer'

import {ButtonLink} from '@components/Button/Button'

import SponsorshipIncentivesBlock from '@/app/components/Sponsorship/SponsorshipIncentivesBlock/SponsorshipIncentivesBlock'

const FIRSTSectionButton = ({label, href = '/', target = ''}) => {
    return (
		<ButtonLink
			className={styles.firstSectionButton}
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


export default function Events() {
	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						COMPETITIONS
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
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 0, paddingBottom : 40, textAlign : 'justify'}}>
				<Image
                    src='/images/first/FIRST-icon.png'
                    width={150}
                    height={95}
                    alt='FIRST Trademark Logo'
                />
				<h2 style={{textAlign : 'left'}}>
					FIRST ROBOTICS
				</h2>
				<h3 style={{textAlign : 'left'}}>
					MISSION
				</h3>
				<p>
					The mission of FIRST® is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.
				</p>
				<div style={{
					height : 500,
					marginTop : 20,
					marginBottom : 80
				}}>
					<iframe width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none'}}
						src="https://www.youtube.com/embed/SJf6iG_SDE8">
					</iframe>
				</div>
				<h3 style={{textAlign : 'left'}}>
					ABOUT FIRST
				</h3>
				<p>
					FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people's interest and participation in science and technology. Based in Manchester, NH, the 501(c)(3) not-for-profit public charity designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.
				</p>
				<p>
					FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEM-related fields, inspire them to become leaders and innovators, and enhance their 21st century work-life skills.
				</p>
				<div
					style={{
						display: 'flex',
						gap : 20,
						flexDirection : 'column'
					}}
				>
					<div
						style={{
							width : '100%',
							position : 'relative',
							marginTop : 20
						}}
					>
						<Image
							unoptimized
							// TODO
							// Run image through upscaler (eg. waifu2x)
							src="/images/first/FIRST-Statistics-Graphic.png"
							blurDataURL={"data:image/jpeg;base64,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9ufXbne1wdeu3O9otTapq70m1Nqb0axelWpvSb0i9prl12u9I67RerUmuHX038VetZrBfVczTQTaACaAAAAAAPRtNTrNdHz16ajTRV6ajTQVpqdNGlaanTRVaajTUaVpqdZosXrNTrNRqVes1Os0alVpqNNRqVWs1Os0alVrNTrNGpVazU6y1GpVazU2ptGtVay1NrLRdVam1NrLRrVWptTam0XVWptTam0a1V6Tek2ptMXVXpN6TekXoxdXekXpN6RejF1V6Rek3pz66XF1XXbn12i9JtXF1V6Zai1l6S1m9KtTekXpN6Z1z67XekXtF6tYY5X6NvVrAVzt0AEAAAAAAAAAAAAehaawdHz26awBusYCt01git01IK3TWMFbprAabrNYIpprGDTdZrAaNZowWU1mmsRqUtZpU0albam0rLRdLWWstZaNaWptLU2i621Npam0XS1Npam0a0tTaWotDS1NrLU2q1pa59dNtc+qLrOunPro6rna1i621lrLU2pWb0XpN6T1UsVy67bbrAHPQAAAAAAAAAAAAAAAAAHoADo+eAIAAowBQAVgAowBWADUYAisrAGmVgCsrKA0xgDSWUEVNZQFTWUBpNTQFTU0BUVNBVTUUBXOufQKrl0igqsqKCVjpzv6Aw4gAAAAAAAAAAAAAAAAAAAP/9k="}
							alt="Facts and Figures Diagram of FIRST's Impact"
							width={0}
							height={0}
							sizes={"100vw"}
							style={{
								width : '100%',
								height : 'auto'
							}}
						/>
					</div>
					<div className={styles.buttonContainer}>
						<FIRSTSectionButton label='Scholarships' href='./Events'/>
						<FIRSTSectionButton label='Internships' href='./Events'/>
						<FIRSTSectionButton label='FIRST Website' href='./Events'/>
					</div>
					
				</div>
			</div>
			{/* <div className='container'>
				<Divider
					color={'#000'}
					style={{
						marginTop : 20,
						marginBottom : 20
					}}
				/>
				<Divider
					color={'#000'}
					style={{
						marginTop : 20,
						marginBottom : 20
					}}
				/>
			</div> */}
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 120, textAlign : 'justify'}}>
				<PlaylistPlayer/>
			</div>
			<SponsorshipIncentivesBlock
				style={{
					marginBottom : 80
				}}
			/>
			
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 0, paddingBottom : 120, textAlign : 'justify'}}>
				<Image
                    src='/images/xrp/XRP-Logo-light.png'
                    width={280}
                    height={95}
                    alt='XRP Trademark Logo'
                />
				<h2 style={{textAlign : 'left'}}>
					EXPERIENTIAL ROBOTICS
				</h2>
				
				<h3 style={{textAlign : 'left'}}>
					MISSION
				</h3>
				<p>
					The XRP is an open-robotics platform designed to help students take their first steps into engineering, robotics, and software development.
				</p>
				<div style={{
					height : 500,
					marginTop : 20,
					marginBottom : 80
				}}>
					<iframe width="100%" height="100%" style={{maxWidth: '100%', overflowX : 'hidden', border : 'none'}}
						src="https://www.youtube.com/embed/cmcX1ohnr7E?si=PPmPRnuAo2C_yHyx">
					</iframe>
				</div>
				<h3 style={{textAlign : 'left'}}>
					ABOUT XRP
				</h3>
				<p>
					The XRP (Experiential Robotics Platform) [beta], started by WPI and DEKA Research & Development Corp., aims to level the STEM playing field globally and create a future generation of STEM innovators and technology leaders.
				</p>
				<p>
					The robot kits you received are designed to operate autonomously and perform basic tasks. Its simple, tool-free assembly means robots can be built quickly, and replacement parts can be easily 3-D printed. As part of this platform, WPI will provide virtual support through online courses and will guide students and teachers through the new system, including the ability to scale up using the same hardware with free software updates.
				</p>
				<p>
					The XRP platform is part of WPI’s global STEM education initiative, which will bring inspiration and possibility to STEM education in ways that make it available to all.
				</p>
				<div
					style={{
						display: 'flex',
						gap : 20,
						flexDirection : 'column',
						marginTop : 40
					}}
				>
					<div className={styles.buttonContainer}>
						<FIRSTSectionButton label='XRP Website' href='https://experientialrobotics.org/' target='_blank'/>
						<FIRSTSectionButton label='Educators' href='https://experientialrobotics.org/educators/' target='_blank'/>
						<FIRSTSectionButton label='Community Discourse' href='https://xrp.discourse.group/' target='_blank'/>
					</div>
					
				</div>
			</div>
			<Header size='md' imageClass={styles.headerOne} gradient={true} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2 style={{fontWeight : 900, marginBottom : 20, whiteSpace: 'pre'}}>
						PREVIOUS{"\n"}COMPETITIONS
					</h2>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 0, paddingBottom : 120, textAlign : 'justify'}}>
				
				<Image
                    src='/images/seaperch/seaperch-logo.png'
                    width={200}
                    height={55}
                    alt='FIRST Trademark Logo'
                />

				<h2 style={{textAlign : 'left'}}>
					SEAPERCH
				</h2>

				<h3 style={{textAlign : 'left'}}>
					ABOUT SEAPERCH
				</h3>
				<p>
					SeaPerch in an innovative underwater robotics program that equips students, educators, and parents with the resources they need to build an underwater remotely operated vehicle (ROV) in an in- or out-of-school setting.
				</p>
				<p>
					As an integrated STEM education program, SeaPerch is a great place to start on your journey to build a bot and learn how to use that bot for good.
				</p>
				<p>
					The school's robotics team once included an underwater robotics division that participated in the United States Navy's SeaPerch program, a program created by the Massachusetts Institute of Technology and sponsored by Office of Naval Research. The SeaPerch team placed third in the 2017 season, their first time competing in the program. The SeaPerch program was disbanded in 2018.
				</p>
			</div>
			<Footer/>
		</div>
	)
}
