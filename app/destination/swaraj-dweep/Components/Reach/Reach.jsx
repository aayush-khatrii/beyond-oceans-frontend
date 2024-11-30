import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Ferry:</span>Regular government and private ferries operate between Port Blair and Havelock Island. The journey takes about 2 to 3 hours, offering scenic views of the Andaman Sea.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Helicopter:</span>For a quicker and more scenic route, helicopter services are available from Port Blair to Havelock, providing stunning aerial views of the islands.</p>
                </div>
            </div>
        </div>
    )
}
