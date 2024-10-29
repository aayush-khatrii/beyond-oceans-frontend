import { useEffect, useState } from 'react';
import styles from './ContectComp.module.css'
import { useAppDispatch, useAppSelector } from '@/app/AppData/lib/store/hooks';

export default function ContectComp(props) {

    const userData = useAppSelector((state) => state.user.userData)
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const [textArea, setTextArea] = useState("")

    const errName = props.errorDeatil.errName
    const errEmail = props.errorDeatil.errEmail
    const errPhone = props.errorDeatil.errPhone
    const errCity = props.errorDeatil.errCity
    const errState = props.errorDeatil.errState
    const errAddress = props.errorDeatil.errAddress
    const errTextArea = props.errorDeatil.errTextArea

    const nameRegex = /^[a-zA-Z\s]*$/;
    const addressRegex = /^[a-zA-Z0-9\s,\/\-]*$/;
    const phoneRegex = /^\d{0,15}$/;

    useEffect(() => {
        setName(userData.name ? userData.name : "")
        setEmail(userData.email ? userData.email : "")
        setPhone(userData.phone ? userData.phone : "")
        setCity(userData.address.User_City ? userData.address.User_City : "")
        setState(userData.address.User_State ? userData.address.User_State : "")
        setAddress(userData.address.User_Address ? userData.address.User_Address : "")
        props.contectData("name", userData.name ? userData.name : "")
        props.contectData("email", userData.email ? userData.email : "")
        props.contectData("phone", userData.phone ? userData.phone : "")
        props.contectData("city", userData.address.User_City ? userData.address.User_City : "")
        props.contectData("state", userData.address.User_State ? userData.address.User_State : "")
        props.contectData("address", userData.address.User_Address ? userData.address.User_Address : "")
    },[userData])

    function handleName(e){
        const value = e.target.value
        if(nameRegex.test(value)){
            setName(value)
            props.contectData("name" ,value)
        }
        if(value.length > 3){
            props.contectDataError("name" ,false)
        }
    }

    function handleEmail(e){
        const value = e.target.value
        setEmail(value)
        props.contectData("email" ,value)
        if(value.length > 3){
            props.contectDataError("email" ,false)
        }
    }

    function handlePhone(e){
        const value = e.target.value
        if(phoneRegex.test(value)){
            setPhone(value)
            props.contectData("phone" ,value)
        }
        if(value.length > 6){
            props.contectDataError("phone" ,false)
        }
    }

    function handleCity(e){
        const value = e.target.value
        if(nameRegex.test(value)){
            setCity(value)
            props.contectData("city" ,value)
        }
        if(value.length >= 3){
            props.contectDataError("city" ,false)
        }
    }

    function handleState(e){
        const value = e.target.value
        if(nameRegex.test(value)){
            setState(value)
            props.contectData("state" ,value)
        }
        if(value.length > 3){
            props.contectDataError("state" ,false)
        }
    }

    function handleAddress(e){
        const value = e.target.value
        if(addressRegex.test(value)){
            setAddress(value)
            props.contectData("address" ,value)
        }
        if(value.length > 10){
            props.contectDataError("address" ,false)
        }
    }
    
    function handleTextArea(e){
        const value = e.target.value
        if(addressRegex.test(value)){
            setTextArea(value)
            props.contectData("textarea" ,value)
        }
        if(value.length === 0){
            props.contectDataError("textarea" ,false)
        }
        if(value.length > 10){
            props.contectDataError("textarea" ,false)
        }
    }
    
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Contact Details</div>
        <div className={styles.mainContent}>
            <div className={styles.inputRow}>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Name</span>
                    <input className={styles.inpBox} style={{borderColor: errName ? "#ff0000" : ""}} value={name} onChange={(e) => handleName(e)} type="text" placeholder='Eg. John Doe'/>
                </div>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Email</span>
                    <input className={styles.inpBox} style={{borderColor: errEmail ? "#ff0000" : ""}} value={email} onChange={(e) => handleEmail(e)} type="text" placeholder='Eg. johndoe@gmail.com'/>
                </div>
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Alternate Phone Number</span>
                    <input className={styles.inpBox} style={{borderColor: errPhone ? "#ff0000" : ""}} value={phone} onChange={(e) => handlePhone(e)} type="text" placeholder='Eg. 911234567890'/>
                </div>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>City</span>
                    <input className={styles.inpBox} style={{borderColor: errCity ? "#ff0000" : ""}} value={city} onChange={(e) => handleCity(e)} type="text" placeholder='Eg. Bangalore'/>
                </div>
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>State</span>
                    <input className={styles.inpBox} style={{borderColor: errState ? "#ff0000" : ""}} value={state} onChange={(e) => handleState(e)} type="text" placeholder='Eg. Karnataka'/>
                </div>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Address</span>
                    <input className={styles.inpBox} style={{borderColor: errAddress ? "#ff0000" : ""}} value={address} onChange={(e) => handleAddress(e)}  type="text" placeholder='Eg. House Number, Street Name, etc.'/>
                </div>
            </div>
            <div className={styles.inpCont}>
                <span className={styles.inpLable}>Special Requests (optional)</span>
                <textarea className={styles.inpBoxArea} style={{borderColor: errTextArea ? "#ff0000" : ""}} value={textArea} onChange={(e) => handleTextArea(e)} rows={3} placeholder='Write Your Special Requests If Any... (optional)'/>
            </div>
        </div>
    </div>
  )
}
