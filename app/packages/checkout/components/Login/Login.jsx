import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Login.module.css'
import { useState } from 'react'
import PhoneInp from './phoneInp/phoneInp';
import PhoneSignOpt from './phoneInp/phnSignOpt';
import EmailInp from './emailInp/emailInp';
import EmailSignOpt from './emailInp/emlSignOpt';
import INTEmailInp from './intemailInp/intEmailInp';
import INTEmailSignOpt from './intemailInp/IntEmlSignOpt';
import OTPPhone from './OTPPhone/OTPPhone';
import OTPEmail from './OTPEmail/OTPEmail';
import OTPIntEmail from './OTPIntEmail/OTPIntEmail';

export default function Login({handleClose, isAuthError}) {
    const [inpType, setInpType] = useState("PHN")
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const[countryObj, setCountryObj] = useState({ name: 'India', code: 'IN', phone:'91' })

    function handleOptionChange(data){
        setInpType(data)
    }

    function phoneOTPGet(type, number){
        setInpType(type)
        setPhone(number)
    }

    function emailOTPGet(type, email){
        setInpType(type)
        setEmail(email)
    }

    function intEmailOTPGet(type, email){
        setInpType(type)
        setEmail(email)
    }

    function prevCountry(prevCtryObj){
        console.log(prevCtryObj)
        setCountryObj(prevCtryObj)
    }

    const InputComponent = {
        PHN: <PhoneInp onCtryNIND={handleOptionChange} onContryChange={prevCountry} onPhoneOTP={phoneOTPGet}/>,
        EML: <EmailInp onEmailOTP={emailOTPGet}/>,
        INTEML: <INTEmailInp onCtryIND={handleOptionChange}  onContryChange={prevCountry} prevCountry={countryObj} onINTEmailOTP={intEmailOTPGet}/>,
        OTPPHN: <OTPPhone phone={phone} ctryCode={countryObj.phone} onGoback={handleOptionChange} popupClose={handleClose}/>,
        OTPEML: <OTPEmail email={email} onGoback={handleOptionChange} popupClose={handleClose}/>,
        OTPINTEML: <OTPIntEmail email={email} onGoback={handleOptionChange} popupClose={handleClose}/>,
    }

    const signInOptions = {
        PHN: <PhoneSignOpt onOptclick={handleOptionChange}/>,
        EML: <EmailSignOpt onOptclick={handleOptionChange}/>,
        INTEML: <INTEmailSignOpt onOptclick={handleOptionChange}/>
    }
    
  return (
    <div className={styles.mainWrapper} style={{borderColor: isAuthError ? "#1E2C70": ""}}>
        <div className={styles.title} style={{borderBottomColor: isAuthError ? "#1E2C70": ""}}>Login or Create an Account</div>
        <div className={styles.mainContent}>
            {signInOptions[inpType] ? signInOptions[inpType] : null}
            {InputComponent[inpType] ? InputComponent[inpType] : null}
            <div className={styles.loginNote}>Log in to speed up the booking process & save your details for future booking more efficient.</div>
        </div>
    </div>
  )
}
