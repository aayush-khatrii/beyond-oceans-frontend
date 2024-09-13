"use client";
import { useEffect, useState, useRef } from 'react';
import styles from './StickyNavbar.module.css'
import Link from 'next/link'
import ListItem from '../../ListItem/ListItem';
import IconList from '@/app/AppData/components/IconComponent/IconList';
import SignInComp from '../../SignInComp/SignInComp';
import { useAppSelector } from '@/app/AppData/lib/store/hooks';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter()
    const userData = useAppSelector((state) => state.user.userData)

    const packageBtnRef = useRef(null);
    const actBtnRef = useRef(null);
    const dstBtnRef = useRef(null);
    const servBtnRef = useRef(null);
    const moreBtnRef = useRef(null);
    const [packageToggle, setPackageToggle] = useState(false);
    const [activityToggle, setActivityToggle] = useState(false);
    const [destToggle, setDestToggle] = useState(false);
    const [serviceToggle, setServiceToggle] = useState(false);
    const [moreToggle, setMoreToggle] = useState(false);
    const [loginPop, setLoginPop] = useState(false);
    
    function loginPopup(){
        if(userData.userId && userData.auth){
            router.push("/user/profile?menu=setting")
            return
        }
        if(usePathname === "/user/profile?menu=setting") return
        setLoginPop(!loginPop)
    }

  useEffect(() => {
    function handleClickOutside(event) {
        if (packageBtnRef.current && !packageBtnRef.current.contains(event.target)) {
            setPackageToggle(false);
        }

        if (actBtnRef.current && !actBtnRef.current.contains(event.target)) {
            setActivityToggle(false);  
        }

        if (dstBtnRef.current && !dstBtnRef.current.contains(event.target)) {
            setDestToggle(false);  
        }

        if (servBtnRef.current && !servBtnRef.current.contains(event.target)) {
            setServiceToggle(false);  
        }

        if (moreBtnRef.current && !moreBtnRef.current.contains(event.target)) {
            setMoreToggle(false);  
        }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
  }, []);

    const userAccount = (
        <div className={styles.userAccount}>
            <IconList Icon="User" />
            <span>{userData.auth === true && userData.name  ? userData.name : `user-${userData.userId}`}</span>
        </div>
    )


    return (
    <>
    {loginPop && <SignInComp handleClose={loginPopup} />}
    <div className={styles.mainWrapper}>
        <div className={styles.headWrapper}>
            <div className={styles.brand}>
                <Link href="/">
                    <IconList Icon="BOLogoColor" />
                </Link>
            </div>
            <div className={styles.menu}>
                <ul className={styles.menuList}>
                    <li>
                        <span className={styles.menuLv1} onClick={() => setPackageToggle(!packageToggle)} ref={packageBtnRef}>Packages</span>
                        <div className={`${styles.megaMenuWrapper} ${styles.packageMenuWrapper}`} style={{ display: packageToggle ? 'flex' : 'none' }}>
                            <div className={styles.menuTooltip}></div>
                            <div className={styles.secMenuCont}>
                                <ul className={styles.packageSecMenu}>
                                    <Link href="/packages/best-sellers"><li className={styles.menuContTitle}><IconList Icon="BestSellers" /><span>Best Sellers</span></li></Link>
                                    <Link href="/packages/budget-tours"><li className={styles.menuContTitle}><IconList Icon="BudgetTours" /><span>Budget Tours</span></li></Link>
                                    <Link href="/packages/budget-tours"><li className={styles.menuContTitle}><IconList Icon="Recommended" /><span>Recommended</span></li></Link>
                                    <Link href="/packages/offbeat"><li className={styles.menuContTitle}><IconList Icon="Offbeat" /><span>Offbeat</span></li></Link>
                                    <Link href="/packages"><li className={styles.menuContTitle}><IconList Icon="allPackages" /><span>All Packages</span></li></Link>
                                </ul>
                            </div>
                            <div className={styles.menuContainer}>
                                <Link href="/packages/honeymoon"><div className={styles.menuContTitle}><IconList Icon="Honeymoon" /><span>Honeymoon</span></div></Link>
                                <ul>
                                    <ListItem>2 Night 3 Days</ListItem>
                                    <ListItem>3 Night 4 Days</ListItem>
                                    <ListItem>4 Night 5 Days</ListItem>
                                    <ListItem>5 Night 6 Days</ListItem>
                                    <ListItem>6 Night 7 Days</ListItem>
                                    <ListItem>7 Night 8 Days</ListItem>
                                    <ListItem>8 Night 9 Days</ListItem>
                                    <ListItem>9 Night 10 Days</ListItem>
                                </ul>
                            </div>
                            <div className={styles.menuContainer}>
                                <Link href="/packages/family-package"><div className={styles.menuContTitle}><IconList Icon="FamilyPackage" /><span>Family Package</span></div></Link>
                                <ul>
                                    <Link href="/packages/family-package"><ListItem>2 Night 3 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>3 Night 4 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>4 Night 5 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>5 Night 6 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>6 Night 7 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>7 Night 8 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>8 Night 9 Days</ListItem></Link>
                                    <Link href="/packages/family-package"><ListItem>9 Night 10 Days</ListItem></Link>
                                </ul>
                            </div>
                            <div className={styles.menuContainer}>
                                <div className={styles.menuContTitle}><IconList Icon="SightseeingCat" /><span>Sightseeing</span></div>
                                <ul>
                                    <ListItem>Port Blair Island</ListItem>
                                    <ListItem>Havelock Island</ListItem>
                                    <ListItem>Neil Island</ListItem>
                                    <ListItem>Baratang Island</ListItem>
                                    <ListItem>Diglipur Island</ListItem>
                                    <ListItem>Rangat Island</ListItem>
                                    <ListItem>Jolly Buoy Island</ListItem>
                                    <ListItem>Best Sellers</ListItem>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <Link href="/book-ferry"><li><span className={styles.menuLv1}>Book Ferry</span></li></Link>
                    <li>
                        <span className={styles.menuLv1} onClick={() => setActivityToggle(!activityToggle)} ref={actBtnRef}>Activities</span>
                        <div className={`${styles.megaMenuWrapper} ${styles.actMenuWrapper}`} style={{ display: activityToggle ? 'flex' : 'none' }}>
                            <div className={styles.menuTooltip}></div>
                            <div className={styles.menuContainer} >
                                <Link href="/activities/water-sports"><div className={styles.menuContTitle}><IconList Icon="WaterSports" /><span>Water Sports</span></div></Link>
                                <ul>
                                    <Link href="/activities/water-sports"><ListItem>Kayaking</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Scuba Diving</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Glass Bottom Boat</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Sea Walk</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Snorkeling</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Speed Boat Rides</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Game Fishing</ListItem></Link>
                                    <Link href="/activities/water-sports"><ListItem>Semi Submarine</ListItem></Link>
                                </ul>
                            </div>
                            <div className={styles.secMenuCont}>
                                <ul className={styles.actSecMenu}>
                                    <Link href="/activities/trekking"><li className={styles.menuContTitle}><IconList Icon="Trekking" /><span>Trekking</span></li></Link>
                                    <Link href="/activities/parasailing"><li className={styles.menuContTitle}><IconList Icon="Parasailing" /><span>Parasailing</span></li></Link>
                                    <Link href="/activities/island-hopping"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Island Hopping</span></li></Link>
                                    <li className={styles.menuContTitle}><IconList Icon="Boat" /><span>Boat Tickets</span></li>
                                    <li className={styles.menuContTitle}><IconList Icon="Photoshoots" /><span>Photoshoots</span></li>
                                    <li className={styles.menuContTitle}><IconList Icon="Coupons" /><span>Coupons</span></li>
                                    <Link href="/activities"><li className={styles.menuContTitle}><IconList Icon="Recommended" /><span>All Activities</span></li></Link>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className={styles.menuLv1} onClick={() => setDestToggle(!destToggle)} ref={dstBtnRef}>Destination</span>
                        <div className={`${styles.megaMenuWrapper} ${styles.destMenuWrapper}`} style={{ display: destToggle ? 'flex' : 'none' }}>
                            <div className={styles.menuTooltip}></div>
                            <div className={styles.secMenuCont}>
                                <ul className={styles.destSecMenu}>
                                <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Port Blair Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Havelock Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Neil Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Baratang Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Diglipur Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Rangat Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Long Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Little Andaman</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>Barren Island</span></li></Link>
                                    <Link href="/destination"><li className={styles.menuContTitle}><IconList Icon="Island" /><span>All Destination</span></li></Link>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className={styles.menuLv1} onClick={() => setServiceToggle(!serviceToggle)} ref={servBtnRef}>Services</span>
                        <div className={`${styles.megaMenuWrapper} ${styles.servMenuWrapper}`} style={{ display: serviceToggle ? 'flex' : 'none' }}>
                            <div className={styles.menuTooltip}></div>
                            <div className={styles.secMenuCont}>
                                <ul className={styles.servSecMenu}>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Wedding" /><span>Wedding</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Photoshoots" /><span>Photography</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Cab" /><span>Cab Booking</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Guide" /><span>Personal Guide</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Bike" /><span>Bike Rental</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="TourPackages" /><span>Tour Packages</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Boat" /><span>Ferry Booking</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Trekking" /><span>Activities</span></li></Link>
                                    <Link href="/services"><li className={styles.menuContTitle}><IconList Icon="Offbeat" /><span>All Services</span></li></Link>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className={styles.menuLv1} onClick={() => setMoreToggle(!moreToggle)} ref={moreBtnRef}>More</span>
                        <div className={`${styles.megaMenuWrapper} ${styles.moreMenuWrapper}`} style={{ display: moreToggle ? 'flex' : 'none' }}>
                            <div className={styles.menuTooltip}></div>
                            <div className={styles.secMenuCont}>
                                <ul className={styles.moreSecMenu}>
                                    <Link href="/about-us"><li className={styles.menuContTitle}><span>About Us</span></li></Link>
                                    <li className={styles.menuContTitle}><span>Blogs</span></li>
                                    <li className={styles.menuContTitle}><span>Career</span></li>
                                    <Link href="/user/profile"><li className={styles.menuContTitle}><span>My Account</span></li></Link>
                                    <Link href="/contact-us"><li className={styles.menuContTitle}><span>Contact Us</span></li></Link>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.cta}>
                <div className={styles.currency}>INR</div>
                <button onClick={loginPopup} className={styles.account}>{(userData.userId && userData.auth) ? userAccount : "Login or Signup"}</button>
            </div>
        </div>
    </div>
    </>
  )
}
