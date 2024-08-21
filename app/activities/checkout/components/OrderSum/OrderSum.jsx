import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './OrderSum.module.css'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'

export default function OrderSum({sessionData, activityData}) {
    const activityCheckout = sessionData && sessionData.Activity_Checkout
    const travelers = activityCheckout && activityCheckout.Traveler

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

    function packageOptionfilter(optionID){
        const activityOption = activityData.Activity_Options.filter(obj => obj.Option_Id === optionID)
        return activityOption[0]
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

console.log(activityData)
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Your Order Summary</div>
        {sessionData && activityData &&
            <div className={styles.mainContetn}>
                <div className={styles.packageTitle}>{activityData ? <span>{activityData.Activity_Title}</span> : null}</div>
                <div className={styles.summaryList}>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="DateTime"/></div>
                        <div className={styles.itemLable}>Duration:</div>
                        <div className={styles.itemData}><span>{convertMinutes(activityData.Activity_Duration)}</span></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="DateCal"/></div>
                        <div className={styles.itemLable}>Trip Date:</div>
                        <div className={styles.itemData}><span>{datetoString(activityCheckout.Travel_Date)}</span></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="ActivitySumLocation" /></div>
                        <div className={styles.itemLable}>Location:</div>
                        <div className={styles.itemData}><span>{activityData.Activity_Place}</span></div>
                    </div>
                    {   activityCheckout.Addon &&
                        <div className={styles.summaryItem}>
                            <div className={styles.itemIcon}><IconList Icon="StayRating"/></div>
                            <div className={styles.itemLable}>Addon:</div>
                            <div className={styles.itemData}><span>{activityCheckout.Addon}</span></div>
                        </div>
                    }
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="FamilyPackage"/></div>
                        <div className={styles.itemLable}>Travellers:</div>
                        <div className={styles.itemData}><span>{`${travelers.Persons} Person${travelers.Persons > 1 ? "s" : ""}`}</span></div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}
