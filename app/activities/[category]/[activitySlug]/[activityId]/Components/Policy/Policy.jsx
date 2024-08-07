"use client"
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import styles from './Policy.module.css'
import { useState } from 'react'
import PolicyPopup from './PolicyPopup/PolicyPopup'

export default function Policy() {

    const [opendList, setOpendList] = useState()
    const [isPopup, setIsPopup] = useState(false)

    function handlePopup(id){
        setOpendList(id)
        setIsPopup(!isPopup)
    }

    const ListTitles = {
        1: "Departure and Return",
        2: "Important Notes",
        3: "Cancellation Policy",
        4: "Terms & Conditions",
    }

    const srcURLMDX = {
        1: "",
        2: "",
        3: "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/cancellation_policy_all.mdx",
        4: "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/terms_and_condition.mdx",
    }


    return (
    <div className={styles.mainWrapper}>
        {isPopup && opendList && <PolicyPopup title={ListTitles[opendList]} sourceURL={srcURLMDX[opendList]} onClose={() => {handlePopup()}}/>}
        
        {/* <div onClick={() => {handleListClick1(1)}} className={styles.policyList}>
            <div className={styles.toggleBtn}><IconList Icon="DownArrowV2"/></div>
            <div className={styles.policyTitle}><span>Departure and Return</span></div>
            <div className={styles.policyData} style={{display: opendList === 1 ? "block" : ""}}>
                <MDXComp source={mdxSource}/>
            </div>
        </div>
        <div onClick={() => {handleListClick1(2)}} className={styles.policyList}>
            <div className={styles.toggleBtn}><IconList Icon="DownArrowV2"/></div>
            <div className={styles.policyTitle}><span>Important Notes</span></div>
            <div className={styles.policyData} style={{display: opendList === 2 ? "block" : ""}}>
                <MDXComp source={mdxSource}/>
            </div>
        </div> */}

        <div className={styles.policyList}>
            <div className={styles.policyTitle}><span>Cancellation Policy</span></div>
            <div className={styles.policyData} style={{display: opendList === 3 ? "block" : "block"}}>
                <MDXComp source={srcURLMDX[3]}/>
                <div className={styles.contentOverlay}></div>
            </div>
            <button onClick={() => {handlePopup(3)}} className={styles.readMoreBtn}>Read More</button>
        </div>

        <div className={styles.policyList}>
            <div className={styles.policyTitle}><span>Terms & Conditions</span></div>
            <div className={styles.policyData} style={{display: opendList === 3 ? "block" : "block"}}>
                <MDXComp source={srcURLMDX[4]}/>
                <div className={styles.contentOverlay}></div>
            </div>
            <button onClick={() => {handlePopup(4)}} className={styles.readMoreBtn}>Read More</button>
        </div>

        {/* {
            policyList.map((item, index) => (
                <div key={index} onClick={() => {handleListClick(index)}} className={styles.policyList}>
                    <div className={styles.toggleBtn}><IconList Icon="DownArrowV2"/></div>
                    <div className={styles.policyTitle}><span>{item}</span></div>
                    <div className={styles.policyData} style={{display: index === opendList ? "block" : ""}}><MDXComp source={mdxSource}/></div>
                </div>
            ))
        } */}
    </div>
  )
}
