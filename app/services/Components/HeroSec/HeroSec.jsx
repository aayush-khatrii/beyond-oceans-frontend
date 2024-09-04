'use client'
import Image from 'next/image'
import styles from './HeroSec.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

export default function HeroSec() {

    const minDate = new Date().setDate(new Date().getDate() + 7);

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [travelDate, setTravelDate] = useState()

    const [errName, setErrName] = useState(false)
    const [errPhone, setErrPhone] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [emptyDate, setEmptyDate] = useState(false)

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

    function handleTravelDate(date){

        const year = date && date.getFullYear();
        const month = date && String(date.getMonth() + 1).padStart(2, '0');
        const day = date && String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        setTravelDate(formattedDate)
        setEmptyDate(false)
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.imgWrapper}>
            <Image
                src="/assets/destination/destination_hero.webp"
                fill={true}
                sizes="100%"
                priority={true}
                style={{zIndex: "-1", objectFit:"cover"}}
            />
        </div>
        <div className={styles.imageOverlay}></div>
        <div className={styles.heroCont}>
            <h1 className={styles.heroTitle}>
                Popular Services <br />
                in Andaman and Nicobar
            </h1>
            <h4 className={styles.heroDesc}>
                Take advantage of our timely, professional services while unwinding
            </h4>
        </div>
        <div className={styles.heroCTAComp}>
            <div className={styles.ctaTitle}>
                <span>Get the Best Professional Services by Experts!</span>
            </div>
            <div className={styles.ctaFields}>
                <div className={styles.inpWrapper}>
                    <input className={styles.inpBox} style={{borderColor: errName ? "#ff0000" : ""}} type="text" value={name} onChange={(e) => handleName(e)} placeholder='Enter Your Name'/>
                </div>
                <div className={styles.inpWrapper}>
                    <input className={styles.inpBox} style={{borderColor: errPhone ? "#ff0000" : ""}} type="text" value={phone} onChange={(e) => handlePhone(e)} placeholder='Enter Phone Number' />
                </div>
                <div className={styles.inpWrapper}>
                    <input className={styles.inpBox} style={{borderColor: errEmail ? "#ff0000" : ""}} type="text" value={email} onChange={(e) => handleEmail(e)} placeholder='Enter Email ID' />
                </div>
                <div className={styles.inpWrapper}>
                    <DatePicker
                        selected={travelDate}
                        onChange={(date) => {handleTravelDate(date)}}
                        className={`${styles.dpINPbox} ${emptyDate ? styles.dpINPboxEpty : ""}`}
                        dateFormat="dd-MM-yyyy"
                        minDate={minDate}
                        placeholderText='Departure Date'
                    />
                </div>
                <button className={styles.submitBTN}>Submit Enquiry</button>
            </div>
        </div>
    </div>
  )
}
