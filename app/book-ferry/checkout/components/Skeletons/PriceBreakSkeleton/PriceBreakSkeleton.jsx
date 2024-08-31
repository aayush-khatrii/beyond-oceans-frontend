import styles from './PriceBreakSkeleton.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function PriceBreakSkeleton() {

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Price Breakup</div>
        <div className={styles.mainContent}>
            <div className={styles.packagePrice}>
                <div className={styles.ppriceLeft}>
                    <span className={styles.ppriceLable}>Package Price</span>
                    <span className={styles.packageOption}></span>
                </div>
                <div className={styles.ppriceRight}>
                    <div className={styles.ppriceValue}>₹ <div className={styles.SkeletonBox}></div></div>
                    <span className={styles.ppriceNote}>Per Person</span>
                </div>
            </div>
            <div className={styles.traveler}>
                <div className={styles.travelerLable}><span>Total Traveler</span></div>
                <div className={styles.travelerValue}>X<div className={styles.SkeletonBox}></div></div>
            </div>
            <div className={styles.contro}>
                <div className={styles.controTitle}>
                    <IconList Icon="Contribution" />
                    <span className={styles.controTitleText}>Contribution to Cleaner Ocean</span>
                    <span className={styles.controTitletc}>T&C.</span>
                </div>
                <div className={styles.controPrice}>
                    <span className={styles.controValue}>₹10</span>
                    <span className={styles.controIDW}>I don't want</span>
                </div>
            </div>
            <div className={styles.sepretro}></div>
            <div className={styles.subTotal}>
                <div className={styles.totlaLable}><span>Sub Total</span></div>
                <div className={styles.totalValue}>₹<div className={styles.SkeletonBox}></div></div>
            </div>
            <div className={styles.sepretro}></div>
            <div className={styles.taxsComp}>
                <div className={styles.taxTitleComp}>
                    <div className={styles.taxLable}><span>Taxes and Fees</span></div>
                    <div className={styles.taxValue}>₹<div className={styles.SkeletonBox}></div></div>
                </div>
                <div className={styles.utGstBrackDown}>
                    <div className={styles.utGstLable}><span>UTGST @ 2.5%</span></div>
                    <div className={styles.utGstValue}>₹<div className={styles.SkeletonBox}></div></div>
                </div>
                <div className={styles.cgstBrackDown}>
                    <div className={styles.cgstLable}><span>CGST @ 2.5%</span></div>
                    <div className={styles.cgstValue}>₹<div className={styles.SkeletonBox}></div></div>
                </div>
            </div>
        </div>
        <div className={styles.sepretro}></div>
        <div className={styles.totalAmt}>
            <div className={styles.totalAmtLable}><span>Total Amount Due</span></div>
            <div className={styles.totalAmtValue}>₹<div className={styles.SkeletonBox}></div></div>
        </div>
    </div>
  )
}
