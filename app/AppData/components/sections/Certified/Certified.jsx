"use client";
import Image from 'next/image'
import styles from './Certified.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react'

import 'swiper/css';

export default function Certified() {

    const swiperRef = useRef(null);

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.sectionTitleMob}>
                <div className={styles.sectionTitleWrapper}>
                    <h2>Certified Excellence</h2>
                    <p>Our commitment to providing exceptional tour and travel experiences is backed by our affiliations and certifications:</p>
                </div>
            </div>
            <div className={styles.sectionTitle}>
                <h2>Certified Excellence for Your Peace of Mind</h2>
                <p>Our commitment to providing exceptional tour and travel experiences is backed by our affiliations and certifications:</p>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.card1} ${styles.certificateCard}`}>
                    <div className={styles.cardImg}>
                        <div className={styles.cardImgWrapper}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src="/assets/certificate/anatd.webp"
                                    fill={true}
                                    sizes="100%"
                                    alt="Registered with A&NATD"
                                    style={{objectFit:"contain"}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.cardTitle}><span>Registered with A&NATD</span></div>
                        <div className={styles.cardDesc}><p>Beyond Oceans is officially registered with the Andaman and Nicobar Administration Tourism Department, ensuring our operations meet all local regulations and standards.</p></div>
                    </div>
                </div>
                <div className={`${styles.card2} ${styles.certificateCard}`}>
                    <div className={styles.cardImg}>
                        <div className={styles.cardImgWrapper}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src="/assets/certificate/motgoi.webp"
                                    fill={true}
                                    sizes="100%"
                                    alt="Government Recognition"
                                    style={{objectFit:"contain"}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.cardTitle}><span>Government Recognition</span></div>
                        <div className={styles.cardDesc}><p>Recognized by the Ministry of Tourism, Government of India, our services are backed by the highest level of governmental oversight, providing you with an added layer of confidence.</p></div>
                    </div>
                </div>
                <div className={`${styles.card3} ${styles.certificateCard}`}>
                    <div className={styles.cardImg}>
                        <div className={styles.cardImgWrapper}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src="/assets/certificate/ii-logo.webp"
                                    fill={true}
                                    sizes="100%"
                                    alt="Incredible India"
                                    style={{objectFit:"contain"}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.cardTitle}><span>Incredible India</span></div>
                        <div className={styles.cardDesc}><p>As participants in the 'Incredible India' flagship program, we are dedicated to promoting the rich culture, natural beauty, and unique experiences that the Andaman and Nicobar Islands offer.</p></div>
                    </div>
                </div>
                <div className={`${styles.card4} ${styles.certificateCard}`}>
                    <div className={styles.cardImg}>
                        <div className={styles.cardImgWrapper}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src="/assets/certificate/aato.webp"
                                    fill={true}
                                    sizes="100%"
                                    alt="AATO Membership"
                                    style={{objectFit:"contain"}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.cardTitle}><span>AATO Membership</span></div>
                        <div className={styles.cardDesc}><p>We are honored to be a part of the Andaman Association of Tour Operators (AATO), showcasing our commitment to excellence in tourism services.</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.cardWrapperMob}>
                <Swiper ref={swiperRef} spaceBetween={10} slidesPerView={1.30} loop={true}>
                    <SwiperSlide className={styles.swiperSlides}>
                        <div className={`${styles.card1} ${styles.certificateCard}`}>
                            <div className={styles.cardImg}>
                                <div className={styles.cardImgWrapper}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src="/assets/certificate/anatd.webp"
                                            fill={true}
                                            sizes="100%"
                                            alt="Registered with A&NATD"
                                            style={{objectFit:"contain"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <div className={styles.cardTitle}><span>Registered with A&NATD</span></div>
                                <div className={styles.cardDesc}><p>Beyond Oceans is officially registered with the Andaman and Nicobar Administration Tourism Department, ensuring our operations meet all local regulations and standards.</p></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlides}>
                        <div className={`${styles.card2} ${styles.certificateCard}`}>
                            <div className={styles.cardImg}>
                                <div className={styles.cardImgWrapper}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src="/assets/certificate/motgoi.webp"
                                            fill={true}
                                            sizes="100%"
                                            alt="Government Recognition"
                                            style={{objectFit:"contain"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <div className={styles.cardTitle}><span>Government Recognition</span></div>
                                <div className={styles.cardDesc}><p>Recognized by the Ministry of Tourism, Government of India, our services are backed by the highest level of governmental oversight, providing you with an added layer of confidence.</p></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlides}>
                        <div className={`${styles.card3} ${styles.certificateCard}`}>
                            <div className={styles.cardImg}>
                                <div className={styles.cardImgWrapper}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src="/assets/certificate/ii-logo.webp"
                                            fill={true}
                                            sizes="100%"
                                            alt="Incredible India"
                                            style={{objectFit:"contain"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <div className={styles.cardTitle}><span>Incredible India</span></div>
                                <div className={styles.cardDesc}><p>As participants in the 'Incredible India' flagship program, we are dedicated to promoting the rich culture, natural beauty, and unique experiences that the Andaman and Nicobar Islands offer.</p></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlides}>
                        <div className={`${styles.card4} ${styles.certificateCard}`}>
                            <div className={styles.cardImg}>
                                <div className={styles.cardImgWrapper}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src="/assets/certificate/aato.webp"
                                            fill={true}
                                            sizes="100%"
                                            alt="AATO Membership"
                                            style={{objectFit:"contain"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardText}>
                                <div className={styles.cardTitle}><span>AATO Membership</span></div>
                                <div className={styles.cardDesc}><p>We are honored to be a part of the Andaman Association of Tour Operators (AATO), showcasing our commitment to excellence in tourism services.</p></div>
                            </div>
                        </div>    
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}
