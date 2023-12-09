import Link from 'next/link'
import styles from './homeTiles.module.css'

import { ButtonBase } from '@components/Button/Button'

const HomeTileItem = ({label, href = '/', backgroundImgClass = {}}) => {
    return (
        <ButtonBase
            href={href}
            className={styles.homeTileItem}
            contentContainerClass={styles.homeTileItem}
            style={{
                backgroundColor : 'transparent',
                outlineColor : '#000',
                '--hoverOutlineColor' : '#000'
            }}
            type='link'
            variant='inverted'
        >
            <div className={styles.markerSmudge}>
                <span>
                    {label}
                </span>
            </div>
            <div className={`${styles.homeTileItemImageBox} ${backgroundImgClass}`}/>
        </ButtonBase>
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