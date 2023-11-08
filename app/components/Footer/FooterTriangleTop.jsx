'use client'

import Link from 'next/link'
import styles from './footer.module.css'

const FooterTriangleTop = () => {
    return (
        <div className={styles.footerTriangleContainer}>
            <div className={`container ${styles.footerButtonContainer}`}>
                <button
                    className={styles.footerButton}
                    onClick={(e) => {
                        window.scrollTo({top : 0, behavior : 'smooth'})
                    }}
                >
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9307 6.24998C26.9193 2.99117 30.4136 1.36176 33.6756 0.998153C39.882 0.306337 46.0554 2.55326 50.3651 7.07264C52.6302 9.44797 54.2596 12.9422 57.5184 19.9308C60.7773 26.9193 62.4067 30.4136 62.7703 33.6756C63.4621 39.8821 61.2152 46.0554 56.6958 50.3651C54.3205 52.6303 50.8262 54.2597 43.8376 57.5185C36.8491 60.7773 33.3548 62.4067 30.0928 62.7703C23.8864 63.4621 17.713 61.2152 13.4033 56.6958C11.1382 54.3205 9.50875 50.8262 6.24994 43.8377C2.99113 36.8491 1.36173 33.3549 0.998115 30.0928C0.306299 23.8864 2.55322 17.713 7.0726 13.4033C9.44793 11.1382 12.9422 9.50879 19.9307 6.24998Z" fill="#0F1D35"/>
                    </svg>
                </button>
            </div>
            <svg className={styles.triangleSVG} width="100%" height="30px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 30" preserveAspectRatio="none" ><path  d="M0 30L600 0L1200 30Z" className="shape-fill" fill="#0f1725" fillOpacity="1"></path></svg>
        </div>
    )
}

export default FooterTriangleTop;