"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from './firstSection.module.css';

import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { ButtonLink } from '@components/Button/Button';

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

const targetDate = new Date('January 6, 2024 12:00:00');

const FIRSTSection = () => {
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
                        <div
                            style={{
                                display : 'flex',
                                gap : 80,
                                marginTop : 80,
                                marginBottom : 0
                            }}
                        >
                            <div
                                style={{
                                    flex : 3
                                }}
                            >
                                <h2 style={{
                                    fontWeight : 900
                                }}>
                                    KICKOFF 2024
                                </h2>
                                <span>
                                    Tune in Saturday, January 6th at 12:00PM Noon EST for the 2024 FIRST Robotics Competition Kickoff Event!
                                </span>
                            </div>
                            <div
                                style={{flex : 1}}
                            >
                                <ButtonLink
                                    label={'Watch on Twitch.tv/FirstInspires'}
                                    href={'https://www.twitch.tv/firstinspires'}
                                    className={styles.firstSectionButton}
                                />
                            </div>     
                        </div>
                    )
                }
            />
        </div>
    )
}

export default FIRSTSection;