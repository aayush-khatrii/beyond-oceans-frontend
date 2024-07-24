"use client"
import { useRef, useState } from 'react'
import styles from './PackageOverview.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp';

export default function PackageOverview({packOverviewSrc}) {

    
    const mdxRef = useRef()
    
    const [isExtended, setIsExtended] = useState(false)
    
    
    function handleReadMore(){
        setIsExtended(!isExtended)
        const element = mdxRef.current;
        
        !isExtended ? element.style.height = `${element.scrollHeight}px` : element.style.height = "100px"
    }


  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Tour Package Overview</span>
        </div>
        <div className={styles.overviewContent}>
            <div ref={mdxRef} style={{marginBottom: isExtended ? "15px" :  ""}} className={styles.mdxContent}>
                <div style={{background: isExtended ? "transparent" : ""}} className={styles.gradient}></div>
                <MDXComp source={packOverviewSrc} />
            </div>
            <span onClick={handleReadMore} className={styles.readmoreBtn}>{isExtended ? "Read Less" : "Read More"}</span>
        </div>
    </div>
  )
}
