"use client"
import { useState } from 'react'
import styles from './profile.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import ProfileSetting from './Components/ProfileSetting/ProfileSetting'
import LoginDeatil from './Components/LoginDeatil/LoginDeatil'
import MyBookings from './Components/Bookings/MyBookings'

export default function page() {

    const [selected, setSelected] = useState("SETTING")

    const profileComponent = {
        SETTING: <ProfileSetting title="Profile Setting" desc="Basic info, for a faster booking experience" />,
        LOGIN: <LoginDeatil title="Login Details" desc="Manage your email address, mobile number, and password" />,
        BOOKING: <MyBookings title="Your Bookings" desc="Manage and edit the status of your tour packages, activities, and ferries" />,
    }

    function menuList(data){
        setSelected(data)
    }

    return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div>{`Home > My Account`}</div>
                <div className={styles.mainContainer}>
                    <div className={styles.asideMenu}>
                        <div className={styles.menuImage}>
                            <IconList Icon="ProfileMenuTop" />
                        </div>
                        <div className={styles.menuList}>
                            <div className={styles.menuItem} style={{backgroundColor: selected==="SETTING" ? "#E9E9E9" : "", color: selected==="SETTING" ? "#1E2C70" : ""}} onClick={() => {menuList("SETTING")}}><IconList Icon="ProfileSet"/><span>Profile Setting</span></div>
                            <div className={styles.menuItem} style={{backgroundColor: selected==="LOGIN" ? "#E9E9E9" : "", color: selected==="LOGIN" ? "#1E2C70" : ""}} onClick={() => {menuList("LOGIN")}}><IconList Icon="LogDetails"/><span>Login Deatils</span></div>
                            <div className={styles.menuItem} style={{backgroundColor: selected==="BOOKING" ? "#E9E9E9" : "", color: selected==="BOOKING" ? "#1E2C70" : ""}} onClick={() => {menuList("BOOKING")}}><IconList Icon="ProfList"/><span>Your Bookings</span></div>
                            <div className={styles.menuItem}><IconList Icon="ProfLogout"/><span>Log Out</span></div>
                        </div>
                    </div>
                    <div className={styles.layoutBody}>
                        {profileComponent[selected]}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
