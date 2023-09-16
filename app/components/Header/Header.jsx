import Image from 'next/image';

import styles from './header.module.css'

const Header = ({children, size = 'md', imageClass = {}, masked = false, divider = false, dividerHeight = 80, gradient = false}) => {
    return (
        <div className={`${styles.header} ${size == 'lg' && styles.lg} ${size == 'md' && styles.md} ${size =='sm' && styles.sm}`} style={{...(divider && {marginBottom: dividerHeight}) }}>
            {/* Background Image */}
            <div className={`${styles.headerBackgroundImage} ${imageClass} ${gradient && styles.gradient} ${masked && styles.masked}`}/>
            {/* Header Contents */}
            <div className={styles.headerContentsOverlay}>
                {children}
            </div>
            {/* Divider */}
            {
                divider && <div className={styles.headerDivider}>
                    <div style={{backgroundColor : '#F68313'}}/>
                    <svg className={styles.triangleSVG} width="100%" height="120px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" fill="#F68313" fillOpacity="1"></path></svg>
                </div>
            }
        </div>
    )
}

export default Header;