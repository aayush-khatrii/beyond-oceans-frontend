import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Long Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Long Island, nestled in the heart of the Andaman archipelago, is an untouched gem known for its pristine beaches and tranquil environment. Before you set off to explore this serene destination, here are some essential tips:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span> Long Island enjoys a tropical climate with temperatures ranging from 23°C to 30°C. The best time to visit is between November and April when the weather is pleasant for outdoor activities and beach excursions.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>Visitors may require permits to visit Long Island. These can be obtained at Port Blair or online. Ensure you check the latest regulations and requirements before your trip.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>Internet and mobile connectivity can be limited on Long Island. Inform your family and friends about potential communication gaps before your journey.</p>
                </div>
            </div>
        </div>
    )
}
