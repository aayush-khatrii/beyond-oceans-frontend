'use client'
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
import Policy from './Components/Policy/Policy'
import { notFound } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import Head from 'next/head'


export default function page({params}) {
    
    const categorys = ["family-package", "couple"]
    const [selectedOPT, setSelectedOPT] = useState(0)

    
    if(!categorys.includes(params.category)){
        notFound()
    }

    function handleOptionChange(id){
        setSelectedOPT(id)
    }

    const featureList = ["Hotel", "Meals", "Sightseeing", "Island", "Boat", "Transfer", "Activities", "Guide"]
    const scheduleData = [
        {day: "1", title: "Port Blair - Carbyns Cove Beach - Cellular Jail - Light & Sound Show", contentMdx: "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/itinerary/day_1.mdx"},
        {day: "2", title: "Port Blair - Havelock(Swaraj Dweep) Island-Radhanagar Beach", contentMdx: "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/itinerary/day_2.mdx"},
        {day: "3", title: "Havelock (Swaraj Dweep) Island to Port Blair", contentMdx: "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/itinerary/day_3.mdx"},
        {day: "4", title: "Port Blair", contentMdx: "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/itinerary/day_4.mdx"},
    ]

    const packOverview = "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/package_overview.mdx"

    return (
        <div className={styles.mainWrapper}>
            <title>This is title</title>
            <meta name="description" content="example description"/>
            <div className={styles.subWrapper}>
                <TitleContainer />
                <ImageGallery />
                <div className={styles.contContainer}>
                    <div className={styles.mainContent}>
                        <PackageOverview packOverviewSrc={packOverview}/>
                        <PackageInc featureList={featureList} />
                        <Itinerary scheduleData={scheduleData}/>
                        <Hotels selectedOption={selectedOPT}/>
                        {/* <Transport /> */}
                        <Incl />
                        <Policy />
                    </div>
                    <aside className={styles.aside}>
                        <Pricing optionChange={handleOptionChange} />
                        <AsideInfo />
                    </aside>
                </div>
            </div>
        </div>
    )
}
