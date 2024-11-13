import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './NTKPopup.module.css'
import ClassSelectComp from './ClassSelectComp/ClassSelectComp'
import SeatSelectComp from './SeatSelectComp/SeatSelectComp'
import { useState } from 'react'


export default function NTKPopup({handleClose, ferryData, tripData}) {

    const [selectedFerryClass, setSelectedFerryClass] = useState()

    function handleClassSelect(data){
        setSelectedFerryClass(data)
    }

    return (

    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div onClick={() => {handleClose()}} className={styles.closeIcon}><IconList Icon="Close" /></div>
            <ClassSelectComp ferryData={ferryData} onFerryClass={handleClassSelect}/>
            {selectedFerryClass && <SeatSelectComp ferryData={ferryData} tripData={{...tripData, ferryClass: selectedFerryClass}}/>}
        </div>
    </div>
  )
}
