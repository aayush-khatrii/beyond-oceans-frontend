import Image from 'next/image'
import styles from './AboutShape.module.css'

export default function AboutShape() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.shapeDividerTop}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.topShapePath}></path>
            </svg>
        </div>
        <div className={styles.imgWrapper}>
            <Image
                src="/assets/about/about_shapecut.webp"
                fill={true}
                sizes="100%"
                priority={true}
                alt="beyond oceans | About Us"
                style={{objectFit:"cover"}}
            />
        </div>
        <div className={styles.imageOverlay}></div>
        <div className={styles.sectionTitle}>
            <span>Our vision is to help</span>
            <span>every traveller explore Andaman</span>
            <span>and Nicobar effortlessly</span>
        </div>
        <div className={styles.shapeDividerBottom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.topShapePath}></path>
            </svg>
        </div>
    </div>
  )
}
