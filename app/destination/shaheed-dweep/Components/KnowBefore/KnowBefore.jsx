import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Shaheed Dweep</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Neil Island, also known as Shaheed Dweep, is a tranquil retreat in the Andaman and Nicobar archipelago. Here are some essential tips before you embark on your journey:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span>The island experiences a tropical climate with temperatures ranging from 23°C to 30°C. The best time to visit is from October to May, when the weather is ideal for beach activities and exploration.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>As with other islands in the Andaman and Nicobar group, visitors, especially foreigners, need permits to enter. These can be obtained at Port Blair or online. Ensure you check the latest requirements before your trip.
                    </p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>Neil Island is relatively small and remote, so internet and mobile connectivity might be limited. It’s advisable to inform family and friends beforehand about potential communication gaps.</p>
                </div>
            </div>
        </div>
    )
}
