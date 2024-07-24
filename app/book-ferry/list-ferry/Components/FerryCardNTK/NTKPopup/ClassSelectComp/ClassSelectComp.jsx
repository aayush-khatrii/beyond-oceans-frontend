import styles from './ClassSelectComp.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState, useRef } from 'react'

import 'swiper/css';

export default function ClassSelectComp({ferryData}) {

    const [selectedFerryClass, setSelectedFerryClass] = useState()

    const makferryImg = [
        "ntk_ferry_ing1.png",
        "ntk_ferry_ing2.jpg",
        "ntk_ferry_ing3.jpg",
        "ntk_ferry_ing4.jpg",
        "ntk_ferry_ing5.jpg",
        "ntk_ferry_ing6.jpg"
    ]

    const NTKClasses = [
        {
            class_title: "Luxury",
            class_code: "pClass",
            class_price: ferryData.fares.pBaseFare
        },
        {
            class_title: "Royal",
            class_code: "bClass",
            class_price: ferryData.fares.bBaseFare
        }
    ]
    
    const classDescreptions = {
        Luxury: ["Premium Seating", "Buy Onboard Cafe", "Air Conditioned", "Super Fast Ferry"],
        Royal: ["Extra Leg Space"]
    }

    const additionalFeatures = {
        "Royal": "All Features (Luxury Class)"
    };

    function handleRadioChange(e){
        setSelectedFerryClass(e.target.value)
    }
    
    const swiperRef = useRef(null);

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.classSelectCont}>
            <div className={styles.secTitle}>
                <span>Step 1:</span>
                <span> Select Ferry Class</span>
            </div>
            <div className={styles.ferryImagesSlider}>
                <Swiper ref={swiperRef} spaceBetween={19} slidesPerView={1} loop={true}>
                    {
                        makferryImg.map((item, index) => (
                            <SwiperSlide className={styles.slideWrapper} key={index}>
                                <div className={styles.imgWrapper}>
                                    <Image
                                        src={`/assets/ntk_img/${item}`}
                                        fill={true}
                                        sizes="100%"
                                        alt={`Makruzz Ferry Image ${index + 1}`}
                                        style={{objectFit:"cover"}}
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div onClick={() => swiperRef.current.swiper.slidePrev()} className={styles.leftIcon}>
                    <IconList Icon="LeftArrowPoint" />
                </div>
                <div onClick={() => swiperRef.current.swiper.slideNext()} className={styles.rightIcon}>
                    <IconList Icon="RightArrowPoint" />
                </div>
            </div>
            <div className={styles.ferryClassList}>
                {
                    NTKClasses.map((item, index) => {
                        const IntPricing = Intl.NumberFormat('en-IN').format(item.class_price)
                        return (
                        <label key={index} className={styles.ferryClass}>
                            <input onChange={(e) => {handleRadioChange(e)}} type="radio" name="CTARadio" value={item.class_code} defaultChecked={index === 0 ? true : false} />
                            <div className={styles.radioBGWrapper}>
                                <div className={styles.ferryClassContent}>
                                    <div className={styles.ferryClassContentWrapper}>
                                        <div className={styles.radioBorder}><span className={styles.radioSelected}></span></div>
                                        <span className={styles.ferryClassName}>{item.class_title} Class</span>
                                        <span className={styles.TextHyp}>-</span>
                                        <span className={styles.ferryClassPrice}>₹{IntPricing}</span>
                                        <span className={styles.priceNote}>/per person</span>
                                    </div>
                                    <div className={styles.downArrowICO} style={{transform: selectedFerryClass && selectedFerryClass === item.class_code ? "rotate(-180deg)" : ""}}><IconList Icon="downArrowThin" /></div>
                                </div>
                                <div className={styles.classDescContent} style={{display: selectedFerryClass && selectedFerryClass === item.class_code ? "flex" : "none"}}>
                                    {
                                        classDescreptions[item.class_title].map((feature, index) => (
                                            <div className={styles.classFeature} key={index}>
                                                {additionalFeatures[item.class_title] && <li>{additionalFeatures[item.class_title]}</li>}
                                                <li>{feature}</li>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </label>
                        )
                    })
                }  
            </div>
        </div>
    </div>
  )
}
