import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './FerryScheduleList.module.css'

export default function FerryScheduleList({handlePopupClose, data}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.topTitleSection}>
                    <span>{data.rootTitle} Ferry Booking Schedule</span>
                    <div style={{cursor:"pointer"}} onClick={() => {handlePopupClose()}}><IconList Icon="Close" /></div>
                </div>
                <div className={styles.middleColIdentifier}>
                    <div className={styles.ferryOperatorID}><span>Ferry Operator</span></div>
                    <div className={styles.ferryDPTimeID}><span>Departure Timings</span></div>
                    <div className={styles.ferryArrivalTimeID}><span>Arrival Timings</span></div>
                    <div className={styles.ferryBookWindowID}><span>Open Booking Window</span></div>
                </div>
                <div className={styles.scheduleList}>
                    {
                        data.scheduleList.map((item, index) => (
                            <div key={index} className={styles.schedulelistItem}>
                                <div className={styles.ferryOperator}>{item.ferryOpp}</div>
                                <div className={styles.ferryDPTime}>{item.DPTime}</div>
                                <div className={styles.ferryArrivalTime}>{item.ArrivalTime}</div>
                                <div className={styles.ferryBookWindow}>{item.BookWindow}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
