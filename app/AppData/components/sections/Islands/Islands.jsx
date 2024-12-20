"use client";
import HomeCard from '../../Card/HomeCard/HomeCard'
import styles from './Islands.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react'

import 'swiper/css';
import Link from 'next/link';

export default function Sightseeing() {

    const swiperRef = useRef(null);

    const datas = [
        {
            name: 1,
            image: "destination/island/sri_vijaya_puram_island.webp",
            title: "Sri Vijaya Puram (Port Blair)",
            desc: "Starting At ₹10,000/per person",
            link: "sri-vijaya-puram"
        },
        {
            name: 2,
            image: "destination/island/swaraj_dweep.webp",
            title: "Swaraj Dweep (Havelock Island)",
            desc: "Starting At ₹30,000/per person",
            link: "swaraj-dweep"
        },
        {
            name: 3,
            image: "destination/island/shaheed_dweep.webp",
            title: "Shaheed Dweep (Neil Island)",
            desc: "Starting At ₹30,000/per person",
            link: "shaheed-dweep"
        },
        {
            name: 4,
            image: "destination/island/baratang_island.webp",
            title: "Baratang Island",
            desc: "Starting At ₹30,000/per person",
            link: "baratang-island"
        },
        {
            name: 5,
            image: "destination/island/diglipur_island.webp",
            title: "Diglipur Island",
            desc: "Starting At ₹30,000/per person",
            link: "diglipur-island"
        },
        {
            name: 6,
            image: "destination/island/rangat_island.webp",
            title: "Rangat Island",
            desc: "Starting At ₹30,000/per person",
            link: "rangat-island"
        },
        {
            name: 7,
            image: "destination/island/long_island.webp",
            title: "Long Island",
            desc: "Starting At ₹30,000/per person",
            link: "long-island"
        },
        {
            name: 8,
            image: "destination/island/little_andaman.webp",
            title: "Little Andaman",
            desc: "Starting At ₹30,000/per person",
            link: "little-andaman"
        },
        {
            name: 9,
            image: "destination/island/barren_island.webp",
            title: "Barren Island",
            desc: "Starting At ₹30,000/per person",
            link: "barren-island"
        }
    ]
  return (
    <>
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.titleNbtnMob}>
                <div className={styles.sectionTitle}>
                    <h2>Most Famous Island of Andaman</h2>
                    <p>Explore diverse tour packages tailored to the unique charms of each island paradise</p>
                </div>
            </div>
            <div className={styles.titleNbtn}>
                <div className={styles.sectionTitle}>
                    <h2>Most Famous Islands Of Andaman and Nicobar</h2>
                    <p>Explore diverse tour packages tailored to the unique charms of each island paradise</p>
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
                                <Link href={`/destination/${item.link}`}>
                                    <HomeCard key={index} image={item.image} title={item.title} desc={item.desc} />
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className={styles.cardWrapperMob}>
                    <Swiper spaceBetween={10} slidesPerView={1.60} loop={true}>
                        {
                            datas.map((item, index) => (
                                <SwiperSlide key={index} className={styles.swiperSlides}>
                                    <Link href="/destination">
                                        <HomeCard key={index} image={item.image} title={item.title} desc={item.desc} />
                                    </Link>
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
