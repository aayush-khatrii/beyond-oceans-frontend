'use client'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './FerryCheckout.module.css'
import { notFound, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getFerryCheckout } from '@/app/AppData/http/session'
import Login from './components/Login/Login'
import { useAppSelector } from '@/app/AppData/lib/store/hooks';
import LoginDone from './components/LoginDone/LoginDone'
import ContectComp from './components/ContectComp/ContectComp'
import Policy from './components/Policy/Policy'
import TicketSum from './components/TicketSum/TicketSum'
import PayButton from './components/PayButton/PayButton'
import AsideInfo from './components/AsideInfo/AsideInfo'
import PriceBreakSkeleton from './components/Skeletons/TicketSumSkeleton/TicketSumSkeleton'
import { fetchSingleFerryMak } from '@/app/AppData/http/ferry'
import FerryPax from './components/FerryPax/FerryPax'
import FerryPaxSkeleton from './components/Skeletons/FerryPaxSkeleton/FerryPaxSkeleton'
import TicketSumSkeleton from './components/Skeletons/TicketSumSkeleton/TicketSumSkeleton'

export default function page() {

    const router = useRouter()
    const userData = useAppSelector((state) => state.user.userData)
    const [isAuth, setIsAuth] = useState()

    const [ferryCartData, setFerryCartData] = useState()
    const [ferryData, setFerryData] = useState()

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



    const initialTravelerState = (count) => (
        Array(count).fill({
            title: '',
            name: '',
            age: '',
            country: 'India',
            passportNumber: '',
            passportExpiryDate: '',
        })
    );

    const initialTravelerErrState = (count) => (
        Array(count).fill({
            title: false,
            name: false,
            age: false,
            country: false,
            passportNumber: false,
            passportExpiryDate: false,
        })
    );


    const [travelersData, setTravelerData] = useState({
        adults: initialTravelerState([]),
        infants: initialTravelerState([]),
    })

    const [travelersDataError, setTravelerDataError] = useState({
        adults: initialTravelerErrState([]),
        infants: initialTravelerErrState([]),
    })

    async function getCheckoutData(){
        try {
            const sessionData = await getFerryCheckout()
            setFerryCartData(sessionData.data.data)
            const sessionCheckout = sessionData.data.data.Ferry_Checkout
            const traveler = sessionCheckout.Traveler
            setTravelerData({
                adults: initialTravelerState(traveler.Adults),
                infants: initialTravelerState(traveler.Infants),
            });
            setTravelerDataError({
                adults: initialTravelerErrState(traveler.Adults),
                infants: initialTravelerErrState(traveler.Infants),
            });

            const makFerryParams = {
                scheduleID: sessionCheckout.Ferry_Data.Schedule_Id,
                date: sessionCheckout.Ferry_Data.Travel_Date,
                dest: sessionCheckout.Ferry_Data.Destination,
                dept: sessionCheckout.Ferry_Data.Departure,
                trav: sessionCheckout.Traveler.Adults + sessionCheckout.Traveler.Infants
            }

            const ferryData = await fetchSingleFerryMak(makFerryParams)
            setFerryData(ferryData.data.data)

        } catch (error) {
            if(error.response){
                if(error.response.data.message === "Ferry is not in cart!"){
                    router.push("/book-ferry")
                }
            }
            // router.push("/book-ferry")
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

    function handleTravelersData(index, type, field, value){
        const updatedTravelers = [...travelersData[type]];
        updatedTravelers[index] = {
          ...updatedTravelers[index],
          [field]: value,
        };
        setTravelerData((prevState) => ({
          ...prevState,
          [type]: updatedTravelers,
        }));
    }

    function handleTravelersDataError(index, type, field, value){
        const updatedTravelers = [...travelersDataError[type]];
        updatedTravelers[index] = {
          ...updatedTravelers[index],
          [field]: value,    
        };
        setTravelerDataError((prevState) => ({
          ...prevState,
          [type]: updatedTravelers,
        }));
    }

    const contectDeatils = {name, email, phone, city, state, address, textArea}

    
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.stepWrapper}>
                <div className={styles.stepsHeader}>
                    <div className={styles.searchStep} onClick={() => router.push('/packages')}>
                        <div className={styles.stepNum}>1</div>
                        <span>Search a Ferry</span>
                    </div>
                    <div className={styles.rightArw}><IconList Icon="RightArrowV2" /></div>
                    <div className={styles.selectionStep} onClick={() => router.back()}>
                        <div className={styles.stepNum} >2</div>
                        <span>Ferry Selection</span>
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
                        (ferryCartData && ferryData) ?
                        <FerryPax 
                            sessionData={ferryCartData}
                            paxData={handleTravelersData}
                            travelersDataError={travelersDataError}
                            travelersDataErrorHandle={handleTravelersDataError}
                        /> 
                        : <FerryPaxSkeleton />
                    }
                    <ContectComp 
                        contectData={handleContectData}
                        contectDataError={handleDataError}
                        errorDeatil={errorContact}
                    />
                    <Policy />
                </div>
                <aside className={styles.asideSec}>
                    {
                        (ferryCartData && ferryData) ?
                        <TicketSum sessionData={ferryCartData} ferryData={ferryData} tatalAmountFunc={handleTatalAmount} onDiscount={handleDiscount} onContribution={handleContribution}/>
                        : <TicketSumSkeleton />
                        // : <>Loading</>
                    }
                    <PayButton totalAmount={totalAmount} travelersData={travelersData} paxDataError={handleTravelersDataError} contectData={contectDeatils} contectDataError={handleDataError} isAuth={isAuth} discountCode={discountCode} contributionAmt={contributionAmt}/>
                    <AsideInfo />
                </aside>
            </div>
            <div className={styles.mobSubWrapper}>
                {isLoginDone && <LoginDone />}
                {!isAuth && <Login isAuthError={errAuth} handleClose={handleLogedIn}/>}
                {
                    (ferryCartData && ferryData) ?
                    <TicketSum sessionData={ferryCartData} ferryData={ferryData} tatalAmountFunc={handleTatalAmount} onDiscount={handleDiscount} onContribution={handleContribution}/>
                    : <TicketSumSkeleton />
                    // : <>Loading</>
                }
                {
                    (ferryCartData && ferryData) ?
                    <FerryPax 
                        sessionData={ferryCartData}
                        paxData={handleTravelersData}
                        travelersDataError={travelersDataError}
                        travelersDataErrorHandle={handleTravelersDataError}
                    /> 
                    : <FerryPaxSkeleton />
                }
                <ContectComp 
                    contectData={handleContectData}
                    contectDataError={handleDataError}
                    errorDeatil={errorContact}
                />
                <PayButton totalAmount={totalAmount} travelersData={travelersData} paxDataError={handleTravelersDataError} contectData={contectDeatils} contectDataError={handleDataError} isAuth={isAuth} discountCode={discountCode} contributionAmt={contributionAmt}/>
                <AsideInfo />
                <Policy />
            </div>
        </div>
    )
}
