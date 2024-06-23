import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './ProfileSetting.module.css'
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from '@/app/AppData/lib/store/hooks';
import { setUserData } from '@/app/AppData/lib/store/features/user/userSlice';
import { updateProfile } from '@/app/AppData/http/auth';
import { Toaster, toast } from 'sonner'
import {toast as rhtToast, Toaster as RhtToast } from 'react-hot-toast';
import { AxiosError } from 'axios';


export default function ProfileSetting({title, desc}) {

    const dispatch = useAppDispatch()
    const userData = useAppSelector((state) => state.user.userData)
    
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(userData.name)
    const [DOB, setDOB] = useState(userData.DOB)
    const [maritalStatus, setMaritalStatus] = useState(userData.maritalStatus)
    const [address, setAddress] = useState(userData.address.User_Address)
    const [city, setCity] = useState(userData.address.User_City)
    const [state, setState] = useState(userData.address.User_State)
    const [pincode, setPincode] = useState(userData.address.User_Pincode)
    const country = userData.address.Country
    const [nationality, setNationality] = useState(userData.address.User_Nationality)

    const [newName, setNewName] = useState("")
    const [newDOB, setNewDOB] = useState("")
    const [newMaritalStatus, setNewMaritalStatus] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [newCity, setNewCity] = useState("")
    const [newState, setNewState] = useState("")
    const [newPincode, setNewPincode] = useState("")
    const [newNationality, setNewNationality] = useState("")
    
    const btnStyle = {
        justifyContent: isEditing ? "center" : "",
        backgroundColor: isEditing ? "#38B089" : "",
        borderColor: isEditing ? "#C1E7DA" : "",
        color: isEditing ? "#fff" : ""
    }

    const inpStyle = {
        borderBottom: isEditing ? "1px solid #1e2c702a" : ""
    }


    function handleEditing(){

        const userAddress = {
            Address: address,
            City: city,
            State: state,
            Pincode: pincode,
            Nationality: nationality
        }

        if(address && address !== '') userAddress.Address = address
        if(city && city !== '') userAddress.City = city
        if(state && state !== '') userAddress.State = state
        if(pincode && pincode !== '') userAddress.Pincode = pincode
        if(nationality && nationality !== '') userAddress.Nationality = nationality
        
        const userAuthdata = {
            name: name || '',
            DOB: DOB || '',
            maritalStatus: maritalStatus || '',
            address: userAddress || {}
        }

        function notEmptyObj(obj){


            if (!obj) return false;
            for (let key in obj) {
                if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) return true;
            }
            return false;
        }

        const updateData = {}
        const userReqAddress = {}

        
        if(newName && newName !== '') updateData.name = name
        if(newDOB && newDOB !== '') updateData.DOB = DOB
        if(newMaritalStatus && newMaritalStatus !== '') updateData.maritalStatus = maritalStatus
        
        if(newAddress && newAddress !== '') userReqAddress.Address = newAddress
        if(newCity && city !== '') userReqAddress.City = newCity
        if(newState && newState !== '') userReqAddress.State = newState
        if(newPincode && newPincode !== '') userReqAddress.Pincode = newPincode
        if(newNationality && newNationality !== '') userReqAddress.Nationality = newNationality
        const isValidAdd = (notEmptyObj(userReqAddress) && userReqAddress && userReqAddress !== '')
        if(isValidAdd) updateData.address = userReqAddress
        


        const updateFunc = async() => {
            if(!isEditing) return
            if(!notEmptyObj(updateData)) return

            let loadingToastId

            try {
                loadingToastId = rhtToast.loading('Saving given details...');
                const {data} = await updateProfile(updateData)
                rhtToast.remove(loadingToastId)
            } catch (error) {
                rhtToast.remove(loadingToastId)
                if(error instanceof AxiosError){
                    toast.message(error.code, {
                        description: error.message,
                    })
                    toast.error("Failed to Save Details. Try again leter")
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
            dispatch(setUserData(userAuthdata))
            toast.success("Deatils Saved Successfully")

        } 
        updateFunc()

        setIsEditing(!isEditing)

    }


    function handleNameChange(e){
        setNewName(e.target.value)
        setName(e.target.value)
    }
    function handleDOBChange(e){
        setNewDOB(e.target.value)
        setDOB(e.target.value)
    }
    function handleMSChange(e){
        setNewMaritalStatus(e.target.value)
        setMaritalStatus(e.target.value)
    }
    function handleAddressChange(e){
        setNewAddress(e.target.value)
        setAddress(e.target.value)
    }
    function handleCityChange(e){
        setNewCity(e.target.value)
        setCity(e.target.value)
    }
    function handleStateChange(e){
        setNewState(e.target.value)
        setState(e.target.value)
    }
    function handlePincodeChange(e){
        setNewPincode(e.target.value)
        setPincode(e.target.value)
    }
    function handleNatChange(e){
        setNewNationality(e.target.value)
        setNationality(e.target.value)
    }


  return (
    <div className={styles.container}>
        <RhtToast toastOptions={{ style: { marginBottom: '20px', marginRight: '20px', fontFamily: "DM Sans", fontSize: "18px", fontWeight: "500" }}} position="bottom-right" />
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.header}>
            <div className={styles.headLeft}>
                <div className={styles.decorative}></div>
                <div className={styles.headContent}>
                    <span>{title}</span>
                    <p>{desc}</p>
                </div>
            </div>
            <div>
                <button style={btnStyle} onClick={handleEditing}>{isEditing ? "Save" : <><IconList Icon="EditIcon" />Edit</>}</button>
            </div>
        </div>

        <div className={styles.dataContainer}>
            <div className={styles.dataField}>
                <span>Full Name</span>
                <input style={inpStyle} onChange={(e) => {handleNameChange(e)}} value={name} maxLength="50" placeholder='Enter Your Name' type="text" disabled={!isEditing}/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Date Of Birth</span>
                <input style={inpStyle} onChange={(e) => {handleDOBChange(e)}} type="date" placeholder='Enter Your Name' disabled={!isEditing}/>
                
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Marital Status</span>
                <input style={inpStyle} onChange={(e) => {handleMSChange(e)}} value={maritalStatus} maxLength="20" type="text" placeholder='Marital Status' disabled={!isEditing}/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Your Address</span>
                <input style={inpStyle} onChange={(e) => {handleAddressChange(e)}} value={address} maxLength="95" type="text" placeholder='Enter Your Address' disabled={!isEditing}/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>City</span>
                <input style={inpStyle} onChange={(e) => {handleCityChange(e)}} value={city} maxLength="35" type="text" placeholder='Enter Your City' disabled={!isEditing}/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>State</span>
                <input style={inpStyle} onChange={(e) => {handleStateChange(e)}} value={state} maxLength="35" type="text" placeholder='Enter Your State' disabled={!isEditing}/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Pincode</span>
                <input style={inpStyle} onChange={(e) => {handlePincodeChange(e)}} value={pincode} maxLength="10" type="text" placeholder='Enter Your Pincode' disabled={!isEditing}/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Country</span>
                <input value={country} type="text" placeholder='Enter Your Country' disabled/>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Nationality</span>
                <input style={inpStyle} onChange={(e) => {handleNatChange(e)}} value={nationality} maxLength="30" type="text" placeholder='Enter Your Nationality' disabled={!isEditing}/>
            </div>
        </div>
    </div>
  )
}
