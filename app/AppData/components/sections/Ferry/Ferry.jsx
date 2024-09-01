"use client"
import { useRef } from 'react';
import HomeCard from '../../Card/HomeCard/HomeCard'
import styles from './Ferry.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'

export default function Activities() {
    const swiperRef = useRef(null);
    const datas = [
        {
            name: 1,
            image: "Ferry-img-1.png",
            title: "Nautika & Lite",
            desc: "Starting At ₹800/per person"

        },
        {
            name: 2,
            image: "Ferry-img-2.png",
            title: "Makruzz",
            desc: "Starting At ₹1,000/per person"
        },
        {
            name: 3,
            image: "Ferry-img-3.png",
            title: "ITT Majestic",
            desc: "Starting At ₹800/per person"
        },
        {
            name: 4,
            image: "Ferry-img-4.png",
            title: "Green Ocean 1",
            desc: "Starting At ₹750/per person"
        }
    ]

  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleNbtnMob}>
                    <div className={styles.sectionTitle}>
                        <h2>Popular Ferry Services in Andaman</h2>
                        <p>Your one-stop booking service for all hi-speed ferry</p>
                    </div>
                </div>
                <div className={styles.titleNbtn}>
                    <div className={styles.sectionTitle}>
                        <h2>Popular Ferry Services in Andaman and Nicobar</h2>
                        <p>Your one-stop booking service for all hi-speed ferry in Andaman and Nicobar</p>
                    </div>
                    <div className={styles.navButton}>
                        <Link href="/book-ferry" className={styles.accentBtn}>Book A Ferry</Link>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    {
                        datas.map((item, index) => (
                            <HomeCard key={index} image={item.image} title={item.title} desc={item.desc} />
                        ))
                    }
                </div>
                <div className={styles.cardWrapperMob}>
                    <Swiper ref={swiperRef} spaceBetween={0} slidesPerView={1.60} loop={true}>
                        {
                            datas.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <HomeCard key={index} image={item.image} title={item.title} desc={item.desc} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={styles.mobBtnWrapper}>
                    <Link href="/book-ferry" className={styles.mobButton}>Book A Ferry</Link>
                </div>
            </div>
        </div>
    </>
  )
}
