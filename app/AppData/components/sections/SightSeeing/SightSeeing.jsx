"use client";
import HomeCard from '../../Card/HomeCard/HomeCard'
import styles from './SightSeeing.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react'

import 'swiper/css';

export default function Sightseeing() {

    const swiperRef = useRef(null);

    const datas = [
        {
            name: 1,
            image: "Bird-Watching-in-Andaman.png",
            title: "Bird Watching in Andaman",
            desc: "Starting At ₹1,500/per person"

        },
        {
            name: 2,
            image: "Elephant-Beach-Snorkeling.jpg",
            title: "Elephant Beach Snorkelling",
            desc: "Starting At ₹3,500/per person"
        },
        {
            name: 3,
            image: "mount-harriet.jpeg",
            title: "Mount Harriet National Park",
            desc: "Starting At ₹1,500/per person"
        },
        {
            name: 4,
            image: "Radhanagar-Beach-and-Sunset.jpg",
            title: "Radhanagar Beach and Sunset",
            desc: "Starting At ₹1,000/per person"
        },
        {
            name: 5,
            image: "Radhanagar-Beach-and-Sunset.jpg",
            title: "Radhanagar Beach and Sunset",
            desc: "Starting At ₹1,000/per person"
        }
    ]
  return (
    <>
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.titleNbtn}>
                <div className={styles.sectionTitle}>
                    <h2>Most Popular Sightseeing in Andaman and Nicobar</h2>
                    <p>Discover the netural wonders and cultural gems of Andaman and Nicobar Islands</p>
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
                        datas.map((item, index) => (
                            <SwiperSlide key={index}>
                                <HomeCard key={index} image={item.image} title={item.title} desc={item.desc} />
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
