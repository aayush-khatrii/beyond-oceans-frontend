import styles from './PriceBreak.module.css'

export default function PriceBreak({packageData, sessionData}) {

    const packageCheckout = sessionData && sessionData.Package_Checkout

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    function filterPackageOption(optionId){
        return packageData?.Package_Options.filter(obj => obj.Option_Id === optionId)[0]
    }

    const totleTraveler = packageCheckout?.Traveler.Adults + packageCheckout?.Traveler.Child + packageCheckout?.Traveler.Infant

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Price Breakup</div>
        <div className={styles.mainContent}>
            <div className={styles.packagePrice}>
                <div className={styles.ppriceLeft}>
                    <span className={styles.ppriceLable}>Package Price</span>
                    <span className={styles.packageOption}>({filterPackageOption(packageCheckout?.Package_Option_Id)?.Option_Title})</span>
                </div>
                <div className={styles.ppriceRight}>
                    <span className={styles.ppriceValue}>₹{intPrice(filterPackageOption(packageCheckout?.Package_Option_Id)?.Option_Price)}</span>
                    <span className={styles.ppriceNote}>Per Person</span>
                </div>
            </div>
            <div className={styles.traveler}>
                <div className={styles.travelerLable}><span>Total Traveler</span></div>
                <div className={styles.travelerValue}><span>X {totleTraveler}</span></div>
            </div>
            <div className={styles.contro}>
                <div className={styles.travelerLable}><span>Total Traveler</span></div>
                <div className={styles.travelerValue}><span>X {totleTraveler}</span></div>
            </div>
        </div>
    </div>
  )
}
