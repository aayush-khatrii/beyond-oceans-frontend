"use client"
import { useRef, useState } from 'react'
import styles from './PackageOverview.module.css'
import DemoData from '@/app/AppData/mdx/demodata.mdx'

export default function PackageOverview() {

    const mdxRef = useRef()

    const [isExtended, setIsExtended] = useState(false)

    
    const extendedStyle = {
        height: isExtended ? "fit-content" : ""
    }

    const extendedStyleMdx = {
        height: isExtended ? "fit-content" : ""
    }

    function handleReadMore(){
        setIsExtended(!isExtended)
        const element = mdxRef.current;

        !isExtended ? element.style.height = `${element.scrollHeight}px` : element.style.height = "169px"
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Tour Package Overview</span>
        </div>
        <div className={styles.overviewContent}>
            <div ref={mdxRef} style={{marginBottom: isExtended ? "15px" :  ""}} className={styles.mdxContent}>
                <div style={{background: isExtended ? "transparent" : ""}} className={styles.gradient}></div>
                <DemoData />
            </div>
            <span onClick={handleReadMore} className={styles.readmoreBtn}>{isExtended ? "Read Less" : "Read More"}</span>
        </div>
    </div>
  )
}
