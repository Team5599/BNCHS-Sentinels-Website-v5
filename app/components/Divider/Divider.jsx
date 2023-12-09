import styles from './divider.module.css';

const Divider = ({style = {}, color = '#dddddd'}) => {

    console.log('filter', result);

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
                    backgroundRepeat : 'repeat',
                    backgroundImage : 'url("/images/divider/y-texture.png")',
                    // filter : result.filter
                    // backgroundImage : `
                    //     repeating-linear-gradient(
                    //         110deg,
                    //         ${color},
                    //         ${color} 16px,
                    //         transparent 16px,
                    //         transparent 18px
                    //     )
                    // `
                }}
            />
        </div>
    )
}

export default Divider;