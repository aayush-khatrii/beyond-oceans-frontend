
import BookingCard from '@/app/AppData/components/Card/BookingCard/BookingCard'
import styles from './MyBookings.module.css'
import { useEffect, useState } from 'react'
import { getMyBookingData } from '@/app/AppData/http/booking'
import { Toaster, toast } from 'sonner'
import { AxiosError } from 'axios';
import NoBookings from './Components/NoBookings/NoBookings'

export default function MyBookings({title, desc}) {

    const [bookingsData, setBookingsData] = useState()  

    async function getMyBookings(){
        try {
            const {data} = await getMyBookingData()
            const filterNull = data.data.filter(item => item !== null);
            console.log(filterNull)
            setBookingsData(filterNull)
        } catch (error) {
            if(error.response?.data){  
                toast.error(error.response?.data.message)
                return
            }
            if(error instanceof AxiosError){
                toast.message(error.code, {
                    description: error.message,
                })
                toast.error("Failed. Try again leter")
                return
            }
            return
        }
    }

    useEffect(() => {
        getMyBookings()
    }, [])

  return (
    <div className={styles.container}>
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.header}>
            <div className={styles.headLeft}>
                <div className={styles.decorative}></div>
                <div className={styles.headContent}>
                    <span>{title}</span>
                    <p>{desc}</p>
                </div>
            </div>
        </div>

        <div className={styles.dataContainer}>
            {
                bookingsData ? (
                    bookingsData.length > 0 ?
                    bookingsData.map((item, index) => (
                        <div key={index}>
                            <BookingCard bookingData={item} />
                        </div>
                    )) : <NoBookings />
                ) : <NoBookings />
            }
        </div>
    </div>
  )
}
