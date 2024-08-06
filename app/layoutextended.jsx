"use client"
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import Navbar from "./AppData/components/Header/Navbar/Navbar";
import StickyNavbar from './AppData/components/Header/StickyNavbar/StickyNavbar'
import Breadcrumb from "./AppData/components/Header/Breadcrumb/Breadcrumb";
import Footer from "./AppData/components/Footer/Footer";
import { useLayoutEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './AppData/lib/store/store'
import AutoAuth from "./AutoAuth";
import MobHeader from "./AppData/components/Header/MobHeader/MobHeader";
import Link from "next/link";
import Image from "next/image";

export default function layoutextended({ children }) {

    const storeRef = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    const pathName = usePathname();
    const nonBreadcrumbPages = ["/", "/contact-us", /^\/payment-varifyer\/.*/]
    const nonStickyNavBar = ["/", "/book-ferry"]
    

    return (
        <>
        <Provider store={storeRef.current}>
            <div>
                <AutoAuth>
                    { !nonStickyNavBar.includes(pathName) ? <StickyNavbar /> : <Navbar /> }
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
