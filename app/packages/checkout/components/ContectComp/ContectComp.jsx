import { useEffect, useState } from 'react';
import styles from './ContectComp.module.css'
import { useAppDispatch, useAppSelector } from '@/app/AppData/lib/store/hooks';

export default function ContectComp() {

    const userData = useAppSelector((state) => state.user.userData)
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")

    useEffect(() => {
        setName(userData.name ? userData.name : "")
        setEmail(userData.email ? userData.email : "")
        setCity(userData.address.User_City ? userData.address.User_City : "")
        setState(userData.address.User_State ? userData.address.User_State : "")
        setAddress(userData.address.User_Address ? userData.address.User_Address : "")
    },[userData])

    
    
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Contact Details</div>
        <div className={styles.mainContent}>
            <div className={styles.inputRow}>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Name</span>
                    <input className={styles.inpBox} value={name} type="text" placeholder='Eg. John Doe'/>
                </div>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Email</span>
                    <input className={styles.inpBox} value={email} type="text" placeholder='Eg. johndoe@gmail.com'/>
                </div>
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Alternate Phone Number</span>
                    <input className={styles.inpBox} type="text" placeholder='Eg. +91 12345 67890'/>
                </div>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>City</span>
                    <input className={styles.inpBox} value={city} type="text" placeholder='Eg. Bangalore'/>
                </div>
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>State</span>
                    <input className={styles.inpBox} value={state} type="text" placeholder='Eg. Karnataka'/>
                </div>
                <div className={styles.inpCont}>
                    <span className={styles.inpLable}>Address</span>
                    <input className={styles.inpBox} value={address} type="text" placeholder='Eg. House Number, Street Name, etc.'/>
                </div>
            </div>
            <div className={styles.inpCont}>
                <span className={styles.inpLable}>Special Requests</span>
                <textarea className={styles.inpBoxArea} rows={3} placeholder='Write Your Special Requests If Any...'/>
            </div>
        </div>
    </div>
  )
}
