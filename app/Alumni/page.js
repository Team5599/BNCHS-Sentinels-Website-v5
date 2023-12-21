import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import ComingSoonBanner from '@components/ComingSoonBanner/ComingSoonBanner'

export default function Alumni() {
	return (
		<div
			style={{
				backgroundColor : 'black'
			}}
		>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2>
						ALUMNI OUTREACH
					</h2>
				</div>
			</Header>
			<ComingSoonBanner/>
			<Footer/>
		</div>
	)
}
