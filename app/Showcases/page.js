import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

export default function Showcases() {
	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1>
						Showcases
					</h1>
					<h3>
						Projects and Portfolios
					</h3>
				</div>
			</Header>
			<SubheaderShape>
				<div className='container'>
					<p className='subheading' style={{color : '#fff', textAlign : 'center'}}>
						{ /* eslint-disable-next-line react/no-unescaped-entities */ }
						A collection of projects, portfolios, and demos from our team members
					</p>
				</div>
			</SubheaderShape>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 60, paddingTop : 80, paddingBottom : 120, textAlign : 'justify'}}>
				<div
					style={{
						display: 'flex',
						flexDirection : 'column',
						gap : 10
					}}
				>
					<h3 style={{textAlign : 'left'}}>
						PROJECTS
					</h3>
					<p>
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection : 'column',
						gap : 10
					}}
				>
					<h3 style={{textAlign : 'left'}}>
						ARTICLES AND BLOGS
					</h3>
					<p>
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection : 'column',
						gap : 10
					}}
				>
					<h3 style={{textAlign : 'left'}}>
						ARTIST GALLERY
					</h3>
					<p>
						The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
