"use client"
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import styles from './Policy.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import { useState } from 'react'

export default function Policy() {
    const mdxSource = "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"
    const policyList = ["Departure and Return", "Important Notes", "Cancellation Policy"]

    const [opendList, setOpendList] = useState()

    function handleListClick(index){
        console.log(index)
        if(index == opendList){
            setOpendList()
            return
        }
        setOpendList(index)
    }


    return (
    <div className={styles.mainWrapper}>
        {
            policyList.map((item, index) => (
                <div key={index} onClick={() => {handleListClick(index)}} className={styles.policyList}>
                    <div className={styles.toggleBtn}><IconList Icon="DownArrowV2"/></div>
                    <div className={styles.policyTitle}><span>{item}</span></div>
                    <div className={styles.policyData} style={{display: index === opendList ? "block" : ""}}><MDXComp source={mdxSource}/></div>
                </div>
            ))
        }
    </div>
  )
}
