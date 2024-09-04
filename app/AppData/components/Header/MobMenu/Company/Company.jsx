import styles from './Company.module.css'
import Link from 'next/link'
import IconList from '../../../IconComponent/IconList'

export default function Company({handleMenuToggle}) {
  return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.categoryCard}>
                    <Link href="/about-us" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="RightArrow"/>
                            <span>Our Story</span>
                        </div>
                    </Link>
                    {/* <Link href="/destination" onClick={handleMenuToggle}> */}
                        <div onClick={handleMenuToggle} className={styles.categoryTitle}>
                            <IconList Icon="RightArrow"/>
                            <span>Blogs</span>
                        </div>
                    {/* </Link> */}
                    {/* <Link href="/destination" onClick={handleMenuToggle}> */}
                        <div onClick={handleMenuToggle} className={styles.categoryTitle}>
                            <IconList Icon="RightArrow"/>
                            <span>Career</span>
                        </div>
                    {/* </Link> */}
                    <Link href="/contact-us" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="RightArrow"/>
                            <span>Contact Us</span>
                        </div>
                    </Link>
                    <Link href="/user/profile" onClick={handleMenuToggle}>
                        <div className={styles.categoryTitle}>
                            <IconList Icon="RightArrow"/>
                            <span>My Account</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}
