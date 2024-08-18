import PackageDetSkeleton from '../PackageDetSkeleton/PackageDetSkeleton'
import styles from './PackageDeatils.module.css'

export default function PackageDeatils({bookingData}) {

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
        const newdate = new Date(date);

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

    const travelerObj = bookingData && bookingData.Traveler

    const Travelers = bookingData && 
    `
    ${travelerObj.Adults > 0 ? `${travelerObj.Adults} Adult${travelerObj.Adults > 1 ? "s" : ""}` : ""}
    ${travelerObj.Child > 0 ? ` ,${travelerObj.Child} Child${travelerObj.Child > 1 ? "s" : ""}` : ""}
    ${travelerObj.Infant > 0 ? ` ,${travelerObj.Infant} Infant${travelerObj.Infant > 1 ? "s" : ""}` : ""}
    `
    
    return (
    <div className={styles.mainWrapper}>
        {
            bookingData ?
            <>
            <div className={styles.packageTitle}><span>{bookingData.Item.Package_Title}</span></div>
            <div className={styles.deatilsLists}>
                <div className={styles.packageOption}>
                    <span className={styles.lable}>Package Option:</span>
                    <span className={styles.value}>{bookingData.Item.Package_Option_Title}</span>
                </div>
                <div className={styles.packageDuration}>
                    <span className={styles.lable}>Duration:</span>
                    <span className={styles.value}>{bookingData.Item.Pack_Duration.Day} Days and {bookingData.Item.Pack_Duration.Night} Nights</span>
                </div>
                <div className={styles.tripDate}>
                    <span className={styles.lable}>Trip Date:</span>
                    <span className={styles.value}>{datetoString(bookingData.Travel_Date)} to {incressDate(bookingData.Travel_Date, bookingData.Item.Pack_Duration.Day)}</span>
                </div>
                <div className={styles.traveler}>
                    <span className={styles.lable}>Travelers:</span>
                    <span className={styles.value}>{Travelers}</span>
                </div>
                <div className={styles.departurePlace}>
                    <span className={styles.lable}>Departure Place:</span>
                    <span className={styles.value}>{bookingData.Item.Departure_Place}</span>
                </div>
                <div className={styles.paidAmt}>
                    <span className={styles.lable}>Paid Amount:</span>
                    <span className={styles.value}>₹{intPrice(bookingData.Paid_Amount)}</span>
                </div>
                <div className={styles.totalAmt}>
                    <span className={styles.lable}>Total Amount:</span>
                    <span className={styles.value}>₹{intPrice(bookingData.Total_Amount)}</span>
                </div>
                <div className={styles.paymentGW}>
                    <span className={styles.lable}>Payment Gateway:</span>
                    <span className={styles.value}>{bookingData.Payment_GW}</span>
                </div>
            </div>
            </> : <PackageDetSkeleton />
        }
    </div>
  )
}
