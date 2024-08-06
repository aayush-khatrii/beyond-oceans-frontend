"use client"
import { useLayoutEffect, useState } from 'react'
import styles from './profile.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import ProfileSetting from './Components/ProfileSetting/ProfileSetting'
import LoginDeatil from './Components/LoginDeatil/LoginDeatil'
import MyBookings from './Components/Bookings/MyBookings'
import { logoutUser, routeProtector } from '@/app/AppData/http/auth'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { setUserData } from '@/app/AppData/lib/store/features/user/userSlice';
import { useAppDispatch } from '@/app/AppData/lib/store/hooks';
import { AxiosError } from 'axios';

export default function page() {

    const dispatch = useAppDispatch()

    const router = useRouter()

    const [selected, setSelected] = useState("SETTING")
    const [isAuth, setIsAuth] = useState(false)

    const profileComponent = {
        SETTING: <ProfileSetting title="Profile Setting" desc="Basic info, for a faster booking experience" />,
        LOGIN: <LoginDeatil title="Login Details" desc="Manage your email address, mobile number, and password" />,
        BOOKING: <MyBookings title="Your Bookings" desc="Manage and edit the status of your tour packages, activities, and ferries" />,
    }

    function menuList(data){
        setSelected(data)
    }

    async function handleRouteProtector(){
        let response
        try {
            response = await routeProtector()
            setIsAuth(response.data.auth)
        } catch (error) {
            router.push("/")
            return
        }

        if(!response.data.auth){
            router.push("/")
            return
        }
    }

    useLayoutEffect(() => {
        handleRouteProtector()
    }, [])


    async function handleLogout(){
        try {
            await logoutUser()
        } catch (error) {
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

        dispatch(setUserData({auth: "loggedOut"}))
        toast.success("Logged Out Successfully")
        router.push("/")
    }

    const layoutData = (
        <div className={styles.mainWrapper}>
            <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
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
                            <div className={styles.menuItem} onClick={() => handleLogout()}><IconList Icon="ProfLogout"/><span>Log Out</span></div>
                        </div>
                    </div>
                    <div className={styles.layoutBody}>
                        {profileComponent[selected]}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
    <>
        { isAuth ? <>{layoutData}</> : "Loading..." }
    </>
    )
}
