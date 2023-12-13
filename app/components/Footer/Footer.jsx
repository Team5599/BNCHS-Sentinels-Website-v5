import styles from './footer.module.css';

import Link from 'next/link';
import Image from 'next/image';

import SocialMediaIcons from '@components/SocialMediaIcons/SocialMediaIcons';
import FooterTriangleTop from './FooterTriangleTop';


const FooterLink = ({label, href = '/404', target=''}) => {
    return ( 
        <Link className={styles.footerLink} href={href} target={target}>
            <span>{label}</span>
        </Link>
    )
}


const FooterColumn = ({title, links}) => {
    return (
        <div className={styles.footerColumn} title={title}>
            <h4>
                {title}
            </h4>
            <div className={styles.footerColumnList}>
                {
                    links.map((linkItem) => {
                        return <FooterLink key={linkItem.label} label={linkItem.label} href={linkItem.href}/>
                    })
                }
            </div>
        </div>
    )
}


const FooterAboutColumn = () => {
    return (
        <div className={styles.footerAboutColumn} title={'About'}>
            <div segment={'biography'}>
                <div className={styles.footerLogoContainer}>
                    <h5>
                        The Sentinels
                    </h5>
                    <Image
                        src="/images/logo.png"
                        width={32}
                        height={32}
                        alt="The Sentinels Logo"
                        stlye={{width : 32, height : 32}}
                    />
                </div>
                <h4>
                    Now with 33% more robot per robot!
                </h4>
                <span>
                    The Benjamin N. Cardozo High School Robotics Team - FRC Team 5599 - The Sentinels!
                </span>
            </div>
            <div segment={'newsletter'}>
                <h4>
                    Newsletter
                </h4>
                <span>
                    Subscribe to our newsleter to get updates on our team, competitions, and other events!
                </span>
                <div className={styles.footerInputContainer}>
                    <input/>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
            <div segment={'social-media'}>
                <SocialMediaIcons/>
            </div>
        </div>
    )
}



const Footer = () => {
    return <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
        <FooterTriangleTop/>
        <div className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>
                <div
                    className={styles.footerColumnContainer}
                >
                    <FooterColumn
                        title={'Index'}
                        links={[
                            {
                                label : "Home",
                                href : "/"
                            },
                            {
                                label : "About Us",
                                href : "/AboutUs"
                            },
                            {
                                label : "Team",
                                href : "/Team"
                            },
                            {
                                label : "Robots",
                                href : "/Robots"
                            },
                            {
                                label : "Events & Competitions",
                                href : "/Events"
                            },
                            {
                                label : "Contact Us",
                                href : "/Contact"
                            }
                        ]}
                    />
                    <FooterColumn
                        title={'Resources'}
                        links={[
                            {
                                label : "Calendar",
                                href : "/Calendar"
                            },
                            {
                                label : "Resource Engine",
                                href : "https://legacy.team5599.com/Resources.html"
                            },
                            {
                                label : "Scholarships",
                                href : "/"
                            },
                            {
                                label : "Internships",
                                href : "/"
                            },
                            {
                                label : "Members Sign In",
                                href : "/"
                            }
                        ]}
                    />
                    <FooterColumn
                        title={'Sponsors'}
                        links={[
                            {
                                label : "Our Sponsors",
                                href : "/Sponsors"
                            },
                            {
                                label : "Sponsorship Incentives",
                                href : "/Sponsors"
                            },
                            {
                                label : "Become a Sponsor",
                                href : "/Contact"
                            },
                            {
                                label : "Make a Donation",
                                href : "/Contact"
                            }
                        ]}
                    />
                    <FooterAboutColumn/>
                </div>
                <div className={`${styles.footerColumnContainer} ${styles.footerColumnContainerBottom}`}>
                    <div className={styles.footerBottomLinks}>
                        <Link href={'/404'}>
                            <span>Site Map</span>
                        </Link>
                    </div>
                    <span className={styles.footerBottomCopyright}>
                        © 2023 Michael Rooplall © FRC Team 5599 The Sentinels
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;