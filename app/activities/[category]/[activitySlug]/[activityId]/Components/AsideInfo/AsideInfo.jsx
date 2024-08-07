import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './AsideInfo.module.css'

export default function AsideInfo() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.infoList}>
            <div className={styles.infoListIcon}><IconList Icon="InfoListIcon1"/></div>
            <div className={styles.infoListDesc}><p>Not sure? You can cancel this booking up to 24 hours in advance for a full refund.</p></div>
        </div>
        <div className={styles.infoList}>
            <div className={styles.infoListIcon}><IconList Icon="InfoListIcon2"/></div>
            <div className={styles.infoListDesc}><p>Recognized by Andaman tourism and thousands of worldwide travelers.</p></div>
        </div>
        <div className={styles.infoList}>
            <div className={styles.infoListIcon}><IconList Icon="InfoListIcon3"/></div>
            <div className={styles.infoListDesc}><p>We provide hassle-free 24/7 Friendly Customer Support.</p></div>
        </div>
    </div>
  )
}
