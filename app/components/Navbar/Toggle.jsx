import styles from './navbar.module.css';

const MenuSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="icon icon-tabler icon-tabler-menu-2"
            viewBox="0 0 24 24"
            >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M4 6L20 6"></path>
            <path d="M4 12L20 12"></path>
            <path d="M4 18L20 18"></path>
        </svg>
    )
}

const CloseSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="icon icon-tabler icon-tabler-x"
            viewBox="0 0 24 24"
            >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M18 6L6 18"></path>
            <path d="M6 6L18 18"></path>
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