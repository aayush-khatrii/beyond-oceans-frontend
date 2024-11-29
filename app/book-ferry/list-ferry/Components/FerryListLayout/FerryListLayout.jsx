"use client"
import styles from './FerryListLayout.module.css'
import FerryCardMAK from '../FerryCardMAK/FerryCardMAK'
import FerryCardNTK from '../FerryCardNTK/FerryCardNTK'
import FerryCardScl from '../FerryCardScl/FerryCardScl'
import React, { useState, useEffect } from 'react'
import { fetchAllFerry } from '@/app/AppData/http/ferry'

export default function FerryListLayout({tripData}) {

    const [fetchCalled, setFetchCalled] = useState(false)
    const [ferryListData, setFerryListData] = useState()

    const handleListFerry = async() => {
        const travelDate = {
            day: tripData.travelDateNum.day,
            month: tripData.travelDateNum.month,
            year: tripData.travelDateNum.year
        }

        const apiDateFormat = `${travelDate.year}-${travelDate.month}-${travelDate.day}`

        const apiParams = {
            dept: tripData.dept, 
            dest: tripData.dest, 
            trav: tripData.travelerAdu + tripData.travelerInf, 
            date: apiDateFormat
        }

        
        let ferryData

        try {            
            ferryData = await fetchAllFerry(apiParams)
        } catch (err) {
            console.log(err)
        }
    
        setFerryListData(ferryData.data.data)
    }

    useEffect(() => {
        handleListFerry();
    }, [])

    function convertToMinutes(timeString) {
        if (typeof timeString === 'string') {
            const [hour, minute] = timeString.split(':').map(Number);
            return hour * 60 + minute;
        } else if (typeof timeString === 'object') {
            return timeString.hour * 60 + timeString.minute;
        }
        return 0;
    }

    ferryListData && ferryListData.sort((a, b) => {
        const timeA = convertToMinutes(a.dTime || a.departure_time);
        const timeB = convertToMinutes(b.dTime || b.departure_time);
        return timeA - timeB;
    });


    const islandCodes = {
        "1": "Sri Vijaya Puram (Port Blair)",
        "2": "Swaraj Dweep (Havelock)",
        "3": "Shaheed Dweep (Neil Island)"
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.ferryListCont}>
            {   
                Array.isArray(ferryListData) && ferryListData ? 
                ferryListData.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.ferryOPR === "MAK" ? <FerryCardMAK key={index} data={item} tripData={tripData} /> : ""}
                        {item.ferryOPR === "NTK" ? <FerryCardNTK key={index} data={item} tripData={tripData}/> : ""}
                    </React.Fragment>
                )) :
                Array(3).fill().map((item, index) => (
                    <FerryCardScl key={index} />
                ))
            }
            {
                Array.isArray(ferryListData) && ferryListData.length === 0 && 
                <div>
                    <p>No ferry avalible from <strong><u>{islandCodes[tripData.dept]}</u></strong> to <strong><u>{islandCodes[tripData.dest]}</u></strong></p>
                </div>
            }
        </div>
    </div>
  )
}
