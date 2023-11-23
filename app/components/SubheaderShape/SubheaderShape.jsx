import styles from './subheaderShape.module.css';
import Image from 'next/image';

const SubheaderShape = ({children, size}) => {
    return (
        <div className={`${styles.subheaderShape} ${size == 'sm' && styles.small}`}>
            <div
                className={styles.subheaderShapeBody}
            >
                {children}
            </div>
            <svg className={styles.triangleSVG} width="100vw" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
        </div>
    )
}

export default SubheaderShape;