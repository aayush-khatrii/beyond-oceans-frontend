"use client";

import Image from "next/image";
import styles from "./BookFerry.module.css";
import IconList from "../AppData/components/IconComponent/IconList";
import CTAComp from "./Components/CTAComp/CTAComp";
import InfoSec1 from "./Components/InfoSec1/InfoSec1";
import FerryOperator from "./Components/FerryOperator/FerryOperator";
import BookingGuide from "./Components/BookingGuide/BookingGuide";
import FerryTestimonial from "./Components/FerryTestimonial/FerryTestimonial";
import FerrySchedule from "./Components/FerrySchedule/FerrySchedule";
import FerryScheduleList from "./Components/FerrySchedule/FerryScheduleList/FerryScheduleList";
import GroupBooking from "./Components/GroupBooking/GroupBooking";
import Faq from "./Components/Faq/Faq";

export default function FerryHero() {

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.heroSection}>
                <div className={styles.heroImg}> 
                    <Image
                        src="/assets/ferry_landing page-hero.png"
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
                        The Fastest Way To <span style={{marginRight: "15px"}}></span><br/> Book Ferry In Andaman
                    </h1>
                    <h4 className={styles.heroDesc}>
                        <div className={styles.ticketDesc}>
                            <div className={styles.descIcon}><IconList Icon="Ticket" /></div>
                            <span>Instant Ticket Confirmation</span>
                        </div>
                        <div className={styles.ratingDesc}>
                            <div className={styles.descIcon}><IconList Icon="FerryHeroStar" /></div>
                            <span>4.5 Star Rated Service</span>
                        </div>
                        <div className={styles.chargDesc}>
                            <div className={styles.descIcon}><IconList Icon="NoCharges" /></div>
                            <span>No Hidden Charges</span>
                        </div>
                    </h4>
                </div>
            </div>
            <div className={styles.secContentWrapper}>
                <CTAComp />
                <InfoSec1 />
                <FerryOperator />
                <BookingGuide />
                <FerryTestimonial />
                <FerrySchedule />
                <GroupBooking />
                <Faq />
            </div>
        </div>
    )
}
