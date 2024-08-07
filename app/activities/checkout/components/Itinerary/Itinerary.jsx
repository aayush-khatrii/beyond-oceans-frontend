"use client"
import { useState } from 'react';
import styles from './Itinerary.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp';
import IconList from '@/app/AppData/components/IconComponent/IconList';

export default function Itinerary({scheduleData, packageId}) {

    const [isToggleMDX, setIsToggleMDX] = useState(0)

    function awsUrlGen(mdxSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/${packageId}/itinerary/${mdxSrc}`
    }

    function handlelistclick(index){
        setIsToggleMDX(index)
    }

    return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Day Wise Itinerary</span>
        </div>
        <div className={styles.overviewContent}>
            <div className={styles.contentSubWrapper}>
                <div className={styles.dotedBorder}></div>
                    <div className={styles.arrayList}>
                    {scheduleData ? scheduleData.map((item, index) => (
                        <div key={index} onClick={() => {handlelistclick(index)}} className={styles.itineraryList}>
                            <div className={styles.listTitle}>
                                <div className={styles.firstSvg}><IconList Icon="AddressPin" /></div>
                                <div className={styles.midSvg}><div className={styles.midCircle}></div></div>
                                <div className={styles.lastSvg}><IconList Icon="PlanFlag" /></div>
                                <div className={styles.listTitlewrp}>
                                    <div className={styles.listTitleCont}>
                                        <p className={styles.listTitleDay}>Day {item.Day}</p>
                                        <p className={styles.listTitleText}>{item.Day_Title}</p>
                                    </div>
                                    <div className={styles.drpArrow}><IconList Icon="downArrowThin" /></div>
                                </div>
                            </div>
                            <div style={{height: index === isToggleMDX ? "100%" : "0px", padding: index === isToggleMDX ? "13px 55px" : "0px"}} className={styles.itineraryListMDX}>
                                <MDXComp source={awsUrlGen(item.Day_Descreption)} />
                            </div>
                        </div>
                    )) : <>loading</>}
                    </div>
            </div>
        </div>
    </div>
  )
}
