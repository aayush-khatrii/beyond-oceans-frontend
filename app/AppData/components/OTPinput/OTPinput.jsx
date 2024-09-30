import styles from './OTPinput.module.css'
import { useEffect, useRef, useState } from 'react';

export default function OTPinput({length = 6, onOtpSubmit = () => {}}) {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([])

    useEffect(() => {
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value;
        if(isNaN(value))return
        const newOtp = [...otp]

        //allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        //submit trigger
        const combinedOtp = newOtp.join("")
        onOtpSubmit(combinedOtp)
        if(combinedOtp.length === length){
            inputRefs.current[index].blur()
        }

        // move to the next input if current field is filled
        if(value && index < length - 1 && inputRefs.current[index+1]){
            inputRefs.current[index + 1].focus()
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1)
    }

    const handleKeyDown = (index, e) => {
        if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]){
            inputRefs.current[index - 1].focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault();
        window.alert("awd")
        const pasteData = e.clipboardData.getData('text').slice(0, length);
        window.alert(e.clipboardData.types[0])
        window.alert(pasteData)

        if (/^[0-9]+$/.test(pasteData)) {
            const newOtp = [...otp];
            pasteData.split('').forEach((char, idx) => {
              newOtp[idx] = char;
            });
            setOtp(newOtp);
            const combinedOtp = newOtp.join("")
            onOtpSubmit(combinedOtp)
        }
    }


    return (
        <div className={styles.OtpInpContainer}>
            {
                otp.map((value, index) => {
                    return (
                        <input 
                            key={index}
                            type='tel'
                            ref={(input) => (inputRefs.current[index] = input)}
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className={`${styles.otpInput} ${value ? styles.filledInput : ''}`}
                        />
                    )
                })
            }
        </div>
    )
}
