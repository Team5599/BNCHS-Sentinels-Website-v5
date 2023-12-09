import styles from './divider.module.css';

const Divider = ({style = {}, color = '#ddd'}) => {
    return (
        <div
            className={styles.divider}
            style={{
                border: `2px solid ${color}`,
                ...style
            }}
        >
            <div
                className={styles.dividerFiller}
                style={{
                    backgroundImage : `
                        repeating-linear-gradient(
                            110deg,
                            ${color},
                            ${color} 16px,
                            transparent 16px,
                            transparent 18px
                        )
                    `
                }}
            />
        </div>
    )
}

export default Divider;