import Image from 'next/image'
import styles from './Activities.module.css'
import Link from 'next/link'

export default function Activities() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtnMob}>
                    <div className={styles.sectionTitle}>
                        <h2>Trending Activities in Andaman</h2>
                        <p>Dive into thrilling activities and uncover the perfect blend of excitement</p>
                    </div>
                </div>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>Trending Activities in Andaman and Nicobar</h2>
                        <p>Dive into thrilling activities and uncover the perfect blend of excitement</p>
                    </div>
                    <div className={styles.navButton}>
                        <Link href="/activities" className={styles.accentBtn}>Explore All Activities</Link>
                    </div>
                </div>
                <div className={styles.categoryLayout}>
                    <div className={styles.leftLayout}>
                        <Link href="/activities/water-sports">
                            <div className={styles.top}>
                                <div className={styles.imgWrapper}>
                                    <div className={styles.horizontelImg}>
                                        <Image
                                            src="/assets/scuba-diving-img-1.png"
                                            fill={true}
                                            sizes="100%"
                                            alt="Scuba Diving activity"
                                            style={{zIndex: "-1",objectFit:"cover"}}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span>Scuba Diving</span>
                                        <span>Starting At ₹4,500/per person</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className={styles.bottom}>
                            <Link href="/activities/trekking">
                                <div className={styles.imgWrapper}>
                                    <div className={styles.bottomLeftImg}>
                                        <Image
                                            src="/assets/tracking-img-1.png"
                                            fill={true}
                                            sizes="100%"
                                            alt="Trekking activity"
                                            style={{zIndex: "-1",objectFit:"cover"}}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span>Trekking</span>
                                        <span>Starting At ₹2,000/per person</span>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/activities/water-sports">
                                <div className={styles.imgWrapper}>
                                    <div className={styles.bottomRightImg}>
                                        <Image
                                            src="/assets/kayking-img-1.png"
                                            fill={true}
                                            sizes="100%"
                                            alt="kayaking activity"
                                            style={{zIndex: "-1",objectFit:"cover"}}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span>Kayaking</span>
                                        <span>Starting At ₹4,000/per person</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.rightLayout}>
                        <Link href="/activities/parasailing">
                            <div className={styles.subLeft}>
                                <div className={styles.imgWrapper}>
                                    <div className={styles.VerticalImg}>
                                        <Image
                                            src="/assets/parasiling-img-1.png"
                                            fill={true}
                                            sizes="100%"
                                            alt="parasiling activity"
                                            style={{zIndex: "-1",objectFit:"cover"}}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span>Parasailing</span>
                                        <span>Starting At ₹4,500/per person</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className={styles.subRight}>
                            <Link href="/activities/water-sports">
                                <div className={styles.imgWrapper}>
                                    <div className={styles.topImg}>
                                        <Image
                                            src="/assets/seawalk-img-1.png"
                                            fill={true}
                                            sizes="100%"
                                            alt="seawalk activity"
                                            style={{zIndex: "-1",objectFit:"cover"}}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span>Sea Walk</span>
                                        <span>Starting At ₹4,500/per person</span>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/activities/water-sports">
                                <div className={styles.imgWrapper}>
                                    <div className={styles.bottomImg}>
                                        <Image
                                            src="/assets/Snorkeling-img-1.webp"
                                            fill={true}
                                            sizes="100%"
                                            alt="Snorkeling activity"
                                            style={{zIndex: "-1",objectFit:"cover"}}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span>Snorkelling</span>
                                        <span>Starting At ₹4,500/per person</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.categoryLayoutMob}>
                    <Link href="/activities/water-sports" className={styles.cardLayout}>
                        <div className={styles.imgWrapperMob}>
                            <Image
                                src="/assets/scuba-diving-img-1.png"
                                fill={true}
                                sizes="100%"
                                alt="Scuba Diving activity"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span>Scuba Diving</span>
                            <span>Starting At ₹4,500/per person</span>
                        </div>
                    </Link>
                    <Link href="/activities" className={styles.cardLayout}>
                        <div className={styles.imgWrapperMob}>
                            <Image
                                src="/assets/tracking-img-1.png"
                                fill={true}
                                sizes="100%"
                                alt="Trekking activity"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span>Trekking</span>
                            <span>Starting At ₹2,000/per person</span>
                        </div>
                    </Link>
                    <Link href="/activities" className={styles.cardLayout}>
                        <div className={styles.imgWrapperMob}>
                            <Image
                                src="/assets/kayking-img-1.png"
                                fill={true}
                                sizes="100%"
                                alt="kayaking activity"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span>Kayaking</span>
                            <span>Starting At ₹4,000/per person</span>
                        </div>
                    </Link>
                    <Link href="/activities/parasiling" className={styles.cardLayout}>
                        <div className={styles.imgWrapperMob}>
                            <Image
                                src="/assets/parasiling-img-1.png"
                                fill={true}
                                sizes="100%"
                                alt="parasiling activity"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span>Parasiling</span>
                            <span>Starting At ₹4,500/per person</span>
                        </div>
                    </Link>
                    <Link href="/activities/water-sports" className={styles.cardLayout}>
                        <div className={styles.imgWrapperMob}>
                            <Image
                                src="/assets/seawalk-img-1.png"
                                fill={true}
                                sizes="100%"
                                alt="seawalk activity"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span>Sea Walk</span>
                            <span>Starting At ₹4,500/per person</span>
                        </div>
                    </Link>
                    <Link href="/activities/water-sports" className={styles.cardLayout}>
                        <div className={styles.imgWrapperMob}>
                            <Image
                                src="/assets/Snorkeling-img-1.webp"
                                fill={true}
                                sizes="100%"
                                alt="Snorkeling activity"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <span>Snorkeling</span>
                            <span>Starting At ₹4,500/per person</span>
                        </div>
                    </Link>
                </div>
                <Link href="/activities" className={styles.mobButton}>Explore All Activities</Link>
            </div>
        </div>
    </>
  )
}
