"use client"
import { useState } from 'react';
import styles from './Itinerary.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp';
import IconList from '@/app/AppData/components/IconComponent/IconList';

export default function Itinerary({scheduleData}) {

    const [isToggleMDX, setIsToggleMDX] = useState(0)

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
                    {scheduleData.map((item, index) => (
                        <div key={index} onClick={() => {handlelistclick(index)}} className={styles.itineraryList}>
                            <div className={styles.listTitle}>
                                <div className={styles.firstSvg}><IconList Icon="AddressPin" /></div>
                                <div className={styles.midSvg}><div className={styles.midCircle}></div></div>
                                <div className={styles.lastSvg}><IconList Icon="PlanFlag" /></div>
                                <div className={styles.listTitlewrp}>
                                    <div className={styles.listTitleCont}>
                                        <p className={styles.listTitleDay}>Day {item.day}</p>
                                        <p className={styles.listTitleText}>{item.title}</p>
                                    </div>
                                    <div className={styles.drpArrow}><IconList Icon="downArrowThin" /></div>
                                </div>
                            </div>
                            <div style={{height: index === isToggleMDX ? "100%" : "0px", padding: index === isToggleMDX ? "13px 55px" : "0px"}} className={styles.itineraryListMDX}>
                                <MDXComp source={item.contentMdx} />
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    </div>
  )
}
