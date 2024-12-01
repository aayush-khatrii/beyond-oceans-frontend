import React from 'react'
import styles from './Rangat.module.css'
import Image from 'next/image'
import Link from 'next/link'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import TOC from './Components/TOC/TOC'
import KnowBefore from './Components/KnowBefore/KnowBefore'
import Facts from './Components/Facts/Facts'
import PlaceVisit from './Components/PlaceVisit/PlaceVisit'
import HowPlanTrip from './Components/HowPlanTrip/HowPlanTrip'
import Reach from './Components/Reach/Reach'
import GeneralInfo from './Components/GeneralInfo/GeneralInfo'
import FAQ from './Components/FAQ/FAQ'
import DestForm from './Components/DestForm/DestForm'
import InqComp from './Components/InqComp/InqComp'

export default function RangatLayout() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.heroImage}>
            <div className={styles.heroTextSec}>
                <div className={styles.titleSec}>
                    <h1 className={styles.title}>Rangat Island</h1>
                    <h1 className={styles.mobTitle}>Rangat Island</h1>
                    <h2>Exploring Rangat Island: A Tranquil Haven in Andaman and Nicobar</h2>
                </div>
                <div className={styles.breadcrumbSec}>
                    <div><Link href="/">Home</Link></div>
                    <div className={styles.breadcrumbIcon}><IconList Icon="RightArrow"/></div>
                    <div><Link href="/destination">Destination</Link></div>
                    <div className={styles.breadcrumbIcon}><IconList Icon="RightArrow"/></div>
                    <div><Link href="/destination/rangat-island">Rangat Island</Link></div>
                </div>
            </div>
            <div className={styles.imgOverlay}></div>
            <div className={styles.imgWrapper}>
                <Image
                    src="/assets/destination/island/rangat_island.webp"
                    fill={true}
                    sizes="100%"
                    alt="rangat island"
                    style={{zIndex: "-1",objectFit:"cover"}}
                />
            </div>
        </div>
        <div className={styles.subWrapper}>
            <div className={styles.leftContent}>
                <TOC />
                <KnowBefore />
                <Facts />
                <PlaceVisit />
                <HowPlanTrip />
                <Reach />
                <GeneralInfo />
                <FAQ />
            </div>
            <div className={styles.asideContent}>
                <DestForm />
                <InqComp />
            </div>
        </div>
    </div>
  )
}
