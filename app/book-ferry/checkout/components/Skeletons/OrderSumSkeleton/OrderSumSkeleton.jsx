import styles from './OrderSumSkeleton.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'

export default function OrderSumSkeleton() {

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Your Order Summary</div>
            <div className={styles.mainContetn}>
                <div className={styles.packageTitle}></div>
                <div className={styles.summaryList}>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="DateTime"/></div>
                        <div className={styles.itemLable}>Duration:</div>
                        <div className={styles.itemData}></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="DateCal"/></div>
                        <div className={styles.itemLable}>Trip Date:</div>
                        <div className={styles.itemData}></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="ActivitySumLocation" /></div>
                        <div className={styles.itemLable}>Location:</div>
                        <div className={styles.itemData}></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="StayRating"/></div>
                        <div className={styles.itemLable}>Addon:</div>
                        <div className={styles.itemData}></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="FamilyPackage"/></div>
                        <div className={styles.itemLable}>Travellers:</div>
                        <div className={styles.itemData}></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
