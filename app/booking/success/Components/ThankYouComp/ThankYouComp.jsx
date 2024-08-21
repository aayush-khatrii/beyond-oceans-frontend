'use client'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './ThankYouComp.module.css'
import Lottie from 'lottie-react'
import { useEffect, useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'
import FerryAni from '../../../../AppData/ani/crackers_ani.json'
import { getBookingData } from '@/app/AppData/http/booking'
import { useRouter } from 'next/navigation'
import PackageDeatils from '../PackageDeatils/PackageDeatils'
import OrderSumSkeleton from '../OrderSumSkeleton/OrderSumSkeleton'
import Image from 'next/image'
import Link from 'next/link'


export default function ThankYouComp() {

    const router = useRouter()
    const lottiFerryRef = useRef(null)
    // lottiFerryRef.current.setSpeed(.6)
    const [play, setPlay] = useState(false); 
    const [bookingData, setBookingData] = useState(); 

    const googleReviewLink = "https://www.google.com/search?hl=en-IN&gl=in&q=Shop+No.+1637,+Ground+Floor,+Beyond+Oceans,+Destination+Management+Company,+Phoenix+Bay,+Port+Blair,+Andaman+and+Nicobar+Islands+744101&ludocid=5842563636692261615&lsig=AB86z5WO_oOkifboh0y-3XpjmsA_#lrd=0x64934595ed8219ab:0x5114f4ac1ea81aef,3"

    async function fetchBookingData(){
        try {
            const {data} = await getBookingData()
            const bookingData = data.data
            if(bookingData.Payment_Status === "FAILED"){
                router.push("/booking/failed")
                return
            }
            if(bookingData.Payment_Status === "COMPLETED"){
                setBookingData(bookingData)
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
        <div className={styles.leftCrackAni}>
            <Lottie lottieRef={lottiFerryRef} animationData={FerryAni} />
        </div>
        <div className={styles.rightCrackAni}>
            <Lottie lottieRef={lottiFerryRef} animationData={FerryAni} />
        </div>
        <div className={styles.bookingCard}>
            <div className={styles.CheckMarkICO}>
                <IconList Icon="SuccessIcon" />
            </div>
            <div className={styles.cardMainTitle}>Thank You!</div>
            <div className={styles.cardMainDesc}>The booking and payment you made have been completed successfully 🎉</div>
            <div className={styles.bookingId}>
                <div className={styles.bookingIdLable}><span>Booking ID:</span></div>
                {   
                    bookingData ?
                    <div className={styles.bookingIdValue}><span>{bookingData.Booking_Id}</span></div>
                    : <div className={styles.bookingIdValueSkl}></div>
                }
                <div className={styles.bookingIdCopy} onClick={() => {handleCopy()}}><IconList Icon="CopyIcon" /></div>
            </div>
            <div className={styles.orderSum}>
                <div className={styles.orderSumLeft}>
                    <div className={styles.orderSumLeftTitle}><span>Order Summary</span></div>
                    <div className={styles.orderSumLeftContent}>
                        {bookingData ? 
                            <>
                                {bookingData.Booking_Type === "Package" ? <PackageDeatils bookingData={bookingData}/> : ""}
                                {bookingData.Booking_Type === "Activity" ? <PackageDeatils bookingData={bookingData}/> : ""}
                            </> : <OrderSumSkeleton />
                        }
                    </div>
                </div>
                <div className={styles.orderSumRight}>
                    <div className={styles.orderSumRightTitle}><span>Rate US!</span></div>
                    <div className={styles.orderSumRightContent}>
                        <div className={styles.reviewIcon}>
                            <div className={styles.gifWrapper}>
                                <Image
                                    src="/assets/gif/customer_survey.gif"
                                    fill={true}
                                    sizes='100%'
                                    alt="Customer Survey"
                                    unoptimized
                                    priority
                                    style={{objectFit:"cover"}}
                                />
                            </div>
                        </div>
                        <div className={styles.reviewTitle}><span>You're The Best!</span></div>
                        <div className={styles.reviewDesc} ><span>By sharing your Beyond Oceans experience, you may assist other travelers on their travels.</span></div>
                        <Link className={styles.writeReviewBTN} href={googleReviewLink} target='_blank'>Write A Review</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.thankYouInvoice}>
            <div className={styles.invoiceNotiSubWrapper}>
                <div className={styles.invoiceInfoTitle}>
                    <span>Your order confirmation mail and invoice</span>
                    <div className={styles.invoiceInfoTitle2}>
                        <span>sent to</span>
                        {bookingData ? <span className={styles.invoiceEmail}>{bookingData.Booking_Email}</span> : <div className={styles.invoiceEmailSkl}></div>}
                    </div>
                </div>
                <div className={styles.invoiceContact}>
                    <span className={styles.invoiceContactTitle}>Have any question or concerns?</span>
                    <button className={styles.contactBtn} onClick={() => {router.push("/contact-us")}}>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}
