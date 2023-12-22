import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'


import SponsorshipIncentivesBlock from '@/app/components/Sponsorship/SponsorshipIncentivesBlock/SponsorshipIncentivesBlock'


export default function SponsorIncentivesPage() {

	return (
		<div>
			<Navbar/>
			<Header size='sm' imageClass={styles.headerOne} gradient={true} divider={true} masked={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{marginBottom : 20}}>
                        SPONSORSHIP INCENTIVES
					</h1>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 20, paddingBottom : 20, marginBottom : 40, textAlign : 'justify'}}>
                <h2 style={{marginBottom : 20, textAlign : 'center'}}>
                    SUPPORT THE TEAM
                </h2>
                <p>
                    Each one of our events falls under one or more of these categories: Team Building, Competition/Leadership and Professional Development, and Robot Development. In the corporate packet, some of these events may overlap. Sponsoring these events helps our members build and maintain many lasting connections and opportunities to network with successful professionals in their fields of interest.
				</p>
                <p>
                    The Sentinels Robotics Team thanks you in advance for your generous support and participation. Without your generosity, we would not be able to provide these opportunities for our members and reach our goals of competing and advancing in the FIRST Regional Competition for this year as well as many years to come. It would be a privilege to work with you and to support the successes and achievements of our team.
				</p>
                <div className={styles.teamPhotoContainer}>

				</div>
            </div>
            <div className={`container`} style={{paddingTop : 20, paddingBottom : 120, textAlign : 'justify'}}>
                <h2 style={{marginBottom : 40, textAlign : 'center'}}>
                    SPONSORSHIP PACKAGES
                </h2>
                <div className={styles.incentivesContainer}>
                    <div>
                        <h3 style={{textAlign : 'center'}}>
                            Aluminum $500 — $999
                        </h3>
                        <ul>
                            <li>
                                Benefactors will receive a letter of appreciation displaying their support for the team.
                            </li>
                            <li>
                                Benefactors will receive their company's logo/decal on our website for a year.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{textAlign : 'center'}}>
                            Bronze $1000 — $4999
                        </h3>
                        <ul>
                            <li>
                                Benefactors will receive their company's logo/decal on our website's Sponsors page for the year and your company's logo/decal will be placed in our team lab, along with an invitation to visit our robotics lab. 
                            </li>

                        </ul> 
                    </div>
                    <div>
                        <h3 style={{textAlign : 'center'}}>
                            Silver $5000 — $9999
                        </h3>
                        <ul>
                            <li>
                                Benefactors will receive a letter of appreciation displaying their support for the team.
                            </li>
                            <li>
                                Benefactors will receive their logo on the team's seasonal T-shirt, along with an exclusive T-shirt from the team.
                            </li>
                            <li>
                                Benefactors will receive their company's logo/decal on our website's Sponsors page and they will have their company logo placed on the competing robot. 
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{textAlign : 'center'}}>
                            Gold $5000 — $9999
                        </h3>
                        <ul>
                            <li>
                                Benefactors will have their logo posted on the landing page of our website, along with an invitation to visit our robotics lab. 
                            </li>
                            <li>
                                Benefactors will also receive team apparel of choice, such as a wristband, button, T-Shirt, etc.
                            </li>
                            <li>
                                Benefactor will be given the honor of naming that season's competition robot and have their company logo placed on the competing robot.
                            </li>
                            <li>
                                Benefactors will get a featured post on each of our ever-growing social media outlets, each one with a strong following by our school's students, staff, alumni, friends, fans, and family.
                            </li>
                            <li>
                                Benefactors will have their logo/decal displayed at our fund-raising events such as demonstrations, bake-sales, and catering for school shows.
                            </li>
                        </ul>
                    </div>
                </div>
			</div>
			<SponsorshipIncentivesBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
