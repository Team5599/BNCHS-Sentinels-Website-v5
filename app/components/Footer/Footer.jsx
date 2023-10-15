import styles from './footer.module.css';

import Link from 'next/link';

const FooterColumn = ({title, links}) => {
    return (
        <div className={styles.footerColumn} title={title}>
            <h4>
                {title}
            </h4>
            <div className={styles.footerColumnList}>
                <span>URL URL URL</span>
                <span>URL URL URL</span>
                <span>URL URL URL</span>
                <span>URL URL URL</span>
                <span>URL URL URL</span>
            </div>
        </div>
    )
}


const FooterAboutColumn = () => {
    return (
        <div className={styles.footerAboutColumn} title={'About'}>
            <div segment={'biography'}>
                <h3>
                    LOGO
                </h3>
                <h4>
                    Tagline
                </h4>
                <span>
                    Biography
                </span>
            </div>
            <div segment={'newsletter'}>
                <h4>
                    Newsletter
                </h4>
                <span>
                    Subscribe to our newsleter to get updates on our team, competitions, and other events
                </span>
                <div>
                    <input/>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
            <div segment={'social-media'}>
                <span>
                    Social Media Icons
                </span>
            </div>
        </div>
    )
}



const Footer = () => {
    return <div>
        {/* Flipped Triangle SVG */}
        <div>
            {/* Back To Top Button*/}
            <div>

            </div>
        </div>
        <div className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>
                <div
                    className={styles.footerColumnContainer}
                >
                    <FooterColumn title={'Index'}/>
                    <FooterColumn title={'Resources'}/>
                    <FooterColumn title={'Members'}/>
                    <FooterAboutColumn/>
                </div>
                <div className={styles.footerColumnContainer}>
                    <div className={styles.footerBottomLinks}>
                        <span>
                            Site Map
                        </span>
                    </div>
                    <span className={styles.footerBottomCopyright}>
                        C 2023 Michael Rooplall C FRC Team 5599 The Sentinels
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;