"use client"
import React from 'react'
import styles from './TripCalculator.module.css'
import IconList from '../AppData/components/IconComponent/IconList'
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch } from '@/app/AppData/lib/store/hooks';
import { activateTBC } from '@/app/AppData/lib/store/features/tbc/tbcSlice';
import { useRouter } from 'next/navigation'

export default function TripCalculatorLayout() {

    const dispatch = useAppDispatch()
    const router = useRouter()

    function startCalculation(){
        const tbcStatus = {
            status: "start"
        }
        dispatch(activateTBC(tbcStatus))
        // router.push("/trip-calculator/1")

    }


  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.leftCont}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/tbc/tbc_left_cover_1.webp"
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
                        <button onClick={() => startCalculation()} className={styles.getStartBtn} href="/trip-calculator">Get Started Now</button>
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
