import Image from 'next/image'
import styles from './InqPopup.module.css'
import Select from './Select/Select'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconList from '@/app/AppData/components/IconComponent/IconList';
import { storePackageInq } from '@/app/AppData/http/inq';
import { Toaster, toast } from 'sonner'
import {toast as rhtToast, Toaster as RhtToast } from 'react-hot-toast';
import { AxiosError } from 'axios';
import Sended from './Sended/Sended';

export default function InqPopup({packageId, packageOptionId, onPopupClose}) {

    const DurationDL = ["2 Day and 3 Night", "3 Day and 4 Night", "4 Day and 5 Night", "5 Day and 6 Night", "6 Day and 7 Night", "7 Day and 8 Night", "8 Day and 9 Night", "9 Day and 10 Night", ]
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [tripDuration, setTripDuration] = useState()
    const [travelDate, setTravelDate] = useState()

    const [errName, setErrName] = useState(false)
    const [errPhone, setErrPhone] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [isSelectEmpty, setIsSelectEmpty] = useState(false)
    const [emptyDate, setEmptyDate] = useState(false)

    const [adult, setAdult] = useState(1)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)
    const [disableBtn, setDisableBtn] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const nameRegex = /^[a-zA-Z\s]*$/;
    const phoneRegex = /^[\d+-]{0,15}$/;

    const nameRegexM = /^(?=.*\S)[a-zA-Z\s]{3,}$/;
    const phoneRegexM = /^(?=.*\d)[\d+-]{6,15}$/;
    const emailRegexM = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    function handleName(e){
        const value = e.target.value
        if(nameRegex.test(value)){
            setName(value)
        }
        if(value.length > 3){
            setErrName(false)
        }
    }

    function handlePhone(e){
        const value = e.target.value
        if(phoneRegex.test(value)){
            setPhone(value)
        }
        if(value.length > 6){
            setErrPhone(false)
        }
    }

    function handleEmail(e){
        const value = e.target.value
        setEmail(value)
        if(value.length > 3){
            setErrEmail(false)
        }
    }

    function handlePhone(e){
        const value = e.target.value
        if(phoneRegex.test(value)){
            setPhone(value)
        }
        if(value.length > 6){
            setErrPhone(false)
        }
    }

    function hendleSelectData(data){
        setTripDuration(data)
        setIsSelectEmpty(!data)
    }

    function handleTravelDate(date){
        const newDate = new Date(date).toISOString().slice(0, 10);
        setTravelDate(newDate)

        setEmptyDate(false)
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

    function handleChildMinus(){
        if(child > 0){
            setChild(child - 1)
        }
    }
    
    function handleChildPlus(){
        if(child < 6){
            setChild(child + 1)
        }
    }

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

    async function handleInquiry(){
        setErrName(!(name.length > 3))
        setErrPhone(!(phone.length > 6))
        setErrEmail(!(email.length > 3))
        setIsSelectEmpty(!tripDuration)
        setEmptyDate(!travelDate)

        if(!nameRegexM.test(name)){
            setErrName(true)
        }

        if(!phoneRegexM.test(phone)){
            setErrPhone(true)
        }

        if(!emailRegexM.test(email)){
            setErrEmail(true)
        }

        if(!nameRegexM.test(name) || !phoneRegexM.test(phone) || !emailRegexM.test(email) || !tripDuration || !travelDate){
            return
        }
        
        if(nameRegexM.test(name) && phoneRegexM.test(phone) && emailRegexM.test(email) && tripDuration && travelDate){
            
            const packageFormParams = {
                "packageId": packageId,
                "packageOptionId": packageOptionId,
                "name": name,
                "phonenumber": phone,
                "email": email,
                "tripDate": travelDate,
                "tripDuration": tripDuration,
                "traveler":{
                    "adults": adult,
                    "child": child,
                    "infant": infant
                }
            }

            let loadingToastId
            try {
                setDisableBtn(true)
                loadingToastId = rhtToast.loading('Sending OTP...');

                const {data} = await storePackageInq(packageFormParams)
                
                toast.success("Inquiry has been recived")
                setIsSuccess(true)
                rhtToast.remove(loadingToastId)
                setDisableBtn(false)
            } catch (error) {
                rhtToast.remove(loadingToastId)
                setDisableBtn(false)
                if(error instanceof AxiosError){
                    toast.message(error.code, {
                        description: error.message,
                    })
                    toast.error("Failed. Try again leter")
                }
                if(error.response?.data){  
                    toast.message(error.response?.data.message, {
                        description: error.response?.data.errorCode,
                    })
                    toast.error(error.response?.data.message)
                    return
                }
                return
            }
        }
    }

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 7);

    function handleSendClose(){
        setIsSuccess(!isSuccess)
    }

    return (
        <div className={styles.mainWrapper}>
            {isSuccess && <Sended onClose={handleSendClose}/>}
            <RhtToast toastOptions={{ style: { marginBottom: '20px', marginRight: '20px', fontFamily: "DM Sans", fontSize: "18px", fontWeight: "500" }}} position="bottom-right" />
            <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
            <div className={styles.subWrapper}>
                <div className={styles.inqPopupleft}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/popup/package_inquiry.jpg"
                            fill={true}
                            sizes='100%'
                            unoptimized
                            alt="Package Inquiry"
                            style={{zIndex: "1" ,objectFit:"cover"}}
                        />  
                    </div>
                </div>
                <div className={styles.inqPopupRight}>
                    <button className={styles.closeBtn} onClick={onPopupClose}><IconList Icon="Close" /></button>
                    <div className={styles.leftPopupSectitle}>
                        Make An Enquiry For Andaman Trip!
                    </div>
                    <div className={styles.inputList}>
                        <div className={styles.inpBox}>
                            <input style={{borderColor: errName ? "#ff0000" : ""}} type="text" value={name} onChange={(e) => handleName(e)} placeholder='Enter Your Full Name' />
                        </div>
                        <div className={styles.inpBox}>
                            <input style={{borderColor: errPhone ? "#ff0000" : ""}} type="text" value={phone} onChange={(e) => handlePhone(e)} placeholder='Enter Your Phone Number' />
                        </div>
                        <div className={styles.inpBox}>
                            <input style={{borderColor: errEmail ? "#ff0000" : ""}} type="text" value={email} onChange={(e) => handleEmail(e)} placeholder='Enter Your Email ID' />
                        </div>
                        <div className={styles.dateSelect} style={{borderColor: emptyDate ? "#ff0000" : ""}}>
                        <DatePicker
                            selected={travelDate}
                            onChange={(date) => {handleTravelDate(date)}}
                            className={styles.dpINPbox}
                            dateFormat="dd-MM-yyyy"
                            minDate={minDate}
                            placeholderText='Select Your Travel Date'
                        />
                        </div>
                        <div className={styles.inpBox}>
                            <Select datalist={DurationDL} placeholder="Select Trip Duration" onData={hendleSelectData} isEmpty={isSelectEmpty}/>
                        </div>
                    </div>
                    <div className={styles.paxSelector}>
                        <div className={styles.adultSelect}>
                            <div className={styles.fieldLabel}><span>Adult(s)</span></div>
                            <div className={styles.adultSelectBox}>
                                <div className={styles.personMinus} onClick={() => {handleAdultMinus()}}><IconList Icon="Minus"/></div>
                                <div className={styles.personValue}>{adult}</div>
                                <div className={styles.personPlus}  onClick={() => {handleAdultPlus()}}><IconList Icon="Plus"/></div>
                            </div>
                        </div>
                        <div className={styles.infantSelect}>
                            <div className={styles.fieldLabel}><span>Child(s)</span></div>
                            <div className={styles.infantSelectBox}>
                                <div className={styles.personMinus} onClick={() => {handleChildMinus()}}><IconList Icon="Minus"/></div>
                                <div className={styles.personValue}>{child}</div>
                                <div className={styles.personPlus} onClick={() => {handleChildPlus()}}><IconList Icon="Plus"/></div>
                            </div>
                        </div>
                        <div className={styles.infantSelect}>
                            <div className={styles.fieldLabel}><span>Infant(s)</span></div>
                            <div className={styles.infantSelectBox}>
                                <div className={styles.personMinus} onClick={() => {handleInfantMinus()}}><IconList Icon="Minus"/></div>
                                <div className={styles.personValue}>{infant}</div>
                                <div className={styles.personPlus} onClick={() => {handleInfantPlus()}}><IconList Icon="Plus"/></div>
                            </div>
                        </div>
                    </div>
                    <button disabled={disableBtn} onClick={() => {handleInquiry()}} className={styles.callBtn}>Request A Call Back</button>
                </div>
            </div>
        </div>
    )
}
