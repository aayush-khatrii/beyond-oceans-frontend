import Image from "next/image";
import styles from './HomeCard.module.css'

export default function HomeCard({image, title, desc}) {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.cardImage}>
            <Image
                src={`/assets/${image}`}
                fill={true}
                sizes="100%"
                alt={title}
                style={{zIndex: "-1",objectFit:"cover"}}
            />
        </div>
        <div className={styles.cardContent}>
            <span>{title}</span>
            <span>{desc}</span>
        </div>
    </div>
  )
}
