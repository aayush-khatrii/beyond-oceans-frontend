"use client";
import { useRef } from 'react';
import styles from './FerryTestimonial.module.css'
import TestimonialCard from '@/app/AppData/components/Card/TestimonialCard/TestimonialCard'
import TestimonialData from '../../../AppData/Data/FerryTestimonial.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
    const testimonialData = TestimonialData
    const swiperRef = useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: (index, className) => (
            `<span class="${className} ${styles.customPagination}"></span>`
          ),
    }
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.secTitle}>
            <div className={styles.mainTitle}><h2>What Travelers Say About Us</h2></div>
            <div className={styles.secondTitle}><h3>See what our customers have to say about their experiences with us</h3></div>
        </div>
        <div className={styles.testimonialList}>
            <Swiper ref={swiperRef} pagination={pagination} modules={[Pagination]} spaceBetween={19} slidesPerGroup={3} slidesPerView={3} loop={true} className={styles.swipperWrapper}>
                {
                    testimonialData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard  name={item.name} img={item.img} rating={item.rating} desc={item.desc} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={styles.customSwipperArrow}>
                <button className={styles.arrowLeft} onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.73205 18.5833L1.01666 10L9.73204 1.41668M2.22713 10L19.9 10" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className={styles.arrowRight} onClick={() => swiperRef.current.swiper.slideNext()}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.268 1.41667L19.9833 10L11.268 18.5833M18.7729 10H1.10001" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
