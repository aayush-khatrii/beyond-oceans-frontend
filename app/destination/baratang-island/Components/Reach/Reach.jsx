import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Baratang Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Road:</span>The journey from Port Blair to Baratang is a thrilling experience that involves a 100-kilometer drive through the Andaman Trunk Road, passing through dense forests and crossing creeks via vehicle ferries.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Ferry:</span>Government-operated ferries connect Port Blair to Baratang, offering a scenic journey through the waters of the Andaman Sea.</p>
                </div>
            </div>
        </div>
    )
}
