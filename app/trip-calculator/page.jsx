import React from 'react'
import styles from './TripCalculator.module.css'
import IconList from '../AppData/components/IconComponent/IconList'
import Image from 'next/image'
import Link from 'next/link'

const seoKeywords = [
    "beyond oceans",
    "trip calculator",
    "andaman trip calculator",
    "budget trip calculatro",
    "andaman",
    "sri vijaya puram",
    "andaman tour company",
    "andaman tour packages",
    "andaman travel",
    "andaman beaches",
    "andaman adventure",
    "andaman marine life",
    "andaman vacation",
    "beyond oceans",
    "andaman islands",
    "andaman tour",
    "andaman travel",
    "beyond oceans",
    "beach",
    "rainforest",
    "marine life",
    "water sports",
    "andaman tour company"
];
const seoTitle = "Trip Calculator | Andaman trip calculator"
const seoDesc = "Calculate your andaman trip budget by beyond oceans customized trip calculator that provide exclusive andaman trip calculator. calculate by customizing duration, hotels, tour type, transport, sightseeing, activity, taxi, ferry and more that you can customize."


export const metadata = {
    manifest: "/manifest.json",
    title: seoTitle,
    description: seoDesc,
    keywords: seoKeywords,
}

export default function page() {

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.leftCont}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/singlepro1.jpg"
                        fill={true}
                        sizes="100%"
                        alt="trip calculator get started"
                        style={{zIndex: "-1",objectFit:"cover"}}
                    />
                </div>
                <div className={styles.leftContWrapper}>
                    <div className={styles.leftTopIcon}>
                        <div className={styles.brandIcon}>
                            <IconList Icon="BOLogo" />
                        </div>
                    </div>
                    <div className={styles.leftBottom}>
                        <div className={styles.leftBottomText}>
                            <span>Plan Your Perfect Andaman and Nicobar Adventure Here</span>
                            <span>Customize your trip and get an instant budget estimate!</span>
                        </div>
                        <Link className={styles.getStartBtn} href="/trip-calculator">Get Started Now</Link>
                    </div>
                </div>
            </div>
            <div className={styles.rightCont}>
                <div className={styles.rightContWrapper}>
                    <div className={styles.rightTop}>
                        <div className={styles.tbcNavigation}>
                            <ul>
                                <li><Link href="/packages">Packages</Link></li>
                                <li><Link href="/activities">Activities</Link></li>
                                <li><Link href="/destination">Islands</Link></li>
                                <li className={styles.activeNavLi}>Customized</li>
                            </ul>
                        </div>
                        <Link href="/" className={styles.homeBtnCircle}>
                            <IconList Icon="HomeIcon" />
                        </Link>
                    </div>
                    <div className={styles.rightBottom}>
                        <div className={styles.rightTitle}>
                            <span>Why Choose Beyond Oceans?</span>
                        </div>
                        <div className={styles.cardsList}>
                            <div className={styles.cardWrapper}>
                                <div className={styles.cardIconWrapper}>
                                    <IconList Icon="LocalExp" />
                                </div>
                                <div className={styles.cardText}>
                                    <span>Local Expertise</span>
                                    <span>As a local tour operator, we have unmatched knowledge and insider access to the best experiences and hidden gems.</span>
                                </div>
                            </div>
                            <div className={styles.cardWrapper}>
                                <div className={styles.cardIconWrapper}>
                                    <IconList Icon="allPackages" />
                                </div>
                                <div className={styles.cardText}>
                                    <span>Personalized Packages</span>
                                    <span>We offer fully customizable tour packages tailored to your preferences, ensuring you get the most out of your trip.</span>
                                </div>
                            </div>
                            <div className={styles.cardWrapper}>
                                <div className={styles.cardIconWrapper}>
                                    <IconList Icon="ReliableSupport" />
                                </div>
                                <div className={styles.cardText}>
                                    <span>24/7 Support</span>
                                    <span>Our support team is available around the clock to assist you with any queries or issues before, during, and after your trip.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
