import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Diglipur Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Diglipur Island is a treasure trove of natural beauty and adventure in the Andaman and Nicobar archipelago. Before you set off to this serene destination, here are a few essential tips:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span>Diglipur experiences a tropical climate with temperatures ranging from 23°C to 31°C. The best time to visit is from November to May, when the weather is ideal for outdoor activities and beach excursions.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>Like other parts of the Andaman and Nicobar Islands, visitors may need permits to visit Diglipur. These can be obtained in Port Blair or online. Ensure you check the latest requirements before your trip.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>Internet and mobile connectivity can be limited on Diglipur Island. It's advisable to inform your family and friends about potential communication gaps in advance.</p>
                </div>
            </div>
        </div>
    )
}
