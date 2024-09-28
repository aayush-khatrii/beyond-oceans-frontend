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

export default function layoutextended({ children }) {
    useEffect(() => {
        let deferredPrompt;
    
        // Only run this on the client side
        if (typeof window !== 'undefined') {
            console.log('PWA install started');
          window.addEventListener('beforeinstallprompt', (event) => {
            console.log('addEventListener= beforeinstallprompt');
            // Prevent the mini-infobar from appearing
            event.preventDefault();
            // Save the event so it can be triggered later
            deferredPrompt = event;
    
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
            });
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
    const nonStickyNavBar = ["/", "/book-ferry", /^\/destination(\/.*)?$/, /^\/services(\/.*)?$/]
    

    return (
        <>
        <Provider store={storeRef.current}>
            <div>
                <AutoAuth>
                    { !nonStickyNavBar.some((route) => typeof route === "string" ? route === pathName : route.test(pathName)) ? <StickyNavbar /> : <Navbar /> }
                    <MobHeader />
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
                    {/* { !nonBreadcrumbPages.includes(pathName) ? <Breadcrumb /> : null } */}
                        {children}
                    <Footer />
                </AutoAuth>
            </div>
        </Provider>
        </>
    )
}
