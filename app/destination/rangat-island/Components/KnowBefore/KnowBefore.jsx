import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Rangat Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Rangat Island, situated in the Middle Andaman region, is a serene escape known for its pristine beaches and lush mangroves. Here are some key points to keep in mind before you visit:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span>Rangat enjoys a tropical climate with temperatures ranging from 23°C to 30°C. The ideal time to visit is between November and April when the weather is pleasant for sightseeing and beach activities.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>As with other Andaman islands, visitors may require permits to visit Rangat. These can be obtained at Port Blair or online. It’s important to check the latest regulations and requirements before your trip.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>Internet and mobile connectivity might be limited in Rangat. Inform your family and friends about potential communication gaps before your journey.</p>
                </div>
            </div>
        </div>
    )
}
