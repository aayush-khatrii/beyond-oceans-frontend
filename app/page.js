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
import { getFeaturedPackages } from "./AppData/http/packages";
import { cookies } from 'next/headers'

async function fetchFeaturedPackages(featureCategory){
    try {
        const {data} = await getFeaturedPackages({category: featureCategory})
        return data.data
    } catch (error) {
        return null
    }
}

export default async function Home() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    const featuredPackages = await fetchFeaturedPackages("Featured")


    

  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.homeWrapper}>
                <Hero />
                <BestPackage featuredPackages={featuredPackages}/>
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
