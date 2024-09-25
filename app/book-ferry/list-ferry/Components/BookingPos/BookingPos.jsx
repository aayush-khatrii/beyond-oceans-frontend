import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './BookingPos.module.css'

export default function BookingPos() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.positivePointList}>
            <div className={`${styles.positiveCard} ${styles.positiveCard1}`}>
                <div className={styles.cardIcon}><IconList Icon="NoCharges" /></div>
                <div className={styles.cardText}><span>No Hidden Charges</span></div>
            </div>
            <div className={styles.mobSep}></div>
            <div className={`${styles.positiveCard} ${styles.positiveCard2}`}>
                <div className={styles.cardIcon}><IconList Icon="MoneyHand" /></div>
                <div className={styles.cardText}><span>Lowest Price Guarantee</span></div>
            </div>
            <div className={styles.mobSep}></div>
            <div className={`${styles.positiveCard} ${styles.positiveCard3}`}>
                <div className={styles.cardIcon}><IconList Icon="ReliableSupport" /></div>
                <div className={styles.cardText}><span>24/7 Friendly Support</span></div>
            </div>
            <div className={styles.mobSep}></div>
            <div className={`${styles.positiveCard} ${styles.positiveCard4}`}>
                <div className={styles.cardIcon}><IconList Icon="MoneyShield" /></div>
                <div className={styles.cardText}><span>100% Secure Payment</span></div>
            </div>
        </div>
    </div>
  )
}
