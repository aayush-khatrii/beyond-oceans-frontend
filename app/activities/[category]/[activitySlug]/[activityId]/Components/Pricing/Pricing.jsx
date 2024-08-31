"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Pricing.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { storeActivityCheckout } from '@/app/AppData/http/session'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

export default function Pricing(props) {

    const router = useRouter()
    const activityData = props.data

    const [selectedVer, setSelectedVer] = useState(activityData.Activity_Options[0].Option_Id)
    const [roomSelectBox, setRoomSelectBox] = useState(false)
    const [persons, setPersons] = useState(1)
    const [travelDate, setTravelDate] = useState()
    const [emptyDate, setEmptyDate] = useState(false)


    function filterOptions(optionId){
        return activityData.Activity_Options.filter(option => option.Option_Id === optionId)[0]
    }

    function roomSelectToggle(){
        setRoomSelectBox(!roomSelectBox)
    }


    function handlePersonsMinus(){
        if(persons > 1){
            setPersons(persons - 1)
        }
    }

    function handlePersonsPlus(){
        if(persons < 10){
            setPersons(persons + 1)
        }
    }


    function handleVariantSelect(index){
        setSelectedVer(index)
        props.optionChange(index)
    }

    function handleTravelDate(date){

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        setTravelDate(formattedDate)
        setEmptyDate(false)
    }

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    function crossIntPrice(priceMrp){
        const increaseAmount = priceMrp - activityData.Price.BOP;
        const discountPercent = Math.floor((increaseAmount / activityData.Price.BOP) * 100);
        const packageOptPrice = filterOptions(selectedVer).Option_Price
        const crossPrice = (packageOptPrice * (persons)) + ((packageOptPrice * (persons)) * discountPercent / 100)
        return Intl.NumberFormat('en-IN').format(crossPrice)
    }

    function awsUrlGen(fileSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/activities/${activityData.Activity_Id}/options/${fileSrc}`
    }

    async function handleBooknowBtn(){

        if(!travelDate){
            setEmptyDate(true)
            toast.error("Travel Date is Required")
            window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
            return
        }

        const bookingPriceCalc = persons * filterOptions(selectedVer).Option_Price

        const activityBookingParams = {
            activityId: activityData.Activity_Id,
            activityOptionId: selectedVer.toString(),
            travelDate: travelDate,
            traveler: {
                persons: persons,
            },
            activityPrice: filterOptions(selectedVer).Option_Price,
            bookingPrice: bookingPriceCalc
        }

        const {data} = await storeActivityCheckout(activityBookingParams)

        if(data.ststusCode === "200"){
            router.push("/activities/checkout")
        }
    }

    function handleInq(){
        props.handleInquiry()
    }

    const paxCount = `${persons} Person${persons > 1 ? 's' : ''}`;

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 7);

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
                    <span className={styles.bop}>₹{intPrice(filterOptions(selectedVer).Option_Price * (persons))}</span>
                    <div className={styles.mrpCut}>
                        <span className={styles.mrp}>₹{crossIntPrice(activityData.Price.MRP)}</span>
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
                            minDate={minDate}
                            placeholderText='Travel Date'
                        />
                        <IconList Icon="DateCal" />
                    </div>
                    <div className={styles.roomSelect}>
                        <div onClick={() => {roomSelectToggle()}} className={styles.roomSelectWrapper}>
                            <span>Persons { persons === 0 ? "" : `(${persons})`}</span>
                            <IconList Icon="FamilyPackage"/>
                        </div>
                        <div style={{display: roomSelectBox ? "flex" : ""}} className={styles.roomSelectBox}>
                            <div className={styles.roomSelectBoxLeft}>
                                <span>Persons (s)</span>
                                <span>{`(Age ${activityData.Activity_Age.Min_Age} - ${activityData.Activity_Age.Max_Age})`}</span>
                            </div>
                            <div className={styles.roomSelectBoxRight}>
                                <div className={`${persons === 1 ? styles.roomMinusLight : ""} ${styles.roomMinus}`} onClick={() => {handlePersonsMinus()}}><IconList Icon="Minus" /></div>
                                <span className={styles.personsValue}>{persons}</span>
                                <div  className={`${persons === 10 ? styles.roomPlusLight : ""} ${styles.roomPlus}`} onClick={() => {handlePersonsPlus()}}><IconList Icon="Plus" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.packOptionsCont}>
                <div className={styles.packOptionContTitle}><span>Select Package Option</span></div>
                <div className={styles.packVariantCont}>
                    {
                        activityData.Activity_Options.map((item, index) => (
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
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className={styles.bookNowBtn} onClick={() => {handleBooknowBtn()}}>Reserve Now</button>
                <div className={styles.inquiryBtnWrp}>
                    <button className={styles.inquiryBtn} onClick={() => {handleInq()}}>Inquiry Now <IconList Icon="RightArrow"/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
