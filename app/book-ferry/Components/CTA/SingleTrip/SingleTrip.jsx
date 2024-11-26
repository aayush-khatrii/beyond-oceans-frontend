"use client"
import Select from '../Select/Select'
import styles from './SingleTrip.module.css'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconList from '@/app/AppData/components/IconComponent/IconList';
import { useRouter } from 'next/navigation';

export default function SingleTrip() {

    const router = useRouter()
    const destinationList = ["Sri Vijaya Puram (Port Blair)", "Swaraj Dweep (Havelock)", "Shaheed Dweep (Neil Island)"]

    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [travelDate, setTravelDate] = useState()
    const [adult, setAdult] = useState(1)
    const [infant, setInfant] = useState(0)
    const [eptFrom, setEptFrom] = useState(false)
    const [eptTo, setEptTo] = useState(false)
    const [eptDate, setEptDate] = useState(false)

    const islandCodes = {
        "Sri Vijaya Puram (Port Blair)": 1,
        "Swaraj Dweep (Havelock)": 2,
        "Shaheed Dweep (Neil Island)": 3
    }

    const travelDateTS = travelDate ? Math.floor(new Date(travelDate).getTime() / 1000) : ""

    const queryString = `triptype=st&dept=${selectedFrom && islandCodes[selectedFrom]}&dest=${selectedTo && islandCodes[selectedTo]}&td=${travelDateTS}&tra=${adult && adult}&tri=${infant && infant}`


    function handlefromData(data){
        setSelectedFrom(data)
        setEptFrom(false)
    }

    function handletoData(data){
        setSelectedTo(data)
        setEptTo(false)
    }

    function handleTravelDate(date){
        setTravelDate(date)
        setEptDate(false)
    }
    
    function handleAdultMinus(){
        if(adult > 1){
            setAdult(adult - 1)
        }
    }
    
    function handleAdultPlus(){
        if(adult < 10){
            setAdult(adult + 1)
        }
    }

    function handleInfantMinus(){
        if(infant > 0){
            setInfant(infant - 1)
        }
    }
    
    function handleInfantPlus(){
        if(infant < 10){
            setInfant(infant + 1)
        }
    }

    function handleSearch(){
        if(!selectedFrom){
            setEptFrom(true)
        }
        if(!selectedTo){
            setEptTo(true)
        }
        if(!travelDate){
            setEptDate(true)
        }
        if(selectedFrom && selectedTo && travelDate && adult > 0){
            router.push(`/book-ferry/list-ferry?${queryString}`)
        }
        return
    }

    const filteredFromList = destinationList.filter(location => location !== selectedTo);
    const filteredToList = destinationList.filter(location => location !== selectedFrom);

    return (
    <>
    <div className={styles.mainWrapper}>
        <div className={styles.inpFields}>
            <div className={styles.fromSelect}>
                <div className={styles.fieldLabel}><span>Select From</span></div>
                <div className={styles.selectBox} >
                    <Select isEmpty={eptFrom} datalist={filteredFromList} placeholder="Select From" onData={handlefromData}/>
                </div>
            </div>
            <div className={styles.toSelect}>
                <div className={styles.fieldLabel}><span>Select To</span></div>
                <div className={styles.selectBox}>
                    <Select isEmpty={eptTo} datalist={filteredToList} blankValue={false} placeholder="Select To" onData={handletoData}/>
                </div>
            </div>
            <div className={styles.travelDateSelect}>
                <div className={styles.fieldLabel}><span>Select Date</span></div>
                <div className={styles.dateSelectBox} style={{borderColor: eptDate ? "#e00000" : ""}}>
                        <DatePicker
                            color={eptDate ? "#ff0000" : ""}
                            selected={travelDate}
                            onChange={(date) => {handleTravelDate(date)}}
                            className={`${styles.dpINPbox} ${eptDate ? styles.emptyDateBox : ""}`}
                            dateFormat="dd-MM-yyyy"
                            minDate={new Date()}
                            placeholderText='DD-MM-YYYY'
                        />
                        <IconList Icon="DateCal" />
                </div>
            </div>
            <div className={styles.adultSelect}>
                <div className={styles.fieldLabel}><span>Adults (2+ years)</span></div>
                <div className={styles.adultSelectBox}>
                    <div className={styles.personMinus} onClick={() => {handleAdultMinus()}}><IconList Icon="Minus"/></div>
                    <div className={styles.personValue}>{adult}</div>
                    <div className={styles.personPlus}  onClick={() => {handleAdultPlus()}}><IconList Icon="Plus"/></div>
                </div>
            </div>
            <div className={styles.infantSelect}>
                <div className={styles.fieldLabel}><span>Infants (0-2 years)</span></div>
                <div className={styles.infantSelectBox}>
                    <div className={styles.personMinus} onClick={() => {handleInfantMinus()}}><IconList Icon="Minus"/></div>
                    <div className={styles.personValue}>{infant}</div>
                    <div className={styles.personPlus} onClick={() => {handleInfantPlus()}}><IconList Icon="Plus"/></div>
                </div>
            </div>
            <div className={styles.personSelectMob}>
                <div className={styles.adultSelect}>
                    <div className={styles.fieldLabel}><span>Adults (2+ years)</span></div>
                    <div className={styles.adultSelectBox}>
                        <div className={styles.personMinus} onClick={() => {handleAdultMinus()}}><IconList Icon="Minus"/></div>
                        <div className={styles.personValue}>{adult}</div>
                        <div className={styles.personPlus}  onClick={() => {handleAdultPlus()}}><IconList Icon="Plus"/></div>
                    </div>
                </div>
                <div className={styles.infantSelect}>
                    <div className={styles.fieldLabel}><span>Infants (0-2 years)</span></div>
                    <div className={styles.infantSelectBox}>
                        <div className={styles.personMinus} onClick={() => {handleInfantMinus()}}><IconList Icon="Minus"/></div>
                        <div className={styles.personValue}>{infant}</div>
                        <div className={styles.personPlus} onClick={() => {handleInfantPlus()}}><IconList Icon="Plus"/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.buttons}>
            <button className={styles.addTripBtn}><IconList Icon="Plus" />Add Another Trip</button>
            <button className={styles.searchFerryBtn} onClick={() => {handleSearch()}}>Search Ferry</button>
        </div>
    </div>
    </>
  )
}
