import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './BookingGuide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

import 'swiper/css';


export default function BookingGuide() {
    
    const swiperRef = useRef(null);

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.secTitle}>
            <div className={styles.mainTitle}><h2>Book Ferry In Just 3 Steps</h2></div>
            <div className={styles.secondTitle}><h3>Streamlined Booking: Navigate, Customize, Confirm – Your Ferry Journey Made Effortless!</h3></div>
        </div>
        <div className={styles.cardList}>
            <div className={`${styles.guideCard} ${styles.guideCardfirst}`}>
                <div className={styles.cardIcon}><IconList Icon="FindYourRide" /></div>
                <div className={styles.cardTitle}><span>Find Your Ride</span></div>
                <div className={styles.cardDesc}><p>Begin by entering your destination and preferred travel dates into our search bar. We'll show you all available ferry options for your journey.</p></div>
            </div>
            <div className={`${styles.guideCard} ${styles.guideCardSecond}`}>
                <div className={styles.cardIcon}><IconList Icon="PickYourSeat" /></div>
                <div className={styles.cardTitle}><span>Pick Your Seat</span></div>
                <div className={styles.cardDesc}><p>Once you've found the ferry that suits you best, simply select your desired seats or cabin. Choose where you want to sit or relax during your voyage.</p></div>
            </div>
            <div className={`${styles.guideCard} ${styles.guideCardThird}`}>
                <div className={styles.cardIcon}><IconList Icon="SecureYourSpot" /></div>
                <div className={styles.cardTitle}><span>Secure Your Spot</span></div>
                <div className={styles.cardDesc}><p>After choosing your seats, proceed to payment. It's quick and easy! Complete your booking by securely paying online.</p></div>
            </div>
            <div className={`${styles.guideCard} ${styles.guideCardLast}`}>
                <div className={styles.cardIcon}><IconList Icon="CelebrationGuide" /></div>
                <div className={styles.cardDesc}><p>Hurray! you will receive the tickets from the ferry operator in 2-4 working hours.</p></div>
            </div>
        </div>
        <div className={styles.cardListMob}>
            <Swiper ref={swiperRef} spaceBetween={10} slidesPerView={1.2} loop={true}>
                <SwiperSlide className={styles.swiperSlides}>
                    <div className={`${styles.guideCard} ${styles.guideCardfirst}`}>
                        <div className={styles.cardIcon}><IconList Icon="FindYourRide" /></div>
                        <div className={styles.cardTitle}><span>Find Your Ride</span></div>
                        <div className={styles.cardDesc}><p>Begin by entering your destination and preferred travel dates into our search bar. We'll show you all available ferry options for your journey.</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlides}>
                    <div className={`${styles.guideCard} ${styles.guideCardSecond}`}>
                        <div className={styles.cardIcon}><IconList Icon="PickYourSeat" /></div>
                        <div className={styles.cardTitle}><span>Pick Your Seat</span></div>
                        <div className={styles.cardDesc}><p>Once you've found the ferry that suits you best, simply select your desired seats or cabin. Choose where you want to sit or relax during your voyage.</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlides}>
                    <div className={`${styles.guideCard} ${styles.guideCardThird}`}>
                        <div className={styles.cardIcon}><IconList Icon="SecureYourSpot" /></div>
                        <div className={styles.cardTitle}><span>Secure Your Spot</span></div>
                        <div className={styles.cardDesc}><p>After choosing your seats, proceed to payment. It's quick and easy! Complete your booking by securely paying online.</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlides}>
                    <div className={`${styles.guideCard} ${styles.guideCardLast}`}>
                        <div className={styles.cardIcon}><IconList Icon="CelebrationGuide" /></div>
                        <div className={styles.cardDesc}><p>Hurray! you will receive the tickets from the ferry operator in 2-4 working hours.</p></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
