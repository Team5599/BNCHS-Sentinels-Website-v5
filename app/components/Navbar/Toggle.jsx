import styles from './navbar.module.css';

const MenuSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    )
}

const CloseSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    )
}

const Toggle = ({isMobileNavbarOpen, setMobileNavbarOpen}) => {
    return (
        <div className={styles.navbarToggle}
            onClick={() => {
                setMobileNavbarOpen(!isMobileNavbarOpen);
            }}
        >
            {
                isMobileNavbarOpen ? <CloseSVG
                    width={52}
                    height={52}
                /> : <MenuSVG
                    width={52}
                    height={52}
                />
            }
        </div>
    )
}

export default Toggle;