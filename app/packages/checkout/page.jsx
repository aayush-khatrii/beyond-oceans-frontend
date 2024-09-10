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
import OrderSumSkeleton from './components/Skeletons/OrderSumSkeleton/OrderSumSkeleton'
import PriceBreakSkeleton from './components/Skeletons/PriceBreakSkeleton/PriceBreakSkeleton'

export default function page() {

    const router = useRouter()
    const userData = useAppSelector((state) => state.user.userData)
    const [isAuth, setIsAuth] = useState()



    const [packageCartData, setPackageCartData] = useState()
    const [packageData, setPackageData] = useState()
    const [hotelData, setHotelData] = useState()

    const [isLoginDone, setIsLoginDone] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const [textArea, setTextArea] = useState("")
    
    const [errName, setErrName] = useState(false)
    const [errEmail, setErrEmail] = useState(false)
    const [errPhone, setErrPhone] = useState(false)
    const [errCity, setErrCity] = useState(false)
    const [errState, setErrState] = useState(false)
    const [errAddress, setErrAddress] = useState(false)
    const [errTextArea, setErrTextArea] = useState(false)
    const [errAuth, setErrAuth] = useState(false)
    
    const errorContact = {errName, errEmail, errPhone, errCity, errState, errAddress, errTextArea, errAuth}
    
    const [discountCode, setDiscountCode] = useState("")
    const [contributionAmt, setContributionAmt] = useState()

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
            if(error.response){
                if(error.response.data.message === "Package is not in cart!"){
                    router.push("/packages")
                }
            }
            router.push("/packages")
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

    function handleDiscount(value){
        setDiscountCode(value)
    }

    function handleContribution(value){
        setContributionAmt(value)
    }

    function handleContectData(type, value){
        if(type === "name"){
            setName(value)
        }
        if(type === "email"){
            setEmail(value)
        }
        if(type === "phone"){
            setPhone(value)
        }
        if(type === "city"){
            setCity(value)
        }
        if(type === "state"){
            setState(value)
        }
        if(type === "address"){
            setAddress(value)
        }
        if(type === "textarea"){
            setTextArea(value)
        }
    }

    function handleDataError(type, value){
        if(type === "name"){
            setErrName(value)
        }
        if(type === "email"){
            setErrEmail(value)
        }
        if(type === "phone"){
            setErrPhone(value)
        }
        if(type === "city"){
            setErrCity(value)
        }
        if(type === "state"){
            setErrState(value)
        }
        if(type === "address"){
            setErrAddress(value)
        }
        if(type === "textarea"){
            setErrTextArea(value)
        }
        if(type === "auth"){
            setErrAuth(value)
        }
    }
    const contectDeatils = {name, email, phone, city, state, address, textArea}
    
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.stepWrapper}>
                <div className={styles.stepsHeader}>
                    <div className={styles.searchStep} onClick={() => router.push('/packages')}>
                        <div className={styles.stepNum}>1</div>
                        <span>Search Tour</span>
                    </div>
                    <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                    <div className={styles.selectionStep} onClick={() => router.back()}>
                        <div className={styles.stepNum} >2</div>
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
                    {!isAuth && <Login isAuthError={errAuth} handleClose={handleLogedIn}/>}
                    {
                        (packageCartData && packageData && hotelData) ?
                        <OrderSum sessionData={packageCartData} packageData={packageData} hotelData={hotelData}/> 
                        : <OrderSumSkeleton />
                    }
                    <ContectComp 
                        contectData={handleContectData}
                        contectDataError={handleDataError}
                        errorDeatil={errorContact}
                    />
                    <Itinerary scheduleData={packageData?.DW_Itinerary} packageId={packageData?.Package_Id}/>
                    <Policy />
                </div>
                <aside className={styles.asideSec}>
                    {
                        (packageCartData && packageData) ?
                        <PriceBreak sessionData={packageCartData} packageData={packageData} tatalAmountFunc={handleTatalAmount} onDiscount={handleDiscount} onContribution={handleContribution}/>
                        : <PriceBreakSkeleton />
                    }
                    <PayButton totalAmount={totalAmount} contectData={contectDeatils} contectDataError={handleDataError} isAuth={isAuth} discountCode={discountCode} contributionAmt={contributionAmt}/>
                    <AsideInfo />
                </aside>
            </div>
            <div className={styles.mobSubWrapper}>
                {isLoginDone && <LoginDone />}
                {/* <LoginDone /> */}
                {!isAuth && <Login isAuthError={errAuth} handleClose={handleLogedIn}/>}
                {
                    (packageCartData && packageData && hotelData) ?
                    <OrderSum sessionData={packageCartData} packageData={packageData} hotelData={hotelData}/> 
                    : <OrderSumSkeleton />
                }
                <ContectComp 
                    contectData={handleContectData}
                    contectDataError={handleDataError}
                    errorDeatil={errorContact}
                />
                {
                    (packageCartData && packageData) ?
                    <PriceBreak sessionData={packageCartData} packageData={packageData} tatalAmountFunc={handleTatalAmount} onDiscount={handleDiscount} onContribution={handleContribution}/>
                    : <PriceBreakSkeleton />
                }
                <PayButton totalAmount={totalAmount} contectData={contectDeatils} contectDataError={handleDataError} isAuth={isAuth} discountCode={discountCode} contributionAmt={contributionAmt}/>
                <AsideInfo />
                <Policy />
            </div>
        </div>
    )
}
