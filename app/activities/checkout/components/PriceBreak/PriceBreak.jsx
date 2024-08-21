import { useEffect, useState } from 'react'
import styles from './PriceBreak.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function PriceBreak({activityData, sessionData, tatalAmountFunc, onDiscount, onContribution}) {

    const activityCheckout = sessionData && sessionData.Activity_Checkout
    const [discount, setDiscount] = useState(false)
    const [discountCode, setDiscountCode] = useState(false)
    const [contro, setContro] = useState(true)
    const [controValue, setControValue] = useState(10)
    const [UTGSTValue, setUTGSTValue] = useState(2.5)
    const [CGSTValue, setCGSTValue] = useState(2.5)

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    function filterActivityOption(optionId){
        return activityData?.Activity_Options.filter(obj => obj.Option_Id === optionId)[0]
    }

    function handleControNo(){
        setContro(false)
    }


    
    const totalPax = activityCheckout?.Traveler.Persons
    const selectedActivityOptionData = activityData?.Activity_Options.filter(obj => obj.Option_Id === activityCheckout?.Activity_Option_Id)[0]
    const subTotalValue = selectedActivityOptionData && selectedActivityOptionData.Option_Price * totalPax + (contro ? controValue : 0)

    const UTGST = subTotalValue * (UTGSTValue / 100)
    const CGST = subTotalValue * (CGSTValue / 100)

    const totalTax = UTGST + CGST
    const totalAmount = subTotalValue + totalTax
    useEffect(()=>{
        tatalAmountFunc(totalAmount)
    }, [totalAmount])

    useEffect(()=>{
        if(discount){
            onDiscount(discountCode)
        }
    }, [discount])

    useEffect(()=>{
        if(contro){
            onContribution(controValue)
        }
        if(!contro){
            onContribution(0)
        }
    }, [contro])

    console.log(selectedActivityOptionData)

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Price Breakup</div>
        <div className={styles.mainContent}>
            <div className={styles.packagePrice}>
                <div className={styles.ppriceLeft}>
                    <span className={styles.ppriceLable}>Package Price</span>
                    <span className={styles.packageOption}>({filterActivityOption(activityCheckout?.Activity_Option_Id)?.Option_Title})</span>
                </div>
                <div className={styles.ppriceRight}>
                    <span className={styles.ppriceValue}>₹{intPrice(filterActivityOption(activityCheckout?.Activity_Option_Id)?.Option_Price)}</span>
                    <span className={styles.ppriceNote}>Per Person</span>
                </div>
            </div>
            <div className={styles.traveler}>
                <div className={styles.travelerLable}><span>Total Traveler</span></div>
                <div className={styles.travelerValue}><span>X {totalPax}</span></div>
            </div>
            {   discount &&
                <div className={styles.discount}>
                    <div className={styles.travelerLable}><span>Total Discount</span></div>
                    <div className={styles.travelerValue}><span>- {intPrice(0)}</span></div>
                </div>
            }
           { contro &&
            <div className={styles.contro}>
                <div className={styles.controTitle}>
                    <IconList Icon="Contribution" />
                    <span className={styles.controTitleText}>Contribution to Cleaner Ocean</span>
                    <span className={styles.controTitletc}>T&C.</span>
                </div>
                <div className={styles.controPrice}>
                    <span className={styles.controValue}>₹10</span>
                    <span className={styles.controIDW} onClick={() => {handleControNo()}}>I don't want</span>
                </div>
            </div>}
            <div className={styles.sepretro}></div>
            <div className={styles.subTotal}>
                <div className={styles.totlaLable}><span>Sub Total</span></div>
                <div className={styles.totalValue}><span>₹ {intPrice(subTotalValue)}</span></div>
            </div>
            <div className={styles.sepretro}></div>
            <div className={styles.taxsComp}>
                <div className={styles.taxTitleComp}>
                    <div className={styles.taxLable}><span>Taxes and Fees</span></div>
                    <div className={styles.taxValue}><span>₹ {intPrice(totalTax)}</span></div>
                </div>
                <div className={styles.utGstBrackDown}>
                    <div className={styles.utGstLable}><span>UTGST @ 2.5%</span></div>
                    <div className={styles.utGstValue}><span>₹ {intPrice(UTGST)}</span></div>
                </div>
                <div className={styles.cgstBrackDown}>
                    <div className={styles.cgstLable}><span>CGST @ 2.5%</span></div>
                    <div className={styles.cgstValue}><span>₹ {intPrice(CGST)}</span></div>
                </div>
            </div>
        </div>
        <div className={styles.sepretro}></div>
        <div className={styles.totalAmt}>
            <div className={styles.totalAmtLable}><span>Total Amount Due</span></div>
            <div className={styles.totalAmtValue}><span>₹ {intPrice(totalAmount)}</span></div>
        </div>
    </div>
  )
}
