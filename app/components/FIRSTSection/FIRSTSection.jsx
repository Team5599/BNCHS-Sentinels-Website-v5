"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from './firstSection.module.css';

import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { ButtonLink } from '@components/Button/Button';

import { TwitchPlayer, TwitchChat } from 'react-twitch-embed';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const FIRSTSectionButton = ({label, href = '/', target = ''}) => {
    return (
        <ButtonLink
            label={label}
            href={href}
            className={styles.firstSectionButton}
        />
    )
}

const targetDate = new Date('January 6, 2024 12:00:00 EST');
const embedDisabledDate = new Date('January 13, 2024, 12:00:00 EST')
// const targetDate = new Date('January 4, 2024 23:15:00 EST');


const FIRSTSection = () => {

    const date_TODAY = new Date();

    return (
        <div className='container' style={{display: 'flex', flexDirection : 'column', paddingTop : 120, paddingBottom : 120, gap : 10}}>

            <div className={styles.titleContainer}>
                <Image
                    src='/images/first/FIRST-icon.png'
                    width={150}
                    height={95}
                    alt='FIRST Trademark Logo'
                />
                <h2>FIRST ROBOTICS</h2>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.contentContainer} style={{ display : 'flex', flexDirection : 'column', gap : '0.6rem'}}>
                    <p style={{
                        fontSize : '1rem',
                        lineHeight : '1.6rem'
                    }}>
                        <em>FIRST</em> Robotics Competition teams design, program, and build a robot starting with a standard kit of parts and common set of rules to play in a themed head-to-head challenge.
                    </p>
                    <p style={{
                        fontSize : '1rem',
                        lineHeight : '1.6rem',
                        textIndent : 0
                    }}>
                        Teams also build a brand, develop community partnerships for support, and work to promote STEM in their local community.
                    </p>
                    <p style={{
                        fontSize : '1rem',
                        lineHeight : '1.6rem',
                        textIndent : 0
                    }}>
                        Under strict rules, limited time and resources, teams of students are challenged to raise funds, design a team “brand,” hone teamwork skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to real-world engineering as a student can get.
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <AnimationOnScroll delay={400} duration={1.4} animateIn="animate__fadeInRight" animateOnce={true}>
                        <FIRSTSectionButton label='More On FIRST' href='./Events'/>
                    </AnimationOnScroll>
                    <AnimationOnScroll delay={800} duration={1.4} animateIn="animate__fadeInRight" animateOnce={true}>
                        <FIRSTSectionButton label='Our Competitions' href='./Events'/>
                    </AnimationOnScroll>
                </div>
            </div>

            {
                (embedDisabledDate.getTime() > date_TODAY.getTime()) &&
                <CountdownTimer
                    date={targetDate}
                    style={{
                        marginTop : 80
                    }}
                    renderHeader={
                        (
                            <div
                                style={{
                                    textAlign : 'center',
                                    maxWidth : 600
                                }}
                            >
                                <h1 style={{
                                    fontWeight : 700
                                }}>
                                    KICKOFF 2024
                                </h1>
                                <span>
                                    Tune in Saturday, January 6th at 12:00PM Noon EST for the 2024 FIRST Robotics Competition Kickoff Event!
                                </span>
                            </div>
                        )
                    }
                    renderComplete={
                        (
                            <div className={styles.bodyContainer} style={{aspectRatio : '4.25 / 1.7', marginTop : 10}}>
                                <div className={styles.contentContainer} style={{ display : 'flex', flexDirection : 'column', gap : '0.6rem', height : '100%'}}>
                                    <TwitchPlayer
                                        channel="firstinspires"
                                        darkMode={false}
                                        autoplay={true}
                                        className={styles.twitchEmbed}
                                        style={{
                                            width : '100%',
                                            height : '100%'
                                        }}
                                    />
                                </div>
                                <div className={`${styles.buttonContainer} ${styles.twitchChatEmbedContainer}`} style={{height : '100%'}}>
                                    <TwitchChat
                                        channel="firstinspires"
                                        darkMode={true}
                                        autoplay={true}
                                        className={styles.twitchEmbed}
                                        style={{width : '100%', height : '100%'}}
                                    />
                                </div>
                            </div>
                            
                        )
                    }
                />
            }
        </div>
    )
}

export default FIRSTSection;