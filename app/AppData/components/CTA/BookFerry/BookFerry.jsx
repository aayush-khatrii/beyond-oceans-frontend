import styles from './BookFerry.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'
import Select from './Select/Select';
import { useRouter } from 'next/navigation';
import IconList from '../../IconComponent/IconList';

export default function BookFerry() {

    const router = useRouter()
    const destinationList = ["Sri Vijaya Puram (Port Blair)", "Swaraj Dweep (Havelock)", "Shaheed Dweep (Neil Island)"]

    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [eptFrom, setEptFrom] = useState(false)
    const [eptTo, setEptTo] = useState(false)
    const [personSelectBox, setPersonSelectBox] = useState(false)
    const [adults, setAdults] = useState(1)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)
    
    const [departureDate, setDepartureDate] = useState("")
    const [eptDate, setEptDate] = useState(false)

    const [isDPactive, setDPactive] = useState(false)

    const islandCodes = {
        "Sri Vijaya Puram (Port Blair)": 1,
        "Swaraj Dweep (Havelock)": 2,
        "Shaheed Dweep (Neil Island)": 3
    }

    const travelDateTS = departureDate ? Math.floor(new Date(departureDate).getTime() / 1000) : ""

    const queryString = `triptype=st&dept=${selectedFrom && islandCodes[selectedFrom]}&dest=${selectedTo && islandCodes[selectedTo]}&td=${travelDateTS}&tra=${adults && adults}&tri=${infant && infant}`

    async function handleSearchFerry(){
        if(!selectedFrom){
            setEptFrom(true)
        }
        if(!selectedTo){
            setEptTo(true)
        }
        if(!departureDate){
            setEptDate(true)
        }
        if(selectedFrom && selectedTo && departureDate && adults > 0){
            router.push(`/book-ferry/list-ferry?${queryString}`)
        }
        return
    }

    function handlefromData(data){
        setSelectedFrom(data)
        setEptFrom(false)
    }

    function handletoData(data){
        setSelectedTo(data)
        setEptTo(false)
    }
    
    function selectDatefn(date){
        setDepartureDate(date)
        setDPactive(true)
        setEptDate(false)
    }
    
    function setDPtoggloe(){
        setDPactive(true);
    }
    function setDPoff(){
        if(!departureDate){
            setDPactive(false);
        }
    }
    function focusoff(){
        if(!departureDate){
            setDPactive(false);
        }
    }

    function personSelectToggle(){
        setPersonSelectBox(!personSelectBox)
    }

    function handleAdultMinus(){
        if(adults > 1){
            setAdults(adults - 1)
        }
    }

    function handleAdultPlus(){
        if(adults < 10){
            setAdults(adults + 1)
        }
    }

    // child selection function
    // function handleChildMinus(){
    //     if(child > 0){
    //         setChild(child - 1)
    //     }
    // }

    // function handleChildPlus(){
    //     if(child < 6){
    //         setChild(child + 1)
    //     }
    // }

    // infant selection function
    function handleInfantMinus(){
        if(infant > 0){
            setInfant(infant - 1)
        }
    }

    function handleInfantPlus(){
        if(infant < 6){
            setInfant(infant + 1)
        }
    }

    const filteredFromList = destinationList.filter(location => location !== selectedTo);
    const filteredToList = destinationList.filter(location => location !== selectedFrom);

    return (
    <>
        <div className={styles.selectFrame}>
            <Select isEmpty={eptFrom} datalist={filteredFromList} placeholder="Select From" iconValue="DepartureFrom" onData={handlefromData}/>
            <span className={`${styles.InputPlace} ${selectedFrom ? styles.InputPlaceValue : ''}`}>Departure Place</span>
        </div>
        <div className={styles.selectFrame}>
            <Select isEmpty={eptTo} datalist={filteredToList} placeholder="Select To"  iconValue="DestinationTo" onData={handletoData}/>
            <span className={`${styles.InputPlace} ${selectedTo ? styles.InputPlaceValue : ''}`}>Destination Place</span>
        </div>
        <div className={`${styles.dpINPframe} ${isDPactive ? styles.dpINPActive : ''}`} style={{borderColor: eptDate ? "#e00000" : ""}}>
            <DatePicker 
                showIcon
                toggleCalendarOnIconClick
                className={styles.dpINPbox} 
                onClickOutside={focusoff}
                onFocus={setDPtoggloe} 
                onBlur={setDPoff} 
                selected={departureDate} 
                onChange={selectDatefn}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                icon={ 
                    <div className={styles.dtPickerICO}><IconList Icon="DateCal"/></div>
                }    
            />
            <span className={`${styles.dpPlaceholder} ${isDPactive ? styles.dpPlacActive : ''}`}>Departure Date</span>
        </div>
        <div className={styles.paxSelector}>
            <div onClick={() => {personSelectToggle()}} className={styles.personSelect}>
                <span>{`Adult (${adults}), Infant (${infant})`}</span>
                {/* <span>{`Passenger (${adults}) (${child}) (${infant})`}</span> */}
                <IconList Icon="downArrowThin" />
            </div>
            <div style={{display: personSelectBox ? "flex" : ""}} className={styles.personSelectBox}>
                <div className={styles.adultSelect}>
                    <div className={styles.personSelectBoxLeft}>
                        <span>Adults</span>
                        <span>(Age +2)</span>
                    </div>
                    <div className={styles.personSelectBoxRight}>
                        <div className={`${adults === 1 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleAdultMinus()}}><IconList Icon="Minus" /></div>
                        <span className={styles.personValue}>{adults}</span>
                        <div  className={`${adults === 10 ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleAdultPlus()}}><IconList Icon="Plus" /></div>
                    </div>
                </div>
                {/* <div className={styles.childSelect}>
                    <div className={styles.personSelectBoxLeft}>
                        <span>Children</span>
                        <span>(Age 2 - 11)</span>
                    </div>
                    <div className={styles.personSelectBoxRight}>
                        <div className={`${child === 0 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleChildMinus()}}><IconList Icon="Minus" /></div>
                        <span className={styles.personValue}>{child}</span>
                        <div  className={`${child === 6 ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleChildPlus()}}><IconList Icon="Plus" /></div>
                    </div>
                </div> */}
                <div className={styles.infantSelect}>
                    <div className={styles.personSelectBoxLeft}>
                        <span>Infant</span>
                        <span>(Age 0 - 1)</span>
                    </div>
                    <div className={styles.personSelectBoxRight}>
                        <div className={`${infant === 0 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleInfantMinus()}}><IconList Icon="Minus" /></div>
                        <span className={styles.personValue}>{infant}</span>
                        <div  className={`${infant === 6 ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleInfantPlus()}}><IconList Icon="Plus" /></div>
                    </div>
                </div>
            </div>
        </div>
        <button className={styles.SearchFerryButton} onClick={() => {handleSearchFerry()}}>Search Ferry</button>
    </>
  )
}
