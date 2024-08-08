import Image from "next/image";
import styles from './Category.module.css'
import Link from "next/link";

export default function Category() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>Discover Tour Packages By Category</h2>
                        <p>From thrilling adventures to serene getaways, find the perfect travel experience</p>
                    </div>
                    <div className={styles.navButton}>
                        <Link href="/packages" className={styles.accentBtn}>Explore All Packages</Link>
                    </div>
                </div>
                <div className={styles.categoryLayout}>
                    <div className={styles.leftLayout}>
                        <div className={styles.subLeft}>
                            <Link href="/packages" className={styles.imgWrapper}>
                                <div className={styles.topImg}>
                                    <Image
                                        src="/assets/Category-Img-1.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="andaman family packages"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <span>Family Tour</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.62511 6.82924H17.171V16.3752M16.5081 7.49215L6.82961 17.1707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <Link href="/packages" className={styles.imgWrapper}>
                                <div className={styles.bottomImg}>
                                    <Image
                                        src="/assets/Category-Img-6.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <span>Explore By Budget</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.62511 6.82924H17.171V16.3752M16.5081 7.49215L6.82961 17.1707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.subRight}>
                            <Link href="/packages/honeymoon" className={styles.imgWrapper}>
                                <div className={styles.VerticalImg}>
                                    <Image
                                        src="/assets/Category-Img-2.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="andaman honeymoon packages"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <span>Honeymoon Sp.</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.62511 6.82924H17.171V16.3752M16.5081 7.49215L6.82961 17.1707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.rightLayout}>
                        <div className={styles.subTop}>
                            <Link href="/packages" className={styles.imgWrapper}>
                                <div className={styles.horizontelImg}>
                                    <Image
                                        src="/assets/Category-Img-3.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="andaman packages by island"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <span>Explore By Island</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.62511 6.82924H17.171V16.3752M16.5081 7.49215L6.82961 17.1707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.subBottom}>
                            <Link href="/packages" className={styles.imgWrapper}>
                                <div className={styles.bottomLeftImg}>
                                    <Image
                                        src="/assets/Category-Img-5.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="4 days andaman packages"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <span>Explore By Duration</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.62511 6.82924H17.171V16.3752M16.5081 7.49215L6.82961 17.1707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <Link href="/packages/best-sellers" className={styles.imgWrapper}>
                                <div className={styles.bottomRightImg}>
                                    <Image
                                        src="/assets/Category-Img-4.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="andaman best packages"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <span>Best Seller</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.62511 6.82924H17.171V16.3752M16.5081 7.49215L6.82961 17.1707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
