import styles from './AboutDeatils.module.css'

export default function AboutDeatils() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.mainContent}>
            <div className={styles.leftSection}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutTitle}>
                        <span>And We Fell in Love with the Islands... <br/>Now Let Us Show You Why</span>
                    </div>
                    <div className={styles.aboutDesc}>
                        <p>We aren't just another travel agency. We're Andaman and Nicobar Islands natives, and these islands are more than just a destination on a map for us - they're etched into our souls. The sparkling turquoise waters, the serenity of hidden beaches, the thrill of diving into coral reefs teeming with life - it's a magic we want to share with every single one of you.</p>
                        <p>That's how our journey began, a journey to bring the soul of the Andamans to you, wherever you are in India. We started small, helping explorers like you navigate hidden coves, pristine beaches, and vibrant coral reefs. But the passion grew, and so did our reach. Today, we're a pan-India platform, letting you experience the beauty of the Andamans from anywhere in the country. We've helped countless travelers experience the best that this incredible country has to offer, and our hearts swell with pride with every satisfied customer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
