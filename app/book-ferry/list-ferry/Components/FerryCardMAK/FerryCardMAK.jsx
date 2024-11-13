import React, { useEffect, useRef, useState } from 'react'
import styles from './FerryCardMAK.module.css'
import Lottie from 'lottie-react'
import FerryAni from '../../../../AppData/ani/ferry_ani.json'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import FerrySelectPopUp from './FerrySelectPopUp/FerrySelectPopUp'

export default function FerryCardMAK({data, tripData}) {

    const [ferrySelectPop, setFerrySelectPop] = useState(false)

    const lottiFerryRef = useRef(null)

    function convertTo12HourFormat(timeString) {
        let [hours, minutes, seconds] = timeString.split(':');
        hours = parseInt(hours, 10);
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
        return `${hours}:${minutes}${ampm}`;
    }

    function parseTimeString(timeString) {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return new Date(0, 0, 0, hours, minutes, seconds);
    }
    
    function getTimeDifference(time1, time2) {
        const time1Date = parseTimeString(time1);
        const time2Date = parseTimeString(time2);
        
        const diffMilliseconds = time2Date - time1Date;
        const diffMinutes = Math.floor(diffMilliseconds / 1000 / 60);
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
      
        return `${hours}h ${minutes}m`;
    }

    useEffect(() => {
        lottiFerryRef.current.setSpeed(.6)
    },[])

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

    const ticketStartingPrice = Intl.NumberFormat('en-IN').format(data && data.Classes[0].ship_class_price)
    
    const IslandName = {
        1: "Port Blair",
        2: "Swaraj Dweep",
        3: "Shaheed Dweep"
    }

    function handleFerrySelectPopup(){
        setFerrySelectPop(!ferrySelectPop)
    }
    
    return (
    <div className={styles.mainWrapper}>
        {ferrySelectPop && data && <FerrySelectPopUp ferryData={data} tripData={tripData} handleClose={handleFerrySelectPopup} />}
        <div className={styles.ferryListCard}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.ferryCardWrapper}>
                <div className={styles.ferryCardLeft}>
                    <div className={styles.cardTitle}>
                        <div className={styles.mainTitle}><span>{data && data.ship_title}</span></div>
                        <div className={styles.opratorInfo}><span>Oprated by Makruzz</span></div>
                    </div>
                    <div className={styles.ferryDetaildSec}>
                        <div className={styles.cardFromInfo}>
                            <div className={styles.fromTimeing}>{data && convertTo12HourFormat(data.departure_time)}</div>
                            <div className={styles.fromLocation}>{IslandName[data.source_location_id]}</div>
                        </div>
                        <div className={styles.middleIconSec}>
                            <div className={styles.leftDot}></div>
                            <div className={styles.borderBoxs}></div>
                            <div className={styles.rightDot}></div>
                            <div className={styles.ferryAnimationCont}>
                                <div className={styles.ferryAnimationICO}>
                                    <Lottie lottieRef={lottiFerryRef} animationData={FerryAni} />
                                </div>
                                <div className={styles.tripDuration}><span>{data && getTimeDifference(data.departure_time, data.arrival_time)}</span></div>
                            </div>
                        </div>
                        <div className={styles.cardToInfo}>
                            <div className={styles.toTimeing}>{data && convertTo12HourFormat(data.arrival_time)}</div>
                            <div className={styles.toLocation}>{IslandName[data.destination_location_id]}</div>
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
                    <button className={styles.bookingBTN} onClick={() => {handleFerrySelectPopup()}}>Select Ferry</button>
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
                    <button className={styles.bookingBTN} onClick={() => {handleFerrySelectPopup()}}>Select Ferry</button>
                </div>
            </div>
        </div>
    </div>
  )
}
