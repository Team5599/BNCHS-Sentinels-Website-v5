import styles from './sponsorBlock.module.css';
import { ButtonLink } from '@components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import SponsorMarquee from './SponsorMarquee';

const SponsorBlock = ({style = {}, containerStyle = {}}) => {
    return (
        <div
            style={{
                paddingTop : 120, paddingBottom : 120,
                backgroundColor : '#0f1725',
                color : '#fff',
                ...style
            }}
        >
            <div className={`container ${styles.blockContainer}`} style={{...containerStyle}}>
                <div
                    className={styles.blockContainerLeft}
                    style={{
                        flex : 4,
                        display : 'flex',
                        flexDirection :'column',
                        gap : 20
                    }}
                >
                    <h1 style={{
                        lineHeight : 1,
                    }}>
                        Invest in the Future{"\n"}of Robotics
                    </h1>
                    <div
                        style={{
                            marginTop : 40,
                            display : 'flex',
                            flexDirection : 'column',
                            gap : 5
                        }}
                    >
                        <div
                            style={{
                                display : 'flex',
                                gap : 10
                            }}
                        >
                            <ButtonLink
                                label={'Donate'}
                                href={'/Contact'}
                                className={styles.sponsorBlockButton}
                                style={{
                                    color: '#000',
                                    backgroundColor : '#fff',
                                    '--hoverBackgroundColor' : '#ddd',
                                    whiteSpace : 'nowrap',
                                    width : 120
                                }}
                            />
                            <ButtonLink
                                label={'Become a Sponsor'}
                                href={'/Contact'}
                                className={styles.sponsorBlockButton}
                                style={{
                                    color: '#000',
                                    backgroundColor : '#fff',
                                    '--hoverBackgroundColor' : '#ddd',
                                    whiteSpace : 'nowrap',
                                    width : 200
                                }}
                            />
                        </div>
                        <Link
                            href={'/Sponsors/Incentives'}
                            style={{
                                fontSize : 14,
                                textDecoration: 'underline',
                                marginTop : 4
                            }}
                        >
                            Sponsorship Incentives
                        </Link>
                    </div>
                </div>
                <div
                    className={styles.blockContainerRight} 
                >
                    <div style={{position : 'relative'}}>
                        <Image
                            src={'/images/pusheen-pin.jpg'}
                            alt={'Pusheen plushy with a Team 5599 Pin!'}
                            fill
                            sizes="(max-width: 992px) 256px, 384px"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SponsorBlock;