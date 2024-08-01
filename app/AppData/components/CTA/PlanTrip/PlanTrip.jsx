import styles from './PlanTrip.module.css'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from './Select/Select';
import { useRouter } from 'next/navigation';

export default function PlanTrip() {
    const router = useRouter()
    const [planDate, setPlanDatee] = useState("")
    const [planDuration, setPlanDuration] = useState("")
    const [tripTheme, setTripTheme] = useState("")
    const [budget, setBudget] = useState("")
    const [isDPactive, setDPactive] = useState(false)
    const DurationDL = ["2 Day and 3 Night", "3 Day and 4 Night", "4 Day and 5 Night", "5 Day and 6 Night", "6 Day and 7 Night", "7 Day and 8 Night", "8 Day and 9 Night", "9 Day and 10 Night" ]
    const tripTheamsDL = ["Family", "Honeymoon", "Best Seller", "Offbeat"]
    const BudgetDL = ["₹10,000 - ₹15,000", "₹15,000 - ₹20,000", "₹20,000 - ₹25,000", "₹25,000 - ₹30,000", "+ ₹30,000"]

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 7);

    function selectDatefn(date){
        setPlanDatee(date)
        setDPactive(true)
    }

    function setDPtoggloe(){
        setDPactive(true);
    }
    function setDPoff(){
        if(!planDate){
            setDPactive(false);
        }
    }
    function focusoff(){
        if(!planDate){
            setDPactive(false);
        }
    }

    function selectPlanDurationfn(data){
        if(data){
            setPlanDuration(data)
        }else{
            setPlanDuration("")
        }
    }

    function selectTripThemefn(data){
        if(data){
            setTripTheme(data)
        }else{
            setTripTheme("")
        }
    }

    function selectBudgetfn(data){
        if(data){
            setBudget(data)
        }else{
            setBudget()
        }
    }

    function redirectToPackages(){
        router.push("/packages")
    }

    return (
    <>
        <div className={isDPactive ? `${styles.dpINPframe} ${styles.dpINPActive}` : styles.dpINPframe}>
            <DatePicker 
                showIcon
                toggleCalendarOnIconClick
                className={styles.dpINPbox} 
                onClickOutside={focusoff}
                onFocus={setDPtoggloe} 
                onBlur={setDPoff} 
                selected={planDate} 
                onChange={selectDatefn}
                dateFormat="dd-MM-yyyy"
                minDate={minDate}
                icon={
                    <svg className={styles.dtPickerICO} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526.12 504.98">
                        <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
                            <path fill="#1e2c70" className="cls-1" d="M0,437.1V104.79a30.14,30.14,0,0,0,1.08-3.87C5.78,68,33.73,40,66.94,37.37c22.29-1.76,44.79-.84,67.2-1.1,2.2,0,4.39,0,7.2,0,0-2.66,0-4.85,0-7,0-7-.15-14,.26-21,.3-5.31,4.17-8.39,9.25-8.21,4.84.17,8.24,3.34,8.52,8.45.27,4.94.12,9.91.14,14.86,0,4.2,0,8.39,0,12.58H366.63c0-2.36,0-4.37,0-6.39,0-7,0-14,.11-21,.06-4,2.17-7.39,6-7.88,3-.39,7,.44,9.23,2.31,1.93,1.62,2.62,5.43,2.74,8.32.35,8.14.13,16.3.13,25H391c19.85,0,39.72-.22,59.57.1a76.41,76.41,0,0,1,72.79,56.58c1.07,3.91,1.87,7.9,2.8,11.85V436.08c-.36,1.29-.66,2.61-1.08,3.88-2.75,8.38-4.29,17.45-8.53,25-15.09,26.89-38.67,40-69.6,40q-183.9,0-367.78,0Q76,505,73,504.85A76.27,76.27,0,0,1,2,445.43C1.43,442.64.68,439.88,0,437.1ZM18.71,184.24c-.13,1.64-.28,2.65-.28,3.66,0,80.67-.15,161.33.25,242a57,57,0,0,0,5.6,23.62c11,22.88,30.25,33.52,55.43,33.54q151.28.07,302.55,0c21.92,0,43.84.17,65.75,0,34.7-.35,59.68-25.67,59.68-60.28q0-118.18,0-236.36v-6.16ZM141.23,55.07a10.07,10.07,0,0,0-2-.58c-22.26,0-44.55-.67-66.77.25-26.73,1.1-49.68,22.29-53,48.73-1.55,12.46-.85,25.22-1,37.85-.13,8,0,16,0,24.36h488.8a13.47,13.47,0,0,0,.43-2.25c0-18.11.53-36.25-.16-54.34-1-26.83-22.08-50.15-48.74-53.53-12.48-1.58-25.27-.94-37.91-1.11-11.8-.15-23.59,0-36.06,0,0,5.66.26,10.94-.09,16.17-.26,4,1.07,5.86,5,7.38,14.81,5.78,23.68,19.79,23.33,35.82-.33,14.79-10.23,28.49-24.36,33.7a37.48,37.48,0,0,1-40.81-10.11c-17.39-19.22-10.2-49.87,13.89-59.58,1.82-.74,4.52-2.34,4.63-3.7.49-6.4.21-12.86.21-19.33H159.49c0,5.25.28,10.19-.09,15.08-.32,4.33.92,6.51,5.28,8.25a36.87,36.87,0,0,1,20.81,47.42,37.41,37.41,0,0,1-46.93,22.3c-14.72-4.89-25.07-18.69-25.44-33.9a37.33,37.33,0,0,1,23.62-36.24c1.68-.68,4.2-2.15,4.28-3.4C141.46,67.87,141.23,61.42,141.23,55.07Zm9.34,38.19a18.91,18.91,0,1,0-.16,37.81,19.19,19.19,0,0,0,19-18.87A19,19,0,0,0,150.57,93.26Zm225,0a18.9,18.9,0,0,0-.44,37.79,18.9,18.9,0,1,0,.44-37.79Z"/>
                            <path fill="#38b089" className="cls-2" d="M316.88,442.42c-8.05,0-16.1.1-24.14,0-15.27-.24-24.15-9.25-24.17-24.39q0-14.87,0-29.73c0-13.58,7.29-23.32,20.74-24a573.88,573.88,0,0,1,57.92.4c10.89.57,18.19,10.1,18.32,21.15q.19,17.43,0,34.86c-.14,11.6-8.34,20.69-19.92,21.37-9.55.56-19.16.11-28.74.11Zm.63-17.25c7.87,0,15.75,0,23.62,0,5.44,0,7.32-1.64,7.39-6.82.14-10.07.06-20.15,0-30.23,0-4.52-2-6.86-6.91-6.82q-24.37.18-48.77,0c-4.88,0-6.71,2.08-6.63,6.82.16,10.07,0,20.15.06,30.23,0,5.61,1.26,6.78,7.08,6.82C301.43,425.2,309.47,425.17,317.51,425.17Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M209.11,412.34c-7.36,0-14.72.07-22.08,0-6.33-.08-10.21-3.6-10.23-9s3.86-9.06,10.15-9.09q22.08-.13,44.16,0c6.3,0,10.24,3.64,10.26,9s-3.9,9-10.18,9.11C223.83,412.42,216.47,412.34,209.11,412.34Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M101.57,249.55c7.19,0,14.38-.06,21.57,0,6.66.07,10.56,3.61,10.44,9.3-.12,5.4-4,8.81-10.39,8.83q-21.82.1-43.64,0c-6.54,0-10.7-3.81-10.55-9.3.14-5.29,4.17-8.76,10.5-8.83C86.85,249.49,94.21,249.55,101.57,249.55Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M317.12,267.81c-7.36,0-14.72.07-22.07,0-6.2-.07-10.27-3.76-10.22-9.06.05-5.08,4-8.91,9.88-9q22.59-.21,45.17,0c6,.07,9.59,3.79,9.55,9.14s-3.68,8.79-9.73,8.87C332.18,267.89,324.65,267.81,317.12,267.81Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M317.43,321.22c7.35,0,14.71-.07,22.06,0,6.17.07,9.81,3.33,9.94,8.64.14,5.56-3.51,9.28-9.87,9.34q-22.32.24-44.64,0c-6.16-.06-10.24-4.05-10.1-9.27s4.21-8.68,10.54-8.73C302.72,321.17,310.07,321.21,317.43,321.22Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M208.86,267.81c-7.35,0-14.71.08-22.07,0-5.89-.08-9.82-3.69-9.89-8.83s3.75-9.11,9.62-9.17q22.85-.25,45.68,0c5.89.08,9.46,4.06,9.28,9.4-.18,5.09-3.81,8.49-9.52,8.58C224.26,267.9,216.56,267.81,208.86,267.81Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M425.42,267.81c-7.53,0-15.06.07-22.59,0-6-.07-9.91-3.47-10.14-8.59-.23-5.31,3.75-9.38,9.89-9.44q22.59-.21,45.17,0c6,.07,9.58,3.84,9.53,9.18s-3.73,8.75-9.79,8.83C440.14,267.89,432.78,267.81,425.42,267.81Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M100.71,412.34c-7,0-14,0-21.06,0-6.83-.05-10.73-3.33-10.81-8.94-.07-5.83,3.89-9.19,11-9.21q21.32-.06,42.62,0c6.71,0,10.84,3.48,10.93,8.93.09,5.61-4.18,9.18-11.16,9.22C115.08,412.38,107.89,412.34,100.71,412.34Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M424.9,412.34c-7.19,0-14.37.06-21.56,0-6.61-.07-10.74-3.71-10.65-9.21.08-5.29,4.13-8.9,10.4-8.93q22.08-.1,44.16,0c6.26,0,10.08,3.7,10,9.18s-3.91,8.87-10.29,8.94C439.62,412.41,432.26,412.34,424.9,412.34Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M425.27,321.22c7.36,0,14.71-.07,22.07,0,6.14.08,9.81,3.36,9.94,8.66.13,5.55-3.53,9.26-9.9,9.32q-22.32.24-44.65,0c-6.2-.06-10.18-4-10.05-9.29s4.14-8.66,10.52-8.71C410.56,321.17,417.91,321.21,425.27,321.22Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M209.11,321.22c7.53,0,15.06-.08,22.59,0,5.69.08,9.43,3.47,9.67,8.46.25,5.24-3.4,9.39-9.25,9.47q-23.1.31-46.19,0c-5.84-.08-9.41-4.26-9.12-9.55.28-5,3.93-8.29,9.72-8.37C194.06,321.14,201.59,321.22,209.11,321.22Z"/>
                            <path fill="#1e2c70" className="cls-1" d="M101.32,321c7.36,0,14.71-.1,22.06,0,6.26.11,10.21,3.82,10.05,9.15s-3.89,8.61-10,8.65q-22.32.15-44.64,0c-6.5-.05-10.06-3.51-9.93-9.15.12-5.35,3.63-8.54,9.91-8.65C86.27,320.94,93.8,321,101.32,321Z"/>
                        </g></g>
                    </svg>
                }    
            />
            <span className={isDPactive ? `${styles.dpPlaceholder} ${styles.dpPlacActive}` : styles.dpPlaceholder}>Departure Date</span>
        </div>
        <div className={styles.customSelect}>
            <Select datalist={DurationDL} onData={selectPlanDurationfn} iconValue="TripDurationClock" />
            <span className={`${styles.InputPlace} ${planDuration ? styles.InputPlaceValue : ''}`}>Trip Duration</span>
        </div>
        <div className={styles.customSelect}>
            <Select datalist={tripTheamsDL} onData={selectTripThemefn} iconValue="ColorFlag" />
            <span className={`${styles.InputPlace} ${tripTheme ? styles.InputPlaceValue : ''}`}>Trip Theme</span>
        </div>
        <div className={styles.customSelect}>
            <Select datalist={BudgetDL} onData={selectBudgetfn} iconValue="BudgetTours" />
            <span className={`${styles.InputPlace} ${budget ? styles.InputPlaceValue : ''}`}>Budget</span>
        </div>
        <button onClick={() => {redirectToPackages()}} className={styles.planTripButton}>Plan A Trip</button>
    </>
  )
}
