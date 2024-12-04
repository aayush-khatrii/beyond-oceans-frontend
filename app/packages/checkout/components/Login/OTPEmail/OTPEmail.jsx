import OTPinput from '../OTPinput/OTPinput';
import styles from './OTPEmail.module.css'
import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/AppData/lib/store/hooks';
import { emailLogin } from '@/app/AppData/http/auth';
import { setUserData } from '@/app/AppData/lib/store/features/user/userSlice';
import { Toaster, toast } from 'sonner'
import {toast as rhtToast, Toaster as RhtToast } from 'react-hot-toast';
import { AxiosError } from 'axios';

export default function OTPEmail({email, popupClose, onGoback}) {

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

        let responseData
        let loadingToastId

        try {
            loadingToastId = rhtToast.loading('Logging in ...');
            const reqData = {
                email: emailAuthData.email, 
                country: emailAuthData.country, 
                hash: emailAuthData.hash, 
                otp
            }
            const {data} = await emailLogin(reqData)
            responseData = data
            toast.success("Logged In Successfully")
            rhtToast.remove(loadingToastId)
        } catch (error) {
            rhtToast.remove(loadingToastId)
            if(error instanceof AxiosError && !error.response){
                toast.message(error.code, {
                    description: error.message,
                })
                toast.error("Internal Server Error")
            }
            if(error.response.data){
                toast.message(error.response.data.message, {
                    description: error.response?.data.errorCode,
                  })
                toast.error(error.response.data.message)
                return
            }
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
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buttonRef.current.click();
        }
    };

    function handleGoBack(Comp){
        onGoback(Comp)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.mainWrapper}>
            <RhtToast toastOptions={{ style: { marginBottom: '20px', marginRight: '20px', fontFamily: "DM Sans", fontSize: "18px", fontWeight: "500" }}} position="bottom-right" />
            <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
            <div className={styles.OTPlable}>
                <span>Enter OTP Sent to Email</span>
                <span onClick={() => {handleGoBack("EML")}}>{email} <span className={styles.editBtn}>Edit</span></span>
            </div>
            <div className={styles.subWrapper}>
                <OTPinput onOtpSubmit={onGetOtp} />
                <button ref={buttonRef} style={btnStyle} onClick={handleOTPSubmit} className={styles.actionBTN}>Verify OTP</button>
            </div>
        </div>
  )
}
