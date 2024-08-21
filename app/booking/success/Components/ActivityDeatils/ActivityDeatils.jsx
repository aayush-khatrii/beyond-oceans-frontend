import styles from './ActivityDeatils.module.css'
import ActivityDetSkeleton from '../ActivityDetSkeleton/ActivityDetSkeleton'

export default function ActivityDeatils({bookingData}) {

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

    function convertMinutes(minutes) {
        if (minutes >= 60) {
            
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            if(remainingMinutes === 0){
                return `${hours} Hour${hours>1 ? "s" : ""}`;
            }
            return `${hours} Hour${hours>1 ? "s" : ""} & ${remainingMinutes.toString()} Minute${remainingMinutes.toString() > 1 ? "s" : ""}`;
        } else {
            return `${minutes} Minute${minutes > 1 ? "s" : ""}`;
        }

    }

    const travelerObj = bookingData && bookingData.Traveler

    const Travelers = bookingData && `${travelerObj.Persons > 0 ? `${travelerObj.Persons} Person${travelerObj.Persons > 1 ? "s" : ""}` : ""}`
    
    return (
    <div className={styles.mainWrapper}>
        {
            bookingData ?
            <>
            <div className={styles.packageTitle}><span>{bookingData.Item.Activity_Title}</span></div>
            <div className={styles.deatilsLists}>
                <div className={styles.packageOption}>
                    <span className={styles.lable}>Activity Option:</span>
                    <span className={styles.value}>{bookingData.Item.Activity_Option_Title}</span>
                </div>
                <div className={styles.packageDuration}>
                    <span className={styles.lable}>Activity Duration:</span>
                    <span className={styles.value}>{convertMinutes(bookingData.Item.Activity_Duration)}</span>
                </div>
                <div className={styles.tripDate}>
                    <span className={styles.lable}>Activity Date:</span>
                    <span className={styles.value}>{datetoString(bookingData.Travel_Date)}</span>
                </div>
                <div className={styles.traveler}>
                    <span className={styles.lable}>Travelers:</span>
                    <span className={styles.value}>{Travelers}</span>
                </div>
                <div className={styles.departurePlace}>
                    <span className={styles.lable}>Activity Place:</span>
                    <span className={styles.value}>{bookingData.Item.Activity_Place}</span>
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
            </> : <ActivityDetSkeleton />
        }
    </div>
  )
}
