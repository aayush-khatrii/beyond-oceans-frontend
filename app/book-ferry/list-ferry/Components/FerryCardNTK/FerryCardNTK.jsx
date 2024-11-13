import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import styles from './FerryCardNTK.module.css'
import FerryAni from '../../../../AppData/ani/ferry_ani.json'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import NTKPopup from './NTKPopup/NTKPopup'

export default function FerryCardNTK({data, tripData}) {

    const lottiFerryRef = useRef(null)
    const [ferrySelectPop, setFerrySelectPop] = useState(false)

    function convertTo12HourFormat(timeString) {
        let { hour, minute } = timeString
        const ampm = hour >= 12 ? 'pm' : 'am'
        hour = hour % 12 || 12
        minute = minute.toString().padStart(2, '0')
        return `${hour}:${minute} ${ampm}`
    }


    function convertToMinutes(timeString) {
        return timeString.hour * 60 + timeString.minute;
    }

    useEffect(() => {
        if (ferrySelectPop) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        return () => {
          document.body.style.overflow = ''; // Cleanup on component unmount
        };
      }, [ferrySelectPop]);
    
    function getTimeDifference(time1, time2) {
        const minutes1 = convertToMinutes(time1);
        const minutes2 = convertToMinutes(time2);
        
        let diffMinutes = Math.abs(minutes2 - minutes1);
        
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
        
        return `${hours}h ${minutes}m`;
    }


    useEffect(() => {
        lottiFerryRef.current.setSpeed(.6)
    },[])

    const ticketStartingPrice = Intl.NumberFormat('en-IN').format(data && data.fares.pBaseFare)

    function handleFerrySelectPopup(){
        setFerrySelectPop(!ferrySelectPop)
    }


    return (
    <div className={styles.mainWrapper}>
        {/* {ferrySelectPop && data && <NTKPopup handleClose={handleFerrySelectPopup} ferryData={data}/>} */}
        {ferrySelectPop && data && <NTKPopup ferryData={data} tripData={tripData} handleClose={handleFerrySelectPopup} />}
        <div className={styles.ferryListCard}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.ferryCardWrapper}>
                <div className={styles.ferryCardLeft}>
                    <div className={styles.cardTitle}>
                        <div className={styles.mainTitle}><span>{data && data.ship_title}</span></div>
                        <div className={styles.opratorInfo}><span>Oprated by {data && data.operator}</span></div>
                    </div>
                    <div className={styles.ferryDetaildSec}>
                        <div className={styles.cardFromInfo}>
                            <div className={styles.fromTimeing}>{data && convertTo12HourFormat(data.dTime)}</div>
                            <div className={styles.fromLocation}>{data && data.from}</div>
                        </div>
                        <div className={styles.middleIconSec}>
                            <div className={styles.leftDot}></div>
                            <div className={styles.borderBoxs}></div>
                            <div className={styles.rightDot}></div>
                            <div className={styles.ferryAnimationCont}>
                                <div className={styles.ferryAnimationICO}>
                                    <Lottie lottieRef={lottiFerryRef} animationData={FerryAni} />
                                </div>
                                <div className={styles.tripDuration}><span>{data && getTimeDifference(data.dTime, data.aTime)}</span></div>
                            </div>
                        </div>
                        <div className={styles.cardToInfo}>
                            <div className={styles.toTimeing}>{data && convertTo12HourFormat(data.aTime)}</div>
                            <div className={styles.toLocation}>{data && data.to}</div>
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
                            Array(5).fill().map((item, index) => (
                                <IconList key={index} Icon="Star" />
                            ))
                        }
                        </div>
                        <div className={styles.rattingCount}><span>(1024)</span></div>
                    </div>
                    <div className={styles.pricingCont}>
                        <div className={styles.tripPrice}><span>₹ {data && ticketStartingPrice}</span></div>
                        <div className={styles.tripPriceNote}><span>per ticket</span></div>
                    </div>
                    <button onClick={() => {handleFerrySelectPopup()}}  className={styles.bookingBTN}>Select Seats</button>
                    {/* <button className={styles.bookingBTN}>Select Seats</button> */}
                </div>
                <div className={styles.ferryCardRightMob}>
                    <div className={styles.awdawdawdawd}>
                        <div className={styles.ratting}>
                            <div className={styles.starsList}>
                            {
                                Array(5).fill().map((item, index) => (
                                    <IconList key={index} Icon="Star" />
                                ))
                            }
                            </div>
                            <div className={styles.rattingCount}><span>(1024)</span></div>
                        </div>
                        <div className={styles.pricingCont}>
                            <div className={styles.tripPrice}><span>₹ {data && ticketStartingPrice}</span></div>
                            <div className={styles.tripPriceNote}><span>per ticket</span></div>
                        </div>
                    </div>
                    <button className={styles.bookingBTN}>Select Seats</button>
                </div>
            </div>
        </div>
    </div>
  )
}
