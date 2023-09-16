'use client'

import Image from 'next/image';
import Link from 'next/link';

import Toggle from './Toggle';

import styles from './navbar.module.css';

import {useState, useEffect, useRef} from 'react';
import useWindowDimensions from '@lib/useWindowDimensions';

import ChevronSVG from './chevron-svg';

const NavbarButton = ({label, href = '/404', target='', className = []}) => {
    return (
        <li className={`${styles.navbarButton} ${className}`}>     
            <Link className={styles.navbarButtonInternal} href={href} target={target}>
                <span>{label}</span>
            </Link>
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
            onClick={(e) => {
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
                    <NavbarButton label={'Home'} href='/'/>
                    <NavbarButtonDropdown
                        label={'About'}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'About Us'} href='/AboutUs'/>
                                    <NavbarButton label={'Meet the Members'} href='/Team'/>
                                    <NavbarButton label={'Meet the Robots'} href='/Robots'/>
                                    <NavbarButton label={'Events & Competitions'} href='/Events'/>
                                    <NavbarButton label={'Our History'} href='/History'/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButtonDropdown
                        label={'Resources'}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Calendar'} href='Calendar'/>
                                    <NavbarButton label={'Photos & Videos'} href='https://www.flickr.team5599.com' target='_blank'/>
                                    <NavbarButton label={'Team Documents'} href='/Documents'/>
                                    <NavbarButton label={'Resource Engine'} href='/Resources'/>
                                </ul>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Branding'} href='https://www.dropbox.com/' target='_blank'/>
                                    <NavbarButton label={'Project Showcases'} href='/Showcases'/>
                                    <NavbarButton label={'Alumni Outreach'} href='/Alumni'/>
                                    <NavbarButton label={'Code Repositories'} href='https://www.github.com/' target='_blank'/>
                                    <NavbarButton label={'The Blue Alliance'} href='https://www.thebluealliance.com/' target='_blank'/>
                                </ul>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'FIRST (C)'} href='https://www.firstinspires.org/' target='_blank'/>
                                    <NavbarButton label={'Scholarships'} href='/Opportunities'/>
                                    <NavbarButton label={'Internships'} href='/Opportunities'/>
                                    <NavbarButton label={'Donations'} href='/Gratitude'/>
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
                    <NavbarButton label={'Blog'} href='https://blog.team5599.com/' target='_blank'/>
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
                    <NavbarButton label={'Contact Us'} href='/ContactUs'/>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;