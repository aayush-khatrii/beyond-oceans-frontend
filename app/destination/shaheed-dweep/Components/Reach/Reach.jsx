import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Shaheed Dweep</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Ferry:</span>Regular government and private ferries operate between Port Blair, Havelock, and Neil Island. The ferry ride from Port Blair to Neil Island takes approximately 1.5 to 2 hours.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Private Boats:</span>Private boat services are also available, offering a faster and more personalized travel experience.</p>
                </div>
            </div>
        </div>
    )
}
