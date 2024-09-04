import Link from 'next/link'
import styles from './BookFerry.module.css'
import IconList from '../../../IconComponent/IconList'

export default function BookFerry({handleMenuToggle}) {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <span className={styles.contentTitle}>High Speed Andaman Ferry Tickets at Your Fingertips.</span>
            <span className={styles.contentDesc}>Compare & book all hi-speed ferries in Andaman hassle free in 3 easy steps with beyond oceans.</span>
            <Link className={styles.bookFerryBtn} onClick={handleMenuToggle} href="/book-ferry">Book Tickets</Link>
            <div className={styles.ferryBookingIcon}>
                <IconList Icon="MobBookFerryIcon"/>
            </div>
        </div>
    </div>
  )
}
