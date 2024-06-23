import OTPinput from '../../OTPinput/OTPinput';
import Timer from '../../Timer/Timer';
import styles from './OTPEmail.module.css'
import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/AppData/lib/store/hooks';
import { emailLogin } from '@/app/AppData/http/auth';
import { setUserData } from '@/app/AppData/lib/store/features/user/userSlice';

export default function OTPEmail({email, popupClose}) {

    const dispatch = useAppDispatch()
    const emailAuthData = useAppSelector((state) => state.auth.emailData)

    const [otp, setOtp] = useState("");
    const buttonRef = useRef(null);

    const isValidOTP = otp.length === 6

    const btnStyle = {
        color: !isValidOTP ? "#4C4C4C" : "",
        backgroundColor: !isValidOTP ? "#E9E9E9" : "",
        borderColor: !isValidOTP ? "#BABABA" : "",
        cursor: !isValidOTP ? "default" : "pointer"
    }

    const onGetOtp = (otp) => {
        setOtp(otp)
    }

    const handleOTPSubmit = async() => {
        if(!isValidOTP) return
        console.log("Login Success", otp)

        let responseData

        try {
            const reqData = {
                email: emailAuthData.email, 
                country: emailAuthData.country, 
                hash: emailAuthData.hash, 
                otp
            }
            const {data} = await emailLogin(reqData)
            console.log(data)
            responseData = data

        } catch (error) {
            if(error.response){
                console.log(error.response.data)
            }
            console.log({code :error.code, message:error.message})
            return
        }

        const user = responseData.data
        const userAuth = responseData.ststus === 'success' && responseData.ststusCode === "200" && Boolean(user.User_Id)

        const userdata = {
            auth: userAuth || false,
            authLv: user.Auth_Lv || '',
            userId: user.User_Id || '',
            phone: user.User_Phone || '',
            email: user.User_Email || '',
            name: user.User_Name || '',
            DOB: user.User_DOB || '',
            googleID: user.GoogleID || '',
            maritalStatus: user.MaritalStatus || '',
            address: user.User_Address || {}
        }

        dispatch(setUserData(userdata))

        popupClose()
        console.log(responseData)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buttonRef.current.click();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.OTPlable}>
                <span>Enter OTP Sent to Email</span>
                <span> {email}</span>
            </div>
            <OTPinput onOtpSubmit={onGetOtp} />
            <button ref={buttonRef} style={btnStyle} onClick={handleOTPSubmit} className={styles.actionBTN}>Verify OTP</button>
            <div className={styles.reSendtimer}>
                <Timer />
            </div>
        </div>
  )
}
