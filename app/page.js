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

export default function Home() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.homeWrapper}>
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
