import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Little Andaman</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Little Andaman Island, the southernmost island in the Andaman archipelago, is a secluded paradise offering pristine beaches, waterfalls, and lush rainforests. Before you embark on your journey to this tranquil destination, here are some essential tips:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span>Little Andaman Island experiences a tropical climate with temperatures ranging from 23°C to 30°C. The best time to visit is between November and April when the weather is pleasant and ideal for outdoor activities.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>Visitors may require permits to visit Little Andaman Island. These can be obtained in Port Blair or online. It’s important to check the latest regulations and requirements before your trip.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>Internet and mobile connectivity can be limited on Little Andaman Island. Inform your family and friends about potential communication gaps before your journey.</p>
                </div>
            </div>
        </div>
    )
}
