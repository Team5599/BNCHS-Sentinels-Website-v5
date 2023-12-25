"use client"

import Link from 'next/link'
import styles from './homeTiles.module.css'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import useWindowDimensions from '@lib/useWindowDimensions';

import { ButtonBase } from '@components/Button/Button'

const getSmudgeBackgroundSize = (label) => {
    
    switch (label) {
        case "About" : {
            return "100% 400%";
        }
        case "Members" : {
            return "120% 400%";
        }
        case "Robots" : {
            return "105% 400%";
        }
        case "Events" : {
            return "100% 400%";
        }
        case "History" : {
            return "120% 400%";
        }
        default : {
            return "100% 400%"
        }
    }
}

const HomeTileItem = ({label, href = '/', backgroundImgClass = {}}) => {
    return (
        <ButtonBase
            href={href}
            className={styles.homeTileItem}
            contentContainerClass={styles.homeTileItem}
            style={{
                backgroundColor : 'transparent',
                outlineColor : '#bbb',
                '--hoverOutlineColor' : '#263d59'
            }}
            type='link'
            variant='inverted'
        >
            <div
                className={styles.markerSmudge}
                style={{
                    backgroundSize : getSmudgeBackgroundSize(label)
                }}
            >
                <span>
                    {label}
                </span>
            </div>
            <div className={`${styles.homeTileItemImageBox} ${backgroundImgClass}`}/>
        </ButtonBase>
    )
}

const HomeTiles = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div className={`container ${styles.homeTiles}`} style={{paddingTop : 40, paddingBottom : 160}}>
            {
                (width > 992) ? <>
                    <AnimationOnScroll offset={0} animateIn="animate__zoomIn" animateOnce={true} delay={400} style={{flex : 1}}>
                        <HomeTileItem label='About' href='/AboutUs' backgroundImgClass={styles.backgroundAbout}/>
                    </AnimationOnScroll>
                    <AnimationOnScroll offset={0} animateIn="animate__zoomIn" animateOnce={true} delay={200} style={{flex : 1}}>
                        <HomeTileItem label='Members' href='/Team' backgroundImgClass={styles.backgroundTeam}/>
                    </AnimationOnScroll>
                    <AnimationOnScroll offset={0} animateIn="animate__zoomIn" animateOnce={true} delay={0} style={{flex : 1}}>
                        <HomeTileItem label='Robots' href='/Robots' backgroundImgClass={styles.backgroundRobots}/>
                    </AnimationOnScroll>
                    <AnimationOnScroll offset={0} animateIn="animate__zoomIn" animateOnce={true} delay={200} style={{flex : 1}}>
                        <HomeTileItem label='Events' href='/Events' backgroundImgClass={styles.backgroundEvents}/>
                    </AnimationOnScroll>
                    <AnimationOnScroll offset={0} animateIn="animate__zoomIn" animateOnce={true} delay={400} style={{flex : 1}}>
                        <HomeTileItem label='History' href='/History' backgroundImgClass={styles.backgroundHistory}/>
                    </AnimationOnScroll>
                </> : <>
                    <HomeTileItem label='About' href='/AboutUs' backgroundImgClass={styles.backgroundAbout}/>
                    <HomeTileItem label='Members' href='/Team' backgroundImgClass={styles.backgroundTeam}/>
                    <HomeTileItem label='Robots' href='/Robots' backgroundImgClass={styles.backgroundRobots}/>
                    <HomeTileItem label='Events' href='/Events' backgroundImgClass={styles.backgroundEvents}/>
                    <HomeTileItem label='History' href='/History' backgroundImgClass={styles.backgroundHistory}/>
                </>
            }
        </div>
    )
}

export default HomeTiles;