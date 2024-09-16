"use client";
import HomeCardACT from '../../Card/HomeCardACT/HomeCardACT'
import styles from './BestPackage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react'

import 'swiper/css';

export default function BestPackage({featuredPackages}){

    const swiperRef = useRef(null);

    return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtnMob}>
                    <div className={styles.sectionTitle}>
                        <h2>Best Seller Packages</h2>
                        <p>Tailored to suit every traveler's desires and budget</p>
                    </div>
                </div>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>Andaman and Nicobar Best Seller Packages</h2>
                        <p>Tailored to suit every traveler's desires and budget</p>
                    </div>
                    <div className={styles.navButton}>
                        <button className={styles.leftNavBtn} onClick={() => swiperRef.current.swiper.slidePrev()}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73205 18.5833L1.01666 10L9.73204 1.41668M2.22713 10L19.9 10" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className={styles.rightNavBtn} onClick={() => swiperRef.current.swiper.slideNext()}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.268 1.41667L19.9833 10L11.268 18.5833M18.7729 10H1.10001" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <Swiper ref={swiperRef} spaceBetween={19} slidesPerView={4} loop={true}>
                        {
                            featuredPackages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <HomeCardACT key={index} cardData={item} category="packages" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={styles.cardWrapperMob}>
                    <Swiper spaceBetween={10} slidesPerView={1.60} loop={true}>
                        {
                            featuredPackages.map((item, index) => (
                                <SwiperSlide key={index} className={styles.swiperSlides}>
                                    <HomeCardACT key={index} cardData={item} category="packages" />
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
