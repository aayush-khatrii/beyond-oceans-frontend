import styles from './PackageDetSkeleton.module.css'

export default function PackageDetSkeleton() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.packageTitle}></div>
        <div className={styles.deatilsLists}>
            <div className={styles.packageOption}>
                <span className={styles.lable}>Package Option:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.packageDuration}>
                <span className={styles.lable}>Duration:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.tripDate}>
                <span className={styles.lable}>Trip Date:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.traveler}>
                <span className={styles.lable}>Travelers:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.departurePlace}>
                <span className={styles.lable}>Departure Place:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.paidAmt}>
                <span className={styles.lable}>Paid Amount:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.totalAmt}>
                <span className={styles.lable}>Total Amount:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.paymentGW}>
                <span className={styles.lable}>Payment Gateway:</span>
                <span className={styles.value}></span>
            </div>
        </div>
    </div>
  )
}
