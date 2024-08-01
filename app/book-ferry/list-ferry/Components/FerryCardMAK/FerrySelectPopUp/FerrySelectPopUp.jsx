import { useState } from 'react'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './FerrySelectPopUp.module.css'
import FerrySelectComp from './FerrySelectComp/FerrySelectComp'
import FerrySelectLoad from './FerrySelectLoad/FerrySelectLoad'
import { Toaster, toast } from 'sonner'

export default function MAKFerrySelectPopUp({handleClose, ferryData, tripData}) {


    const [ferrySection, setFerrySection] = useState(0)
    const [selectedFerryClass, setSelectedFerryClass] = useState()

    function handleClassSelect(data){
        setSelectedFerryClass(data)
    }

    const ferryMidSection = {
        0: <FerrySelectComp ferryData={ferryData} onFerryClass={handleClassSelect} />,
        // 1: <FerrySelectLoad ferryId={ferryData.id} onSeatChecked={onSeatChecked} tripData={{...tripData, ferryClass: selectedFerryClass}}/>,
        1: <>loading</>,
    }

    const ferryPopUpTitle = {
        0: `Select Seating Type of ${ferryData.ship_title} Ferry`,
        1: `${ferryData.ship_title} Ferry (${selectedFerryClass && selectedFerryClass.ferryClassName} Class) Selected`,
    }

    function onSeatChecked(data){
        toast.error(`Seat(s) not available in ${selectedFerryClass.ferryClassName} Class`)
        if(data === 0){
            setFerrySection(data)
            toast.error(`Seat(s) not available in ${selectedFerryClass.ferryClassName} Class`)
        }
    }

    function handleCheckoutClick(){
        return
        if(ferrySection === 0){
            setFerrySection(1)
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
            <div className={styles.subWrapper}>
                <div className={styles.ferryContent}>
                    <div className={styles.titleBar}>
                        <div className={styles.title}><span>{ferryPopUpTitle[ferrySection]}</span></div>
                        <div onClick={() => {handleClose()}} className={styles.closeIcon}><IconList Icon="Close" /></div>
                    </div>
                    {ferryMidSection[ferrySection]}
                </div>
                <div className={styles.ferrySelectfooter}>
                    <button onClick={() => {handleClose()}} className={styles.backBtn}>Back To Ferries</button>
                    <button onClick={handleCheckoutClick} className={styles.processBtn} disabled={ferrySection === 1 ? true : ""}>Processed To Checkout</button>
                </div>
            </div>
        </div>
    )
}
