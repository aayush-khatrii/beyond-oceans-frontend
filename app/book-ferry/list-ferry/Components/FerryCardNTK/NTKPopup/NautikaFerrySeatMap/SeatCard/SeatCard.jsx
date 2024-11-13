import styles from './SeatCard.module.css'

export default function SeatCard({specialSeat, singleSeatData, selectSeatFunc, selectedSeats}) {
    
    const getSeatNumber = (seat) => parseInt(seat.match(/\d+/)[0])
    const getSeatLetter = (seat) => {
        const match = seat.match(/[A-Za-z]+/);
        return match ? match[0] : null; // Returns the letter(s) or null if not found
    }
    const itemKeyUID = `class${singleSeatData.number}${singleSeatData.tier}`

  return (
    <div className={styles.mainWrapper}>
        <div 
            onClick={() => selectSeatFunc(singleSeatData)} 
            className={`${styles.seats} ${singleSeatData.isBooked ? styles.bookedSeat : ""} ${specialSeat ? styles.specialSeatLable : ""} ${selectedSeats.some(seat => seat.number === singleSeatData.number) ? styles.selectedSeat : ""}`} 
            key={itemKeyUID}
        >
            {specialSeat ? `${getSeatNumber(singleSeatData.number)} ${getSeatLetter(singleSeatData.number)}` : getSeatNumber(singleSeatData.number)}
        </div>
    </div>
  )
}
