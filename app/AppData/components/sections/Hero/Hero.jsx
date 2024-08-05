"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { useState } from "react";
import PlanTrip from "../../CTA/PlanTrip/PlanTrip";
import BookFerry from "../../CTA/BookFerry/BookFerry";

export default function Hero() {
    const [ctaType, setCtaType] = useState("PYT")
    function handleCTAtypeRadio(e){
        setCtaType(e.target.value)
    }
    const CTAInputComponent = {
        PYT: <PlanTrip />,
        BAF: <BookFerry />,
      };

  return (
  <>
    <div className={styles.heroSection}>
        <div className={styles.heroImg}> 
            <Image
                src="/assets/hero-section.webp"
                fill={true}
                sizes="100%"
                priority={true}
                alt="Picture of the author"
                style={{zIndex: "-1",objectFit:"cover"}}
            />
            <div className={styles.imageOverlay}></div>
        </div>
        <div className={styles.heroCont}>
            <h1 className={styles.heroTitle}>
                Your Dream Getaway To <br />
                Andaman & Nicobar
            </h1>
            <h1 className={styles.heroTitleMobile}>
                Your Dream Getaway <br />
                To Andaman & Nicobar
            </h1>
            <h4 className={styles.heroDesc}>
                Discover the untouched paradise of the Andaman Islands with us
            </h4>
        </div>
        <div className={styles.heroCTAComponent}>
            <div className={styles.ctaSelection}>
                <label className={styles.radios}>
                    <input type="radio" name="CTARadio" value="PYT" defaultChecked onChange={handleCTAtypeRadio} />
                    <div className={styles.radiochild}>
                        <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                        <span className={styles.radioText}>Plan Your Trip</span>
                    </div>
                </label>
                <label className={styles.radios}>
                    <input type="radio" name="CTARadio" value="BAF" onChange={handleCTAtypeRadio} />
                    <div className={styles.radiochild}>
                        <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                        <span className={styles.radioText}>Book A Ferry</span>
                    </div>
                </label>
            </div>
            <div className={styles.ctaInputsection}>
                {CTAInputComponent[ctaType]}
            </div>
        </div>
    </div> 
  </>
  )
}
