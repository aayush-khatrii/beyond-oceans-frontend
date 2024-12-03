import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Barren Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Boat:</span>Chartered boats or government-authorized ferries provide a day-trip experience.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Air:</span>Fly to Port Blair, the capital of Andaman, and book a tour from there. Ensure you book tours with operators adhering to government regulations for this sensitive area.</p>
                </div>
            </div>
        </div>
    )
}
