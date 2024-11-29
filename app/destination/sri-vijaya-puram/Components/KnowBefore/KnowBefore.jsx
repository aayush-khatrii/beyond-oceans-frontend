import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Before embarking on your journey to the captivating Port Blair Islands, it's essential to acquaint yourself with a few key aspects to ensure a smooth and fulfilling experience.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Weather:</span>Port Blair enjoys a tropical climate, with temperatures typically ranging from 23°C to 31°C. The best time to visit is from October to May when the weather remains pleasant and conducive to outdoor activities.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>Travelers to Andaman and Nicobar Islands require permits, which can be obtained upon arrival at the Port Blair airport or online beforehand. It's advisable to check the latest permit requirements and regulations before your trip.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Currency and Communication:</span>The currency used is the Indian Rupee (INR), and most establishments accept major credit cards. While internet connectivity may be limited in some remote areas, you can easily find communication facilities in Port Blair.</p>
                </div>
            </div>
        </div>
    )
}
