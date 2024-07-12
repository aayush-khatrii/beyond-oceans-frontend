"use client"
import { usePathname } from "next/navigation";
import Navbar from "./AppData/components/Header/Navbar/Navbar";
import StickyNavbar from './AppData/components/Header/StickyNavbar/StickyNavbar'
import Breadcrumb from "./AppData/components/Header/Breadcrumb/Breadcrumb";
import Footer from "./AppData/components/Footer/Footer";
import { useLayoutEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './AppData/lib/store/store'
import AutoAuth from "./AutoAuth";

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
                    {/* { !nonBreadcrumbPages.includes(pathName) ? <Breadcrumb /> : null } */}
                        {children}
                    <Footer />
                </AutoAuth>
            </div>
        </Provider>
        </>
    )
}
