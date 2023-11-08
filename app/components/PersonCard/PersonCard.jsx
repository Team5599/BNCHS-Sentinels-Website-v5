import styles from './personCard.module.css'

import Image from 'next/image';

const PersonCard = ({personData}) => {
    return (
        <div className={styles.personCard}>
            <div
                className={styles.personCardImageContainer}
            >
                <Image
                    src={personData.image}
                    className={styles.personCardImage}
                    fill={true}
                    unoptimized
                    alt={`${personData.name} [MAIN ROLE]:`}
                />
            </div>
            <div className={styles.personCardBottomsheet}>
                <div
                    style={{
                        display : 'flex',
                        flexDirection : 'column'
                    }}
                >
                    <span
                        style={{
                            fontWeight : 600,
                            fontSize: 22
                        }}
                    >
                        {personData.name}
                    </span>
                    <span
                        style={{
                            fontWeight : 500,
                            fontSize : 14
                        }}
                    >
                        DIRECTOR OF TITLING
                    </span>
                    <span
                        className={styles.quoteBlock}
                        style={{
                            marginTop : 10,
                            color : '#ccc'
                        }}
                    >
                        Quote Block
                    </span>
                </div>
                
                <div style={{
                    textAlign : 'center'
                }}>
                    <span>Social - Media - Icons</span>
                </div>
            </div>
            <svg style={{maxWidth : '100%', height : 40}} width="100vw" height="40px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 40" preserveAspectRatio="none" ><path  d="M300 0L0 0 300 40 300 0z" className="shape-fill" fill="#1b1616" fillOpacity="1"></path></svg>
        </div>
    )
}

export default PersonCard;