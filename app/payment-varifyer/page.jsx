'use client'
import { useEffect, useState } from 'react'
import styles from './PaymentVarifyer.module.css'
import { varifyBookingPayment } from '../AppData/http/payment'
import RedirectPopup from './Components/RedirectPopup/RedirectPopup'
import { useRouter } from 'next/navigation'


export default function page() {

    const router = useRouter()

    async function varifyBooking(){
        const maxRetries = 3

        for(let attempt = 0; attempt <= maxRetries; attempt++){
            try {
                const {data} = await varifyBookingPayment()
                if(data.data.Booking_Status !== "PENDING"){
                    if(data.data.Booking_Status === "COMPLETED"){
                        router.push("/booking/success")
                        return
                    }
                    if(data.data.Booking_Status === "FAILED"){
                        router.push("/booking/failed")
                        return
                    }
                }
            } catch (error) {
                if(error.response?.data.statusCode === 401){  
                    router.push("/")
                }
                router.push("/")
            }

            if (attempt < maxRetries) {
                await new Promise(res => setTimeout(res, 3000))
            }
        }

        router.push("/booking/failed");
        
    }

    useEffect(() => {
        varifyBooking()
    }, [])
    
    return (
        <div className={styles.mainWrapper}>
            <RedirectPopup />
        </div>
    )
}
