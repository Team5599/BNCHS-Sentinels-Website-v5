import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

import PersonCard from '@components/PersonCard/PersonCard'

import FilterHeader from '@components/FilterHeader/FilterHeader'

const LeadershipContainer = () => {
	return (
		<div className={styles.leadershipSection}>
			<svg className={styles.triangleSVG} width="100%" height="120px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 120L0 120 307.75 0 1200 120z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
			<div className={styles.leadershipBlock}>

				<div className={`container ${styles.leadershipBody}`}>
					<h3>
						LEADERSHIP
					</h3>
					<div className={styles.leadershipBodyContents}>
						{
							[1, 2, 3, 4, 5].map((personItem) => {
								return <PersonCard key={personItem}/>
							})
						}
					</div>
				</div>
			</div>
			<svg className={styles.triangleSVG} width="100%" height="120px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 892.25 120 1200 0z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
		</div>
	)
}

export default function Team() {
	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2 style={{fontWeight : 900, marginBottom : 20}}>
						MEET THE TEAM
					</h2>
				</div>
			</Header>
			<div className='container'>
				<FilterHeader/>
			</div>
			<LeadershipContainer/>
			<Footer/>
		</div>
	)
}
