import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Diglipur Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Air:</span>Helicopter services are available from Port Blair to Diglipur, providing a quick and scenic route to the island.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Road:</span>The journey by road involves a 12-hour drive through the Andaman Trunk Road, which passes through dense forests and includes vehicle ferry crossings.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>By Sea:</span>Government-operated ferries and private boats connect Port Blair to Diglipur, offering a picturesque journey through the waters of the Andaman Sea.</p>
                </div>
            </div>
        </div>
    )
}
