import styles from './KnowBefore.module.css'

export default function KnowBefore() {
    return (
        <div className={styles.mainWrapper} id='know-before-visiting'>
            <div className={styles.titleCont}>
                <h3>What To Know Before Visiting Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.firstPara}>
                    <p>Before you set off to the serene and picturesque Havelock Island, here are a few essential tips to ensure a delightful experience:</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Climate:</span>Havelock Island experiences a tropical climate with temperatures ranging from 24°C to 32°C. The best time to visit is between October and May when the weather is pleasant, and the sea is calm, perfect for beach activities and water sports.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Permits:</span>Similar to other parts of the Andaman and Nicobar Islands, foreign tourists require permits to visit Havelock Island. These can be obtained upon arrival at the Port Blair airport or online.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Connectivity:</span>While Havelock Island is more developed compared to other islands, internet connectivity can be limited. It’s advisable to inform loved ones in advance about potential communication gaps.</p>
                </div>
            </div>
        </div>
    )
}
