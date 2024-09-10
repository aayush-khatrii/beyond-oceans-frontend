'use client'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './FailedComp.module.css'
import { useEffect, useState } from 'react'
import { getBookingData } from '@/app/AppData/http/booking'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'


export default function ThankYouComp() {

    const router = useRouter()
    const [bookingData, setBookingData] = useState(); 


    async function fetchBookingData(){
        try {
            const {data} = await getBookingData()
            const bookingData = data.data

            if(bookingData.Payment_Status === "FAILED"){
                setBookingData(bookingData)
                return
            }
            if(bookingData.Payment_Status === "PENDING"){
                setBookingData(bookingData)
                return
            }
            if(bookingData.Payment_Status === "COMPLETED"){
                router.push("/booking/success")
                return
            }
            if(bookingData.Payment_Status !== "COMPLETED" || bookingData.Payment_Status !== "FAILED"){
                if(bookingData.Booking_Type === "Package"){
                    router.push("/packages")
                }
            }
            
        } catch (error) {
            console.log(error)
            router.push("/")
        }
    }

    useEffect(() => {
        fetchBookingData()
    }, []);

    const bookingId = bookingData && bookingData.Booking_Id
    console.log(bookingId)

    async function handleCopy(){
        try {
            await navigator.clipboard.writeText(bookingId);
            toast.success(`Copied! Booking Id : ${bookingId}`)
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

  return (
    <div className={styles.mainWrapper}>
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.bookingCard}>
            <div className={styles.bookingCardleft}></div>
            <div className={styles.bookingCardright}></div>
            <div className={styles.CheckMarkICO}>
                <IconList Icon="CancleIcon" />
            </div>
            <div className={styles.cardMainTitle}>Oops!</div>
            <div className={styles.cardMainDesc}>The booking and payment you made have been canceled for some reason!</div>
            <div className={styles.bookingId}>
                <div className={styles.bookingIdLable}><span>Booking ID:</span></div>
                {   
                    bookingData ?
                    <div className={styles.bookingIdValue}><span>{bookingData.Booking_Id}</span></div>
                    : <div className={styles.bookingIdValueSkl}></div>
                }
                <div className={styles.bookingIdCopy} onClick={() => {handleCopy()}}><IconList Icon="CopyIcon" /></div>
            </div>
            <div className={styles.desedSep}></div>
            <div className={styles.failedContWrapper}>
                <span>Sometimes, technology can be as unpredictable as the ocean tides. If your payment didn't sail through as expected, don't worry. Our crew is on standby to assist you. Please double-check your payment details and try again.</span>
            </div>
        </div>
        <div className={styles.cancleContent}>
            <div className={styles.cancleSubWrapper}>
                <div className={styles.cancleInfoTitle}>
                    <span>Have any questions or concerns?</span>
                </div>
                <div className={styles.cancleDesc}>
                    <span className={styles.invoiceContactTitle}>If you're still navigating stormy waters and need assistance, don't hesitate to reach out to our dedicated support team.</span>
                    <button className={styles.contactBtn} onClick={() => {router.push("/contact-us")}}>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}
