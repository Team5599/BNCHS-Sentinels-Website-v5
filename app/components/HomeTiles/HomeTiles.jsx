import Link from 'next/link'
import styles from './homeTiles.module.css'


const HomeTileItem = ({label, href = '/', backgroundImgClass = {}}) => {
    return (
        <Link href={href} className={styles.homeTileItem}>
            <div className={styles.markerSmudge}>
                <span>
                    {label}
                </span>
            </div>
            <div className={`${styles.homeTileItemImageBox} ${backgroundImgClass}`}/>
        </Link>
    )
}

const HomeTiles = () => {
    return (
        <div className={`container ${styles.homeTiles}`} style={{paddingTop : 40, paddingBottom : 160}}>
            <HomeTileItem label='About' href='/AboutUs' backgroundImgClass={styles.backgroundAbout}/>
            <HomeTileItem label='Members' href='/Team' backgroundImgClass={styles.backgroundTeam}/>
            <HomeTileItem label='Robots' href='/Robots' backgroundImgClass={styles.backgroundRobots}/>
            <HomeTileItem label='Events' href='/Events' backgroundImgClass={styles.backgroundEvents}/>
            <HomeTileItem label='History' href='/History' backgroundImgClass={styles.backgroundHistory}/>
        </div>
    )
}

export default HomeTiles;