import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Baratang Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Unique Ecosystem:</span>Baratang is known for its diverse ecosystem, including dense mangrove creeks, tropical forests, limestone caves, and mud volcanoes.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Tribal Inhabitants:</span>The island is home to the indigenous Jarwa tribe, and interactions with them are regulated to protect their privacy and way of life.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Geological Marvels:</span>Baratang is famous for its natural limestone caves and the only known mud volcanoes in India, offering a unique glimpse into geological phenomena.</p>
                </div>
            </div>
        </div>
    )
}
