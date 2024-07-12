"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Faq.module.css'
import { useState } from 'react'

export default function Faq() {

    const [oppendAcc, setOppendAcc] = useState()
    const [selectedCategory, setselectedCategory] = useState(0)

    const faqDataList = [1, 2, 3]
    const faqCategoryList = ["Pre-Booking", "Booking", "Post Booking", "General"]

    function handleCategoryClick(index){
        setselectedCategory(index)
    }

    function handleAccClick(index){
        if(oppendAcc === index){
            setOppendAcc()
            return
        }
        setOppendAcc(index)
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.secTitle}>
            <div className={styles.mainTitle}><h2>Frequently Asked Questions</h2></div>
            <div className={styles.secondTitle}><h3>See what our customers have to say about their experiences with us</h3></div>
        </div>
        <div className={styles.faqContent}>
            <div className={styles.faqTabList}>
                {
                    faqCategoryList.map((item, index) => (
                        <div onClick={() => {handleCategoryClick(index)}} key={index} className={`${styles.faqCategoryTab} ${selectedCategory === index ? styles.selectedFaqCat : ""}`}>{item}</div>
                    ))
                }
            </div>
            <div className={styles.faqDataList}>
                {
                    faqDataList.map((item, index) => (
                        <div key={index} className={`${styles.faqCard} ${oppendAcc === index ? styles.faqCardOppen : ""}`} onClick={() => {handleAccClick(index)}}>
                            <div className={styles.faqCardTitle}>
                                <span>How can I check ferry schedules and availability?</span>
                                <div className={styles.downArrowSvg}><IconList Icon="DownArrowV2" /></div>
                            </div>
                            <div className={styles.faqCardContent}><p>You can easily check ferry schedules and availability on our website by selecting your desired route, date, and passenger count. Our system will display all available options for you to choose from.</p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
