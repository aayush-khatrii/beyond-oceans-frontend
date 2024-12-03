import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Barren Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Active Volcano:</span>Barren Island's volcano last erupted in 2017, with its activity recorded intermittently over centuries.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Seclusion:</span>The island is uninhabited, except for transient wildlife such as goats, birds, and bats.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Marine Wonders:</span>Surrounding waters are popular for scuba diving, offering visibility of up to 20 meters and vibrant coral reefs.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Volcanic History:</span>It forms part of the volcanic belt stretching from Sumatra to Myanmar.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.fifthPara}`}>
                    <p><span>Restricted Zone:</span>Landing on the island requires special permissions, but it is generally not allowed for tourists.</p>
                </div>
            </div>
        </div>
    )
}
