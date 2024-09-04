import styles from './TripCalculator.module.css'
import Link from 'next/link'
import IconList from '../../../IconComponent/IconList'

export default function TripCalculator({handleMenuToggle}) {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <span className={styles.contentTitle}>The Only Tool You Ever Need To Plan Andaman Trip</span>
            <span className={styles.contentDesc}>Customize your trip according to your destination, activities, accommodation, transportation, and get an instant budget estimate!</span>
            <Link className={styles.bookFerryBtn} onClick={handleMenuToggle} href="/plan-trip">Plan Your Trip</Link>
            <div className={styles.ferryBookingIcon}>
                <IconList Icon="PlanTripMobMenu"/>
            </div>
        </div>
    </div>
  )
}
