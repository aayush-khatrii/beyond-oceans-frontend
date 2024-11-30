"use client"
import { useState, useEffect, useRef } from 'react'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Select.module.css'

export default function Select({datalist, placeholder, onData, isEmpty = false}) {

    const selectBtnRef = useRef()
    const [selected, setSelected] = useState(placeholder ? placeholder : "")
    const [isDropdown, setIsDropdown] = useState(false)

    const dropIconStyle = { 
        transform: isDropdown ? 'rotate(180deg)' : '', 
        transition: "all .3s ease-in-out" 
    }

    const handleToggle = () => {
        setIsDropdown(!isDropdown)
    }

    const handleItemSelect = (index) => {
        setSelected(datalist[index])
        onData(datalist[index])
    }

    useEffect(() => {
    
        function handleClickOutside(event) {
            if (selectBtnRef.current && !selectBtnRef.current.contains(event.target)) {
                setIsDropdown(false);
            }
        }
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
      }, []);


    return (
        <div onClick={handleToggle} ref={selectBtnRef} className={styles.mainWrapper}>
            <div style={{borderColor: isDropdown ? "#1E2C70" : "", borderColor: isEmpty ? "#e00000" : ""}} className={styles.value}>
                <span style={{color: isDropdown ? "#1E2C70" : "", color: isEmpty ? "#e00000" : ""}} className={styles.valueSpan}>{selected}</span>
                <div className={isDropdown ? styles.dropedSvg : styles.dropSvg} style={dropIconStyle}><IconList Icon="downArrowThin"/></div>
            </div>
            <div style={{display: isDropdown ? "block" : ""}} className={styles.optionMenu}>
                <ul>
                    {
                        datalist.map((list, index) => (
                            <li key={index} onClick={() => handleItemSelect(index)} className={styles.listItems}>{list}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
