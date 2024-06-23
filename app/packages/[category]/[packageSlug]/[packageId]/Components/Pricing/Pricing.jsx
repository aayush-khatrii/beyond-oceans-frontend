"use client"
import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Pricing.module.css'
import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
    const varients = ["The Essential Package", "The Elite Package", "The Signature Package"]
    const [selectedVer, setSelectedVer] = useState(0)
    const mdxSource = "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"


    function handleVariantSelect(index){
        setSelectedVer(index)
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Reserve Your Spot At</span>
        </div>
        <div className={styles.bookingCont}>
            <div className={styles.priceCont}>
                <div className={styles.priceInfo}><span>Total price of 1 Adults</span></div>
                <div className={styles.mrpCont}>
                    <span className={styles.bop}>₹25,000</span>
                    <div className={styles.mrpCut}>
                        <span className={styles.mrp}>₹50,000</span>
                        <div className={styles.mrpCutline}></div>
                    </div>
                </div>
            </div>
            <div className={styles.dataSelection}>
                 <div className={styles.dateSelect}>
                    <span>Select Travel Date</span>
                    <IconList Icon="DateCal" />
                 </div>
                 <div className={styles.bottomSelect}>
                    <div className={styles.roomSelect}>
                        <span>Room</span>
                        <IconList Icon="RoomSelect" />
                    </div>
                    <div className={styles.personSelect}>
                        <span>Person</span>
                        <IconList Icon="FamilyPackage" />
                    </div>
                 </div>
            </div>
            <div className={styles.packOptionsCont}>
                <div className={styles.packOptionContTitle}><span>Select Package Option</span></div>
                <div className={styles.packVariantCont}>
                    {
                        varients.map((item, index) => (
                            <div className={`${styles.variantList} ${index === selectedVer ? styles.selectedVariantList : ""}`} onClick={() => {handleVariantSelect(index)}}>
                            <div className={styles.radioBtnOut}><div className={styles.radioBtnInn}></div></div>
                            <div className={styles.variantTitle}>{item}</div>
                            <div className={styles.variantDesc}>
                                <MDXComp source={mdxSource} />
                            </div>
                            <div className={styles.variantPrice}>
                                <span className={styles.variantPriceTxt}>₹25,000</span>
                                <span className={styles.variantPriceDesc}>per person</span>
                            </div>
                            </div>
                        ))
                    }
                </div>
                <button className={styles.bookNowBtn}>Reserve Now</button>
                <div className={styles.inquiryBtnWrp}>
                    <button className={styles.inquiryBtn}>Inquiry Now <IconList Icon="RightArrow"/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
