import { useEffect, useState, useRef } from 'react'
import styles from './FerrySelectComp.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import IconList from '@/app/AppData/components/IconComponent/IconList'

import 'swiper/css';

export default function FerrySelectComp({ferryData, onFerryClass}) {

    const [selectedFerryClass, setSelectedFerryClass] = useState()
    const makferryImg = [
        "mak_ferry_img_1.webp",
        "mak_ferry_img_2.jpg",
        "mak-1premium-img.png",
        "mak-2deluxe-img.png",
        "mak-3royal-img.png"
    ]
    const swiperRef = useRef(null);

    function getShipClassTitle(classId){
        const shipClassData = ferryData.Classes.filter(obj => obj.ship_class_id === classId)
        return shipClassData[0].class_title
    }

    function handleRadioChange(e){
        setSelectedFerryClass({ferryClassId: e.target.value, ferryClassName: getShipClassTitle(e.target.value)})
        onFerryClass({ferryClassId: e.target.value, ferryClassName: getShipClassTitle(e.target.value)})
    }

    useEffect(() => {
        if(!selectedFerryClass){
            onFerryClass({ferryClassId: ferryData.Classes[0].ship_class_id, ferryClassName: ferryData.Classes[0].class_title})
            return
        }
        onFerryClass(selectedFerryClass)
    },[])

    const classDescreptions = {
        Premium: ["Premium Seating", "Buy Onboard Cafe", "Air Conditioned", "High-Speed Ferry"],
        Deluxe: ["Extra Leg Space"],
        Royal: ["Exclusive Cabin"]
    }

    const additionalFeatures = {
        "Deluxe": "All Features (Premium Class)",
        "Royal": "All Features (Deluxe Class)"
    };

    return (
        <div className={styles.ferrySelectSection}>
            <div className={styles.ferryClassList}>
                {
                    ferryData.Classes.map((item, index) => {
                        const IntPricing = Intl.NumberFormat('en-IN').format(item.ship_class_price)
                        return (
                        <label key={index} className={styles.ferryClass}>
                            <input onChange={(e) => {handleRadioChange(e)}} type="radio" name="CTARadio" value={item.ship_class_id} defaultChecked={index === 0 ? true : false} disabled={item.seat == 0 ? true : false}/>
                            <div className={styles.radioBGWrapper}>
                                <div className={styles.ferryClassContent}>
                                    <div className={styles.ferryClassContentWrapper}>
                                        <div className={styles.radioBorder}><span className={styles.radioSelected}></span></div>
                                        <span className={styles.ferryClassName}>{item.class_title} Class</span>
                                        <span className={styles.TextHyp}>-</span>
                                        <span className={styles.ferryClassPrice}>₹{IntPricing}</span>
                                        <span className={styles.priceNote}>/per person</span>
                                    </div>
                                    <div className={styles.downArrowICO} style={{transform: selectedFerryClass && selectedFerryClass.ferryClassId === item.ship_class_id ? "rotate(-180deg)" : ""}}><IconList Icon="downArrowThin" /></div>
                                </div>
                                <div className={styles.classDescContent} style={{display: selectedFerryClass && selectedFerryClass.ferryClassId === item.ship_class_id ? "flex" : ""}}>
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
            <div className={styles.ferryImagesSlider}>
                    <Swiper ref={swiperRef} spaceBetween={19} slidesPerView={1} loop={true}>
                        {
                            makferryImg.map((item, index) => (
                                <SwiperSlide className={styles.slideWrapper} key={index}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/mak_img/${item}`}
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
        </div>
  )
}
