import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './InfoSec1.module.css'

export default function InfoSec1() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.secTitle}>
                <div className={styles.mainTitle}><h2>Why Book Ferry Tickets With Us</h2></div>
                <div className={styles.secondTitle}><h3>Your trusted primary ferry search and reservation platform</h3></div>
            </div>
            <div className={styles.infoCardList}>
                <div className={`${styles.infoCard} ${styles.infoCardLFN}`}>
                    <div className={styles.infoCardIcon}><IconList Icon="LargeFerryNetwork"/></div>
                    <div className={styles.infoCardTitle}><span>Large Ferry Network</span></div>
                    <div className={styles.infoCardDesc}><p>Access to a wide range of ferry services connecting Andaman and Nicobar islands. </p></div>
                </div>
                <div className={`${styles.infoCard} ${styles.infoCardEBP}`}>
                    <div className={styles.infoCardIcon}><IconList Icon="EasyBookingProcess"/></div>
                    <div className={styles.infoCardTitle}><span>Easy Booking Process</span></div>
                    <div className={styles.infoCardDesc}><p>Travelers can easily search for available ferry routes, check schedules, and compare prices.</p></div>
                </div>
                <div className={`${styles.infoCard} ${styles.infoCardPrice}`}>
                    <div className={styles.infoCardIcon}><IconList Icon="TransparentPricing"/></div>
                    <div className={styles.infoCardTitle}><span>Transparent Pricing</span></div>
                    <div className={styles.infoCardDesc}><p>We believe in transparency, offering clear and competitive pricing without any hidden fees.</p></div>
                </div>
                <div className={`${styles.infoCard} ${styles.infoCardSupport}`}>
                    <div className={styles.infoCardIcon}><IconList Icon="ReliableSupport"/></div>
                    <div className={styles.infoCardTitle}><span>24/7 Reliable Support</span></div>
                    <div className={styles.infoCardDesc}><p>Spport team is available round-the-clock to assist with any inquiries or concerns.</p></div>
                </div>
            </div>
        </div>
    )
}
