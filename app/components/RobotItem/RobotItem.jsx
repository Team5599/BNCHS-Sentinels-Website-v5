'use client'

import {useState} from 'react'
import Link from 'next/link'

import styles from './robotItem.module.css'

const RobotItem = ({robotItem, index}) => {

	const bgColor = ((index % 2) == 1 || (index == 2)) ? '#f68313' : '#0052af'

	const [isHovering, setHovering] = useState(false);

	console.log("thumb", robotItem.thumbnail)

	const thumbnail = (robotItem.thumbnail) ? `url(${robotItem.thumbnail})` : "url(https://i.ytimg.com/vi/oVSD8OBbLaM/maxresdefault.jpg)"

	return (
		<Link
			href={`/Robots/${robotItem.name.replace(/ /g, "")}`}
			className={styles.robotItem}
			style={{
				display: 'flex',			
				backgroundColor : 'red',
				aspectRatio : '1 / 1',
				position : 'relative',
        transform: `scale(${isHovering ? 1.05 : 1})`,
			}}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			<div
                className={styles.robotItemImageBackdrop}
				style={{
					position: 'absolute',
					top : 8,
					bottom : 8,
					left : -8,
					right : 8,
					backgroundColor : isHovering ? bgColor : 'transparent',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition : 'center center',
    			backgroundBlendMode: 'multiply',
					backgroundImage : thumbnail
				}}
			>
			</div>
			<div
				className={styles.robotItemImageBox}
				style={{
					position: 'relative',
					width : '100%',
					height : '100%',
					overflow : 'hidden',
					display : 'flex',
					justifyContent: 'center',
					alignItems : 'center'
				}}
			>
				<div
					className={styles.robotItemImageBox}
					style={{
						position: 'relative',
						width : isHovering ? '100%' : '115%',
						height : isHovering ? '100%' : '115%',
						backgroundColor : isHovering ? bgColor : 'transparent',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition : 'center center',
						backgroundBlendMode: 'multiply',
						backgroundImage : thumbnail,
						transition : 'width 0.4s, height 0.4s'
					}}
				/>
			</div>
			<div
				style={{
					display : 'flex',
					flexDirection : 'column',
					padding : 20,
					position : 'absolute',
					left : 0,
					right : 0,
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

export default RobotItem;