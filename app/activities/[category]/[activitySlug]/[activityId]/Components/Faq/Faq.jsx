"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Faq.module.css'
import { useState } from 'react'

export default function Faq({faqList}) {

    const [oppendAcc, setOppendAcc] = useState()


    function handleAccClick(index){
        if(oppendAcc === index){
            setOppendAcc()
            return
        }
        setOppendAcc(index)
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
                            <div className={styles.faqCardContent}><p>{item.Desc}</p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
