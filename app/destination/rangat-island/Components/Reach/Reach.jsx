import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Rangat Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Road:</span>The journey from Port Blair to Rangat by road takes approximately 7 hours. The route includes a scenic drive through the Andaman Trunk Road and multiple ferry crossings.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Sea:</span>Government-operated ferries and private boats connect Port Blair to Rangat, offering a picturesque journey through the Andaman Sea.</p>
                </div>
            </div>
        </div>
    )
}
