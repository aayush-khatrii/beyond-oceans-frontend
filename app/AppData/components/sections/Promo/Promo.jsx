"use client";
import styles from './Promo.module.css'

export default function Promo() {

   
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtnMob}>
                    <div className={styles.sectionTitle}>
                        <h2>It's Time for Andaman Vacation</h2>
                        <p>Whatever you're imagining, you can make it real here. Explore the wide-open beauty of Andaman & Nicobar.</p>
                    </div>
                </div>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>It's Time for Andaman Vacation</h2>
                        <p>Whatever you're imagining, you can make it real here. Explore the wide-open beauty of Andaman & Nicobar.</p>
                    </div>
                </div>
                <div className={styles.promoVideo}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1aWLnUigQdU?si=dZE5T3f23UBvoLy0&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {/* <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/1aWLnUigQdU?si=dZE5T3f23UBvoLy0&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </div>
            </div>
        </div>
    </>
  )
}
