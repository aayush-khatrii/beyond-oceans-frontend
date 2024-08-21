import styles from './ActivityDetSkeleton.module.css'

export default function ActivityDetSkeleton() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.packageTitle}></div>
        <div className={styles.deatilsLists}>
            <div className={styles.packageOption}>
                <span className={styles.lable}>Activity Option:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.packageDuration}>
                <span className={styles.lable}>Activity Duration:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.tripDate}>
                <span className={styles.lable}>Activity Date:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.traveler}>
                <span className={styles.lable}>Travelers:</span>
                <span className={styles.value}></span>
            </div>
            <div className={styles.departurePlace}>
                <span className={styles.lable}>Activity Place:</span>
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
