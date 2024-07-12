import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'
import styles from './FerryCard.module.css'
import FerryAni from '../../../../AppData/ani/ferry_ani.json'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function FerryCard({tripData}) {

    const lottiFerryRef = useRef(null)

    useEffect(() => {
        lottiFerryRef.current.setSpeed(.6)
    },[])

    
    const IslandName = {
        1: "Port Blair",
        2: "Swaraj Dweep",
        3: "Shaheed Dweep"
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.ferryListCard}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.ferryCardWrapper}>
                <div className={styles.ferryCardLeft}>
                    <div className={styles.cardTitle}>
                        <div className={styles.mainTitle}><span>Nautika Lite</span></div>
                        <div className={styles.opratorInfo}><span>Oprated by Sea Link India</span></div>
                    </div>
                    <div className={styles.ferryDetaildSec}>
                        <div className={styles.cardFromInfo}>
                            <div className={styles.fromTimeing}>6:30am</div>
                            <div className={styles.fromLocation}>{IslandName[tripData.dept]}</div>
                        </div>
                        <div className={styles.middleIconSec}>
                            <div className={styles.leftDot}></div>
                            <div className={styles.borderBoxs}></div>
                            <div className={styles.rightDot}></div>
                            <div className={styles.ferryAnimationCont}>
                                <div className={styles.ferryAnimationICO}>
                                    <Lottie lottieRef={lottiFerryRef} animationData={FerryAni} />
                                </div>
                                <div className={styles.tripDuration}><span>1h 30m</span></div>
                            </div>
                        </div>
                        <div className={styles.cardToInfo}>
                            <div className={styles.toTimeing}>8:30am</div>
                            <div className={styles.toLocation}>{IslandName[tripData.dest]}</div>
                        </div>
                    </div>
                    <div className={styles.ferryFeatures}>
                        <div className={styles.featureList}>
                            <div className={styles.featureIcon}><IconList Icon="TicketV2"/></div>
                            <div className={styles.featureText}>Instant Booking</div>
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureIcon}><IconList Icon="Wind"/></div>
                            <div className={styles.featureText}>Air Conditioner</div>
                        </div>
                        <div className={styles.featureList}>
                            <div className={styles.featureIcon}><IconList Icon="Energy"/></div>
                            <div className={styles.featureText}>Super Fast</div>
                        </div>
                    </div>
                </div>
                <div className={styles.middleSep}></div>
                <div className={styles.ferryCardRight}>
                    <div className={styles.ratting}>
                        <div className={styles.starsList}>
                        {
                            Array(5).fill().map((index) => (
                                <IconList key={index} Icon={"Star"} />
                            ))
                        }
                        </div>
                        <div className={styles.rattingCount}><span>(1024)</span></div>
                    </div>
                    <div className={styles.pricingCont}>
                        <div className={styles.tripPrice}><span>₹ 1,400</span></div>
                        <div className={styles.tripPriceNote}><span>per ticket</span></div>
                    </div>
                    <button className={styles.bookingBTN}>Select Seats</button>
                </div>
            </div>
        </div>
    </div>
  )
}
