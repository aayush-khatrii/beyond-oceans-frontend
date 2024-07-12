import Link from 'next/link'
import IconList from '../AppData/components/IconComponent/IconList'
import styles from './DevMode.module.css'

export default function DevMode() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <IconList Icon="BOLogoColor" />
            <span>Comming Soon with the Package Booking, Ferry Booking, Activity Booking and much more...!</span>
            <Link href="https://wa.me/+917908671247" className={styles.wpBTN}>
                <div className={styles.IconWP}><IconList Icon="WPV2"/></div>
                <div className={styles.btnText}><span>WhatsApp Chat</span></div>
            </Link>
        </div>
    </div>
  )
}
