import styles from './TestimonialCard.module.css'
import Image from "next/image";
import IconList from '../../IconComponent/IconList';
import StarIcon from '../../IconComponent/StarIcon';

export default function TestimonialCard({name, img, rating, desc}) {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.nameCont}>
            <div className={styles.userImg}>
                <div className={styles.imgWrapper}>
                    <Image
                        src={`/assets/${img}`}
                        fill={true}
                        sizes="100%"
                        alt={`User: ${name}`}
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
            <div className={styles.userName}>
                <span>{name}</span>
                <div className={styles.starWrapper}>
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} fillColor={i < rating ? "#F3BE34" : "#bababa"} />
                    ))}
                </div>
            </div>
            <div className={styles.quoteIcon}>
                <IconList Icon="Quote" />
            </div>
        </div>
        <div className={styles.descCont}>
            <p>"{desc}"</p>
        </div>
        <div className={styles.googleCont}>
            <div className={styles.GoogleIcon}>
                <Image
                    src='/assets/GoogleLogo.png'
                    fill={true}
                    sizes="100%"
                    alt='Google Logo'
                    style={{objectFit:"cover"}}
                />
            </div>
            <div className={styles.Trust}>
                <span>Posted On</span>
                <span>Google Reviews</span>
            </div>
        </div>
    </div>
  )
}
