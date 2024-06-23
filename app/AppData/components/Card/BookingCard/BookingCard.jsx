import styles from './BookingCard.module.css'
import IconList from '../../IconComponent/IconList'
import Image from 'next/image'

export default function BookingCard({bookType, duration, tripDate, travellers, totalAmt, bookStatus, bookId, img}) {
  return (
    <div className={styles.bookingCard}>
        <div className={styles.top}>
            <div className={styles.left}>
                <span className={styles.cardTitle}>Andaman and Nicobar Family Tour Package</span>
                <div className={styles.bookingDesc}>
                    <div className={`${styles.durations} ${styles.bookContList}`}>
                        <IconList Icon="Duration"/>
                        <span className={styles.descTitle}>Duration:</span>
                        <span className={styles.descValue}>4 Days and 3 Nights</span>
                    </div>
                    <div className={`${styles.date} ${styles.bookContList}`}>
                        <IconList Icon="DateCal"/>
                        <span className={styles.descTitle}>Trip Date:</span>
                        <span className={styles.descValue}>28 Mar,2024 to 31 Mar,2024</span>
                    </div>
                    <div className={`${styles.traveller} ${styles.bookContList}`}>
                        <IconList Icon="FamilyPackage"/>
                        <span className={styles.descTitle}>Travellers:</span>
                        <span className={styles.descValue}>2 Adult and 1 Child</span>
                    </div>
                </div>
                <div className={styles.cnfAmt}>
                    <div className={styles.amt}>
                        <span className={styles.amtTitle}>Total Amount: </span>
                        <span className={styles.amtValue}>₹6,000</span>
                    </div>
                    <div className={styles.cnfSts}>Booking Confirmed</div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/assets/product_img.png"
                        fill={true}
                        sizes="100%"
                        alt="Package"
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
        </div>
        <div className={styles.foot}>
            <div className={styles.footLeft}>
                <div className={styles.bookingDetails}>
                    <span>Booking ID: </span>
                    <span>&nbsp; BOTP3147</span>
                </div>
            </div>
            <div className={styles.footRight}>
                <button className={styles.downBtn}>Download Invoice</button>
                <button className={styles.detailsBtn}>View Details</button>
            </div>
        </div>
    </div>
  )
}
