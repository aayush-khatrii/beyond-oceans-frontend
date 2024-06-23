import { useState, useEffect } from 'react'

export default function Timer() {
    const [seconds, setSeconds] = useState(90);
    const [showTimer, setShowTimer] = useState(true);

    const resendStyle = {
        color: !showTimer ? "#000" : "", 
        fontWeight: !showTimer ? "500" : "",
        cursor: !showTimer ? "pointer" : "default"
    }

    useEffect(() => {
        const timerId = startTimer();
        return () => clearInterval(timerId);
    }, [showTimer]);


    function startTimer(){
        let timerId;
        if (showTimer && seconds > 0) {
          timerId = setInterval(() => {
            setSeconds((prevSeconds) => {
              if (prevSeconds > 1) {
                return prevSeconds - 1;
              } else {
                clearInterval(timerId);
                setShowTimer(false);
                return 0;
              }
            });
          }, 1000);
        }
    
        return timerId;
      };
    
    function resetTimer(){
        if(seconds !== 0){
            return
        }
        setSeconds(90);
        setShowTimer(true);
    };

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <span onClick={resetTimer} style={resendStyle}>Resend OTP {showTimer ? `in ${formatTime(seconds)}`: ""}</span>
    )
}
