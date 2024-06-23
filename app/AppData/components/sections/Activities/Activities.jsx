import Image from 'next/image'
import styles from './Activities.module.css'
import Link from 'next/link'

export default function Activities() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
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
                        <div className={styles.top}>
                            <div className={styles.imgWrapper}>
                                <div className={styles.horizontelImg}>
                                    <Image
                                        src="/assets/scuba-diving-img-1.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <span>Scuba Diving</span>
                                    <span>Starting At ₹4,500/per person</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.imgWrapper}>
                                <div className={styles.bottomLeftImg}>
                                    <Image
                                        src="/assets/tracking-img-1.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <span>Trekking</span>
                                    <span>Starting At ₹2,000/per person</span>
                                </div>
                            </div>
                            <div className={styles.imgWrapper}>
                                <div className={styles.bottomRightImg}>
                                    <Image
                                        src="/assets/kayking-img-1.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <span>Kayaking</span>
                                    <span>Starting At ₹4,000/per person</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightLayout}>
                        <div className={styles.subLeft}>
                            <div className={styles.imgWrapper}>
                                <div className={styles.VerticalImg}>
                                    <Image
                                        src="/assets/parasiling-img-1.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <span>Scuba Diving</span>
                                    <span>Starting At ₹4,500/per person</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subRight}>
                            <div className={styles.imgWrapper}>
                                <div className={styles.topImg}>
                                    <Image
                                        src="/assets/seawalk-img-1.png"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <span>Scuba Diving</span>
                                    <span>Starting At ₹4,500/per person</span>
                                </div>
                            </div>
                            <div className={styles.imgWrapper}>
                                <div className={styles.bottomImg}>
                                    <Image
                                        src="/assets/Snorkeling-img-1.webp"
                                        fill={true}
                                        sizes="100%"
                                        alt="Picture of the author"
                                        style={{zIndex: "-1",objectFit:"cover"}}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <span>Scuba Diving</span>
                                    <span>Starting At ₹4,500/per person</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
