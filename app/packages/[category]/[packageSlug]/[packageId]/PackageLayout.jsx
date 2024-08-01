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
import { useState } from 'react'
import InqPopup from './Components/InqPopup/InqPopup'
import PackageBreadcrumb from '@/app/packages/PackageBreadcrumb'



export default function PackageLayout({data, params}) {
    
    const packageData = data
    const [selectedOPT, setSelectedOPT] = useState(packageData.Package_Options[0].Option_Id)
    const packageOptions = packageData.Package_Options
    const [isInq, setIsInq] = useState(false)

    function handleOptionChange(id){
        setSelectedOPT(id)
    }

    function handleIsInquiry(){
        setIsInq(!isInq)
    }

    return (
        <div className={styles.mainWrapper}>
            <PackageBreadcrumb />
            {isInq && <InqPopup onPopupClose={handleIsInquiry} packageId={packageData.Package_Id} packageOptionId={selectedOPT} />}
            <div className={styles.subWrapper}>
                <TitleContainer data={packageData} params={params}/>
                <ImageGallery data={packageData}/>
                <div className={styles.contContainer}>
                    <div className={styles.mainContent}>
                        <PackageOverview packageId={packageData.Package_Id}/>
                        <PackageInc featureList={packageData.Featurs} />
                        <Itinerary scheduleData={packageData.DW_Itinerary} packageId={packageData.Package_Id}/>
                        <Hotels selectedOption={selectedOPT} pacakgeOptions={packageOptions}/>
                        {/* <Transport /> */}
                        <Incl excl={packageData.Exclusions} incl={packageData.Inclusions} packageId={packageData.Package_Id}/>
                        <Policy />
                    </div>
                    <aside className={styles.aside}>
                        <Pricing optionChange={handleOptionChange} data={packageData} handleInquiry={handleIsInquiry}/>
                        <AsideInfo />
                    </aside>
                </div>
            </div>
        </div> 
    )
}
