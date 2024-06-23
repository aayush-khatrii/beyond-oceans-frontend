import { useState, useEffect } from 'react' 
import { Icon } from '@iconify/react';
import styles from './phoneInp.module.css';
import IconList from '../../IconComponent/IconList'
import { parsePhoneNumber } from 'libphonenumber-js';
import contriesData from '../../../Data/contries.json'
import { sendPhoneOTP } from '@/app/AppData/http/comm';
import { useAppDispatch } from '@/app/AppData/lib/store/hooks';
import { addPhoneAuthData } from '@/app/AppData/lib/store/features/auth/authSlice';
import { Toaster, toast } from 'sonner'
import {toast as rhtToast, Toaster as RhtToast } from 'react-hot-toast';
import { AxiosError } from 'axios';

export default function phoneInp(props) {

    const dispatch = useAppDispatch()

    const[isContryList, setIsContryList] = useState(false)
    const[selectedIndex, setSelectedIndex] = useState(-1);
    const[searchQuery, setSearchQuery] = useState('');
    const[countryObj, setCountryObj] = useState({ name: 'India', code: 'IN', phone:'91' })
    const[contrydata, setCountryList] = useState(contriesData);
    const[isFalsePhone, setIsFalsePhone] = useState(false)
    const[phoneNumber, setPhoneNumber] = useState()
    const[disableBtn, setDisableBtn] = useState(false)
    

    const btnStyle = {
        color: isFalsePhone || disableBtn ? "#4C4C4C" : "",
        backgroundColor: isFalsePhone || disableBtn ? "#E9E9E9" : "",
        borderColor: isFalsePhone || disableBtn ? "#BABABA" : "",
        cursor: isFalsePhone || disableBtn ? "default" : "pointer"
    }

    function toggleContry(){
        setIsContryList(!isContryList)
    }

    function phnToggleContry(){
        setIsContryList(false)
    }

    function handleCtrySelect(ctryName, ctryCode, ctryPhone){
        setIsContryList(!isContryList)
        setCountryObj({ name:ctryName, code:ctryCode, phone:ctryPhone });
        if(ctryName !== 'India'){
            props.onCtryNIND("INTEML")
            props.onContryChange({ name:ctryName, code:ctryCode, phone:ctryPhone })
        }
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

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(selectedIndex < contrydata.length - 1 ? selectedIndex + 1 : selectedIndex)
        }

        if (e.key === 'ArrowUp') {
            setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0)
        }

        if (e.key === 'Enter') {
            setIsContryList(!isContryList)
            setCountryObj({ 
                name:contrydata[selectedIndex].name, 
                code:contrydata[selectedIndex].code, 
                phone:contrydata[selectedIndex].phone 
            });
            if(contrydata[selectedIndex].name !== 'India'){
                props.onCtryNIND("INTEML")
                props.onContryChange({ 
                    name:contrydata[selectedIndex].name, 
                    code:contrydata[selectedIndex].code, 
                    phone:contrydata[selectedIndex].phone 
                })
            }
            setSearchQuery('')
            setCountryList(contriesData)
            setSelectedIndex(0)
        }
    }


    function handlePhoneChange(e){
        const phnNumber = e.target.value
        setPhoneNumber(phnNumber)
        let isValidphoneNumber

        try {
            isValidphoneNumber = parsePhoneNumber(`+${countryObj.phone}${phnNumber}`, countryObj.code);
        } catch (error) {
            return
        }

        if(isValidphoneNumber?.isValid() === false || isValidphoneNumber?.isPossible() === false){
            setIsFalsePhone(true)
        }

        if(isValidphoneNumber?.isValid() === true && isValidphoneNumber?.isPossible() === true){
            setIsFalsePhone(false)
        }
    }

    
    async function handelSignUp(){
        // toast.success('Continue To Verification')

        // return
        const phnRegex = /^[6-9]\d{9}$/;
        setIsFalsePhone(!phnRegex.test(phoneNumber))
        if(!phnRegex.test(phoneNumber)){
            return
        }

        let responseData
        let loadingToastId
        
        try {
            setDisableBtn(true)
            loadingToastId = rhtToast.loading('Sending OTP...');
            const {data} = await sendPhoneOTP({phone: phoneNumber, country: countryObj.name.toLowerCase()})
            responseData = data
            toast.success("OTP Successfully sended")
            rhtToast.remove(loadingToastId)

        } catch (error) {
            rhtToast.remove(loadingToastId)
            setDisableBtn(false)
            if(error instanceof AxiosError){
                toast.message(error.code, {
                    description: error.message,
                })
                toast.error("Failed to send OTP. Try again leter")
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


        const stateData = {
            phone: phoneNumber,
            country: countryObj.name.toLowerCase(),
            hash: responseData?.hash || ""
        }

        dispatch(addPhoneAuthData(stateData))

        props.onPhoneOTP("OTPPHN", phoneNumber)
    }


    return (
    <>
    <div>
        <RhtToast toastOptions={{ style: { marginBottom: '20px', marginRight: '20px', fontFamily: "DM Sans", fontSize: "18px", fontWeight: "500" }}} position="bottom-right" />
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.inputCont}>
            <span className={styles.mobilePlace}>Enter Mobile Number to Continue</span>

            <div className={styles.inputBox}>
                <input autoFocus className={styles.PhoneInp} style={{borderColor: isFalsePhone ? '#ff0000' : ''}} type="tel" placeholder='Enter your phone number' autoComplete='on' onClick={phnToggleContry} onChange={(e) => handlePhoneChange(e)}/>
                <div className={styles.ctrCodeCont} onClick={toggleContry}>
                    <div>
                        <Icon icon={`flag:${countryObj.code.toLowerCase()}-4x3`} />
                        <div className={styles.drpIco} style={{ transform: isContryList ? 'rotate(180deg)' : '' }}><IconList Icon="downArrow" /></div>
                    </div>
                    <span className={styles.ctryCode}>{`+${countryObj.phone}`}</span>
                </div>
                {isFalsePhone && <div className={styles.wrongPhonenote}><p>* Phone Number is Invalid</p></div>}
                <div className={styles.optionsList} style={{display: isContryList ? 'block' : ''}}>
                    <div className={styles.srchInpCont}>
                        <input type="text" value={searchQuery} onKeyDown={(e) => handleKeyDown(e)} placeholder='Country Name or Code' className={styles.ctrySearch} onChange={(e) => handleCtrySearch(e)}/>
                        <div className={styles.srchIcon}><IconList Icon="searchIcon" /></div>
                    </div>
                <ol>
                    {
                        contrydata.map((country, index) => (
                            <li key={index} className={styles.listItem} >
                                <div className={`${styles.contryListCont} ${selectedIndex === index ? styles.SlctcontryListCont : ''}`} onClick={() => handleCtrySelect(country.name, country.code, country.phone) }>
                                    <div className={`${styles.ctryIconName} listFlags`}>
                                        <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} />
                                        <span className={styles.countryListName}>{`${country.name} (+${country.phone})`}</span>
                                    </div>
                                    <span className={styles.countryListCode}>{country.code}</span>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
            </div>
        </div>
    </div>
    <button style={btnStyle} disabled={disableBtn} className={styles.signInBtn} onClick={handelSignUp} >Continue To Verification</button>
    </>
  )
}
