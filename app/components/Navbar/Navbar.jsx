import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.headWrapper}>
            <div className={styles.brand}>
            <Image
              src="/assets/logo/beyond-oceans-white.webp"
              fill={true}
              objectFit='cover'
              alt="Picture of the author"
            />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Packages</li>
                    <li>Book Ferry</li>
                    <li>Activities</li>
                    <li>Destination</li>
                    <li>Services</li>
                    <li>More</li>
                </ul>
            </div>
            <div className={styles.cta}>
                <div className={styles.currency}>INR</div>
                <div className={styles.account}>Login or Signup</div>
            </div>
        </div>
    </div>
  )
}
