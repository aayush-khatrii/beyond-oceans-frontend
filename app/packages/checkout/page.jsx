'use client'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './packageCheckout.module.css'
import { notFound, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getPackageCheckout } from '@/app/AppData/http/session'
import { getHotelsData, getSinglePackage } from '@/app/AppData/http/packages'
import Login from './components/Login/Login'
import { useAppSelector } from '@/app/AppData/lib/store/hooks';
import LoginDone from './components/LoginDone/LoginDone'
import OrderSum from './components/OrderSum/OrderSum'
import ContectComp from './components/ContectComp/ContectComp'
import Itinerary from './components/Itinerary/Itinerary'
import Policy from './components/Policy/Policy'
import PriceBreak from './components/PriceBreak/PriceBreak'
import PayButton from './components/PayButton/PayButton'
import AsideInfo from './components/AsideInfo/AsideInfo'

export default function page() {


    if(true){
        notFound()
    }

    const router = useRouter()
    const userData = useAppSelector((state) => state.user.userData)
    const [isAuth, setIsAuth] = useState()


    const [packageCartData, setPackageCartData] = useState()
    const [packageData, setPackageData] = useState()
    const [hotelData, setHotelData] = useState()

    const [isLoginDone, setIsLoginDone] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)
    
    async function getCheckoutData(){
        try {
            const sessionData = await getPackageCheckout()
            setPackageCartData(sessionData.data.data)
            const sessionCheckout = sessionData.data.data.Package_Checkout

            const packageId = sessionData.data.data.Package_Checkout.Package_Id
            const packageData = await getSinglePackage({packageId})
            setPackageData(packageData.data.data)

            const packageOption = packageData.data.data.Package_Options.filter(obj => obj.Option_Id === sessionCheckout.Package_Option_Id)[0]
            const hotelIds = packageOption.Option_Stay.map(obj => obj.Hotel_Id)
            const hotelsData = await getHotelsData({hotelIds})
            setHotelData(hotelsData.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    function handleLogedIn(){
        setIsAuth(true)
        popupTimer()
    }

    function popupTimer(){
        setIsLoginDone(true)
        setTimeout(() => {
            setIsLoginDone(false);
          }, 3000);
    }

    useEffect(() => {
        getCheckoutData()
    }, [])

    useEffect(() => {
        setIsAuth(userData.auth)
    }, [userData])

    function handleTatalAmount(val){
        setTotalAmount(val)
    }
    
    
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.stepWrapper}>
                <div className={styles.stepsHeader}>
                    <div className={styles.searchStep} onClick={() => router.push('/packages')}>
                        <div className={styles.stepNum}>1</div>
                        <span>Search Tour</span>
                    </div>
                    <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                    <div className={styles.selectionStep}>
                        <div className={styles.stepNum}>2</div>
                        <span>Package Selection</span>
                    </div>
                    <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                    <div className={styles.cnfStep}>
                        <div className={styles.stepNum}>3</div>
                        <span>Confirm & Checkout</span>
                    </div>
                    <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                    <div className={styles.tnxStep}>
                        <div className={styles.stepNum}>4</div>
                        <span>Surprise For You</span>
                    </div>
                </div>
            </div>
            <div className={styles.subWrapper}>
                <div className={styles.mainContent}>
                    {isLoginDone && <LoginDone />}
                    {!isAuth && <Login handleClose={handleLogedIn}/>}
                    <OrderSum sessionData={packageCartData} packageData={packageData} hotelData={hotelData}/>
                    <ContectComp />
                    <Itinerary scheduleData={packageData?.DW_Itinerary} packageId={packageData?.Package_Id}/>
                    <Policy />
                </div>
                <aside className={styles.asideSec}>
                    <PriceBreak sessionData={packageCartData} packageData={packageData} tatalAmountFunc={handleTatalAmount}/>
                    <PayButton totalAmount={totalAmount}/>
                    <AsideInfo />
                </aside>
            </div>
        </div>
    )
}
