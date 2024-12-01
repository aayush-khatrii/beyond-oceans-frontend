import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Baratang Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Before embarking on your journey to Baratang Island, it’s important to be prepared for a unique and adventurous experience:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span>Baratang Island has a tropical climate, with temperatures ranging from 24°C to 32°C. The best time to visit is between November and May when the weather is pleasant and conducive to outdoor activities.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>Visitors require permits to visit Baratang Island as it lies in a restricted area. These permits can be obtained in Port Blair, and it’s advisable to check the latest requirements and regulations beforehand.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>Mobile and internet connectivity on Baratang Island can be limited. Inform your family and friends about potential communication gaps before your trip.</p>
                </div>
            </div>
        </div>
    )
}
