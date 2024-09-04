import Link from 'next/link'
import styles from './ServicesMenu.module.css'
import IconList from '../../../IconComponent/IconList'

export default function ServicesMenu({handleMenuToggle}) {
  return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.categoryCard}>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Wedding"/>
                            <span>Wedding</span>
                        </div>
                    </Link>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Photoshoots"/>
                            <span>Photography</span>
                        </div>
                    </Link>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Cab"/>
                            <span>Cab Booking</span>
                        </div>
                    </Link>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Guide"/>
                            <span>Personal Guide</span>
                        </div>
                    </Link>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Bike"/>
                            <span>Bike Rental</span>
                        </div>
                    </Link>
                    <Link href="/packages" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="TourPackages"/>
                            <span>Tour Packages</span>
                        </div>
                    </Link>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Boat"/>
                            <span>Ferry Booking</span>
                        </div>
                    </Link>
                    <Link href="/activities" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Trekking"/>
                            <span>Activities</span>
                        </div>
                    </Link>
                    <Link href="/services" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Offbeat"/>
                            <span>All Services</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}
