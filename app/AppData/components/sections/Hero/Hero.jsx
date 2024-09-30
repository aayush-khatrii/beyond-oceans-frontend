"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { useState, useEffect } from "react";
import PlanTrip from "../../CTA/PlanTrip/PlanTrip";
import BookFerry from "../../CTA/BookFerry/BookFerry";

export default function Hero() {
    useEffect(() => {
        let deferredPrompt;
    
        // Function to check if the prompt was shown within the last 24 hours
        const shouldShowPrompt = () => {
          const lastPromptTime = localStorage.getItem('lastPromptTime');
          if (!lastPromptTime) return true; // Show if there's no previous prompt time
          const currentTime = new Date().getTime();
          const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
          return currentTime - lastPromptTime > oneDay; // True if more than 1 day has passed
        };
    
        // Only run this on the client side
        if (typeof window !== 'undefined') {
          console.log('PWA install check started');
          
          window.addEventListener('beforeinstallprompt', (event) => {
            console.log('addEventListener= beforeinstallprompt');
            
            // Prevent the mini-infobar from appearing
            event.preventDefault();
            
            // Save the event so it can be triggered later
            deferredPrompt = event;
    
            // Check if the prompt should be shown
            if (shouldShowPrompt()) {
              // Automatically show the native install prompt
              deferredPrompt.prompt();
              
              // Handle the user's response to the prompt
              deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the PWA install');
                } else {
                  console.log('User dismissed the PWA install');
                }
                deferredPrompt = null;
    
                // Store the time when the prompt was shown
                localStorage.setItem('lastPromptTime', new Date().getTime());
              });
            }
          });
        }
      }, []);
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
                alt="andaman package"
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
