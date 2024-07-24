import styles from './FerrySelectLoad.module.css'
import Lottie from 'lottie-react'
import FerryAni from '../../../../../../AppData/ani/ferry_search_loading.json'
import { useEffect, useRef, useState } from 'react'
import { fetchSingleFerryMak } from '@/app/AppData/http/ferry'
import { storeMakFerryCheckout } from '@/app/AppData/http/session'
import { useRouter } from 'next/navigation'

export default function FerrySelectLoad(props) {

    const { ferryId, tripData, ferryClass } = props
    const router = useRouter()

    const lottiFerryRef = useRef(null)
    const [singleFerryData, setSingleFerryData] = useState()
    const [isSeatAvalible, setIsSeatAvalible] = useState()

    const tripDate = tripData.travelDateNum
    const paramsDate = `${tripDate.year}-${tripDate.month}-${tripDate.day}`


    async function searchSeatAvailability(){


        const ferryFetchParams = {
            scheduleID: ferryId,
            dept: tripData.dept,
            dest: tripData.dest,
            date: paramsDate,
            trav: tripData.travelerAdu
        }

        const {data} = await fetchSingleFerryMak(ferryFetchParams)
        setSingleFerryData(data)
        await checkSeatsinList(data.data)
    }

    async function checkSeatsinList(ferryData){

        
        const ferryClassData = ferryData.Classes.filter(obj => obj.ship_class_id === tripData.ferryClass.ferryClassId)
        
        if(tripData.travelerAdu <= ferryClassData[0].seat){
            
            const makCheckoutParams = {
                ferryOpr: "MAK",
                ferryData: {
                    travelDate: paramsDate,
                    scheduleId: ferryData.id,
                    classId: ferryClassData[0].ship_class_id,
                    dept: ferryData.source_location_id,
                    dest: ferryData.destination_location_id,
                    dTime: ferryData.departure_time,
                    aTime: ferryData.arrival_time,
                    fare: ferryClassData[0].ship_class_price
                },
                traveler:{
                    adult: tripData.travelerAdu,
                    ...(tripData.travelerInf > 0 && { infant: tripData.travelerInf })
                }
            }
            const {data} = await storeMakFerryCheckout(makCheckoutParams)
            console.log(data)
            router.push("/book-ferry/checkout")
            return
        }
        props.onSeatChecked(0)
        
    }
    
    
    
    useEffect(() => {
        searchSeatAvailability()
    }, [])


  return (
    <div className={styles.mainWrapper}>
        <div className={styles.loadingSection}>
            <div className={styles.animation}>
                <Lottie lottieRef={lottiFerryRef} animationData={FerryAni} />
            </div>
            <div className={styles.loadingText}><span>We are checking real-time seat availability for you. Please wait...</span></div>
            <div className={styles.loadingText}><span>{singleFerryData && singleFerryData.data.arrival_time}</span></div>
        </div>
    </div>
  )
}
