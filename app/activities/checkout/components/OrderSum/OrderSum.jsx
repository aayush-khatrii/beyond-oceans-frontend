import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './OrderSum.module.css'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'

export default function OrderSum({sessionData, packageData, hotelData}) {
    const packageCheckout = sessionData && sessionData.Package_Checkout
    const travelers = packageCheckout && packageCheckout.Traveler
    const TravelerComp = (
        <div>{travelers?.Adults ?  `${travelers.Adults} Adults` : ""}{travelers?.Child > 0 ? `, ${travelers.Child} Child` : ""}{travelers?.Infant > 0 ? `, ${travelers.Infant} Infant` : ""}</div>
    )

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

        newdate.setDate(newdate.getDate() + inc);

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
        const packageOption = packageData.Package_Options.filter(obj => obj.Option_Id === optionID)
        return packageOption[0]
    }

    function packageOptionfilterHotel(){
        return hotelData.map(obj => obj.Hotel_Name).join(', ')
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Your Order Summary</div>
        {packageData && sessionData && hotelData &&
            <div className={styles.mainContetn}>
                <div className={styles.packageTitle}><span>{packageData.Package_Title}</span></div>
                <div className={styles.summaryList}>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="DateTime"/></div>
                        <div className={styles.itemLable}>Duration:</div>
                        <div className={styles.itemData}><span>{packageData.Pack_Duration.Day} Days and {packageData.Pack_Duration.Night} Nights</span></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="DateCal"/></div>
                        <div className={styles.itemLable}>Trip Date:</div>
                        <div className={styles.itemData}><span>{datetoString(packageCheckout.Travel_Date)} to {incressDate(packageCheckout.Travel_Date, packageData.Pack_Duration.Day)}</span></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="BestSellers" /></div>
                        <div className={styles.itemLable}>Package Option:</div>
                        <div className={styles.itemData}><span>{packageOptionfilter(packageCheckout.Package_Option_Id).Option_Title}</span></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><FETIconList Icon="Hotel"/></div>
                        <div className={styles.itemLable}>Hotel or Resort:</div>
                        <div className={styles.itemData}><span>{packageOptionfilterHotel(packageCheckout.Package_Option_Id)}</span></div>
                    </div>
                    <div className={styles.summaryItem}>
                        <div className={styles.itemIcon}><IconList Icon="FamilyPackage"/></div>
                        <div className={styles.itemLable}>Travellers:</div>
                        <div className={styles.itemData}><span>{TravelerComp}</span></div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}
