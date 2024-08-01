'use client'
import styles from './Testimonial.module.css'
import TestimonialData from '../../../Data/Testimonial.json'
import TestimonialCard from '../../Card/TestimonialCard/TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';

export default function Testimonial() {

    const swiperRef = useRef(null);
    const testimonialData = TestimonialData
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>What Travelers Say About Us</h2>
                        <p>See what our customers have to say about their experiences with us</p>
                    </div>
                    <div className={styles.navButton}>
                        <div className={styles.leftNavBtn} onClick={() => swiperRef.current.swiper.slidePrev()}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73205 18.5833L1.01666 10L9.73204 1.41668M2.22713 10L19.9 10" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className={styles.rightNavBtn} onClick={() => swiperRef.current.swiper.slideNext()}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.268 1.41667L19.9833 10L11.268 18.5833M18.7729 10H1.10001" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <Swiper ref={swiperRef} spaceBetween={19} slidesPerView={3} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false}}>
                        {
                            testimonialData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialCard key={index} name={item.name} img={item.img} rating={item.rating} desc={item.desc} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}
