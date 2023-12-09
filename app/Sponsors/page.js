import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

import { Button } from '@components/Button/Button'
import Sponsors from '@components/Sponsors/Sponsors'
import SponsorBlock from '@components/SponsorBlock/SponsorBlock'

export default function Template() {
	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true} divider={true} masked={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{marginBottom : 20}}>
						OUR SPONSORS
					</h1>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 40, paddingBottom : 40, textAlign : 'justify'}}>
				<Button label={'2023 Season'} className={styles.dropdown}/>
				<Sponsors/>
				
			</div>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 80, paddingBottom : 120, textAlign : 'justify'}}>
				<h2 style={{textAlign : 'center'}}>
					SPONSORSHIP INCENTIVES
				</h2>
				<p>
					The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events.
				</p>
			</div>
			<SponsorBlock
				style={{
					marginBottom : 40
				}}
			/>
			<Footer/>
		</div>
	)
}
