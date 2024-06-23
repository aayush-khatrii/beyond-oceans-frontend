"use client";
import HomeCard from '../../Card/HomeCard/HomeCard'
import styles from './BestPackage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react'
import { initiatPayment } from '@/app/AppData/http/payment.js';
import { v4 as uuidv4 } from 'uuid';

import 'swiper/css';

export default function BestPackage(){
    const uuid = uuidv4();
    
    const paymentfunc = async() => {
        const paymentDatra = {
            userId: uuid,
            tId: uuid,
            amt: 1000
        }
        let formurl
        try {
            const {data} = await initiatPayment({userId:paymentDatra.userId, transectionId:paymentDatra.tId, amt:paymentDatra.amt})
            formurl = data.data.instrumentResponse.redirectInfo.url
        } catch (error) {
            console.log(error.response.data)
            return
        }
        

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = formurl;
        form.style.display = 'none'; // Hide the form
        document.body.appendChild(form);
        form.submit();
    }

    const swiperRef = useRef(null);

    const datas = [
        {
            name: 1,
            image: "Best-seller-img-1.png",
            title: "Tropical Bliss Getaway",
            desc: "Starting At ₹20,000/per person"

        },
        {
            name: 2,
            image: "Best-seller-img-4.png",
            title: "Coastal Charm Tour",
            desc: "Starting At ₹12,000/per person"
        },
        {
            name: 3,
            image: "Best-seller-img-3.png",
            title: "Paradise Found Tour",
            desc: "Starting At ₹23,000/per person"
        },
        {
            name: 4,
            image: "Best-seller-img-2.png",
            title: "Nautical Nirvana",
            desc: "Starting At ₹30,000/per person"
        },
        {
            name: 5,
            image: "Best-seller-img-2.png",
            title: "Nautical Nirvana",
            desc: "Starting At ₹30,000/per person"
        }
    ]
    
    return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
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
                            datas.map((item, index) => (
                                <SwiperSlide onClick={paymentfunc} key={index}>
                                    <HomeCard onClick={paymentfunc} key={index} image={item.image} title={item.title} desc={item.desc} />
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
