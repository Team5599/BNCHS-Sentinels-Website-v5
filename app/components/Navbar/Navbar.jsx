'use client'

import Image from 'next/image';
import Link from 'next/link';

import Toggle from './Toggle';

import styles from './navbar.module.css';

import {useState, useEffect, useRef, useMemo} from 'react';
import { usePathname } from 'next/navigation'
import useWindowDimensions from '@lib/useWindowDimensions';

import ChevronSVG from './chevron-svg';
import useScrollPosition from '@/lib/useScrollPosition';

const NavbarButton = ({label, href = '/404', target='', className = [], handleHover, hideExternalIcon = false}) => {
    return (
        <li className={`${styles.navbarButton} ${className}`} navbar-button={label} onMouseEnter={handleHover}>     
            <Link className={styles.navbarButtonInternal} href={href} target={target}>
                <span>{label}</span>
                {
                    (href.startsWith('http') && hideExternalIcon == false) && <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                    </svg>
                }
            </Link>
        </li>
    )
}

const NavbarButtonDropdown = ({label, dropdownButtons, ignoreChevron = false, className = [], handleHover}) => {

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
            onMouseEnter={handleHover}
            // onMouseEnter={(e) => {
            //     setDropdownOpen(true);
            // }}
            // onMouseLeave={(e) => {
            //     setDropdownOpen(false);
            // }}
            ref={navbarButtonRef}
            className={`${styles.navbarButton} ${className}`}
            navbar-button={label}
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
            

            <div className={`${styles.navbarDropdown} ${isDropdownOpen && styles.active}`}>
                {dropdownButtons}
            </div>
            
        </li>
    )
}

const NavbarActiveSlider = ({width, left}) => {

    return (
        <div className={styles.navbarSlider} style={{width : width, left : left}}/>
    )
}

const useNavbarAnimationHandler = () => {

    const [ navbarSliderData, setNavbarSliderData] = useState({width : 0, left : 0, label : 'Home'})

    const pathname = usePathname();

    const [activeNavbarButton, setActiveNavbarButton] = useState(null);

    const setNavbarButtonHighlight = (navbarButtonEl) => {
        
        if (navbarButtonEl == null) return;

        const boundingBox = navbarButtonEl.getBoundingClientRect();
        setNavbarSliderData({
            width : boundingBox.width,
            left : navbarButtonEl.offsetLeft,
            label : navbarButtonEl.getAttribute('label')
        })

    }

    const resetNavbar = () => {

        /*
            ALTERNATIVELY
            instead of returning the highlight to the main button, send it offscreen to the left and watch it fade out really cool
        */
        setNavbarButtonHighlight(activeNavbarButton);
    }

    useEffect(() => {

        // Is there a navbar link that directs to this page?
        const navbarLink = document.querySelector(`.navbar .navbar-wrapper [href="${pathname}"]`);

        if (navbarLink == null) return;

        // Find the main navbar component
        const navbarButton = navbarLink.closest('.navbar-wrapper > [navbar-button]');


        setActiveNavbarButton(navbarButton);
        setNavbarButtonHighlight(navbarButton);

    }, [pathname])

    return { navbarSliderData, setNavbarButtonHighlight, resetNavbar }
}

const Navbar = () => {

    /*
        TODO
        Add mouse-enter and mouse-exit support for the navbar dropdowns
    */
    const { height, width } = useWindowDimensions();
    const [isMobileNavbarOpen, setMobileNavbarOpen] = useState(false);

    const {navbarSliderData, setNavbarButtonHighlight, resetNavbar} = useNavbarAnimationHandler();
    
    const windowScroll = useScrollPosition();

    const SCROLL_RESIZE_TRIGGER = 80;

    const [isAuthenticated, setAuthenticted] = useState(false);
    

    const handleNavbarItemMouseEnter = (e) => {
        const navbarButtonEl = e.target.closest('.navbar-wrapper > [navbar-button]');
        if (navbarButtonEl == null) return;
        setNavbarButtonHighlight(navbarButtonEl);
    }

    return (
        <div className={`navbar ${styles.navbar} ${(width <= 992) && styles.mobile} ${(width <= 1200 && isMobileNavbarOpen) && styles.mobileOpen} ${windowScroll > SCROLL_RESIZE_TRIGGER && styles.navbarCompressed}`}>
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
                            {/* LOGO */}
                        </span>
                    </Link> 
                </div>
                <Toggle isMobileNavbarOpen={isMobileNavbarOpen} setMobileNavbarOpen={setMobileNavbarOpen}/>
                <ul className={`navbar-wrapper ${styles.navbarButtonsWrapper} ${windowScroll > SCROLL_RESIZE_TRIGGER && styles.navbarButtonsWrapperCompressed}`}
                    onMouseLeave={resetNavbar}
                >
                    <NavbarActiveSlider width={navbarSliderData.width} left={navbarSliderData.left}/>

                    <NavbarButton label={'Home'} href='/' handleHover={handleNavbarItemMouseEnter}/>
                    <NavbarButtonDropdown
                        label={'About'}
                        handleHover={handleNavbarItemMouseEnter}
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
                        handleHover={handleNavbarItemMouseEnter}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Calendar'} href='/Calendar'/>
                                    <NavbarButton label={'Photos & Videos'} href='https://flickr.team5599.com' target='_blank'/>
                                    <NavbarButton label={'Team Documents'} href='/Documents'/>
                                    <NavbarButton label={'Resource Engine'} href='https://legacy.team5599.com/Resources.html' target='_blank'/>
                                </ul>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Branding'} href='https://www.dropbox.com/sh/haj08owh473lcwr/AACT7a2KEGJLxAf-2OGS5d7Ia?dl=0' target='_blank'/>
                                    <NavbarButton label={'Project Showcases'} href='/Showcases'/>
                                    <NavbarButton label={'Alumni Outreach'} href='/Alumni'/>
                                    <NavbarButton label={'Code Repositories'} href='https://github.com/Team5599' target='_blank'/>
                                    <NavbarButton label={'The Blue Alliance'} href='https://www.thebluealliance.com/team/5599' target='_blank'/>
                                </ul>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'FIRST (C)'} href='https://www.firstinspires.org/' target='_blank'/>
                                    <NavbarButton label={'Scholarships'} href='/Opportunities'/>
                                    <NavbarButton label={'Internships'} href='/Opportunities'/>
                                    <NavbarButton label={'Donations'} href='/Donate'/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButtonDropdown
                        label={'Sponsors'}
                        handleHover={handleNavbarItemMouseEnter}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    <NavbarButton label={'Our Sponsors'} href='/Sponsors'/>
                                    <NavbarButton label={'Sponsorship Incentives'} href='/Sponsors/Incentives'/>
                                    <NavbarButton label={'Make A Donation'} href='/Contact' className={styles.donateSecondaryButton}/>
                                    <NavbarButton label={'Become a Sponsor'} href='/Contact' className={styles.sponsorSecondaryButton}/>
                                </ul>
                            </>
                        }
                    />
                    <NavbarButton label={'Blog'} href='https://blog.team5599.com/' target='_blank' handleHover={handleNavbarItemMouseEnter} hideExternalIcon={true} />
                    <NavbarButtonDropdown
                        label={'Members'}
                        ignoreChevron={true}
                        className={styles.navbarButtonTeam}
                        handleHover={handleNavbarItemMouseEnter}
                        dropdownButtons={
                            <>
                                <ul className={styles.navbarDropdownColumn}>
                                    {
                                        (isAuthenticated) ? <>
                                            <NavbarButton label={'Dashboard'} href='/m/Dashboard' className={styles.membersSecondaryButton}/>
                                            <NavbarButton label={'Sign Out'} href='/m/Dashboard' className={styles.membersSecondaryButton}/>
                                        </> : <>
                                            <NavbarButton label={'Sign In'} href='/m/SignIn' className={styles.membersSecondaryButton}/>
                                            <NavbarButton label={'Register'} href='/m/Register' className={styles.membersSecondaryButton}/>
                                        </>
                                    } 
                                </ul>
                            </>
                        }
                    />
                    <NavbarButton label={'Contact Us'} href='/Contact' handleHover={handleNavbarItemMouseEnter}/>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;