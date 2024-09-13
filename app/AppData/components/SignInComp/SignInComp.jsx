import IconList from '../IconComponent/IconList'
import styles from './SignInComp.module.css'
import { useState } from 'react'
import Link from 'next/link'
import PhoneInp from './phoneInp/phoneInp';
import PhoneSignOpt from './phoneInp/phnSignOpt';
import EmailInp from './emailInp/emailInp';
import EmailSignOpt from './emailInp/emlSignOpt';
import INTEmailInp from './intemailInp/intEmailInp';
import INTEmailSignOpt from './intemailInp/IntEmlSignOpt';
import OTPPhone from './OTPPhone/OTPPhone';
import OTPEmail from './OTPEmail/OTPEmail';
import OTPIntEmail from './OTPIntEmail/OTPIntEmail';


export default function SignInComp({handleClose}) {
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
        setCountryObj(prevCtryObj)
    }

    const ComponentTitle = {
        PHN: "Login or Create an Account",
        EML: "Login or Create an Account",
        INTEML: "Login or Create an Account",
        OTPPHN: "OTP Authentication",
        OTPEML: "OTP Authentication",
        OTPINTEML: "OTP Authentication",
    }

    const InputComponent = {
        PHN: <PhoneInp onCtryNIND={handleOptionChange} onContryChange={prevCountry} onPhoneOTP={phoneOTPGet}/>,
        EML: <EmailInp onEmailOTP={emailOTPGet}/>,
        INTEML: <INTEmailInp onCtryIND={handleOptionChange} prevCountry={countryObj} onINTEmailOTP={intEmailOTPGet}/>,
        OTPPHN: <OTPPhone phone={phone} ctryCode={countryObj.phone} popupClose={handleClose}/>,
        OTPEML: <OTPEmail email={email} popupClose={handleClose}/>,
        OTPINTEML: <OTPIntEmail email={email} popupClose={handleClose}/>,
    }

    const signInOptions = {
        PHN: <PhoneSignOpt onOptclick={handleOptionChange}/>,
        EML: <EmailSignOpt onOptclick={handleOptionChange}/>,
        INTEML: <INTEmailSignOpt onOptclick={handleOptionChange}/>
    }

    return (
        <div className={styles.mainWrapper}>
            <button className={styles.closeBTN} onClick={handleClose}><IconList Icon="Close" /></button>
            <div className={styles.left}>
                <div className={styles.leftTitle}><span>Unlock Exclusive Benefits by Creating an Account:</span></div>
                <div className={styles.leftListWrapper}>
                    <div className={styles.leftIcolist}>
                        <div className={styles.IcoWrapper}><IconList Icon="SignUpPop1" /></div>
                        <span>Gain access to exclusive deals, discounts, and special packages.</span>
                    </div>
                    <div className={styles.leftIcolist}>
                        <div className={styles.IcoWrapper}><IconList Icon="SignUpPop2" /></div>
                        <span>Save time and hassle by storing your booking information securely.</span>
                    </div>
                    <div className={styles.leftIcolist}>
                        <div className={styles.IcoWrapper}><IconList Icon="SignUpPop3" /></div>
                        <span>Get dedicated 24/7 assistance from our customer support team.</span>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <button className={styles.closeBTNMob} onClick={handleClose}><IconList Icon="Close" /></button>
                <div className={styles.rightTitle}><span>{ComponentTitle[inpType]}</span></div>
                {InputComponent[inpType] ? InputComponent[inpType] : null}
                {signInOptions[inpType] ? signInOptions[inpType] : null}
                <div className={styles.tncNote}><span>By Processing, you agree to Beyond Oceans <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-conditions">Terms of Use</Link>.</span></div>
            </div>
        </div>
    )
}
