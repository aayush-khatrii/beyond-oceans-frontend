import Link from 'next/link'
import IconList from '../../../IconComponent/IconList'
import ListItem from '../../../ListItem/ListItem'
import styles from './TourPackages.module.css'

export default function TourPackages({handleMenuToggle}) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.categoryCard}>
                    <Link href="/packages/honeymoon" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Honeymoon"/>
                            <span>Honeymoon</span>
                        </div>
                    </Link>
                    <div className={styles.categoryItems}>
                        <ul>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>2 Night 3 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>3 Night 4 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>4 Night 5 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>5 Night 6 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>6 Night 7 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>7 Night 8 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>8 Night 9 Days</ListItem></Link>
                            <Link href="/packages/honeymoon" onClick={handleMenuToggle}><ListItem>9 Night 10 Days</ListItem></Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.categoryCard}>
                    <Link href="/packages/family-package" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="FamilyPackage"/>
                            <span>Family Packages</span>
                        </div>
                    </Link>
                    <div className={styles.categoryItems}>
                        <ul>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>2 Night 3 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>3 Night 4 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>4 Night 5 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>5 Night 6 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>6 Night 7 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>7 Night 8 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>8 Night 9 Days</ListItem></Link>
                            <Link href="/packages/family-package" onClick={handleMenuToggle}><ListItem>9 Night 10 Days</ListItem></Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.categoryCard}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="SightseeingCat"/>
                            <span>Sightseeing Packages</span>
                        </div>
                    <div className={styles.categoryItems}>
                        <ul>
                            <ListItem>Port Blair Island</ListItem>
                            <ListItem>Havelock Island</ListItem>
                            <ListItem>Neil Island</ListItem>
                            <ListItem>Baratang Island</ListItem>
                            <ListItem>Diglipur Island</ListItem>
                            <ListItem>Rangat Island</ListItem>
                            <ListItem>Jolly Buoy Island</ListItem>
                            <ListItem>Best Sellers</ListItem>
                        </ul>
                    </div>
                </div>
                <div className={styles.categoryCard}>
                    <Link href="/packages/best-sellers" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="BestSellers"/>
                            <span>Budget Tour Packages</span>
                        </div>
                    </Link>
                    <Link href="/packages/budget-tours" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="BudgetTours"/>
                            <span>Best Seller Packages</span>
                        </div>
                    </Link>
                    <Link href="/packages/budget-tours" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Recommended"/>
                            <span>BO Recommended</span>
                        </div>
                    </Link>
                    <Link href="/packages/offbeat" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Offbeat"/>
                            <span>Offbeat Tour Packages</span>
                        </div>
                    </Link>
                    <Link href="/packages" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="allPackages"/>
                            <span>Explore All Tour Packages</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
