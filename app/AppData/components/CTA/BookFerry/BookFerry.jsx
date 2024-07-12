import styles from './BookFerry.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'


export default function BookFerry() {
    const [fromPlace, setFromPlace] = useState("")
    const [toPlace, setToPlace] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [passenger, setPassengers] = useState("")
    const [isDPactive, setDPactive] = useState(false)
    const mdxContent = `
    # Hello, MDX!
    
    This is an example of MDX content stored in a variable and rendered in a Next.js component.
    
    - Item 1
    - Item 2
    - Item 3
    
    **Bold text**
    
    *Italic text*
    `

    async function handleSearchFerry(){
        // const blob = new Blob([mdxContent], { type: 'text/mdx' });
        // const file = new File([blob], 'blog-post.mdx', { type: 'text/mdx' });
        // console.log({Blob: blob, File: file})

        const blob = new Blob([mdxContent], { type: 'text/mdx' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = "blog-post.mdx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the URL object
        URL.revokeObjectURL(url);
    }


    function selectFromPlacefn(e){
        if(e.target.value){
            setFromPlace(e.target.value)
        }else{
            setFromPlace("")
        }
    }

    function selectToPlacefn(e){
        if(e.target.value){
            setToPlace(e.target.value)
        }else{
            setToPlace("")
        }
    }
    
    function selectDatefn(date){
        setDepartureDate(date)
        setDPactive(true)
    }
    
    function setDPtoggloe(){
        setDPactive(true);
    }
    function setDPoff(){
        if(!departureDate){
            setDPactive(false);
        }
    }
    function focusoff(){
        if(!departureDate){
            setDPactive(false);
        }
    }

    function selectPassengerfn(e){
        if(e.target.value){
            setPassengers(e.target.value)
        }else{
            setPassengers("")
        }
    }

    return (
    <>
      <div className={styles.InputFrame}>
            <select className={`${styles.InputBox} ${fromPlace ? styles.InputBoxValue : ''}`} onChange={selectFromPlacefn}>
                <option value="" style={{display:"none"}}></option>
                {toPlace !== "PB" && <option value="PB">Port Blair</option>}
                {toPlace !== "HL" && <option value="HL">Havelock (Swaraj Dweep)</option>}
                {toPlace !== "NI" && <option value="NI">Neil Island(Shaheed Dweep)</option>}
            </select>
            <span className={`${styles.InputPlace} ${fromPlace ? styles.InputPlaceValue : ''}`}>Departure Place</span>
            <svg className={styles.InputICO} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 9L12 15.75L18.75 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>              
        </div>
        <div className={styles.InputFrame}>
            <select className={`${styles.InputBox} ${toPlace ? styles.InputBoxValue : ''}`} onChange={selectToPlacefn}>
                <option value="" style={{display:"none"}}></option>
                {fromPlace !== "PB" && <option value="PB">Port Blair</option>}
                {fromPlace !== "HL" && <option value="HL">Havelock (Swaraj Dweep)</option>}
                {fromPlace !== "NI" && <option value="NI">Neil Island(Shaheed Dweep)</option>}
            </select>
            <span className={`${styles.InputPlace} ${toPlace ? styles.InputPlaceValue : ''}`}>Destination Place</span>
            <svg className={styles.InputICO} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 9L12 15.75L18.75 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>              
        </div>
        <div className={`${styles.dpINPframe} ${isDPactive ? styles.dpINPActive : ''}`}>
            <DatePicker 
                showIcon
                toggleCalendarOnIconClick
                className={styles.dpINPbox} 
                onClickOutside={focusoff}
                onFocus={setDPtoggloe} 
                onBlur={setDPoff} 
                selected={departureDate} 
                onChange={selectDatefn}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                icon={
                    <svg className={styles.dtPickerICO} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 9L12 15.75L18.75 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>     
                }    
            />
            <span className={`${styles.dpPlaceholder} ${isDPactive ? styles.dpPlacActive : ''}`}>Departure Date</span>
        </div>
        <div className={styles.InputFrame}>
            <select className={`${styles.InputBox} ${passenger ? styles.InputBoxValue : ''}`} onChange={selectPassengerfn}>
                <option value="" style={{display:"none"}}></option>
                {fromPlace !== "PB" && <option value="PB">Port Blair</option>}
                {fromPlace !== "HL" && <option value="HL">Havelock (Swaraj Dweep)</option>}
                {fromPlace !== "NI" && <option value="NI">Neil Island(Shaheed Dweep)</option>}
            </select>
            <span className={`${styles.InputPlace} ${passenger ? styles.InputPlaceValue : ''}`}>Passenger</span>
            <svg className={styles.InputICO} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 9L12 15.75L18.75 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>              
        </div>
        <button className={styles.SearchFerryButton}>Search Ferry</button>
    </>
  )
}
