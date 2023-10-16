import styles from './personCard.module.css'

import Image from 'next/image';

const PersonCard = () => {
    return (
        <div className={styles.personCard}>
            <div style={{
                position : 'absolute',
                top : 0,
                left : 0,
                width : 140,
                height : 140,
                backgroundColor : '#ffffff40',
                transform: 'rotate(25deg)'
            }}/>
            <div style={{
                position : 'absolute',
                top : 46,
                left : 20,
                width : 140,
                height : 140,
                backgroundColor : '#4040ff40',
                transform: 'rotate(25deg)'
            }}/>
            <div className={styles.personCardImageContainer}>
                <Image
                    unoptimized
                    src={'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/30836/square_thumb%403x.jpg'}
                    alt={'Placeholder'}
                    width={160}
                    height={160}
                    style={{
                        borderRadius : 160,
                        width : 160,
                        height: 160,
                        borderWidth : 2,
                        borderColor : '#fff'
                    }}
                />
            </div>
        </div>
    )
}

export default PersonCard;