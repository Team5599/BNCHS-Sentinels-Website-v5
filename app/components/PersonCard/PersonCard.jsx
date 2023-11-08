import styles from './personCard.module.css'

import Image from 'next/image';

const PersonCard = ({personData}) => {
    return (
        <div className={styles.personCard}>
            <Image
                src={personData.image}
                className={styles.personCardImage}
                fill={true}
                unoptimized
                alt={`${personData.name} | Roles:`}
            />
            <div className={styles.cardOverlay}>
               <span>{personData.name}</span>
               <span>DIRECTOR OF TITLING</span>
               <div>
                    <span>Social - Media - Icons</span>
               </div>
            </div>
        </div>
    )
}

export default PersonCard;