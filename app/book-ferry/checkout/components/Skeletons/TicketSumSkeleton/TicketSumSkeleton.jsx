import styles from './TicketSumSkeleton.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Image from 'next/image'

export default function TicketSumSkeleton() {

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Ticket Summary</div>
        <div className={styles.mainContent}>
            <div className={styles.ferryDeatil}>
                <div className={styles.ferryRouteDeatil}>
                    <div className={styles.ferryDeatilTital}>
                        <div className={styles.ferryTitleLeft}>
                            <div className={styles.tripDate}></div>
                            <div className={styles.ferryClassTitle}></div>
                        </div>
                        <div className={styles.ferryTitleRight}>
                            <div className={styles.imgWrapper}></div>
                        </div>
                    </div>
                    <div className={styles.ferryRouteList}>
                        <div className={styles.locConnectorLine}></div>
                        <div className={styles.ferryRouteFrom}>
                            <div className={styles.fromDotIco}></div>
                            <div className={styles.ferryRouteFromWrapper}>
                                <div className={styles.ferryFromTop}></div>
                                <div className={styles.ferryFromBottom}>
                                    <div className={styles.routeDurationLable}><span>Total Trip Duration: </span></div>
                                    <div className={styles.routeDurationValue}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ferryRouteTo}>
                            <div className={styles.fromDotIco}></div>
                            <div className={styles.ferryToTop}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ferryNote}></div>
            <div className={styles.paxTypeList}>
                <div className={styles.adultPaxWrapper}>
                    <div className={styles.adultContTitle}>Adults</div>
                    <div className={styles.adultContainer}>
                        <div className={styles.packagePrice}>
                            <div className={styles.ppriceLeft}>
                                <span className={styles.ppriceLable}>Ticket Price</span>
                                <span className={styles.packageOption}></span>
                            </div>
                            <div className={styles.ppriceRight}>
                                <div className={styles.ppriceValue}>₹ <span></span></div>
                                <span className={styles.ppriceNote}>Per Adult</span>
                            </div>
                        </div>
                        <div className={styles.packagePrice}>
                            <div className={styles.ppriceLeft}>
                                <span className={styles.ppriceLable}>Port Service Fee</span>
                                {/* <span className={styles.packageOption}>({filterFerryClass(ferryCheckout?.Ferry_Data.Class_Id)?.class_title})</span> */}
                            </div>
                            <div className={styles.ppriceRight}>
                                <div className={styles.ppriceValue}>₹ <span></span></div>
                                <span className={styles.ppriceNote}>Per Person</span>
                            </div>
                        </div>
                        <div className={styles.traveler}>
                            <div className={styles.travelerLable}><span>Total Adults</span></div>
                            <div className={styles.travelerValue}>X <span></span></div>
                        </div>
                    </div>
                </div>
                <div className={styles.infantPaxWrapper}>
                    <div className={styles.infantContTitle}>Infants</div>
                    <div className={styles.infantContainer}>
                    <div className={styles.packagePrice}>
                        <div className={styles.ppriceLeft}>
                            <span className={styles.ppriceLable}>Ticket Price</span>
                            <span className={styles.packageOption}></span>
                        </div>
                        <div className={styles.ppriceRight}>
                        <div className={styles.ppriceValue}>₹ <span></span></div>
                            <span className={styles.ppriceNote}>Per Infant</span>
                        </div>
                    </div>
                    <div className={styles.packagePrice}>
                        <div className={styles.ppriceLeft}>
                            <span className={styles.ppriceLable}>Port Service Fee</span>
                            {/* <span className={styles.packageOption}>({filterFerryClass(ferryCheckout?.Ferry_Data.Class_Id)?.class_title})</span> */}
                        </div>
                        <div className={styles.ppriceRight}>
                            <div className={styles.ppriceValue}>₹ <span></span></div>
                            <span className={styles.ppriceNote}>Per Person</span>
                        </div>
                    </div>
                    <div className={styles.traveler}>
                        <div className={styles.travelerLable}><span>Total Infants</span></div>
                        <div className={styles.travelerValue}>X <span></span></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.sepretro}></div>
            <div className={styles.subTotal}>
                <div className={styles.totlaLable}><span>Sub Total</span></div>
                <div className={styles.totalValue}>₹ <span></span></div>
            </div>
            {/* <div className={styles.sepretro}></div> */}
            {/* <div className={styles.taxsComp}>
                <div className={styles.taxTitleComp}>
                    <div className={styles.taxLable}><span>Taxes and Fees</span></div>
                    <div className={styles.taxValue}><span>₹ {intPrice(totalTax)}</span></div>
                </div>
                <div className={styles.utGstBrackDown}>
                    <div className={styles.utGstLable}><span>UTGST @ 9%</span></div>
                    <div className={styles.utGstValue}><span>₹ {intPrice(UTGST)}</span></div>
                </div>
                <div className={styles.cgstBrackDown}>
                    <div className={styles.cgstLable}><span>CGST @ 9%</span></div>
                    <div className={styles.cgstValue}><span>₹ {intPrice(CGST)}</span></div>
                </div>
            </div>
            <div className={styles.taxNote}>*All taxes and fees are collected by the ferry operator</div> */}
        </div>
        <div className={styles.sepretro}></div>
        <div className={styles.totalAmt}>
            <div className={styles.totalAmtLable}><span>Total Amount Due</span></div>
            <div className={styles.totalAmtValue}>₹ <span></span></div>
        </div>
    </div>
  )
}
