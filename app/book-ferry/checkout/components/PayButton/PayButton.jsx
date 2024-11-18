import Link from 'next/link'
import styles from './PayButton.module.css'
import { useState } from 'react'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import { Toaster, toast } from 'sonner'
import {toast as rhtToast, Toaster as RhtToast } from 'react-hot-toast';
import { initiatFerryPayment } from '@/app/AppData/http/checkout'
import { AxiosError } from 'axios';
import RedirectPopup from '../RedirectPopup/RedirectPopup'

export default function PayButton(props) {

    const [isAgree, setIsAgree] = useState(false)
    const [isRedirect, setIsRedirect] = useState(false)

    const [PAYGW, setPaymentGW] = useState(1)
    const acceptRazorpay = false

    const discountCode = props.discountCode
    const contributionAmt = props.contributionAmt
    const subItem = props.subItem

    const nameRegexM = /^(?=.*\S)[a-zA-Z\s]{3,16}$/;
    const phoneRegexM = /^(?=(?:\D*\d){8,15}$)\d{8,15}$/;
    const emailRegexM = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const cityRegexM = /^(?=.*\S)[a-zA-Z\s,]{3,40}$/;
    const addressRegex = /^[a-zA-Z0-9\s,\/\-]{10,100}$/;
    const textareaRegex = /^[a-zA-Z0-9\s,\/\.\-\n]{10,400}$/;
    const passportRegex = /^[A-Za-z0-9]{6,20}$/;


    function handlePG(e){
        if(e.target.value === "1"){
            setPaymentGW(1)
        }
        if(e.target.value === "2"){
            setPaymentGW(2)
        }
    }

    function handleAgreeTerms(){
        setIsAgree(!isAgree)
    }

    const paxData = props.travelersData
    const contactData = props.contectData

    const termsError = (
        <span>Agree the <Link style={{color: "#1E2C70", fontWeight: "600"}} href="/terms-conditions">Terms & Conditions</Link> and the <Link style={{color: "#1E2C70", fontWeight: "600"}} href="/cancellation-refund">Cancellation Policy</Link> to continue</span>
    )

    const specialError = (
        <span>Re-check all Deatils & agree the <Link style={{color: "#1E2C70", fontWeight: "600"}} href="/terms-conditions">Terms & Conditions</Link> and <Link style={{color: "#1E2C70", fontWeight: "600"}} href="/cancellation-refund">Cancellation Policy</Link> if not.</span>
    )

    async function handlePayment(){

        const now = new Date();
        const validDate = new Date();
        validDate.setFullYear(now.getFullYear() - 2); // Subtract 2 years
        validDate.setDate(validDate.getDate() - 1);

        if(!props.isAuth){
            toast.error("Please Login 🙃💜.")
            props.contectDataError("auth", true)
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            return
        }


        function validateTraveler(type, traveler, index){

            if (!traveler.title) {
                props.paxDataError(index, type, 'title', true)
                window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
                return { field:"title", code:"error" }
            }

            if (!traveler.name || !nameRegexM.test(traveler.name)) {
                props.paxDataError(index, type, 'name', true)
                window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
                return { field:"name", code:"error" }
            }

            if (!traveler.age || (type === 'infants' && (new Date(traveler.age) >= now || new Date(traveler.age) < validDate))) {
                props.paxDataError(index, type, 'age', true)
                window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
                return { field:"age", code:"error" }
            }

            if (!traveler.age || (type === 'adults' && traveler.age <= "1")) {
                props.paxDataError(index, type, 'age', true)
                window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
                return { field:"age", code:"error" }
            }
          
            if (traveler.country !== 'India') {
                if (!traveler.passportNumber || !passportRegex.test(traveler.passportNumber)) {
                    props.paxDataError(index, type, 'passportNumber', true)
                    window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
                    return { field:"passportNumber", code:"error" }
                }
        
                if (!traveler.passportExpiryDate) {
                    props.paxDataError(index, type, 'passportExpiryDate', true)
                    return { field:"passportExpiryDate", code:"error" }
                }
            }
        }
        let hasError = false;

            if (paxData) {
                hasError = paxData.adults.some((traveler, index) => {
                    const errorDetail = validateTraveler('adults', traveler, index);
                    if (errorDetail?.code === "error") {
                        if(errorDetail.field === "title"){
                            toast.error(`Title of adult ${index+1} is not selected!`)
                        }
                        if(errorDetail.field === "name"){
                            toast.error(`Name of adult ${index+1} is invalid or empty!`)
                        }
                        if(errorDetail.field === "age"){
                            toast.error(`Age of adult ${index+1} is invalid or empty!`, {
                                description: "Age need to be grater than 1 for adult",
                            })
                        }
                        if(errorDetail.field === "passportNumber"){
                            toast.message(`Passport Number of adult ${index+1} is invalid or empty!`, {
                                description: "Passport Number required for pax outside India",
                            })
                            toast.error(`Passport Number of adult ${index+1} is invalid or empty!`)
                        }
                        if(errorDetail.field === "passportExpiryDate"){
                            toast.error(`Passport Expiry date of adult ${index+1} is invalid or empty!`)
                        }
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        return true;  // Stop further iteration
                    }
                });

                if (!hasError) {  // Only check infants if adults are valid
                    hasError = paxData.infants.some((traveler, index) => {
                        const errorDetail = validateTraveler('infants', traveler, index);
                        if (errorDetail?.code === "error") {
                            if(errorDetail.field === "title"){
                                toast.error(`Title of infant ${index+1} is not selected!`)
                            }
                            if(errorDetail.field === "name"){
                                toast.error(`Name of infant ${index+1} is invalid or empty!`)
                            }
                            if(errorDetail.field === "age"){
                                toast.error(`Age of infant ${index+1} is invalid or empty!`, {
                                    description: "Age need between from 2 years before to current date for infants",
                                })
                            }
                            if(errorDetail.field === "passportNumber"){
                                toast.message(`Passport Number of infant ${index+1} is invalid or empty!`, {
                                    description: "Passport Number required for pax outside India",
                                })
                                toast.error(`Passport Number of infant ${index+1} is invalid or empty!`)
                            }
                            if(errorDetail.field === "passportExpiryDate"){
                                toast.error(`Passport Expiry date of infant ${index+1} is invalid or empty!`)
                            }
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            return true;  // Stop further iteration
                        }
                    });
                }
            }

            if (hasError) {
                return; // Stop execution if there's an error
            }


        if(!nameRegexM.test(contactData.name)){
            props.contectDataError("name", true)
            toast.message("Invalid Name", {
                description: "Minimum 3 Charecter & only use alphabates",
            })
            toast.error("Invalid Name. Check Here")
            window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
            return
        }

        if(!emailRegexM.test(contactData.email)){
            props.contectDataError("email", true)
            toast.error("Invalid Email Address")
            window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
            return
        }

        if(!phoneRegexM.test(contactData.phone)){
            props.contectDataError("phone", true)
            toast.message("Invalid Phone", {
                description: "Ex: 919999999999, 9999999999",
            })
            toast.error("Invalid Phone number. Check Here")
            window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
            return
        }

        if(!cityRegexM.test(contactData.city)){
            props.contectDataError("city", true)
            toast.error("Invalid City, If city name is less than 3, add state name")
            window.scrollTo({ top: 480, left: 0, behavior: 'smooth' })
            return
        }

        if(!cityRegexM.test(contactData.state)){
            props.contectDataError("state", true)
            toast.message("Invalid State Name", {
                description: "If State name is less than 3, add country name. If longer than 40 than leave as it is",
            })
            toast.error("Invalid State Name. Check Here")
            window.scrollTo({ top: 660, left: 0, behavior: 'smooth' })
            return
        }

        if(!addressRegex.test(contactData.address)){
            props.contectDataError("address", true)
            toast.message("Invalid Address", {
                description: "Minimum 10 character and maximum 100 character allowed & only ,-/ are accepeted",
            })
            toast.error("Invalid Address. Check Here")
            window.scrollTo({ top: 660, left: 0, behavior: 'smooth' })
            return
        }
        
        if(contactData.textArea){
            if(!textareaRegex.test(contactData.textArea)){
                props.contectDataError("textarea", true)
                toast.message("Invalid Special Requests", {
                    description: "Minimum 10 character and maximum 400 character allowed & only ,-/ special character are accepeted",
                })
                toast.error("Invalid Special Requests. Check Here")
                window.scrollTo({ top: 660, left: 0, behavior: 'smooth' })
                return
            }
        }

        if(!acceptRazorpay){
            if(PAYGW !== 1){
                toast.error(<><IconList Icon="RazorPay"/> Razorpay is not avalible!</>)
                return
            }
        }

        if(!isAgree){
            toast.error(termsError)
            return
        }

        const allConditionFalseChecker = (
            !props.isAuth ||
            !nameRegexM.test(contactData.name) ||
            !emailRegexM.test(contactData.email) ||
            !phoneRegexM.test(contactData.phone) ||
            !cityRegexM.test(contactData.city) ||
            !cityRegexM.test(contactData.state) ||
            !addressRegex.test(contactData.address) ||
            (contactData.textArea ? !textareaRegex.test(contactData.textArea) : false) ||
            !isAgree
        )
        const allConditionChecker = (
            props.isAuth &&
            nameRegexM.test(contactData.name) && 
            emailRegexM.test(contactData.email) && 
            phoneRegexM.test(contactData.phone) && 
            cityRegexM.test(contactData.city) && 
            cityRegexM.test(contactData.state) && 
            addressRegex.test(contactData.address) && 
            (contactData.textArea ? textareaRegex.test(contactData.textArea) : true) &&
            isAgree
        )


        if(allConditionFalseChecker){
            toast.error(specialError)
        }

        if(allConditionChecker){
            setIsRedirect(true)
            const paymentParams = {
                contactData: {
                    Name: contactData.name,
                    Email: contactData.email,
                    Phone: contactData.phone,
                    City: contactData.city,
                    State: contactData.state,
                    Address: contactData.address,
                    ...(contactData.textArea && { Request: contactData.textArea })
                },
                PaxData: paxData,
                PAYGW: PAYGW,
                ...(subItem && {
                    Sub_Items: [ 
                        {
                            Sub_Item_Type: subItem.itemType,
                            Sub_Item_Id: subItem.itemId,
                            Sub_Item_Title: subItem.itemTitel,
                            Sub_Item_QTY: subItem.itemQty,
                        }
                    ]
                }),
                ...(discountCode && { discount: {Coupon_Code: discountCode} }),
                ...(contributionAmt && { contributionAmt: contributionAmt }),
                isTermsAgree: isAgree
            }
            
            let formDataUrl
            try {
                const {data} = await initiatFerryPayment(paymentParams)
                console.log("daasd:", data)
                formDataUrl = data
            } catch (error) {
                setIsRedirect(false)
                if(error.response?.data){  
                    toast.error(error.response?.data.message)
                    return
                }
                if(error instanceof AxiosError){
                    toast.message(error.code, {
                        description: error.message,
                    })
                    toast.error("Failed. Try again leter")
                    return
                }
                return
            }

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = formDataUrl;
            form.style.display = 'none'; // Hide the form
            document.body.appendChild(form);
            form.submit();
        }


    }


  return (
    <div className={styles.mainWrapper}>
        {isRedirect && <RedirectPopup />}
        <RhtToast toastOptions={{ style: { marginBottom: '20px', marginRight: '20px', fontFamily: "DM Sans", fontSize: "18px", fontWeight: "500" }}} position="bottom-right" />
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.pgSelector}>
            <label className={styles.pgRadios}>
                <input type="radio" name="PGSelect" value={1} defaultChecked onChange={handlePG}/>
                <div className={styles.radiochild}>
                    <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                    <div className={styles.radioContent}>
                        <div className={styles.radioTitleCont}>
                            <span className={styles.radioText}>Pay with</span>
                            <div className={styles.phonePeIcon}>
                                <IconList Icon="PhonePe"/>
                            </div>
                            <span className={styles.country}>(India)</span>
                        </div>
                        <div className={styles.pgNote}>
                            <p>UPI (Google Pay, Phone Pe, Paytm and other UPI app), Credit Or Debit Cards, Net Banking, and more...</p>
                        </div>
                    </div>
                </div>
            </label>
            <label className={styles.pgRadios}>
                <input type="radio" name="PGSelect" value={2} disabled onChange={handlePG}/>
                <div className={styles.radiochild}>
                    <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                    <div className={styles.radioContent}>
                        <div className={styles.radioTitleCont}>
                            <span className={styles.radioText}>Pay with</span>
                            <div className={styles.phonePeIcon}>
                                <IconList Icon="RazorPay"/>
                            </div>
                            <span className={styles.country}>(International)</span>
                        </div>
                        <div className={styles.pgNote}>
                            <p>Credit Or Debit Cards (Master Card, Visa Card, American Express Card, Diner Club Card, and more.)</p>
                        </div>
                    </div>
                </div>
            </label>
            <div className={styles.acceptTerms}>
                <div className={ isAgree ? styles.checkBoxTrue : styles.checkBox } onClick={() => {handleAgreeTerms()}}>
                    {isAgree ? <IconList Icon="CheckMark" /> : null}
                </div>
                <div className={styles.termsAgree}>
                    <p>
                        I agree with the <Link href="/terms-conditions">Terms & Conditions</Link> and the <Link href="/cancellation-refund">Cancellation Policy</Link> of Beyond Ocenas.
                    </p>
                </div>
            </div>
            {
                (props.totalAmount && props.contectData ) ?
                // false ?
                <button className={styles.payNowBTN} onClick={() => {handlePayment()}}>Proceed To Payment</button>
                : <div className={styles.payNowBTNSkeleton}>Proceed To Payment</div>
            }
        </div>
    </div>
  )
}
