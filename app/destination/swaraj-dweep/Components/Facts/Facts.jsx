import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Renaming:</span>The island was renamed Swaraj Dweep in 2018 to honor Subhas Chandra Bose, an Indian nationalist leader.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Diverse Ecosystem:</span>The island boasts lush forests, exotic flora and fauna, and stunning coral reefs, making it a haven for nature enthusiasts and marine life explorers.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Tourism Hub:</span>Havelock is one of the most visited islands in the Andamans, attracting tourists with its clear blue waters, white sandy beaches, and thrilling adventure activities.</p>
                </div>
            </div>
        </div>
    )
}
