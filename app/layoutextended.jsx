"use client"
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import Navbar from "./AppData/components/Header/Navbar/Navbar";
import StickyNavbar from './AppData/components/Header/StickyNavbar/StickyNavbar'
import Breadcrumb from "./AppData/components/Header/Breadcrumb/Breadcrumb";
import Footer from "./AppData/components/Footer/Footer";
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './AppData/lib/store/store'
import AutoAuth from "./AutoAuth";
import MobHeader from "./AppData/components/Header/MobHeader/MobHeader";
import Link from "next/link";
import Image from "next/image";
import InqPopup from "./AppData/components/InqPopup/InqPopup";
import Lottie from 'lottie-react'
import TripCalculatorAni from './AppData/ani/trip_calc.json'

export default function layoutextended({ children }) {

    useEffect(() => {
        let deferredPrompt;
    
        // Function to check if the prompt was shown within the last 24 hours
        const shouldShowPrompt = () => {
          const lastPromptTime = localStorage.getItem('lastPromptTime');
          if (!lastPromptTime) return true; // Show if there's no previous prompt time
          const currentTime = new Date().getTime();
          const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
          return currentTime - lastPromptTime > oneDay; // True if more than 1 day has passed
        };
    
        // Only run this on the client side
        if (typeof window !== 'undefined') {
          console.log('PWA install check started');
          
          window.addEventListener('beforeinstallprompt', (event) => {
            console.log('addEventListener= beforeinstallprompt');
            
            // Prevent the mini-infobar from appearing
            event.preventDefault();
            
            // Save the event so it can be triggered later
            deferredPrompt = event;
    
            // Check if the prompt should be shown
            if (shouldShowPrompt()) {
              // Automatically show the native install prompt
              deferredPrompt.prompt();
              
              // Handle the user's response to the prompt
              deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the PWA install');
                } else {
                  console.log('User dismissed the PWA install');
                }
                deferredPrompt = null;
    
                // Store the time when the prompt was shown
                localStorage.setItem('lastPromptTime', new Date().getTime());
              });
            }
          });
        }
      }, []);
    
    const storeRef = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    const pathName = usePathname();
    const nonBreadcrumbPages = ["/", "/contact-us", /^\/payment-varifyer\/.*/]
    const nonStickyNavBar = ["/", "/book-ferry", "/destination", "/services"]
    const noNavFooterPages = [/^\/trip-calculator(\/.*)?$/]
    

    return (
        <>
        <Provider store={storeRef.current}>
            <div className={styles.layoutWrapper}>
                <AutoAuth>
                    { !noNavFooterPages.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) &&
                    (!nonStickyNavBar.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) ? <StickyNavbar /> : <Navbar />) }
                    { !noNavFooterPages.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) && <MobHeader />}
                    { !noNavFooterPages.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) &&
                        <Link href="https://wa.me/917908671247" target="_blank" className={styles.wpIcon}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.imgWrapper}>
                                    <Image
                                        src="/assets/wp_icon.webp"
                                        fill={true}
                                        sizes="100%"
                                        alt="Whatsapp Chat"
                                        style={{objectFit:"contain"}}
                                    />
                                </div>
                            </div>
                            <div className={styles.iconTitle}><span>WhatsApp Chat</span></div>
                        </Link>
                    }
{/*                     { !noNavFooterPages.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) &&
                        <Link href="/trip-calculator" className={styles.tripCalcIcon}>
                            <div className={styles.iconTitle}><span>Trip Budget Calculator</span></div> 
                            <div className={styles.aniIconWrapper}>
                                <Lottie animationData={TripCalculatorAni} />
                            </div>
                        </Link>
                    } */}
                      
                    {/* <InqPopup /> */}
                    {/* { !nonBreadcrumbPages.includes(pathName) ? <Breadcrumb /> : null } */}
                        {children}
                    { 
                      !noNavFooterPages.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) && 
                      <Footer />
                    }
                </AutoAuth>
            </div>
        </Provider>
        </>
    )
}
