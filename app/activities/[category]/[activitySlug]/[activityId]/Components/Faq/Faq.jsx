"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Faq.module.css'
import { useState } from 'react'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'

export default function Faq({activityId, faqList}) {

    const [oppendAcc, setOppendAcc] = useState()


    function handleAccClick(index){
        if(oppendAcc === index){
            setOppendAcc()
            return
        }
        setOppendAcc(index)
    }
    
    function faqMdxURLAWS(srcUrl){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/activities/${activityId}/faq/${srcUrl}`
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.sectionTitle}>
            <span>Frequently Asked Questions</span>
        </div>
        <div className={styles.faqContent}>
            <div className={styles.faqDataList}>
                {
                    faqList.map((item, index) => (
                        <div key={index} className={`${styles.faqCard} ${oppendAcc === index ? styles.faqCardOppen : ""}`} onClick={() => {handleAccClick(index)}}>
                            <div className={styles.faqCardTitle}>
                                <span>{item.Title}</span>
                                <div className={styles.downArrowSvg}><IconList Icon="DownArrowV2" /></div>
                            </div>
                            <div className={styles.faqCardContent}><MDXComp source={faqMdxURLAWS(item.FAQ_MDX)} /></div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
