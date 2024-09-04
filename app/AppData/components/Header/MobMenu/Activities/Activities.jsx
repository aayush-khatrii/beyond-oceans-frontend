import Link from 'next/link'
import IconList from '../../../IconComponent/IconList'
import ListItem from '../../../ListItem/ListItem'
import styles from './Activities.module.css'

export default function Activities({handleMenuToggle}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.categoryCard}>
                    <Link href="/activities/water-sports" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="WaterSports"/>
                            <span>Water Sports</span>
                        </div>
                    </Link>
                    <div className={styles.categoryItems}>
                        <ul>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Kayaking</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Scuba Diving</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Glass Bottom Boat</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Sea Walk</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Snorkeling</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Speed Boat Rides</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Game Fishing</ListItem></Link>
                            <Link href="/activities/water-sports" onClick={handleMenuToggle}><ListItem>Semi Submarine</ListItem></Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.categoryCard}>
                    <Link href="/activities/trekking" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Trekking"/>
                            <span>Trekking</span>
                        </div>
                    </Link>
                    <Link href="/activities/parasailing" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Parasailing"/>
                            <span>Parasailing</span>
                        </div>
                    </Link>
                    <Link href="/activities/island-hopping" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Island Hopping</span>
                        </div>
                    </Link>
                    <Link href="/activities" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Boat"/>
                            <span>Boat Tickets</span>
                        </div>
                    </Link>
                    <Link href="/activities" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Photoshoots"/>
                            <span>Photoshoots</span>
                        </div>
                    </Link>
                    <Link href="/activities" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Coupons"/>
                            <span>Coupons</span>
                        </div>
                    </Link>
                    <Link href="/activities" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Recommended"/>
                            <span>All Activities</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
