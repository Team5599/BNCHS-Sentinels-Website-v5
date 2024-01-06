import styles from './personCard.module.css'

import Image from 'next/image';

const PersonCardTwo = ({personData, contrast, displaySeasonValue}) => {

    const season = displaySeasonValue.value;

    return (
        <div className={styles.personCardWrapper}>
            <div
                className={styles.personCard}
                style={{
                    backgroundColor : '#fff',
                    outline : contrast ? null : '1px solid #dadce8'
                }}
            >
                <div
                    style={{
                        backgroundColor : '#000',
                        position : 'relative',
                        height : 160
                    }}
                >
                    <Image
                        src={'https://img.freepik.com/premium-vector/colorful-robots-illustration-vector-banner-with-dark-background_104589-1686.jpg'}
                        fill={true}
                        unoptimized
                        style={{
                            objectFit : 'cover'
                        }}
                        alt={""}
                    />
                    <svg style={{maxWidth : '100%', height : 40, position: 'absolute', bottom : 0}} width="100vw" height="40px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299 40" preserveAspectRatio="none" ><path  d="M300 0L0 40 300 40 300 0z" className="shape-fill" fill="#fff" fillOpacity="1"></path></svg>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection : 'column',
                        alignItems : 'center',
                        justifyContent : 'space-between',
                        flex : 1,
                        gap : 20,
                        padding : 20,
                        marginTop : -120
                    }}
                >
                    <div
                        className={styles.personCardImageContainer}
                    >
                        <Image
                            src={personData.image}
                            fill={true}
                            unoptimized
                            alt={`${personData.name} [MAIN ROLE]:`}
                            style={{
                                flex : 1,
                                objectFit : 'cover',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection : 'column',
                            textAlign : 'center',
                            justifyContent : 'space-between',
                            gap : 0
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
                                fontSize : 14,
                                whiteSpace: 'pre-wrap'
                            }}
                        >
                            {
                                (
                                    Object.entries(personData.roles).filter(([roleID, roleData]) => {

                                        if (roleData.ignore == 'true') return false;

                                        // Check to see if role is within range of search year
                                        const startYear = parseInt(roleData.season_first, 10);
                                        const endYear =  parseInt(roleData.season_last, 10);

                                        return (startYear <= season && season <= endYear);
                                    }).map(([roleID, roleData]) => {
                                        return (
                                            <span key={roleID}>
                                                {roleData.title}{"\n"}
                                            </span>
                                        )
                                    })
                                )
                            }
                        </span>
                    </div>
                    <div
                        style={{
                            display : 'flex',
                            flexDirection : 'column',
                            width : '100%',
                            justifySelf : 'flex-end',
                            gap : 20
                        }}
                    >
                        {/* Divider */}

                        <div
                            style={{
                                width : '100%',
                                height : 2,
                                backgroundColor: '#eaecd8',
                            }}
                        />

                        <div
                            style={{
                                display : 'flex',
                                justifyContent : 'center'
                            }}
                        >
                            <span
                                style={{
                                    fontSize : 12,
                                    textAlign : 'center'
                                }}
                            >
                                SOCIAL - MEDIA - ICONS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {PersonCardTwo};