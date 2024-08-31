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
                Ferry_Operator: "MAK",
                Ferry_Data: {
                    Travel_Date: paramsDate,
                    Schedule_Id: ferryData.id,
                    Class_Id: ferryClassData[0].ship_class_id,
                    Departure: ferryData.source_location_id,
                    Destination: ferryData.destination_location_id,
                    Departure_Time: ferryData.departure_time,
                    Arrival_Time: ferryData.arrival_time,
                    Fare: ferryClassData[0].ship_class_price
                },
                Traveler:{
                    Adults: tripData.travelerAdu,
                    Infants: tripData.travelerInf
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
        </div>
    </div>
  )
}
