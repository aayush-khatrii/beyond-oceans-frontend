"use client"
import Select from '@/app/AppData/components/Select/Select'
import styles from './MultiTrip.module.css'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconList from '@/app/AppData/components/IconComponent/IconList';

export default function MultiTrip() {
    const destinationList = ["Port Blair", "Havelock (Swaraj Dweep)", "Neil Island (Shaheed Dweep)"]

    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [travelDate, setTravelDate] = useState()
    const [adult, setAdult] = useState(1)
    const [infant, setInfant] = useState(0)

    function handlefromData(data){
        setSelectedFrom(data)
    }

    function handletoData(data){
        setSelectedTo(data)
    }

    function handleTravelDate(date){
        setTravelDate(date)
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

    const filteredFromList = destinationList.filter(location => location !== selectedTo);
    const filteredToList = destinationList.filter(location => location !== selectedFrom);

    return (
    <div className={styles.mainWrapper}>
        <div className={styles.inpFields}>
            <div className={styles.fromSelect}>
                <div className={styles.fieldLabel}><span>Select From</span></div>
                <div className={styles.selectBox}>
                    <Select datalist={filteredFromList} placeholder="Select From" onData={handlefromData}/>
                </div>
            </div>
            <div className={styles.toSelect}>
                <div className={styles.fieldLabel}><span>Select To</span></div>
                <div className={styles.selectBox}>
                    <Select datalist={filteredToList} placeholder="Select To" onData={handletoData}/>
                </div>
            </div>
            <div className={styles.travelDateSelect}>
                <div className={styles.fieldLabel}><span>Select Date</span></div>
                <div className={styles.dateSelectBox}>
                        <DatePicker
                            selected={travelDate}
                            onChange={(date) => {handleTravelDate(date)}}
                            className={styles.dpINPbox}
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
        </div>
        <div className={styles.buttons}>
            <button className={styles.addTripBtn}><IconList Icon="Plus" />Add Another Trip</button>
            <button className={styles.searchFerryBtn}>Search Ferry</button>
        </div>
    </div>
  )
}
