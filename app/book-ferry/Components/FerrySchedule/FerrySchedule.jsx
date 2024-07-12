import styles from './FerrySchedule.module.css'
import Image from 'next/image'
import FerryScheduleList from './FerryScheduleList/FerryScheduleList'
import { useState } from 'react'
import FerryScheduleData from '../../../AppData/Data/FerrySchedule.json'

export default function FerrySchedule() {

    const FerryScheduleListData = FerryScheduleData
    
    const [isPopupList, setPopupList] = useState(false)
    const [selectedSchID, setSelectedSchID] = useState()

    function handleScheduleClick(schId){
        setPopupList(!isPopupList)
        setSelectedSchID(schId)
    }

    const selectedScheduleData = FerryScheduleListData.find(s => s.scheduleId === selectedSchID)

    return (
    <div className={styles.mainWrapper}>
        {isPopupList && <FerryScheduleList data={selectedScheduleData} handlePopupClose={handleScheduleClick} />}
        <div className={styles.secTitle}>
            <div className={styles.mainTitle}><h2>Popular Ferry Routes In Andaman</h2></div>
            <div className={styles.secondTitle}><h3>People loved to travel by ferry to Andaman and Nicobar, the most famous island</h3></div>
        </div>
        <div className={styles.scheduleList}>
            <div className={styles.ferryRootCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/PortBlairImgFerry.webp"
                            fill={true}
                            sizes="100%"
                            alt="Nautika"
                            style={{objectFit:"cover", objectPosition: "right"}}
                        />
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.cardRootTitle}><span>Port Blair To Havelock</span></div>
                    <div className={styles.cardRootDesc}><span>14 Ferries Per Day</span></div>
                    <div className={styles.cardButtons}>
                        <button className={styles.viewSchBtn} onClick={() => {handleScheduleClick(1)}}>View Schedule</button>
                        <button className={styles.bookFerryBtn}>Book Ferry</button>
                    </div>
                </div>
            </div>
            <div className={styles.ferryRootCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/Havelockimageferry.jpg"
                            fill={true}
                            sizes="100%"
                            alt="Nautika"
                            style={{objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.cardRootTitle}><span>Havelock To Port Blair</span></div>
                    <div className={styles.cardRootDesc}><span>8 Ferries Per Day</span></div>
                    <div className={styles.cardButtons}>
                        <button className={styles.viewSchBtn} onClick={() => {handleScheduleClick(2)}}>View Schedule</button>
                        <button className={styles.bookFerryBtn}>Book Ferry</button>
                    </div>
                </div>
            </div>
            <div className={styles.ferryRootCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/neilislandferry.png"
                            fill={true}
                            sizes="100%"
                            alt="Nautika"
                            style={{objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.cardRootTitle}><span>Havelock To Neil Island</span></div>
                    <div className={styles.cardRootDesc}><span>7 Ferries Per Day</span></div>
                    <div className={styles.cardButtons}>
                        <button className={styles.viewSchBtn} onClick={() => {handleScheduleClick(3)}}>View Schedule</button>
                        <button className={styles.bookFerryBtn}>Book Ferry</button>
                    </div>
                </div>
            </div>
            <div className={styles.ferryRootCard}>
                <div className={styles.cardLeft}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/port-blairimg2ferry.jpg"
                            fill={true}
                            sizes="100%"
                            alt="Nautika"
                            style={{objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.cardRootTitle}><span>Neil Island To Port Blair</span></div>
                    <div className={styles.cardRootDesc}><span>14 Ferries Per Day</span></div>
                    <div className={styles.cardButtons}>
                        <button className={styles.viewSchBtn} onClick={() => {handleScheduleClick(4)}}>View Schedule</button>
                        <button className={styles.bookFerryBtn}>Book Ferry</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
