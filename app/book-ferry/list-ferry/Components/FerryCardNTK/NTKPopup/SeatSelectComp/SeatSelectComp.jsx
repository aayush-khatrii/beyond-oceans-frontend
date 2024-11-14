import NautikaFerryModel from '@/app/AppData/components/IconComponent/NautikaFerryModel'
import styles from './SeatSelectComp.module.css'
import Vid2ClassPremium from '../NautikaFerrySeatMap/Vid2ClassPremium/Vid2ClassPremium'
import { useState } from 'react'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function SeatSelectComp({ferryData, tripData}) {

    const [zoom, setZoom] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);

    // const ferrySeatLayout = {
    //     "VID2ClassLux_pre": <Vid2ClassPremium zoom={zoom} ferryData={ferryData} tripData={tripData}/>,
    //     "VID2ClassRoy_bus": "",
    // }


    function selectedSeatFunc(selectedSeatList){
        setSelectedSeats(selectedSeatList)
    }

    const ferrySeatLayout = {
        "pClass": <Vid2ClassPremium zoom={zoom} ferryData={ferryData} tripData={tripData} onFerrySeatSelect={selectedSeatFunc}/>,
        "bClass": "",
    }

    // Function to handle zoom level change
    const handleZoom = (direction) => {
        setZoom((prevZoom) => {
            const newZoom = direction === 'in' ? prevZoom + 0.5 : prevZoom - 0.5;
            return Math.min(Math.max(newZoom, 1), 3); // Clamp zoom between 1x and 3x
        });
    };

  return(
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.secTitle}>
                <span>Step 2:</span>
                <span> Select Your Preferred Seats ({tripData.ferryClass.class_title} Class)</span>
            </div>
            <div className={styles.ferrySeatLayout}>
                {ferrySeatLayout[tripData.ferryClass.class_code]}
            </div>
            <button className={styles.zoomInBtn} onClick={() => handleZoom('out')}><IconList Icon="ZoomOut" /></button>
            <button className={styles.zoomOutBtn} onClick={() => handleZoom('in')}><IconList Icon="ZoomIn" /></button>
            {
                selectedSeats.length > 0 && selectedSeats.map((item, index) => (
                    <div key={index}>
                        {item.number}
                    </div>
                ))
            }
        </div>
    </div>
)

}
