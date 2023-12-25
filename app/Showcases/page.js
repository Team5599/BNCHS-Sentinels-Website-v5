import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import SponsorshipIncentivesBlock from '@/app/components/Sponsorship/SponsorshipIncentivesBlock/SponsorshipIncentivesBlock'
import ComingSoonBanner from '@components/ComingSoonBanner/ComingSoonBanner'

export default function Showcases() {
	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1>
						SHOWCASES
					</h1>
					<h3>
						Projects and Portfolios
					</h3>
				</div>
			</Header>
			<SubheaderShape size='sm'>
				<div className='container'>
					<p className='subheading' style={{color : '#fff', textAlign : 'center'}}>
						{ /* eslint-disable-next-line react/no-unescaped-entities */ }
						A collection of projects, portfolios, and demos from our team members
					</p>
				</div>
			</SubheaderShape>
			<ComingSoonBanner/>
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
			<SponsorshipIncentivesBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
