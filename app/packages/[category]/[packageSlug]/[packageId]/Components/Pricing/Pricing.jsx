"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Pricing.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Pricing() {
    const varients = ["The Essential Package", "The Elite Package", "The Signature Package"]
    const [selectedVer, setSelectedVer] = useState(0)
    const [roomSelectBox, setRoomSelectBox] = useState(false)
    const [personSelectBox, setPersonSelectBox] = useState(false)
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(1)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)

    const mdxSource = "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"

    const [travelDate, setTravelDate] = useState()


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
        }
    }

    function handleRoomPlus(){
        if(rooms < 3){
            setRooms(rooms + 1)
        }
    }

    // adult selection function
    function handleAdultMinus(){
        if(adults > 1){
            setAdults(adults - 1)
        }
    }

    function handleAdultPlus(){
        if(adults < 3){
            setAdults(adults + 1)
        }
    }
    // child selection function
    function handleChildMinus(){
        if(child > 0){
            setChild(child - 1)
        }
    }

    function handleChildPlus(){
        if(child < 3){
            setChild(child + 1)
        }
    }

    // infant selection function
    function handleInfantMinus(){
        if(infant > 0){
            setInfant(infant - 1)
        }
    }

    function handleInfantPlus(){
        if(infant < 3){
            setInfant(infant + 1)
        }
    }

    function handleVariantSelect(index){
        setSelectedVer(index)
    }

    function handleTravelDate(date){
        setTravelDate(date)
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Reserve Your Spot At</span>
        </div>
        <div className={styles.bookingCont}>
            <div className={styles.priceCont}>
                <div className={styles.priceInfo}><span>Total price of 1 Adults</span></div>
                <div className={styles.mrpCont}>
                    <span className={styles.bop}>₹25,000</span>
                    <div className={styles.mrpCut}>
                        <span className={styles.mrp}>₹50,000</span>
                        <div className={styles.mrpCutline}></div>
                    </div>
                </div>
            </div>
            <div className={styles.dataSelection}>
                <div className={styles.topSelect}>
                    <div className={styles.dateSelect}>
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
                                <div className={`${adults === 1 ? styles.personMinusLight : ""} ${styles.personMinus}`} onClick={() => {handleAdultMinus()}}><IconList Icon="Minus" /></div>
                                <span className={styles.personValue}>{adults}</span>
                                <div  className={`${adults === 3 ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleAdultPlus()}}><IconList Icon="Plus" /></div>
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
                                <div  className={`${child === 3 ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleChildPlus()}}><IconList Icon="Plus" /></div>
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
                                <div  className={`${infant === 3 ? styles.personPlusLight : ""} ${styles.personPlus}`} onClick={() => {handleInfantPlus()}}><IconList Icon="Plus" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.packOptionsCont}>
                <div className={styles.packOptionContTitle}><span>Select Package Option</span></div>
                <div className={styles.packVariantCont}>
                    {
                        varients.map((item, index) => (
                            <div key={index} className={`${styles.variantList} ${index === selectedVer ? styles.selectedVariantList : ""}`} onClick={() => {handleVariantSelect(index)}}>
                            <div className={styles.radioBtnOut}><div className={styles.radioBtnInn}></div></div>
                            <div className={styles.variantTitle}>{item}</div>
                            <div className={styles.variantDesc}>
                                <MDXComp source={mdxSource} />
                            </div>
                            <div className={styles.variantPrice}>
                                <span className={styles.variantPriceTxt}>₹25,000</span>
                                <span className={styles.variantPriceDesc}>per person</span>
                            </div>
                            </div>
                        ))
                    }
                </div>
                <button className={styles.bookNowBtn}>Reserve Now</button>
                <div className={styles.inquiryBtnWrp}>
                    <button className={styles.inquiryBtn}>Inquiry Now <IconList Icon="RightArrow"/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
