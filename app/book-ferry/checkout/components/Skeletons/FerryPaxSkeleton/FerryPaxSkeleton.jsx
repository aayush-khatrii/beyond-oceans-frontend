import { useState } from 'react';
import styles from './FerryPaxSkeleton.module.css'
import Select from '@/app/AppData/components/Select/Select';
import contriesData from '@/app/AppData/Data/contries.json'
import IconList from '@/app/AppData/components/IconComponent/IconList';
import { Icon } from '@iconify/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FerryPaxSkeleton() {

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.leftCut}></div>
        <div className={styles.rightCut}></div>
        <div className={styles.title}>Add Passenger Details</div>
        <div className={styles.desedSep}></div>
        <div className={styles.mainContent}>
            <div className={styles.paxDeatilsLists}>
                {
                    Array(2).fill().map((item, index) => (
                        <div className={styles.paxList} key={index} >
                            <div className={styles.paxLable}>
                                <span>Adult {index + 1}</span>
                            </div>
                            <div className={styles.paxDeatilFields}>
                                <div className={styles.paxTitleField}></div>
                                <div className={styles.paxNameField}></div>
                                <div className={styles.paxAgeField}></div>
                                <div className={styles.paxCountryField}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
