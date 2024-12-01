import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Rangat Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Biodiversity:</span>Rangat is home to diverse flora and fauna, including lush mangroves, dense forests, and vibrant marine life.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Eco-tourism Initiatives:</span>The island has several eco-friendly initiatives aimed at preserving its natural beauty, making it a great destination for environmentally conscious travelers.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Cultural Melting Pot:</span>Rangat hosts a mix of cultures, with influences from Bengali, Tamil, and local indigenous communities.</p>
                </div>
            </div>
        </div>
    )
}
