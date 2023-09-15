'use client'

import Image from 'next/image';
import Link from 'next/link';

import Toggle from './Toggle';

import styles from './navbar.module.css';

import {useState, useEffect, useRef} from 'react';
import useWindowDimensions from '@lib/useWindowDimensions';

import ChevronSVG from './chevron-svg';

const NavbarButton = ({label, className = []}) => {
    return (
        <li className={`${styles.navbarButton} ${className}`}>
            <div className={styles.navbarButtonInternal}>
                <span>{label}</span>
            </div>
        </li>
    )
}

const NavbarButtonDropdown = ({label, dropdownButtons, ignoreChevron = false, className = []}) => {

    const navbarButtonRef = useRef(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navbarButtonRef.current && !navbarButtonRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [navbarButtonRef]);

    return (
        <li
            onMouseUp={(e) => {
                setDropdownOpen(!isDropdownOpen);
            }}
            // onMouseEnter={(e) => {
            //     setDropdownOpen(true);
            // }}
            // onMouseLeave={(e) => {
            //     setDropdownOpen(false);
            // }}
            ref={navbarButtonRef}
            className={`${styles.navbarButton} ${className}`}
        >
            <div className={styles.navbarButtonInternal}>
                <span>{label}</span>
                {
                    !ignoreChevron && <ChevronSVG
                        color='#fff'
                        width={24}
                        height={24}
                    />
                }
            </div>
            
            
            {
                isDropdownOpen && <div className={styles.navbarDropdown}>
                    {dropdownButtons}
                </div>
            }
            
        </li>
    )
}

const Navbar = () => {

    /*
        TODO
        Add mouse-enter and mouse-exit support for the navbar dropdowns
    */
    const { height, width } = useWindowDimensions();
    const [isMobileNavbarOpen, setMobileNavbarOpen] = useState(false);

    return (
        <div className={`${styles.navbar} ${(width <= 992) && styles.mobile} ${(width <= 1200 && isMobileNavbarOpen) && styles.mobileOpen}`}>
            <div className={`container ${styles.navbarWrapper}`}>
                <div className={styles.navbarLogoContainer}>
                    <Link
                        href="/"
                    >
                        <Image
                            src="/images/logo.png"
                            width={48}
                            height={48}
                            alt="The Sentinels Logo"
                        />
                        <span>
                            LOGO
                        </span>
                    </Link> 
                </div>
                <Toggle isMobileNavbarOpen={isMobileNavbarOpen} setMobileNavbarOpen={setMobileNavbarOpen}/>
                <ul className={styles.navbarButtonsWrapper}>
                    <NavbarButton label={'Home'}/>
                    <NavbarButtonDropdown
                        label={'About'}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'About Us'}/>
                                    <NavbarButton label={'Meet the Members'}/>
                                    <NavbarButton label={'Meet the Robots'}/>
                                    <NavbarButton label={'Events & Competitions'}/>
                                    <NavbarButton label={'Our History'}/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButtonDropdown
                        label={'Resources'}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Calendar'}/>
                                    <NavbarButton label={'Photos & Videos'}/>
                                    <NavbarButton label={'Team Documents'}/>
                                    <NavbarButton label={'Resource Engine'}/>
                                </ul>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Branding'}/>
                                    <NavbarButton label={'Project Showcases'}/>
                                    <NavbarButton label={'Alumni Outreach'}/>
                                    <NavbarButton label={'Code Repositories'}/>
                                    <NavbarButton label={'The Blue Alliance'}/>
                                </ul>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'FIRST (C)'}/>
                                    <NavbarButton label={'Scholarships'}/>
                                    <NavbarButton label={'Internships'}/>
                                    <NavbarButton label={'Donations'}/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButtonDropdown
                        label={'Sponsors'}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Our Sponsors'}/>
                                    <NavbarButton label={'Sponsorship Incentives'}/>
                                    <NavbarButton label={'Make A Donation'} className={styles.donateSecondaryButton}/>
                                    <NavbarButton label={'Become a Sponsor'} className={styles.sponsorSecondaryButton}/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButton label={'Blog'}/>
                    <NavbarButtonDropdown
                        label={'Members'}
                        ignoreChevron={true}
                        className={styles.navbarButtonTeam}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Sign In'} className={styles.membersSecondaryButton}/>
                                    <NavbarButton label={'Dashboard'} className={styles.membersSecondaryButton}/>
                                    <NavbarButton label={'Register'} className={styles.membersSecondaryButton}/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButton label={'Contact Us'}/>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;