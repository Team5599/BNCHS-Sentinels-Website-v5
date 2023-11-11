import Link from 'next/link';
import Image from 'next/image';
import styles from './firstSection.module.css';

import CountdownTimer from '../CountdownTimer/CountdownTimer';

const FIRSTSectionButton = ({label, href = '/', target = ''}) => {
    return (
        <Link className={styles.firstSectionButton} href={href} target={target}>
            <span>
                {label}
            </span>
        </Link>
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
                <div className={styles.contentContainer}>
                    <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </span>
                    
                </div>
                <div className={styles.buttonContainer}>
                    <FIRSTSectionButton label='More On First' href='./Events'/>
                    <FIRSTSectionButton label='Our Competitions' href='./Events'/>
                </div>
            </div>
        </div>
    )
}

export default FIRSTSection;