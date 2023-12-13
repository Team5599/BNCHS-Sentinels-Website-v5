import Link from 'next/link';
import Image from 'next/image';
import styles from './firstSection.module.css';

import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { ButtonLink } from '@components/Button/Button';

const FIRSTSectionButton = ({label, href = '/', target = ''}) => {
    return (
        <ButtonLink
            label={label}
            href={href}
            className={styles.firstSectionButton}
        />
    )
}

const targetDate = new Date(new Date().getTime()+(5*24*60*60*1000));

const FIRSTSection = () => {
    return (
        <div className='container' style={{display: 'flex', flexDirection : 'column', paddingTop : 120, paddingBottom : 120, gap : 10}}>
            <CountdownTimer date={targetDate}/>
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
                    <FIRSTSectionButton label='More On FIRST' href='./Events'/>
                    <FIRSTSectionButton label='Our Competitions' href='./Events'/>
                </div>
            </div>
        </div>
    )
}

export default FIRSTSection;