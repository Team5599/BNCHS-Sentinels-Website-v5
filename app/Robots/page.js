import styles from './page.module.css'

import Image from 'next/image'
import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'
import RobotItem from '@components/RobotItem/RobotItem'

import SponsorBlock from '@components/SponsorBlock/SponsorBlock'

export async function generateStaticParams() {

	const robotData = await getRobotData();

	// console.log("Robot Data", robotData);

	console.log(robotData.map((robotItem) => robotItem.name))
   
    return robotData.map((robotItem) => {
        robotItem
    })
}

const getRobotData = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/robots`,
            {
                method: 'GET'
            }
        );

        const data = await res.json();
        const robotData = data.payload;

        return robotData;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export {getRobotData};

export default async function Robots() {

	const robotData = await getRobotData();


	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true} masked={true} divider={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						MEET THE ROBOTS
					</h1>
				</div>
			</Header>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 80, paddingBottom : 120, textAlign : 'justify', backgroundColor : '#fdfdfd'}}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns : 'repeat(3, 1fr)',
						gap : 40,
					}}
				>
					{
						robotData.sort((robotItemA, robotItemB) => {
							return parseInt(robotItemB.season, 10) - parseInt(robotItemA.season, 10)
						}).map((robotItem, index) => {
							return <RobotItem key={robotItem._id} robotItem={robotItem} index={index}/>
						})
					}
				</div>
			</div>
			<SponsorBlock style={{marginBottom : -80, paddingBottom : 180, backgroundColor : '#000'}}/>
			<Footer/>
		</div>
	)
}
