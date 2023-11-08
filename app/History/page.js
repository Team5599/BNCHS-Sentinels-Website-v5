import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'

export default function History() {
	return (
		<div>
			<Navbar/>
			<div
				className={styles.gradientBackground}
				style={{
					paddingTop : 40,
					minHeight : 400,
					paddingBottom : 120,
					marginBottom : -60
				}}
			>
				<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, textAlign : 'justify', color : '#fff'}}>
					<h2>
						OUR HISTORY
					</h2>
					<p>
						Lorem ipsum blah blah blah
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
