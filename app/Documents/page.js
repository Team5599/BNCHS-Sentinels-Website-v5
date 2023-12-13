import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import ComingSoonBanner from '@components/ComingSoonBanner/ComingSoonBanner'

export default function Documents() {
	return (
		<div style={{backgroundColor : '#000'}}>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h2>
						TEAM DOCUMENTS
					</h2>
				</div>
			</Header>
			<ComingSoonBanner/>
			<Footer/>
		</div>
	)
}
