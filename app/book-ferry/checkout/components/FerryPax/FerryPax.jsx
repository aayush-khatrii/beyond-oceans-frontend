import { useState } from 'react';
import styles from './FerryPax.module.css'
import Select from '@/app/AppData/components/Select/Select';
import contriesData from '@/app/AppData/Data/contries.json'
import IconList from '@/app/AppData/components/IconComponent/IconList';
import { Icon } from '@iconify/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FerryPax(props) {

    const Ferry_Operator = props.sessionData.Ferry_Checkout.Ferry_Operator
    const traveler = props.sessionData.Ferry_Checkout.Traveler
    const selectedSeat = props.sessionData.Ferry_Checkout.Ferry_Data.Selected_Seats
    // const countryNames = contrydata.map(country => country.name);

    const adultTitles = ["Mr", "Master", "Mrs", "Miss"]
    const infantTitles = ["Master", "Miss"]

    const initialTravelerState = (count) => (
        Array(count).fill({
            title: '',
            age: '',
            name: '',
            country: 'India',
            passportNumber: '',
            passportExpiryDate: '',
        })
    );

    const combinedSeats = Ferry_Operator === "NTK" ? [...selectedSeat.pClass, ...selectedSeat.bClass] : [];

    // Initialize state
    const [travelersData, setTravelerData] = useState(() => {
        const adultsWithSeats = initialTravelerState(traveler.Adults).map((traveler, index) => (
            combinedSeats.length > 0
            ? { ...traveler, seat: combinedSeats[index] || null } // Add seat if combinedSeats is not empty
            : traveler
        ))

        const infants = initialTravelerState(traveler.Infants) 

        return {
            adults: adultsWithSeats,
            infants,
        };
    });

    const paxErrorData = props.travelersDataError

    const[isContryList, setIsContryList] = useState({pType: '', pIndex: NaN})
    const[selectedIndex, setSelectedIndex] = useState(-1);
    const[searchQuery, setSearchQuery] = useState('');
    const[contrydata, setCountryList] = useState(contriesData);
    const[isEmptCtrySelect, setIsEmptCtrySelect] = useState(false)

    const nameRegex = /^[a-zA-Z\s]*$/;
    const passportNumberRegex = /^[a-zA-Z0-9]{6,10}$/;

    function toggleContry(pType, pIndex){
        if(isContryList.pType === pType && isContryList.pIndex === pIndex){
            setIsContryList({pType: '', pIndex: NaN})
            return
        }
        setIsContryList({pType: pType, pIndex: pIndex})
    }

    function handleCtrySelect(type, index, ctryName){
        setIsContryList({pType: '', pIndex: NaN})
        const updatedTravelers = [...travelersData[type]];
        updatedTravelers[index] = {
          ...updatedTravelers[index],
          ["country"]: ctryName,
        };
        setTravelerData((prevState) => ({
          ...prevState,
          [type]: updatedTravelers,
        }));
        props.paxData(index, type, "country", ctryName)
        setIsEmptCtrySelect(false)
        setSearchQuery('')
        setCountryList(contriesData)
    }

    function handleCtrySearch(e){
        const query = e.target.value.toLowerCase();
        setSelectedIndex(0)
        setSearchQuery(query)

        const filteredCountries = contrydata.filter((country) =>
            country.name.toLowerCase().includes(query) ||
            country.code.toLowerCase().includes(query)
        );

        setCountryList(filteredCountries);
        if(filteredCountries.length === 0 || !query){
            setCountryList(contriesData);
        }
    }

    const handleKeyDown = (type, index, e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(selectedIndex < contrydata.length - 1 ? selectedIndex + 1 : selectedIndex)
        }

        if (e.key === 'ArrowUp') {
            setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0)
        }

        if (e.key === 'Enter') {
            setIsContryList({pType: '', pIndex: NaN})
            const updatedTravelers = [...travelersData[type]];
            updatedTravelers[index] = {
              ...updatedTravelers[index],
              ["country"]: contrydata[selectedIndex].name,
            };
            setTravelerData((prevState) => ({
              ...prevState,
              [type]: updatedTravelers,
            }));
            props.paxData(index, type, "country", contrydata[selectedIndex].name)
            setIsEmptCtrySelect(false)
            setSearchQuery('')
            setCountryList(contriesData)
            setSelectedIndex(0)
        }
    }

    function travelerTitleHandler(type, index, value){

        const updatedTravelers = [...travelersData[type]];
        updatedTravelers[index] = {
          ...updatedTravelers[index],
          ["title"]: value,
        };
        setTravelerData((prevState) => ({
          ...prevState,
          [type]: updatedTravelers,
        }));
        props.paxData(index, type, "title", value)
        props.travelersDataErrorHandle(index, type, "title", false)
    }

    function travelerNameHandler(type, index, value){

        if(nameRegex.test(value)){
            const updatedTravelers = [...travelersData[type]];
            updatedTravelers[index] = {
              ...updatedTravelers[index],
              ["name"]: value,
            };
            setTravelerData((prevState) => ({
              ...prevState,
              [type]: updatedTravelers,
            }));
            props.paxData(index, type, "name", value)
        }
        if(value.length > 3){
            props.travelersDataErrorHandle(index, type, "name", false)
            // props.contectDataError("name" ,false)
        }
    }

    function travelerAgeHandler(type, index, value){
        if(type === "infants"){
            const date = new Date(value);
            const formattedDate = date.toLocaleDateString('en-CA');

            const updatedTravelers = [...travelersData[type]];
            updatedTravelers[index] = {
            ...updatedTravelers[index],
            ["age"]: formattedDate,
            };
            setTravelerData((prevState) => ({
            ...prevState,
            [type]: updatedTravelers,
            }));
            props.paxData(index, type, "age", formattedDate)
            props.travelersDataErrorHandle(index, type, "age", false)
        }
        if(value >= 2 && value < 151){
            const updatedTravelers = [...travelersData[type]];
            updatedTravelers[index] = {
            ...updatedTravelers[index],
            ["age"]: value,
            };
            setTravelerData((prevState) => ({
            ...prevState,
            [type]: updatedTravelers,
            }));
            props.paxData(index, type, "age", value)
            props.travelersDataErrorHandle(index, type, "age", false)
        }
    }

    function travelerPassNumHandler(type, index, value){
        if(passportNumberRegex.test(value)){
            const updatedTravelers = [...travelersData[type]];
            updatedTravelers[index] = {
              ...updatedTravelers[index],
              ["passportNumber"]: value,
            };
            setTravelerData((prevState) => ({
              ...prevState,
              [type]: updatedTravelers,
            }));
            props.paxData(index, type, "passportNumber", value)
        }
        if(value.length > 5){
            props.travelersDataErrorHandle(index, type, "passportNumber", false)
        }
    }

    function travelerPassExpHandler(type, index, value){
        const newDate = new Date(value).toISOString().slice(0, 10);
        const updatedTravelers = [...travelersData[type]];
        updatedTravelers[index] = {
          ...updatedTravelers[index],
          ["passportExpiryDate"]: newDate,
        };
        setTravelerData((prevState) => ({
          ...prevState,
          [type]: updatedTravelers,
        }));
        props.paxData(index, type, "passportExpiryDate", value)
        props.travelersDataErrorHandle(index, type, "passportExpiryDate", false)
    }
    
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.leftCut}></div>
        <div className={styles.rightCut}></div>
        <div className={styles.title}>Add Passenger Details</div>
        <div className={styles.desedSep}></div>
        <div className={styles.mainContent}>
            <div className={styles.paxDeatilsLists}>
                {
                    travelersData.adults.map((item, adultIndex) => (
                        <div className={styles.paxList} key={adultIndex} >
                            <div className={styles.paxLable}>
                                <span>Adult {adultIndex + 1}</span>
                                {item.seat && <span className={styles.seatInfo}>(Seat No. {item.seat.number} in {item.seat.tier === "P" ? "Luxury Class" : item.seat.tier === "B" ? "Royal Class" : ""})</span>}
                            </div>
                            <div className={styles.paxDeatilFields}>
                                <div className={styles.paxTitleField}>
                                    <Select datalist={adultTitles} placeholder="Title" onData={(dataVal) => {travelerTitleHandler("adults", adultIndex, dataVal)}} isEmpty={paxErrorData.adults[adultIndex]?.title} />   
                                </div>
                                <div className={styles.paxNameField}>
                                    <input className={styles.inpBox} type="text" defaultValue={item.name} style={{borderColor: paxErrorData.adults[adultIndex]?.name ? "#ff0000" : ""}} placeholder='Full Name' onBlur={(e) => {travelerNameHandler("adults", adultIndex, e.target.value)}} />
                                </div>
                                <div className={styles.paxAgeField}>
                                    <input className={styles.inpBox} type="number" defaultValue={item.age} style={{borderColor: paxErrorData.adults[adultIndex]?.age ? "#ff0000" : ""}} placeholder='Age' onChange={(e) => {travelerAgeHandler("adults", adultIndex, e.target.value)}} />
                                </div>
                                <div className={styles.paxCountryField}>
                                    <div className={styles.countryListBox}>
                                        <div className={styles.contrySlctCont} style={{borderColor: isEmptCtrySelect ? '#ff0000' : ''}}>
                                            <div className={styles.seletedCtryCont} onClick={() => {toggleContry("adults", adultIndex)}}>
                                                {
                                                    item.country ? (<>
                                                    <div className={styles.ctryValue}>
                                                        <span className={styles.ctryNameValue}>{item.country}</span>
                                                        <IconList Icon={"downArrowThin"} />
                                                    </div>
                                                    </>) : (<div className={styles.ctryPlace}><span>Country</span><IconList Icon={"downArrowThin"} /></div>)
                                                }
                                            </div>
                                            <div className={styles.optionsList} style={{display: isContryList.pType === "adults" && isContryList.pIndex === adultIndex ? 'block' : ''}}>
                                                    <div className={styles.srchInpCont}>
                                                        <input type="text" value={searchQuery} onKeyDown={(e) => handleKeyDown("adults", adultIndex, e)} placeholder='Country Name' className={styles.ctrySearch} onChange={(e) => handleCtrySearch(e)}/>
                                                        <div className={styles.srchIcon}><IconList Icon="searchIcon" /></div>
                                                    </div>
                                                <ol>
                                                    {
                                                        contrydata.map((country, index) => (
                                                            <li key={index} className={styles.listItem} >
                                                                <div className={`${styles.contryListCont} ${selectedIndex === index ? styles.SlctcontryListCont : ''}`} onClick={() => handleCtrySelect("adults", adultIndex, country.name) }>
                                                                    <div className={`${styles.ctryIconName} listFlags`}>
                                                                        <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} />
                                                                        <span className={styles.countryListName}>{country.name}</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                item.country !== "India" &&
                                <div className={styles.paxForeignerDeatils}>
                                    <div className={styles.paxPassport}>
                                        <input className={styles.inpBox} type="text" style={{borderColor: paxErrorData.adults[adultIndex]?.passportNumber ? "#ff0000" : ""}} value={item.passportNumber} placeholder='Passport No.' onChange={(e) => {travelerPassNumHandler("adults", adultIndex, e.target.value)}} />
                                    </div>
                                    <div className={styles.paxPassportExp}>
                                        <DatePicker
                                            color={paxErrorData.adults[adultIndex]?.passportExpiryDate ? "#ff0000" : ""}
                                            selected={item.passportExpiryDate}
                                            onChange={(date) => {travelerPassExpHandler("adults", adultIndex, date)}}
                                            className={`${styles.dpINPbox} ${paxErrorData.adults[adultIndex]?.passportExpiryDate ? styles.emptyDateBox : ""}`}
                                            dateFormat="dd-MM-yyyy"
                                            minDate={new Date()}
                                            placeholderText='DD-MM-YYYY'
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }
                {
                    travelersData.infants.map((item, infantIndex) => (
                        <div className={styles.paxList} key={infantIndex} >
                            <div className={styles.paxLable}>
                                <span>Infant {infantIndex + 1}</span>
                            </div>
                            <div className={styles.paxDeatilFields}>
                                <div className={styles.paxTitleField}>
                                    <Select datalist={infantTitles} placeholder="Title" onData={(dataVal) => {travelerTitleHandler("infants", infantIndex, dataVal)}} isEmpty={paxErrorData.infants[infantIndex]?.title}/>
                                </div>
                                <div className={styles.paxNameField}>
                                    <input className={styles.inpBox} type="text" style={{borderColor: paxErrorData.infants[infantIndex]?.name ? "#ff0000" : ""}} value={item.name} placeholder='Full Name' onChange={(e) => {travelerNameHandler("infants", infantIndex, e.target.value)}} />
                                </div>
                                <div className={styles.Infantdob}>
                                    <DatePicker
                                        selected={item.age}
                                        onChange={(date) => {travelerAgeHandler("infants", infantIndex, date)}}
                                        className={`${styles.dpINPbox} ${styles.dpINPboxInfDOB} ${paxErrorData.infants[infantIndex]?.age ? styles.emptyDateBox : ""}`}
                                        dateFormat="dd-MM-yyyy"
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        minDate={(function() {
                                            const date = new Date();
                                            if(Ferry_Operator === "MAK"){
                                                date.setFullYear(date.getFullYear() - 2);
                                                date.setDate(date.getDate() + 1);
                                            }
                                            if(Ferry_Operator === "NTK"){
                                                date.setFullYear(date.getFullYear() - 2);
                                            }

                                            return date;
                                        })()}
                                        maxDate={new Date()}
                                        placeholderText='DOB'
                                    />
                                </div>
                                <div className={styles.paxCountryField}>
                                    <div className={styles.countryListBox}>
                                        <div className={styles.contrySlctCont} style={{borderColor: isEmptCtrySelect ? '#ff0000' : ''}}>
                                            <div className={styles.seletedCtryCont} onClick={() => {toggleContry("infants", infantIndex)}}>
                                                {
                                                    item.country ? (<>
                                                    <div className={styles.ctryValue}>
                                                        <span className={styles.ctryNameValue}>{item.country}</span>
                                                        <IconList Icon={"downArrowThin"} />
                                                    </div>
                                                    </>) : (<div className={styles.ctryPlace}><span>Country</span><IconList Icon={"downArrowThin"} /></div>)
                                                }
                                            </div>
                                            <div className={styles.optionsList} style={{display: isContryList.pType === "infants" && isContryList.pIndex === infantIndex ? 'block' : ''}}>
                                                    <div className={styles.srchInpCont}>
                                                        <input type="text" value={searchQuery} onKeyDown={(e) => handleKeyDown("infants", infantIndex, e)} placeholder='Country Name' className={styles.ctrySearch} onChange={(e) => handleCtrySearch(e)}/>
                                                        <div className={styles.srchIcon}><IconList Icon="searchIcon" /></div>
                                                    </div>
                                                <ol>
                                                    {
                                                        contrydata.map((country, index) => (
                                                            <li key={index} className={styles.listItem} >
                                                                <div className={`${styles.contryListCont} ${selectedIndex === index ? styles.SlctcontryListCont : ''}`} onClick={() => handleCtrySelect("infants", infantIndex, country.name) }>
                                                                    <div className={`${styles.ctryIconName} listFlags`}>
                                                                        <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} />
                                                                        <span className={styles.countryListName}>{country.name}</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                item.country !== "India" &&
                                <div className={styles.paxForeignerDeatils}>
                                    <div className={styles.paxPassport}>
                                        <input className={styles.inpBox} type="text" style={{borderColor: paxErrorData.infants[infantIndex]?.passportNumber ? "#ff0000" : ""}} value={item.passportNumber} placeholder='Passport No.' onChange={(e) => {travelerPassNumHandler("infants", infantIndex, e.target.value)}} />
                                    </div>
                                    <div className={styles.paxPassportExp}>
                                        <DatePicker
                                            selected={item.passportExpiryDate}
                                            onChange={(date) => {travelerPassExpHandler("infants", infantIndex, date)}}
                                            className={`${styles.dpINPbox} ${paxErrorData.infants[infantIndex]?.passportExpiryDate ? styles.emptyDateBox : ""}`}
                                            dateFormat="dd-MM-yyyy"
                                            minDate={new Date()}
                                            placeholderText='DD-MM-YYYY'
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }

                {/* {
                    travelersData.infants.map((item, index) => (
                        <div className={styles.paxAdultList}>
                            <div className={styles.paxAdultLable}>
                                <span>Infant {index + 1}</span>
                            </div>
                            <div className={styles.paxAdultDeatil}>
                                <div className={styles.paxAdultTitle}>
                                    <Select datalist={adultTitles} placeholder="Title"/>
                                </div>
                                <div className={styles.paxAdultName}></div>
                                <div className={styles.paxAdultAge}></div>
                                <div className={styles.paxAdultCountry}></div>
                            </div>
                        </div>
                    ))
                } */}
            </div>
        </div>
    </div>
  )
}
