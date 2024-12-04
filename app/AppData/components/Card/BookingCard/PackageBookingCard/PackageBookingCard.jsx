import styles from './PackageBookingCard.module.css'
import IconList from '../../../IconComponent/IconList'
import Image from 'next/image'
import { getBookingInvocie } from '@/app/AppData/http/booking'
import { Toaster, toast } from 'sonner'
import { AxiosError } from 'axios';


export default function PackageBookingCard({bookingData}) {


    const bookingStatusTag = {
        "Booking Confirm": {br: "C1E7DA", bg: "EBF7F3", tx: "38B089"},
        "Pending Payment": {br: "FFE6B3", bg: "FFF7E6", tx: "FFAD01"},
        "Pending Review": {br: "B9BED3", bg: "E9EAF1", tx: "1E2C70"},
        "Booking Failed": {br: "F1D3D3", bg: "F8E9E9", tx: "BB2124"},
    }

    const paymentStatusTag = {
        "COMPLETED": {br: "C1E7DA", bg: "EBF7F3", tx: "38B089"},
        "Initiated": {br: "FFE6B3", bg: "FFF7E6", tx: "FFAD01"},
        "FAILED": {br: "d3b9b9", bg: "F8E9E9", tx: "BB2124"},
    }

    const packageData = bookingData.Booking_Items[0]

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    function datetoString(date){

        const newdate = new Date(date);

        const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const day = newdate.getDate();
        const month = monthNames[newdate.getMonth()];
        const year = newdate.getFullYear();

        return `${day} ${month}, ${year}`;
    }

    function incressDate(date, inc){
        const newdate = new Date(date); // "2024-08-05"

        newdate.setDate(newdate.getDate() + inc - 1);
        // Format the new date back to a string
        const newDateString = newdate.toISOString().split('T')[0]; // "2024-08-05"

        const dateObj = new Date(newDateString)
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
    
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
    
        return `${day} ${month}, ${year}`;
    }

    async function handleInvoiceDownload(){

        try {
            const {data} = await getBookingInvocie({bookingId: bookingData.Booking_Id})
            console.log(data.data)
            const presignedUrl = data.data.preSignedUrl

            const link = document.createElement('a');
            link.href = presignedUrl;
            link.download = '';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
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
    }

    const travelerObj = bookingData && bookingData.Traveler

    const Travelers = bookingData && 
    `
    ${travelerObj.Adults > 0 ? `${travelerObj.Adults} Adult${travelerObj.Adults > 1 ? "s" : ""}` : ""}
    ${travelerObj.Child > 0 ? ` ,${travelerObj.Child} Child${travelerObj.Child > 1 ? "s" : ""}` : ""}
    ${travelerObj.Infant > 0 ? ` ,${travelerObj.Infant} Infant${travelerObj.Infant > 1 ? "s" : ""}` : ""}
    `

  return (
    <div className={styles.bookingCard}>
        <Toaster richColors toastOptions={{ style: { fontFamily: "DM Sans",fontSize: "16px"}}}/>
        <div className={styles.top}>
            <div className={styles.left}>
                <span className={styles.cardTitle}>{packageData.Package_Title}</span>
                <div className={styles.bookingDesc}>
                    <div className={`${styles.durations} ${styles.bookContList}`}>
                        <IconList Icon="Duration"/>
                        <span className={styles.descTitle}>Duration:</span>
                        <span className={styles.descValue}>{packageData.Pack_Duration.Day} Days and {packageData.Pack_Duration.Night} Nights</span>
                    </div>
                    <div className={`${styles.date} ${styles.bookContList}`}>
                        <IconList Icon="DateCal"/>
                        <span className={styles.descTitle}>Trip Date:</span>
                        <span className={styles.descValue}>{datetoString(bookingData.Travel_Date)} to {incressDate(bookingData.Travel_Date, packageData.Pack_Duration.Day)}</span>
                    </div>
                    <div className={`${styles.traveller} ${styles.bookContList}`}>
                        <IconList Icon="FamilyPackage"/>
                        <span className={styles.descTitle}>Travellers:</span>
                        <span className={styles.descValue}>{Travelers}</span>
                    </div>
                </div>
                <div className={styles.cnfAmt}>
                    <div className={styles.amt}>
                        <span className={styles.amtTitle}>Total Amount: </span>
                        <span className={styles.amtValue}>₹{intPrice(bookingData.Payment_Deatils.Payment_Total_With_TAX)}</span>
                    </div>
                </div>
                {/* <div style={{
                        borderColor: `#${(tagPriority[data.Tags.Card_Tag.Priority]).br}`, 
                        color: `#${(tagPriority[data.Tags.Card_Tag.Priority]).tx}`, 
                        backgroundColor: `#${(tagPriority[data.Tags.Card_Tag.Priority]).bg}`
                    }} 
                    className={styles.cnfSts}>
                        <span>Booking Confirmed</span>
                </div> */}
                    <div className={styles.bookingTags}>
                        <div style={{
                            borderColor: `#${(bookingStatusTag[bookingData.Booking_Status]).br}`, 
                            color: `#${(bookingStatusTag[bookingData.Booking_Status]).tx}`, 
                            backgroundColor: `#${(bookingStatusTag[bookingData.Booking_Status]).bg}`
                        }} 
                        className={styles.cnfSts}>
                            <span>{bookingData.Booking_Status}</span>
                        </div>
                        <div style={{
                            borderColor: `#${(paymentStatusTag[bookingData.Payment_Status]).br}`, 
                            color: `#${(paymentStatusTag[bookingData.Payment_Status]).tx}`, 
                            backgroundColor: `#${(paymentStatusTag[bookingData.Payment_Status]).bg}`
                        }} 
                        className={styles.cnfSts}>
                            <span>PAYMENT: {bookingData.Payment_Status}</span>
                        </div>
                    </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/assets/product_img.png"
                        fill={true}
                        sizes="100%"
                        alt="Package"
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
        </div>
        <div className={styles.foot}>
            <div className={styles.footLeft}>
                <div className={styles.bookingDetails}>
                    <span>Booking ID: </span>
                    <span>&nbsp; {bookingData.Booking_Id}</span>
                </div>
            </div>
            <div className={styles.footRight}>
                {   
                    bookingData.Payment_Status === "COMPLETED" &&
                    <button className={styles.downBtn} onClick={() => {handleInvoiceDownload()}}>Download Invoice</button>
                }
                <button className={styles.detailsBtn}>View Details</button>
            </div>
        </div>
    </div>
  )
}
