import styles from './VisitTime.module.css'

export default function VisitTime() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.sectionTitle}>
            <span>Best Time to Visit Andaman and Nicobar Island</span>
        </div>
        <div className={styles.mainContent}>
            <div className={styles.infoCard}>
                <div className={styles.cardTitle}>
                    <span>Oct - Mar</span>
                    <div className={styles.cardTag1}>Peak Season</div>
                </div>
                <div className={styles.infoLines}>
                    <div className={styles.infoLine1}>
                        <span>What to Expect:</span>
                        <span>There are clear skies, nice weather, and a light sea wind.</span>
                    </div>
                    <div className={styles.infoLine1}>
                        <span>Things You'll Love:</span>
                        <span>The beaches and various water activities.</span>
                    </div>
                </div>
            </div>
            <div className={styles.infoCard}>
                <div className={styles.cardTitle}>
                    <span>Apr - Jan</span>
                    <div className={styles.cardTag2}>Mild Season</div>
                </div>
                <div className={styles.infoLines}>
                    <div className={styles.infoLine1}>
                        <span>What to Expect:</span>
                        <span>Days are warm and pleasant, evenings are windy.</span>
                    </div>
                    <div className={styles.infoLine1}>
                        <span>Things You'll Love:</span>
                        <span>Having an adventure with water sports.</span>
                    </div>
                </div>
            </div>
            <div className={styles.infoCard}>
                <div className={styles.cardTitle}>
                    <span>Jul - Sep</span>
                    <div className={styles.cardTag3}>Off Season</div>
                </div>
                <div className={styles.infoLines}>
                    <div className={styles.infoLine1}>
                        <span>What to Expect:</span>
                        <span>Tropical cyclonic weather with heavy monsoon showers.</span>
                    </div>
                    <div className={styles.infoLine1}>
                        <span>Things You'll Love:</span>
                        <span>Heavy off season discount and less crowded areas.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
