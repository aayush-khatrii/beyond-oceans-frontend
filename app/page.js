import styles from "./page.module.css";
import Hero from "./AppData/components/sections/Hero/Hero";
import BestPackage from "./AppData/components/sections/BestPackage/BestPackage";
import Category from "./AppData/components/sections/Category/Category";
import Islands from "./AppData/components/sections/Islands/Islands";
import Activities from "./AppData/components/sections/Activities/Activities";
import SightSeeing from "./AppData/components/sections/SightSeeing/SightSeeing";
import Offers from "./AppData/components/sections/Offers/Offers";
import Ferry from "./AppData/components/sections/Ferry/Ferry";
import WhyChoose from "./AppData/components/sections/WhyChoose/WhyChoose";
import Testimonial from "./AppData/components/sections/Testimonial/Testimonial";
import Certified from "./AppData/components/sections/Certified/Certified";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.homeWrapper}>
                <Link href="https://wa.me/917908671247" target="_blank" className={styles.wpIcon}>
                    <div className={styles.iconWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src="/assets/wp_icon.webp"
                                fill={true}
                                sizes="100%"
                                alt="Whatsapp Chat"
                                style={{objectFit:"contain"}}
                            />
                        </div>
                    </div>
                    <div className={styles.iconTitle}><span>WhatsApp Chat</span></div>
                </Link>
                <Hero />
                <BestPackage />
                <Category />
                <Islands />
                <Activities />
                <SightSeeing />
                <Offers />
                <Ferry />
                <WhyChoose />
                <Testimonial />
                <Certified />
            </div>
        </div>
    </>
  );
}
