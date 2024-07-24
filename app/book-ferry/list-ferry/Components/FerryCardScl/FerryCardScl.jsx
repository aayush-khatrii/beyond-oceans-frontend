
import styles from './FerryCardScl.module.css'

export default function FerryCard() {
    return (
    <div className={styles.mainWrapper}>
        <div className={styles.ferryListCard}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.ferryCardWrapper}>
                <div className={styles.ferryCardLeft}>
                    <div className={styles.cardTitle}>
                        <div className={styles.mainTitle}><span></span></div>
                        <div className={styles.opratorInfo}></div>
                    </div>
                    <div className={styles.ferryDetaildSec}>
                    </div>
                    <div className={styles.ferryFeatures}>
                        <div className={styles.featureList}></div>
                        <div className={styles.featureList}></div>
                        <div className={styles.featureList}></div>
                    </div>
                </div>
                <div className={styles.middleSep}></div>
                <div className={styles.ferryCardRight}>
                    <div className={styles.ratting}></div>
                    <div className={styles.pricingCont}>
                        <div className={styles.tripPrice}><span>₹</span><div className={styles.tripPriceScl}></div></div>
                        <div className={styles.tripPriceNote}><span>per ticket</span></div>
                    </div>
                    <button className={styles.bookingBTN} disabled></button>
                </div>
            </div>
        </div>
    </div>
  )
}
