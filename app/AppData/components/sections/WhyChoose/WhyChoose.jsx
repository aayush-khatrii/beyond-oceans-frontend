import styles from './WhyChoose.module.css'
import IconList from '../../IconComponent/IconList'
import Link from 'next/link'

export default function WhyChoose() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>Why Choose Beyond Oceans</h2>
                        <p>Beyond Oceans encapsulates the essence of exploration and adventure in the Andaman and Nicobar Islands.</p>
                    </div>
                    <div className={styles.navButton}>
                        <Link href="/about" className={styles.accentBtn}>Know More</Link>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.wcuCard}>
                        <IconList Icon="WCU1" />
                        <span>Exploring Made Easy</span>
                        <p>Seamless exploration with our tailored tours & hassle-free booking services.</p>
                    </div>
                    <div className={styles.wcuCard}>
                        <IconList Icon="WCU2" />
                        <span>Trustworthy Partner</span>
                        <p>Rely on us as your trusted travel, ensuring peace of mind journey.</p>
                    </div>
                    <div className={styles.wcuCard}>
                        <IconList Icon="WCU3" />
                        <span>Native & Experienced</span>
                        <p>Benefit from our native insights and seasoned expertise for an authentic.</p>
                    </div>
                    <div className={styles.wcuCard}>
                        <IconList Icon="WCU4" />
                        <span>Lowest Price</span>
                        <p>Unlock unbeatable deals and enjoy <br/>your adventures at the best prices.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
