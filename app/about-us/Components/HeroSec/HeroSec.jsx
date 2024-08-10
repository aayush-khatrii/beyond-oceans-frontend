import Image from 'next/image'
import styles from './HeroSec.module.css'
import Link from 'next/link'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function HeroSec() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.imgWrapper}>
            <Image
                src="/assets/about-hero-section.webp"
                fill={true}
                sizes="100%"
                priority={true}
                alt="beyond oceans | About Us"
                style={{zIndex: "-1",objectFit:"cover"}}
            />
        </div>
        <div className={styles.imageOverlay}></div>
        <div className={styles.heroContent}>
            <div className={styles.heroTitle}>
                <span>From Island Sands <br/>
                To Pan-Indian Dreams</span>
            </div>
            <div className={styles.breadCrumbs}>
                <Link href="/">Home</Link>
                <IconList Icon="BreadIcon" />
                <Link href="/about-us">Our Story</Link>
            </div>
        </div>
    </div>
  )
}
