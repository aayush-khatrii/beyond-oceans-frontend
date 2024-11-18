import NautikaFerryModel from '@/app/AppData/components/IconComponent/NautikaFerryModel'
import styles from './SeatSelectComp.module.css'
import Vid2ClassPremium from '../NautikaFerrySeatMap/Vid2ClassPremium/Vid2ClassPremium'
import { useEffect, useState } from 'react'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Vid2ClassBusiness from '../NautikaFerrySeatMap/Vid2ClassBusiness/Vid2ClassBusiness'

export default function SeatSelectComp({ferryData, tripData, onSeatSelect}) {

    const [zoom, setZoom] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);

    // const ferrySeatLayout = {
    //     "VID2ClassLux_pre": <Vid2ClassPremium zoom={zoom} ferryData={ferryData} tripData={tripData}/>,
    //     "VID2ClassRoy_bus": "",
    // }

    // useEffect(() => {
    //     setSelectedSeats([])
    // }, [tripData.ferryClass.class_title])


    const totalSeatAllowd = tripData.travelerAdu

    function selectedSeatFunc(selectedSeat){
        if(selectedSeat.isBooked === 1){
            return
        }
        onSeatSelect(selectedSeat)
        setSelectedSeats((prevSeats) => {
            if (prevSeats.some(s => s.number === selectedSeat.number && s.tier === selectedSeat.tier)) {
                return prevSeats.filter(s => s.number !== selectedSeat.number);
            }

            if (prevSeats.length < totalSeatAllowd) {
                return [...prevSeats, selectedSeat];
            }

            return prevSeats;
        });
    }


    const ferrySeatLayout = {
        "VID2ClassPremium": <Vid2ClassPremium zoom={zoom} ferryData={ferryData} tripData={tripData} selectedSeats={selectedSeats} onFerrySeatSelect={selectedSeatFunc}/>,
        "VID2ClassBusiness": <Vid2ClassBusiness zoom={zoom} ferryData={ferryData} tripData={tripData} selectedSeats={selectedSeats} onFerrySeatSelect={selectedSeatFunc}/>,
    }

    // Function to handle zoom level change
    const handleZoom = (direction) => {
        setZoom((prevZoom) => {
            const newZoom = direction === 'in' ? prevZoom + 0.5 : prevZoom - 0.5;
            return Math.min(Math.max(newZoom, 1), 3); // Clamp zoom between 1x and 3x
        });
    };

    const classCodes = {
        1: {
            pClass: "VID1ClassPremium",
            bClass: "VID1ClassBusiness"
        },
        2: {
            pClass: "VID2ClassPremium",
            bClass: "VID2ClassBusiness"
        }
    };
    
    const ferrySelectedClassSeatList = ferryData[tripData.ferryClass.class_code]

    const ferrySelectedClassCode = classCodes[ferryData.vesselID]?.[tripData.ferryClass.class_code] || "";
    
    const availableSeats = Object.values(ferrySelectedClassSeatList).filter(seat => seat.isBooked === 0).length;
    const disabledSeats = Object.values(ferrySelectedClassSeatList).filter(seat => seat.isBooked === 1).length;

  return(
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.secTitle}>
                <span>Step 2:</span>
                <span> Select Your Preferred Seats ({tripData.ferryClass.class_title} Class)</span>
            </div>
            <div className={styles.ferrySeatLayout}>
                {ferrySeatLayout[ferrySelectedClassCode]}
            </div>
            <div className={styles.zoomButtons}>
                <div className={styles.zoomButtonsWrapper}>
                    <button className={styles.zoomInBtn} onClick={() => handleZoom('out')}><IconList Icon="ZoomOut" /></button>
                    <button className={styles.zoomOutBtn} onClick={() => handleZoom('in')}><IconList Icon="ZoomIn" /></button>
                </div>
                <div className={styles.travelerDataInfo}>
                    <div>Total Adults: <span>{tripData.travelerAdu}</span></div>
                    <div>Total Infants: <span>{tripData.travelerInf}</span></div>
                </div>
            </div>
            <div className={styles.ferrySeatInfo}>
                <div className={styles.availableSeat}>
                    <div className={styles.availableSeatEX}></div>
                    <div className={styles.availableSeatLable}>
                        <span>Available Seats</span>
                    </div>
                    <div className={styles.availableSeatData}>
                        <span>({availableSeats})</span>
                    </div>
                </div>
                <div className={styles.selectedSeatInfo}>
                    <div className={styles.selectedSeatEX}></div>
                    <div className={styles.selectedSeatLable}>
                        <span>Selected Seats by You</span>
                    </div>
                    <div className={styles.selectedSeatData}>
                        <span>({`${selectedSeats.length}/${totalSeatAllowd}`})</span>
                    </div>
                </div>
                <div className={styles.disabledSeatInfo}>
                    <div className={styles.disabledSeatEX}></div>
                    <div className={styles.disabledSeatLable}>
                        <span>Not Available Seats</span>
                    </div>
                    <div className={styles.disabledSeatData}>
                        <span>({disabledSeats})</span>
                    </div>
                </div>
            </div>
            <div className={styles.impNotes}>
                <div className={styles.infNote}>
                    <span>Note:</span>
                    <span>No seats are allocated to infants.</span>
                </div>
                <div className={styles.cancelNote}>
                    <span>Cancellation charges:</span>
                    <span>₹250(INR) per person per ticket if the cancellation request is raised more than 48 hours before the journey, 50% of the ticket price per person if raised between 24 and 48 hours before the journey, and 100% of the ticket price per person if raised less than 24 hours before the journey.</span>
                </div>
                <div className={styles.paymentNote}>
                    <span>Please note: Seats will only be confirmed after the final payment has been successfully processed.</span>
                </div>
            </div>
        </div>
    </div>
)

}
