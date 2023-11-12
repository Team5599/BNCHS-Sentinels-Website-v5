import styles from './sponsorBlock.module.css';

const SponsorBlock = ({style = {}}) => {
    return (
        <div
            style={{
                paddingTop : 120, paddingBottom : 120,
                backgroundColor : '#0f1725',
                color : '#fff',
                ...style
            }}
        >
            <div className='container' style={{display: 'flex', gap : 20}}>
                <div
                    style={{
                        flex : 4,
                        display : 'flex',
                        flexDirection :'column',
                        gap : 20
                    }}
                >
                    <h1>
                        Invest in the Future of Robotics
                    </h1>
                    <div
                        style={{
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
                            <button>
                                Donate
                            </button>
                            <button>
                                Become a Sponsor
                            </button>
                        </div>
                        <a
                            style={{
                                fontSize : 14
                            }}
                            href="/"
                        >
                            Sponsorship Incentives
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        flex : 3
                    }}
                >

                </div>
            </div>
            
        </div>
    )
}

export default SponsorBlock;