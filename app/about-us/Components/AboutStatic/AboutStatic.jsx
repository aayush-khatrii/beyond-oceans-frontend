import styles from './AboutStatic.module.css'

export default function AboutStatic() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.sectionTitle}>
                <span>We Are The Most Popular</span>
                <span>Andaman and Nicobar Travel Agency</span>
            </div>
            <div className={styles.cardLists}>
                <div className={styles.card}>
                    <span>120+</span>
                    <span>Travel Destinations</span>
                </div>
                <div className={styles.card}>
                    <span>60+</span>
                    <span>Tour Partners</span>
                </div>
                <div className={styles.card}>
                    <span>170+</span>
                    <span>Hotels & Accommodation</span>
                </div>
            </div>
        </div>
    </div>
  )
}
