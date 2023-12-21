import styles from './page.module.css'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import Image from 'next/image'

export default function PageNotFound() {
	return (
		<div
            style={{
                backgroundColor : '#000'
            }}
        >
			<Navbar/>
			<div
				className={styles.gradientBackground}
				style={{
					paddingTop : 40,
					minHeight : 400,
					paddingBottom : 120,
					marginBottom : -60
				}}
			>
				<div
                    style={{
                        maxWidth : '100%',
                        width : '100vw',
                        height : 320,
                        backgroundColor : '#000000a0',
                        display : 'flex',
                        flexDirection : 'column',
                        gap : 40,
                        justifyContent : 'center',
                        alignItems : 'center',
                        textAlign : 'center',
                        marginTop : 120,
                        marginBottom : 120
                    }}
                >
                    <div
                        style={{
                            display : 'flex',
                            flexDirection : 'row',
                            alignItems : 'center',
                            gap : 20
                        }}
                    >
                        <span
                            style={{
                                color : '#fff',
                                fontSize : 46,
                                fontWeight : 700
                            }}
                        >
                            404
                        </span>
                        <span
                            style={{
                                color : '#fff',
                                fontSize : 24,
                                fontWeight : 200
                            }}
                        >
                            Page Not Found
                        </span>
                    </div>
                    <Image
                        unoptimized
                        height={250}
                        width={350}
                        alt={'Image of a robot falling over'}
                        src={'https://www.chiefdelphi.com/uploads/default/original/3X/a/c/ac886367156c9a5f0d6e39b73545770b707ac1d1.jpeg'}
                    />
                </div>
			</div>
			<Footer/>
		</div>
	)
}
