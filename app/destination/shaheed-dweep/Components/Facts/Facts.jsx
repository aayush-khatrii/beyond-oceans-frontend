import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Shaheed Dweep</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Renaming:</span>The island was renamed Shaheed Dweep in 2018 to honor the sacrifices of Indian freedom fighters.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Agricultural Hub:</span>Unlike other islands, Neil Island is known for its agricultural produce, earning it the nickname 'Vegetable Bowl of the Andamans.'</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Small yet Scenic:</span>Covering an area of just about 13.7 square kilometers, Neil Island is perfect for leisurely exploration, offering picturesque landscapes and crystal-clear waters.</p>
                </div>
            </div>
        </div>
    )
}
