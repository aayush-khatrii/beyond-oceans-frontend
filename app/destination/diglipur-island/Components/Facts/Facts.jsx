import styles from './Facts.module.css'

export default function Facts() {
    return (
        <div className={styles.mainWrapper} id='facts'>
            <div className={styles.titleCont}>
                <h3>Facts About Diglipur Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>Largest Island:</span>Diglipur is the largest island in the Andaman archipelago, spanning an area of 884 square kilometers.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>Diverse Ecosystem:</span>The island is home to rich biodiversity, including rare and exotic flora and fauna, making it a haven for nature enthusiasts.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Geological Marvels:</span>Diglipur houses the only river on the Andaman Islands, the Kalpong River, and the highest peak, Saddle Peak, standing at 732 meters.</p>
                </div>
            </div>
        </div>
    )
}
