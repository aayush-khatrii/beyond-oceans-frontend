import Link from 'next/link'
import styles from './Destinations.module.css'
import IconList from '../../../IconComponent/IconList'

export default function Destinations({handleMenuToggle}) {
  return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.categoryCard}>
                    <Link href="/destination/sri-vijaya-puram" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Port Blair Island</span>
                        </div>
                    </Link>
                    <Link href="/destination/swaraj-dweep" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Havelock Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Neil Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Baratang Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Diglipur Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Rangat Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Long Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Little Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Barren Island</span>
                        </div>
                    </Link>
                    <Link href="/destination" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="Island"/>
                            <span>Explore All Destinations</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}
