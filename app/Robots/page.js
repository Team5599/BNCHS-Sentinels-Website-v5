import styles from './page.module.css'

import Image from 'next/image'
import Navbar from '@components/Navbar/Navbar'
import Header from '@components/Header/Header'
import SubheaderShape from '@components/SubheaderShape/SubheaderShape'
import Footer from '@components/Footer/Footer'
import Link from 'next/link'

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
            `https://beta.team5599.com/api/v1/robots`,
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

const RobotItem = ({robotItem}) => {
	return (
		<Link
			href={`/Robots/${robotItem.name.replace(/ /g, "")}`}
			className={styles.robotItem}
			style={{
				display: 'flex',			
				backgroundColor : 'red',
				aspectRatio : '1 / 1',
				position : 'relative',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top : 8,
					bottom : 8,
					left : -8,
					right : 8,
					backgroundColor : '#f68313',
					filter : 'blur(0px)'
				}}
			>
				<Image
					src="https://i.ytimg.com/vi/oVSD8OBbLaM/maxresdefault.jpg"
					fill={true}
					unoptimized
					alt={`${robotItem.name} | ${robotItem.type} ${robotItem.season}`}
					className={styles.robotItemImageBox}	
					style={{
						objectFit : 'cover'
					}}
				/>
			</div>
			<div>
				<Image
					src="https://i.ytimg.com/vi/oVSD8OBbLaM/maxresdefault.jpg"
					fill={true}
					unoptimized
					alt={`${robotItem.name} | ${robotItem.type} ${robotItem.season}`}	
					style={{
						objectFit : 'cover'
					}}
				/>
			</div>
			<div
				style={{
					display : 'flex',
					flexDirection : 'column',
					padding : 20,
					position : 'absolute',
					left : 0, right : 0,
					bottom : 0,
					background : 'linear-gradient(transparent, #000000ee)',
					color : '#fff'
					// boxShadow: 'inset 0 0 20px #000000a0',
				}}
			>
				<span
					style={{
						fontSize : 22,
						fontWeight : 600
					}}
				>
					{robotItem.name}
				</span>
				<span>
					{robotItem.type} {robotItem.season}
				</span>
			</div>
		</Link>
	)
}


export default async function Robots() {

	const robotData = await getRobotData();

	return (
		<div>
			<Navbar/>
			<Header size='md' imageClass={styles.headerOne} gradient={true}>
				<div className='container restrictHeader' style={{color : '#fff'}}>
					<h1 style={{fontWeight : 900, marginBottom : 20}}>
						Meet the Robots
					</h1>
				</div>
			</Header>
			<SubheaderShape size='sm'>
				<div className='container'>
					<p className='subheading' style={{color : '#fff'}}>
						AAAAAAAAAA
					</p>
				</div>
			</SubheaderShape>
			<div className='container' style={{display: 'flex', flexDirection : 'column', gap : 20, paddingTop : 120, paddingBottom : 120, textAlign : 'justify', backgroundColor : '#fdfdfd'}}>
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
							return <RobotItem key={robotItem._id} robotItem={robotItem}/>
						})
					}
				</div>
			</div>
			<SponsorBlock style={{marginBottom : 80}}/>
			<Footer/>
		</div>
	)
}
