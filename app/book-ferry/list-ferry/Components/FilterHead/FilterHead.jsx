"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './FilterHead.module.css'

export default function FilterHead({tripData}) {

    const IslandName = {
        1: "Sri Vijaya Puram",
        2: "Swaraj Dweep",
        3: "Shaheed Dweep"
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.filterLeft}>
            <div className={styles.locationBox}>
                <div className={styles.dept}><span>{IslandName[tripData.dept]}</span></div>
                <div className={styles.arrowIconLOC}><IconList Icon="RightArrowPoint" /></div>
                <div className={styles.dest}><span>{IslandName[tripData.dest]}</span></div>
            </div>
            <div className={styles.infoNote}>
                Showing result for 
                <span> {tripData.travelerAdu > 1 ? `${tripData.travelerAdu} Adults` : `${tripData.travelerAdu} Adult`} {tripData.travelerInf !== 0 && tripData.travelerInf === 1 ? `and ${tripData.travelerInf} Infant` : ""} {tripData.travelerInf !== 0 && tripData.travelerInf > 1 ? `and ${tripData.travelerInf} Infants` : ""}</span> on 
                <span> {tripData.travelDate.day} {tripData.travelDate.month}, {tripData.travelDate.year}</span>
            </div>
        </div>
        <div className={styles.filterRight}>
            <button className={styles.editTripBtn}>Edit Trip</button>
            <button className={styles.filterBtn}>Filter By</button>
        </div>
    </div>
  )
}
