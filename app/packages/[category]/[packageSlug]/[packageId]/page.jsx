import styles from './singlepackage.module.css'
import Link from 'next/link'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import TitleContainer from './Components/TitleContainer/TitleContainer'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import PackageOverview from './Components/PackageOverview/PackageOverview'
import PackageInc from './Components/PackageInc/PackageInc'
import Itinerary from './Components/Itinerary/Itinerary'
import Hotels from './Components/Hotels/Hotels'
import Transport from './Components/Transport/Transport'
import Incl from './Components/Incl/Incl'
import Pricing from './Components/Pricing/Pricing'
import AsideInfo from './Components/AsideInfo/AsideInfo'

export const metadata = {
    title: "Hello Andamand"
}



export default function page({params}) {
    const featureList = ["Hotel", "Meals", "Sightseeing", "Island", "Boat", "Transfer", "Activities", "Guide"]
    const scheduleData = [
        {day: "1", title: "Airport Pickup To Port Blair", contentMdx: "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"},
        {day: "2", title: "Airport Pickup To Port Blair", contentMdx: "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"},
        {day: "3", title: "Airport Pickup To Port Blair", contentMdx: "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"},
        {day: "4", title: "Airport Pickup To Port Blair", contentMdx: "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"},
    ]

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <TitleContainer />
                <ImageGallery />
                <div className={styles.contContainer}>
                    <div className={styles.mainContent}>
                        <PackageOverview />
                        <PackageInc featureList={featureList} />
                        <Itinerary scheduleData={scheduleData}/>
                        <Hotels />
                        <Transport />
                        <Incl />
                    </div>
                    <aside className={styles.aside}>
                        <Pricing />
                        <AsideInfo />
                    </aside>
                </div>
            </div>
        </div>
    )
}
