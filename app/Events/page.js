import styles from './page.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import PlaylistPlayer from '@components/PlaylistPlayer/PlaylistPlayer'

const FIRSTSectionButton = ({label, href = '/', target = ''}) => {
    return (
        <Link className={styles.firstSectionButton} href={href} target={target}>
            <span>
                {label}
            </span>
        </Link>
    )
}


export default function Events() {
	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						FIRST ROBOTICS COMPETITION
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
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 0, paddingBottom : 120, textAlign : 'justify'}}>
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
					height : 500
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
					FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEM-related fields, inspire them to become leaders and innovators, and enhance their 21 st century work-life skills.
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
						}}
					>
						<Image
							unoptimized
							// TODO
							// Run image through upscaler (eg. waifu2x)
							src="http://testsite.cafirst.org/wp-content/uploads/2012/11/first-stat-graphic-for-web-2019.jpg"
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
					<PlaylistPlayer/>
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
				<h2 style={{textAlign : 'left'}}>
					SEAPERCH
				</h2>

				<h3 style={{textAlign : 'left'}}>
					ABOUT SEAPERCH
				</h3>
				<p>
					FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people's interest and participation in science and technology. Based in Manchester, NH, the 501(c)(3) not-for-profit public charity designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.
				</p>
				<p>
					FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEM-related fields, inspire them to become leaders and innovators, and enhance their 21 st century work-life skills.
				</p>
			</div>
			<Footer/>
		</div>
	)
}
