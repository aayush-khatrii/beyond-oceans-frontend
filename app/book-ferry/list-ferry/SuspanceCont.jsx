"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './ListFerry.module.css'
import { useRouter } from 'next/navigation'
import FilterHead from './Components/FilterHead/FilterHead'
import FerryListLayout from './Components/FerryListLayout/FerryListLayout'
import { useSearchParams } from 'next/navigation'
import TicketSummary from './Components/TicketSummary/TicketSummary'
import BookingPos from './Components/BookingPos/BookingPos'
import { useState } from 'react'

export default function SuspanceCont() {
    const router = useRouter()
    const searchParams = useSearchParams()
 
    const tripType = searchParams.get('triptype')
    const dept = searchParams.get('dept')
    const dest = searchParams.get('dest')
    const tripDateEP = searchParams.get('td')
    const travelerAdu = parseInt(searchParams.get('tra'), 10)
    const travelerInf = parseInt(searchParams.get('tri'), 10)

    const formatDate = (epoch) => {
        const date = new Date(epoch * 1000)
        const day = date.getDate()
        const monthNum = date.getMonth() + 1
        const month = date.toLocaleString('en-GB', { month: 'long' });
        const year = date.getFullYear()

        return { day, month, year, monthNum };
    };

    const { day, month, year, monthNum } = formatDate(tripDateEP)

    const tripData = {
        tripType,
        dept,
        dest,
        travelDate:{day, month, year},
        travelDateNum:{day, month: monthNum, year},
        travelerAdu,
        travelerInf
    }

    return (
    <div className={styles.mainWrapper}>
        <div className={styles.stepWrapper}>
            <div className={styles.stepsHeader}>
                <div className={styles.searchStep} onClick={() => router.push('/book-ferry')}>
                    <div className={styles.stepNum}>1</div>
                    <span>Search a Ferry</span>
                </div>
                <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                <div className={styles.selectionStep}>
                    <div className={styles.stepNum}>2</div>
                    <span>Ferry Selection</span>
                </div>
                <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                <div className={styles.cnfStep}>
                    <div className={styles.stepNum}>3</div>
                    <span>Confirm & Checkout</span>
                </div>
                <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                <div className={styles.tnxStep}>
                    <div className={styles.stepNum}>4</div>
                    <span>Surprise For You</span>
                </div>
            </div>
        </div>
        <div className={styles.subWrapper}>
            <FilterHead tripData={tripData} />
            <div className={styles.pageMainContent}>
                <div className={styles.contentWrapper}>
                    <FerryListLayout tripData={tripData}/>
                </div>
                <div className={styles.aside}>
                    <TicketSummary />
                    <BookingPos />
                </div>
            </div>
        </div>
    </div>
  )
}
