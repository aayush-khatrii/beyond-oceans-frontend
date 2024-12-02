import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Long Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Untouched Beauty:</span>Long Island is relatively undeveloped compared to other Andaman islands, preserving its natural charm and providing a peaceful retreat for travelers.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Diverse Ecosystem:</span>The island is home to dense forests, mangroves, and vibrant marine life, making it a haven for nature lovers and wildlife enthusiasts.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Sustainable Living:</span>Long Island is known for its eco-friendly practices, including solar power usage and minimal vehicular traffic, promoting sustainable tourism.</p>
                </div>
            </div>
        </div>
    )
}
