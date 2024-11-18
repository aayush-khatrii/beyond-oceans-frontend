import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './NTKPopup.module.css'
import ClassSelectComp from './ClassSelectComp/ClassSelectComp'
import SeatSelectComp from './SeatSelectComp/SeatSelectComp'
import { useState } from 'react'
import { fetchSingleFerryNtk } from '@/app/AppData/http/ferry'
import { storeNtkFerryCheckout } from '@/app/AppData/http/session'
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function NTKPopup({handleClose, ferryData, tripData}) {
    
    const router = useRouter()
    const [selectedFerryClass, setSelectedFerryClass] = useState()
    const [selectedSeats, setSelectedSeats] = useState([]);

    function handleClassSelect(data){
        setSelectedFerryClass(data)
    }
    console.log(ferryData)

    const ferryUid = {
        ferryId: ferryData.id,
        tripId: ferryData.tripId
    }
    const totalSeatAllowd = tripData.travelerAdu
    
    function selectedSeatFunc(selectedSeat){
        if(selectedSeat.isBooked === 1){
            return
        }
        setSelectedSeats((prevSeats) => {
            // if (prevSeats.some(s => s.number === selectedSeat.number)) {
            //     return prevSeats.filter(s => s.number !== selectedSeat.number);
            // }

            if (prevSeats.some(s => s.number === selectedSeat.number && s.tier === selectedSeat.tier)) {
                return prevSeats.filter(s => s.number !== selectedSeat.number);
            }

            if (prevSeats.length < totalSeatAllowd) {
                const updatedSeats = [...prevSeats, selectedSeat];
                return updatedSeats.sort((a, b) => {
                    const [numA, charA] = a.number.match(/(\d+)([A-Z])/).slice(1);
                    const [numB, charB] = b.number.match(/(\d+)([A-Z])/).slice(1);
    
                    // Compare by numeric part first, then alphabetic part
                    return numA - numB || charA.localeCompare(charB);
                });
            }

            return prevSeats;
        });
    }

    const formatSeats = (seats) => {
        // Group seats by tier
        const groupedSeats = seats.reduce((acc, seat) => {
          const className = seat.tier === "P" ? "Luxury Class" : "Royal Class";
          if (!acc[className]) acc[className] = [];
          acc[className].push(seat.number);
          return acc;
        }, {});
    
        // Generate the text
        return Object.entries(groupedSeats)
          .map(
            ([className, seatNos]) =>
              `${className} Seat No. : ${seatNos.join(", ")}`
          )
          .join(". ");
    };

    const travelDate = tripData.travelDateNum
    const travelDateString = `${travelDate.year}-${travelDate.month}-${travelDate.day}`

    async function handleTicketBooking(){

        const ferryFetchParams = {
            ferryId: ferryUid.ferryId,
            tripId: ferryUid.tripId.toString(),
            dept: tripData.dept,
            dest: tripData.dest,
            date: `${travelDate.year}-${travelDate.month}-${travelDate.day}`,
            trav: tripData.travelerAdu
        }

        const {data} = await fetchSingleFerryNtk(ferryFetchParams)
        await selectedSeatAvailability(data.data)

    }

    async function selectedSeatAvailability(ferryData){

        if(selectedSeats.length !== totalSeatAllowd){
            return
        }

        const bClass = [];
        const pClass = [];

        selectedSeats.forEach(seat => {
            if (seat.tier === 'B') {
              bClass.push(seat);
            } else if (seat.tier === 'P') {
              pClass.push(seat);
            }
        });

        function isSelectedSeatBooked(selectedSeats, seatData, classType) {
            for (const seat of selectedSeats) {
              if (seatData[classType][seat.number]?.isBooked === 1) {
                toast.error(`Selected seat ${seat.number} in ${seat.tier === 'P' ? "Luxury" : "Royal"} Class is already booked`)
                return true; // Return true if any selected seat is booked
              }
            }
            return false;
        }

        if (isSelectedSeatBooked(bClass, ferryData, "bClass") || isSelectedSeatBooked(pClass, ferryData, "pClass")){
            return
        }

        function convertTo24HourFormat(time) {
            const hour = String(time.hour).padStart(2, "0"); // Ensure 2 digits
            const minute = String(time.minute).padStart(2, "0"); // Ensure 2 digits
            return `${hour}:${minute}:00`; // Append seconds as "00"
        }

        const ntkCheckoutParams = {
            Ferry_Operator: "NTK",
            Ferry_Data: {
                Travel_Date: travelDateString,
                Ferry_Id: ferryData.id.toString(),
                Trip_Id: ferryData.tripId.toString(),
                Departure: ferryData.dept_code,
                Destination: ferryData.dest_code,
                Departure_Time: convertTo24HourFormat(ferryData.dTime),
                Arrival_Time: convertTo24HourFormat(ferryData.aTime),
                Fare: ferryData.fares,
                Selected_Seats: {bClass, pClass}
            },
            Traveler:{
                Adults: tripData.travelerAdu,
                Infants: tripData.travelerInf
            }
        }

        const {data} = await storeNtkFerryCheckout(ntkCheckoutParams)
        router.push("/book-ferry/checkout")
        return
    }

    return (

    <div className={styles.mainWrapper}>
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.subWrapper}>
            <div className={styles.NTKtopWrapper}>
                <div onClick={() => {handleClose()}} className={styles.closeIcon}><IconList Icon="Close" /></div>
                <ClassSelectComp ferryData={ferryData} onFerryClass={handleClassSelect}/>
                {selectedFerryClass && <SeatSelectComp ferryData={ferryData} onSeatSelect={selectedSeatFunc} tripData={{...tripData, ferryClass: selectedFerryClass}}/>}
            </div>
            {   selectedSeats.length > 0 &&
                <div className={styles.popupFooter}>
                    <div className={styles.popupFooterWrapper}>
                        <div className={styles.footerlayoutLeft}>
                            <span className={styles.selectedSeatInfo}>Nautika {formatSeats(selectedSeats)} is Selected</span>
                        </div>
                        <div className={styles.footerlayoutRight}>
                            <button onClick={() => {handleClose()}} className={styles.backBtn}>Back To Ferries</button>
                            <button onClick={() => {handleTicketBooking()}} disabled={selectedSeats.length === totalSeatAllowd ? false : true} className={`${styles.processBtn} ${selectedSeats.length !== totalSeatAllowd ? styles.disabledBTN : ""}`}>Processed To Checkout</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}
