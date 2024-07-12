import styles from './FerryOperator.module.css'
import Image from 'next/image'

export default function FerryOperator() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.secTitle}>
            <div className={styles.mainTitle}><h2>Best In Class Ferry Operator</h2></div>
            <div className={styles.secondTitle}><h3>Your one-stop booking service for all hi-speed ferry in Andaman and Nicobar</h3></div>
        </div>
        <div className={styles.ferryOprCardList}>
            <div className={styles.ferryOprCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/Ferry-img-1.png"
                        fill={true}
                        sizes="100%"
                        alt="Nautika"
                        style={{zIndex: "-1",objectFit:"cover"}}
                    />
                </div>
                <div className={styles.cardContent}>
                    <span>Nautika & Lite</span>
                    <span>Luxury Class &nbsp;|&nbsp; Royal Class</span>
                </div>
            </div>
            <div className={styles.ferryOprCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/Ferry-img-2.png"
                        fill={true}
                        sizes="100%"
                        alt="Nautika"
                        style={{zIndex: "-1",objectFit:"cover"}}
                    />
                </div>
                <div className={`${styles.cardContent} ${styles.cardContentMak}`}>
                    <span>Makruzz</span>
                    <span>Premium Class &nbsp;|&nbsp; Deluxe Class &nbsp;|&nbsp; Royal Class</span>
                </div>
            </div>
            <div className={styles.ferryOprCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/Ferry-img-3.png"
                        fill={true}
                        sizes="100%"
                        alt="Nautika"
                        style={{zIndex: "-1",objectFit:"cover"}}
                    />
                </div>
                <div className={styles.cardContent}>
                    <span>ITT Majestic</span>
                    <span>Silver Class &nbsp;|&nbsp; Majesty Class</span>
                </div>
            </div>
            <div className={styles.ferryOprCard}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/Ferry-img-4.png"
                        fill={true}
                        sizes="100%"
                        alt="Nautika"
                        style={{zIndex: "-1",objectFit:"cover"}}
                    />
                </div>
                <div className={styles.cardContent}>
                    <span>Green Ocean 1</span>
                    <span>Premium Class &nbsp;|&nbsp; Royal Class</span>
                </div>
            </div>
        </div>
    </div>
  )
}
