'use client'
import styles from './Offers.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';

export default function Offers() {
    const swiperRef = useRef(null);
    const offers = ["bo_offer1.webp", "bo_offer2.webp"]
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.slider}>
                    <div className={styles.navButton}>
                        <button className={styles.leftNav} onClick={() => swiperRef.current.swiper.slidePrev()}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73205 18.5833L1.01666 10L9.73204 1.41668M2.22713 10L19.9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className={styles.rightNav} onClick={() => swiperRef.current.swiper.slideNext()}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.268 1.41667L19.9833 10L11.268 18.5833M18.7729 10H1.10001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.slideWrapper}>
                        <Swiper ref={swiperRef} spaceBetween={19} slidesPerView={1} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false}}>
                            {
                                offers.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.slide}>
                                            <div className={styles.imgWrapper}>
                                                <Image
                                                    src={`/assets/offers/${item}`}
                                                    fill={true}
                                                    sizes="100%"
                                                    priority={true}
                                                    alt="Picture of the author"
                                                    style={{zIndex: "-1",objectFit:"cover"}}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
