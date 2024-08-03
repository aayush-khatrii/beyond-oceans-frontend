"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Pricing.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { storePackageCheckout } from '@/app/AppData/http/session'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

export default function Pricing(props) {

    const router = useRouter()
    const packageData = props.data

    const [selectedVer, setSelectedVer] = useState(packageData.Package_Options[0].Option_Id)
    const [roomSelectBox, setRoomSelectBox] = useState(false)
    const [personSelectBox, setPersonSelectBox] = useState(false)
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)
    const [adultsMax, setAdultsMax] = useState(0)
    const [childMax, setChildMax] = useState(2)
    const [infantMax, setInfantMax] = useState(1)
    const [travelDate, setTravelDate] = useState()
    const [emptyDate, setEmptyDate] = useState(false)


    function filterOptions(optionId){
        return packageData.Package_Options.filter(option => option.Option_Id === optionId)[0]
    }

    function roomSelectToggle(){
        setRoomSelectBox(!roomSelectBox)
        setPersonSelectBox(false)
    }

    function personSelectToggle(){
        setPersonSelectBox(!personSelectBox)
        setRoomSelectBox(false)
    }

    function handleRoomMinus(){
        if(rooms > 1){
            setRooms(rooms - 1)
            if(adults >= ((rooms - 1) * 3)){
                setAdults((rooms - 1) * 3)
                setAdultsMax((rooms - 1) * 3)
            }
            if(child >= ((rooms - 1) * 2) || adults >= ((rooms - 1) * 3)){
                setChild(rooms - 1)
                setChildMax(rooms - 1)
            }
            if(infant > rooms - 1){
                setInfant(rooms - 1)
                setInfantMax(rooms - 1)
            }
        }
    }

    function handleRoomPlus(){
        if(rooms < 3){
            setRooms(rooms + 1)
            setAdultsMax((rooms + 1) * 3)
            setChildMax((rooms + 1) * 2)
            setInfantMax(rooms + 1)
        }
    }

    // adult selection function
    function handleAdultMinus(){
        if(adults > 2){
            setAdults(adults - 1)
        }
    }

    function handleAdultPlus(){

        if(rooms === 1){
            setAdultsMax(3)
            if(adults < 3 && child <= 1 || adults < 2 && child <= 2){
                setAdults(adults + 1)
                if(adults + 1 === 3 && child === 1){
                    setChildMax(1)
                }
                if(adults + 1 === 2 && child === 2){
                    setChildMax(2)
                }
            }
            if(child === 1){
                setAdultsMax(3)
            }
            if(child === 2){
                setAdultsMax(2)
            }
        }
        if(rooms === 2){
            setAdultsMax(6)
            if(adults < 6 && child <= 2 || adults < 4 && child <= 4){
                setAdults(adults + 1)
                if(adults + 1 === 6 && child === 2){
                    setChildMax(2)
                }
                if(adults + 1 === 4 && child === 4){
                    setChildMax(4)
                }
            }
            if(child === 2){
                setAdultsMax(6)
            }
            if(child === 4){
                setAdultsMax(4)
            }
        }
        if(rooms === 3){
            setAdultsMax(9)
            if(adults < 9 && child <= 3 || adults < 6 && child <= 6){
                setAdults(adults + 1)
                if(adults + 1 === 9 && child === 3){
                    setChildMax(3)
                }
                if(adults + 1 === 6 && child === 6){
                    setChildMax(6)
                }
            }
            if(child === 3){
                setAdultsMax(9)
            }
            if(child === 6){
                setAdultsMax(6)
            }
        }
    }

    // child selection function
    function handleChildMinus(){
        if(child > 0){
            setChild(child - 1)
            if(child - 1 === 1){
                setAdultsMax(3)
            }
        }
    }

    function handleChildPlus(){
        if(rooms === 1){
            if(child < 2 && adults <= 2 || child < 1 && adults <= 3){
                setChild(child + 1)
                if(child + 1 === 2 && adults === 2){
                    setAdultsMax(2)
                }
                if(child + 1 === 1 && adults === 3){
                    setAdultsMax(3)
                }
            }
            if(adults === 2){
                setChildMax(2)
            }
            if(adults === 3){
                setChildMax(1)
            }
        }
        if(rooms === 2){
            if(child < 4 && adults <= 4 || child < 2 && adults <= 6){
                setChild(child + 1)
                if(child + 1 === 4 && adults === 4){
                    setAdultsMax(4)
                }
                if(child + 1 === 2 && adults === 6){
                    setAdultsMax(6)
                }
            }
            if(adults === 4){
                setChildMax(4)
            }
            if(adults === 6){
                setChildMax(2)
            }
        }
        if(rooms === 3){
            if(child < 6 && adults <= 6 || child < 3 && adults <= 9){
                setChild(child + 1)
                if(child + 1 === 6 && adults === 6){
                    setAdultsMax(6)
                }
                if(child + 1 === 3 && adults === 9){
                    setAdultsMax(9)
                }
            }
            if(adults === 6){
                setChildMax(6)
            }
            if(adults === 9){
                setChildMax(3)
            }
        }
    }

    // infant selection function
    function handleInfantMinus(){
        if(infant > 0){
            setInfant(infant - 1)
        }
    }

    function handleInfantPlus(){
        if(infant < rooms){
            setInfant(infant + 1)
            if(rooms === 1){
                setInfantMax(1)
            }
            if(rooms === 2){
                setInfantMax(2)
            }
            if(rooms === 3){
                setInfantMax(3)
            }
        }
    }

    function handleVariantSelect(index){
        setSelectedVer(index)
        props.optionChange(index)
    }

    function handleTravelDate(date){
        const newDate = new Date(date).toISOString().slice(0, 10);
        setTravelDate(newDate)
        setEmptyDate(false)
    }

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    function crossIntPrice(priceMrp){
        const increaseAmount = priceMrp - packageData.Price.BOP;
        const discountPercent = Math.floor((increaseAmount / packageData.Price.BOP) * 100);
        const packageOptPrice = filterOptions(selectedVer).Option_Price
        const crossPrice = (packageOptPrice * (adults + child)) + ((packageOptPrice * (adults + child)) * discountPercent / 100)
        return Intl.NumberFormat('en-IN').format(crossPrice)
    }

    function awsUrlGen(fileSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/${packageData.Package_Id}/options/${fileSrc}`
    }

    async function handleBooknowBtn(){

        if(!travelDate){
            setEmptyDate(true)
            toast.error("Travel Date is Required")
            window.scrollTo({ top: 2400, left: 0, behavior: 'smooth' });
            return
        }

        const bookingPriceCalc = (adults + child) * filterOptions(selectedVer).Option_Price

        const packageBookingParams = {
            packageId: packageData.Package_Id,
            packageOptionId: selectedVer.toString(),
            travelDate: travelDate,
            traveler: {
                rooms: rooms,
                adults: adults,
                child: child,
                infant: infant
            },
            packagePrice: filterOptions(selectedVer).Option_Price,
            bookingPrice: bookingPriceCalc
        }

        const {data} = await storePackageCheckout(packageBookingParams)

        if(data.ststusCode === "200"){
            router.push("/packages/checkout")
        }
    }

    function handleInq(){
        props.handleInquiry()
    }

    const paxCount = `${adults} Adult${adults > 1 ? 's' : ''}${child > 0 ? `, ${child} Child` : ''}`;

  return (
    <div className={styles.mainWrapper}>
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.title}>
            <span>Reserve Your Spot At</span>
        </div>
        <div className={styles.bookingCont}>
            <div className={styles.priceCont}>
                <div className={styles.priceInfo}><span>Total price of {paxCount}</span></div>
                <div className={styles.mrpCont}>
                    <span className={styles.bop}>₹{intPrice(filterOptions(selectedVer).Option_Price * (adults + child))}</span>
                    <div className={styles.mrpCut}>
                        <span className={styles.mrp}>₹{crossIntPrice(packageData.Price.MRP)}</span>
                        <div className={styles.mrpCutline}></div>
                    </div>
                </div>
            </div>
            <div className={styles.dataSelection}>
                <div className={styles.topSelect}>
                    <div className={styles.dateSelect} style={{borderColor: emptyDate ? "#ff0000" : ""}}>
                        <DatePicker
                            selected={travelDate}
                            onChange={(date) => {handleTravelDate(date)}}
                            className={styles.dpINPbox}
                            dateFormat="dd-MM-yyyy"
                            minDate={new Date()}
                            placeholderText='Travel Date'
                        />
                        <IconList Icon="DateCal" />
                    </div>
                    <div className={styles.roomSelect}>
                        <div onClick={() => {roomSelectToggle()}} className={styles.roomSelectWrapper}>
                            <span>Rooms { rooms === 0 ? "" : `(${rooms})`}</span>
                            <IconList Icon="RoomSelect" />
                        </div>
                        <div style={{display: roomSelectBox ? "flex" : ""}} className={styles.roomSelectBox}>
                            <div className={styles.roomSelectBoxLeft}>
                                <span>Room (s)</span>
                                <span>3 Person in 1 Room</span>
                            </div>
                            <div className={styles.roomSelectBoxRight}>
                                <div className={`${rooms === 1 ? styles.roomMinusLight : ""} ${styles.roomMinus}`} onClick={() => {handleRoomMinus()}}><IconList Icon="Minus" /></div>
                                <span className={styles.roomValue}>{rooms}</span>
                                <div  className={`${rooms === 3 ? styles.roomPlusLight : ""} ${styles.roomPlus}`} onClick={() => {handleRoomPlus()}}><IconList Icon="Plus" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomSelect}>
                    <div onClick={() => {personSelectToggle()}}  className={styles.personSelect}>
                        <span>{`Adult (${adults}), Children (${child}), Infant (${infant})`}</span>
                        <IconList Icon="FamilyPackage" />
                    </div>
                    <div style={{display: personSelectBox ? "flex" : ""}} className={styles.personSelectBox}>
                        <div className={styles.adultSelect}>
                            <div className={styles.personSelectBoxLeft}>
                                <span>Adults</span>
                                <span>(Age 12 - 100)</span>
                            </div>
                            <div className={styles.personSelectBoxRight}>
                                <div className={`${adults === 2 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleAdultMinus()}}><IconList Icon="Minus" /></div>
                                <span className={styles.personValue}>{adults}</span>
                                <div  className={`${adults === adultsMax ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleAdultPlus()}}><IconList Icon="Plus" /></div>
                            </div>
                        </div>
                        <div className={styles.childSelect}>
                            <div className={styles.personSelectBoxLeft}>
                                <span>Children</span>
                                <span>(Age 2 - 11)</span>
                            </div>
                            <div className={styles.personSelectBoxRight}>
                                <div className={`${child === 0 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleChildMinus()}}><IconList Icon="Minus" /></div>
                                <span className={styles.personValue}>{child}</span>
                                <div  className={`${child === childMax ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleChildPlus()}}><IconList Icon="Plus" /></div>
                            </div>
                        </div>
                        <div className={styles.infantSelect}>
                            <div className={styles.personSelectBoxLeft}>
                                <span>Infant</span>
                                <span>(Age 0 - 1)</span>
                            </div>
                            <div className={styles.personSelectBoxRight}>
                                <div className={`${infant === 0 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleInfantMinus()}}><IconList Icon="Minus" /></div>
                                <span className={styles.personValue}>{infant}</span>
                                <div  className={`${infant === infantMax ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleInfantPlus()}}><IconList Icon="Plus" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.packOptionsCont}>
                <div className={styles.packOptionContTitle}><span>Select Package Option</span></div>
                <div className={styles.packVariantCont}>
                    {
                        packageData.Package_Options.map((item, index) => (
                            <div key={index} className={`${styles.variantList} ${item.Option_Id === selectedVer ? styles.selectedVariantList : ""}`} onClick={() => {handleVariantSelect(item.Option_Id)}}>
                                <div className={styles.radioBtnOut}><div className={styles.radioBtnInn}></div></div>
                                <div className={styles.variantTitle}>{item.Option_Title}</div>
                                <div className={styles.variantDesc}>
                                    <MDXComp source={awsUrlGen(item.Option_Overview)} />
                                </div>
                                <div className={styles.variantFoot}>
                                    <div className={styles.variantPrice}>
                                        <span className={styles.variantPriceTxt}>₹{intPrice(item.Option_Price)}</span>
                                        <span className={styles.variantPriceDesc}>per person</span>
                                    </div>
                                    <div className={styles.variantMinimum}>
                                        <span className={styles.variantMinText}>Minimum 2 Pax Required</span>
                                    </div>
                                    {/* {   
                                        item.Min_Pax &&
                                        <div className={styles.variantMinimum}>
                                            <span className={styles.variantPriceDesc}>Minimum {item.Min_Pax} Required</span>
                                        </div>
                                    } */}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className={styles.bookNowBtn} onClick={() => {handleInq()}}>Reserve Now</button>
                <div className={styles.inquiryBtnWrp}>
                    <button className={styles.inquiryBtn} onClick={() => {handleInq()}}>Inquiry Now <IconList Icon="RightArrow"/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
