import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>History:</span>Port Blair's colonial past is evident in its architecture and historical sites like the Cellular Jail, a British-era prison.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Culture:</span>A melting pot of Indian, Bengali, and indigenous tribal cultures, Port Blair offers a unique blend of traditions.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Geography:</span>Situated on South Andaman Island, Port Blair is surrounded by serene beaches and tropical rainforests.</p>
                </div>
            </div>
        </div>
    )
}
