import styles from './subheaderShape.module.css';
import Image from 'next/image';

const SubheaderShape = ({children, size}) => {
    return (
        <div className={styles.subheaderShape}>
            <div
                className={styles.subheaderShapeBody}
                style={{
                    paddingTop : size == 'sm' ? 40 : 80,
                    paddingBottom : size == 'sm' ? 40 : 80
                }}
            >
                {children}
            </div>
            <svg style={{maxWidth : '100%', height : size == 'sm' ? 60 : 120}} width="100vw" height={size == 'sm' ? "60px" : "120px"} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
        </div>
    )
}

export default SubheaderShape;