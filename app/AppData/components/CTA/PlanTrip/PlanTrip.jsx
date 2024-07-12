import styles from './PlanTrip.module.css'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PlanTrip() {
    const [planDate, setPlanDatee] = useState("")
    const [planDuration, setPlanDuration] = useState("")
    const [tripTheme, setTripTheme] = useState("")
    const [budget, setBudget] = useState()
    const [isDPactive, setDPactive] = useState(false)

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

    function selectPlanDurationfn(e){
        if(e.target.value){
            setPlanDuration(e.target.value)
        }else{
            setPlanDuration("")
        }
    }

    function selectTripThemefn(e){
        if(e.target.value){
            setTripTheme(e.target.value)
        }else{
            setTripTheme("")
        }
    }

    function selectBudgetfn(e){
        if(e.target.value){
            setBudget(e.target.value)
        }else{
            setBudget()
        }
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
                minDate={new Date()}
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
        <div className={styles.InputFrame}>
            <select className={`${styles.InputBox} ${styles.INPSelector} ${planDuration ? styles.InputBoxValue : ''}`} onChange={selectPlanDurationfn}>
                <option value="" style={{display:"none"}}></option>
                <option value="2N,3D">2 Night 3 Days</option>
                <option value="3N,4D">3 Night 4 Days</option>
                <option value="4N,5D">4 Night 5 Days</option>
                <option value="5N,6D">5 Night 6 Days</option>
                <option value="6N,7D">6 Night 7 Days</option>
                <option value="7N,8D">7 Night 8 Days</option>
                <option value="8N,9D">8 Night 9 Days</option>
                <option value="9N,10D">9 Night 10 Days</option>
            </select>
            <span className={`${styles.InputPlace} ${planDuration ? styles.InputPlaceValue : ''}`}>Trip Duration</span>
            <svg className={styles.InputICO} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.65 499.65">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path fill="#1e2c70" className="cls-1" d="M263.49,0c7.54,1,15.12,1.75,22.63,2.91,63.78,9.81,116.13,39.77,157.34,89.35.93,1.12,1.85,2.26,2.81,3.36a6.45,6.45,0,0,0,1.25.76,34.67,34.67,0,0,0,.43-3.74c0-9.26,0-18.53,0-27.8.06-5.81,3.25-9.25,8.36-9.32s8.72,3.31,8.76,9c.16,18.86,0,37.73.11,56.59,0,2.49-.84,3.47-3.39,3.46-18.86-.07-37.72,0-56.58-.1-5.79,0-9.14-3.56-9.12-8.66,0-5.3,3.5-8.4,9.7-8.45,8.72-.06,17.43,0,27.35,0-1.78-2.41-2.8-4-4-5.37-42.26-49.63-95.7-78.25-160.76-83.62C155.74,9.05,53.34,82.16,24.73,191.83a229,229,0,0,0-2.87,103.39c.84,4.24.49,8.3-3.46,10.19a12.15,12.15,0,0,1-9,.2c-2-.85-3.83-4.1-4.24-6.53C3.48,289,2.34,278.83,1,268.7c-.24-1.75-.64-3.48-1-5.21V236.16c.76-6.42,1.4-12.87,2.29-19.27C9.23,167,29,122.82,62.4,85.1,102.81,39.53,153.23,12,213.56,2.9,221.07,1.77,228.63,1,236.16,0Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M499.65,262.51c-1,7.7-1.81,15.41-2.92,23.09A248.84,248.84,0,0,1,306.67,492.51c-14,3.25-28.53,4.23-42.82,6.26l-6.22.88H241c-8.53-1-17.08-1.72-25.58-2.9-48.06-6.69-90.75-25.63-127.52-57.25-12-10.34-22.76-22.18-34.06-33.32a20,20,0,0,0-.32,2.85c-.05,8.13.12,16.26-.11,24.39a8.56,8.56,0,0,1-17.12.05c-.14-20-.06-40-.06-60.19a24.67,24.67,0,0,1,3-.39q28.05,0,56.1,0c5.42,0,9,2.61,9.81,6.93,1.08,5.58-3,10.17-9.41,10.27-8.45.13-16.91,0-25.37.05-1.54,0-3.09.15-5.86.3,5,5.93,9.2,11.25,13.78,16.18Q138,470.81,225.07,481c97.59,11.39,195.29-44.3,235.81-133.93q31.19-69,16.77-143.24c-1.13-5.78,1.47-10.39,6.34-11.38,5.29-1.08,9.65,2,10.55,8.14,1.57,10.59,2.8,21.24,4.21,31.86.21,1.59.59,3.16.9,4.74Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M426.46,249.79A176.64,176.64,0,1,1,250,73.19,176.57,176.57,0,0,1,426.46,249.79Zm-168,159c86.26-3.11,149.93-79.22,149.94-150.22-11.34,0-22.69,0-34,0-6,0-9.87-3.34-10-8.35s3.9-8.78,10.07-8.87c5.85-.08,11.7,0,17.56,0h16.87c-3.07-85.4-78.31-149.86-150.27-149.92,0,11.35,0,22.7,0,34.05,0,6-3.34,9.86-8.36,10s-8.76-3.91-8.86-10.08c-.09-5.53,0-11.06,0-16.58V90.89C156,94,91.44,169,91.35,241.15c11.35,0,22.71,0,34.06,0,6,0,9.86,3.41,10,8.41s-3.92,8.74-10.11,8.83c-5.85.08-11.7,0-17.56,0H90.86c3.38,87.25,80.24,150,150.29,149.89,0-11.35,0-22.71,0-34.06,0-3.89,1.13-7.07,4.67-9,6-3.21,12.47,1.08,12.57,8.52C258.54,385.32,258.42,396.84,258.42,408.74Z"/>
                        <path fill="#38b089" className="cls-2" d="M258.23,190.88c0,10.41.1,20.82-.06,31.22,0,2.92.77,4.62,3.46,6.14,10.09,5.69,14.74,16.18,11.86,27.36-.9,3.51.14,5.39,2.36,7.62,9.41,9.45,18.67,19,28,28.53,2.88,2.92,4.25,6.21,2.66,10.14-2.23,5.55-9,6.64-13.62,2q-13-12.87-25.62-26.12c-3.58-3.76-6.4-6.1-12.7-4.32-11.71,3.29-23.64-4-27.82-15.1-4.32-11.47.16-23.86,11.22-30.13,2.69-1.52,3.48-3.21,3.46-6.13-.11-21-.07-42,0-62.93,0-6.27,2.6-10,7.17-10.54,5.61-.67,9.51,3,9.59,9.56C258.32,169.09,258.23,180,258.23,190.88Zm-.31,58.75a8.11,8.11,0,1,0-16.22.3,8.39,8.39,0,0,0,8.25,7.92A8.48,8.48,0,0,0,257.92,249.63Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M355.32,198.12c-5-.05-8.29-1.78-8.93-5.39-.51-2.82-.11-7.22,1.71-8.76A65.19,65.19,0,0,1,363,175c3.24-1.49,7.39-.56,8.94,2.85,1.24,2.73,2,7.37.54,9.34C368.09,193.17,361.06,195.76,355.32,198.12Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M154,188.06c.17,7.54-6,11.94-11.8,9.32a95,95,0,0,1-13.06-7.49,8.34,8.34,0,0,1-2.5-10.84c2-3.72,6.43-5.78,10.39-3.94a90.6,90.6,0,0,1,13.83,8.07C152.66,184.42,153.43,187.06,154,188.06Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M154.06,311c-.2.57-.26,2.59-1.21,3.18-6.07,3.78-12.1,7.79-18.63,10.59-3.31,1.42-6.6-1.51-7.9-5s-1-7.36,2.42-9.66a87.87,87.87,0,0,1,13.86-8C148.13,299.67,154.15,304.18,154.06,311Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M373.88,315.24c0,7.62-6.05,11.75-11.93,9a83.24,83.24,0,0,1-13-7.57c-3.56-2.52-4.4-6.32-2.47-10.4,1.84-3.88,6.3-6.12,10.2-4.31a97.22,97.22,0,0,1,14.64,8.59C372.9,311.68,373.41,314.33,373.88,315.24Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M198.18,355c-2.46,6-5,13.12-11.14,17.78-3,2.32-6.91,1.56-9.84-1.19a7.91,7.91,0,0,1-1.76-9.82,116.51,116.51,0,0,1,7.29-12.63,7.76,7.76,0,0,1,9.42-3.21C195.9,347.17,197.94,350,198.18,355Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M325.93,366.64c-2,2.16-3.73,5.24-6.36,6.61a7.19,7.19,0,0,1-9.55-2.47,106.58,106.58,0,0,1-7.79-13.45c-1.69-3.51-.81-7.06,2.26-9.68s6.88-3.3,9.85-.74C320,351.75,322.82,358.5,325.93,366.64Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M183.62,125.74a14.28,14.28,0,0,1,3,.72c3.91,1.64,12.44,16,11.19,20a13.35,13.35,0,0,1-5.71,7c-3.21,1.83-6.92.47-9-2.61a89.27,89.27,0,0,1-7.83-13.43C172.69,131.79,176.79,125.88,183.62,125.74Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M326,133.24c-3.34,8-6,14.86-11.77,19.59-3.05,2.49-6.86,1.7-9.84-1s-3.8-6.2-2.07-9.73a117.44,117.44,0,0,1,7.53-13.05,7.36,7.36,0,0,1,9.91-2.64C322.34,127.83,324,131,326,133.24Z"/></g></g>
            </svg>    
        </div>
        <div className={styles.InputFrame}>
            <select className={`${styles.InputBox} ${styles.INPSelector} ${tripTheme ? styles.InputBoxValue : ''}`} onChange={selectTripThemefn}>
                <option value="" style={{display:"none"}}></option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
            </select>
            <span className={`${styles.InputPlace} ${tripTheme ? styles.InputPlaceValue : ''}`}>Trip Theme</span>
            <svg className={styles.InputICO} style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.13 500.08">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path fill="#1e2c70" className="cls-1" d="M292.51,0c9.26,3.39,12.45,10.13,12.14,19.79-.48,15.12-.17,30.26-.11,45.4,0,8.55-1,7.66,7.43,7.67,27.45,0,54.89,0,82.34,0,9.2,0,15.55,4.11,16.4,11.91a22.66,22.66,0,0,1-2.93,12.81c-14,24.72-28.45,49.24-42.91,73.72-1.8,3-1.91,5.2-.08,8.3q22.08,37.35,43.77,74.92c5.81,10,1.36,21-9.26,23.34a25.6,25.6,0,0,1-5.33.34q-86.25,0-172.49,0c-11.17,0-17.1-5.86-17.17-17.15-.09-16.27,0-32.54,0-48.81v-6.22h-125V418.81c2.14.56,4.44,1.13,6.73,1.78a68.53,68.53,0,0,1,49.58,71.79c-.32,4-2.82,6-5.84,7.7H5.89c-3.15-1.91-5.54-4.14-5.78-8.31-1.82-32.6,18.27-61.88,49.13-70.83,4.38-1.27,5.69-3,5.69-7.54q-.23-192.85-.12-385.73C54.81,11.22,58.17,6.16,73.16,0ZM79.25,24.51V181.29c1.89.11,3.47.27,5.06.27q95.48,0,191,.1c4.36,0,5.44-1.3,5.43-5.53-.14-48.8-.09-97.61-.1-146.41,0-1.71-.2-3.42-.31-5.21ZM380.18,254c-1.28-2.37-2.15-4.06-3.11-5.7-12.19-20.92-24.3-41.89-36.66-62.7-4.11-6.91-4.05-13.21,0-20.11,12.45-20.95,24.63-42.06,36.91-63.12.86-1.48,1.64-3,2.81-5.15-2.36-.13-3.91-.29-5.47-.29-21.44,0-42.88.13-64.32-.12-4.73-.06-6,1.32-6,6,.19,29.45,0,58.9.13,88.35a16.9,16.9,0,0,1-5.83,13.27c-15.88,14.9-31.57,30-47.32,45.06-1.3,1.24-2.5,2.57-4.36,4.5ZM109.84,475.6c-3.54-20.44-24.24-35-46.55-33.2-17.87,1.45-36.87,18.45-36.94,33.2ZM262.08,206H228.61v31.87Z"/>
                        <path fill="#38b089" className="cls-2" d="M128.34,101.59c0,11.55.09,23.09,0,34.63-.08,8.17-4.72,13.26-11.76,13.27-6.73,0-11.69-4.74-11.75-12.24q-.28-35.85,0-71.69c.06-7.36,5.26-12.44,11.7-12.46,6.61,0,11.65,5.23,11.78,12.89C128.49,77.86,128.34,89.73,128.34,101.59Z"/>
                    </g>
                </g>
            </svg>
        </div>
        <div className={styles.InputFrame}>
            <input className={`${styles.InputBox} ${styles.InputString} ${budget < 8000 ? styles.InputBoxFalse : ''}`} min="8000" placeholder="" type="number" onChange={selectBudgetfn} />
            <span className={`${styles.InputPlace} ${budget < 8000 ? styles.InputPlaceFalse : ''}`}>Budget</span>
            <svg className={styles.InputICO} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.61 499.87">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path fill="#1e2c70" className="cls-1" d="M188,499.87H113.78v-5.72c0-26.14.08-52.27-.12-78.41a11,11,0,0,0-2.81-7.18C73.81,373.5,57,330,57.2,279.59c0-9.58,1.69-19.15,2.58-28.72.08-.94,0-1.9,0-3.19-18-2-33.27-9.19-44.25-24C5.08,209.64,1.36,193.51,0,176.08l18.87-1.93c.8,5.77,1.52,11.82,2.94,17.71,4.31,17.89,14,31.12,33,35.51.32.07.62.19.94.26,9.13,1.88,9,1.85,12.47-6.83a174.38,174.38,0,0,1,30.37-50.53c.85-1,1.74-2,2.65-2.88.2-.21.56-.26,1.35-.61L116.05,179c-1.07,1.38-2,2.66-3,3.83-55.19,63.9-47.8,161.77,16.47,216.28a9.46,9.46,0,0,1,3.33,7.29c-.12,23-.06,46.06-.06,69.09v6.05h35.52c.42-2.88.65-5.77,1.27-8.57,3.67-16.78,17.32-28.52,34.42-28.66,32.82-.28,65.66-.59,98.47.12,23.29.5,39.91,12.71,50.17,33.42,1.47,3,2.9,4.1,6.16,4,7.5-.24,15-.08,23.12-.08.11-2.16.28-4,.28-5.91,0-21.72,0-43.45.07-65.17,0-2.3.44-5.09,1.77-6.81,17.73-22.89,39.08-41.37,66.56-52a84.05,84.05,0,0,1,11.88-3.43c3.23-.73,4.07-2.21,4.05-5.33q-.19-26.2,0-52.43c0-2.76-.58-4.35-3.52-5.41-18.61-6.66-31.22-19.79-37.18-38.3-8.45-26.21-15.78-52.78-23.35-79.27-.5-1.74.5-4.47,1.71-6,6.67-8.66,13.64-17.1,20.49-25.63,1.1-1.36,2.15-2.77,3.65-4.7-13.8-4.82-26.79-4-39.77.24-12.8,4.18-23.47,11.92-32.89,19.75l-50.49-24c1.53-5,3.32-10.81,5.53-18,12.86,5.77,25.39,11.14,37.67,17,3.47,1.66,5.71,1.88,9.09-.39,24.7-16.54,51.22-22.51,79.86-11.73,7,2.65,13.36,7.15,20.57,11.1-4.11,5.14-7.45,9.31-10.8,13.47-7.38,9.16-14.86,18.23-22,27.53a7.89,7.89,0,0,0-1.42,6c6.2,21.8,12.48,43.57,19.1,65.23,5.5,18,17.7,29,36.31,32.28,5.27.92,6.64,3.13,6.58,8.36-.29,26.78-.13,53.57-.13,80.36v4.44c-11.67,3.1-22.88,4.92-33.14,9.06-20.11,8.12-35.76,22.53-49.51,39-1.26,1.52-1.55,4.22-1.55,6.38-.11,25.15-.08,50.31-.08,75.46v6.74H339.47c-.36-1.44-.81-3.12-1.2-4.82-4.37-19.06-18.78-31.4-38.32-31.62-31.35-.34-62.71-.21-94.06,0-11.08.07-17.75,7.22-17.91,18.37C187.89,487.62,188,493.63,188,499.87Z"/>
                        <path fill="#38b089" className="cls-2" d="M282.21,140.43l-15.07-8c2-5.81,4.32-11.19,5.7-16.8C284,70.25,255.29,27.14,209.07,19.49,166.43,12.43,125,43.88,120.37,86.7c-3.1,28.73,6.8,52.14,28.81,70.52,2.84,2.37,3,4,.87,6.77-2.62,3.32-4.92,6.89-7.32,10.31-22.19-7.58-42.76-48.76-41-85C103.47,52,129,16.11,170.52,3.9a96.2,96.2,0,0,1,107,38.85C299.33,75.3,297.2,116.3,282.21,140.43Z"/>
                        <path fill="#1e2c70" className="cls-1" d="M157.12,211.94l-13.59-11.43C176.35,157.7,255.34,138.93,305,163c-2.49,5.57-5,11.15-7.28,16.25C244.29,163,197.92,173.69,157.12,211.94Z"/>
                        <rect fill="#1e2c70" className="cls-1" x="363.35" y="243.91" width="22.75" height="18.51" rx="9.25"/>
                    </g>
                </g>
            </svg>
        </div>
        <button className={styles.planTripButton}>Plan A Trip</button>
    </>
  )
}
