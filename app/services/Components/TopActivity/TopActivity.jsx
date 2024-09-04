import Image from 'next/image'
import styles from './TopActivity.module.css'

export default function TopActivity() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.mainTitle}>
            <span>Top Activities In Andaman</span>
        </div>
        <div className={styles.activityLists}>
            <div className={styles.activityCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/services/activity/seawalking.webp"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        style={{objectFit:"cover"}}
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                    <span>Sea Walking</span>
                    <span>Starting At ₹4,500/per person</span>
                </div>
            </div>
            <div className={styles.activityCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/services/activity/scuba.webp"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        style={{objectFit:"cover"}}
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                    <span>Scuba Diving</span>
                    <span>Starting At ₹4,000/per person</span>
                </div>
            </div>
            <div className={styles.activityCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/services/activity/snorkelling.webp"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        style={{objectFit:"cover"}}
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                    <span>Snorkelling</span>
                    <span>Starting At ₹4,000/per person</span>
                </div>
            </div>
            <div className={styles.activityCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/services/activity/parasailing.webp"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        style={{objectFit:"cover"}}
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                    <span>Parasailing</span>
                    <span>Starting At ₹4,500/per person</span>
                </div>
            </div>
        </div>
    </div>
  )
}
