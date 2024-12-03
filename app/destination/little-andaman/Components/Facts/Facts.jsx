import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Little Andaman</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Size and Location:</span>Despite its name, Little Andaman is the fourth largest island in the Andaman and Nicobar group, located about 120 km south of Port Blair.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Cultural Diversity:</span>The island is home to the indigenous Onge tribe, one of the oldest tribes in the world, offering a glimpse into unique cultural heritage.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Natural Wonders::</span>The island boasts pristine beaches, waterfalls, and rich biodiversity, making it a haven for nature enthusiasts.</p>
                </div>
            </div>
        </div>
    )
}
