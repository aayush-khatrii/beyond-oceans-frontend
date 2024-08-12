'use client'
import styles from './singleActivity.module.css'
import Link from 'next/link'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import TitleContainer from './Components/TitleContainer/TitleContainer'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import PackageOverview from './Components/PackageOverview/PackageOverview'
import PackageInc from './Components/PackageInc/PackageInc'
import Incl from './Components/Incl/Incl'
import Pricing from './Components/Pricing/Pricing'
import AsideInfo from './Components/AsideInfo/AsideInfo'
import Policy from './Components/Policy/Policy'
import { useState } from 'react'
import InqPopup from './Components/InqPopup/InqPopup'
import PackageBreadcrumb from '@/app/packages/PackageBreadcrumb'
import ActivityHighlights from './Components/ActivityHighlights/ActivityHighlights'
import Faq from './Components/Faq/Faq'



export default function PackageLayout({data, params}) {
    
    const activityData = data
    const [selectedOPT, setSelectedOPT] = useState(activityData.Activity_Options[0].Option_Id)
    const packageOptions = activityData.Activity_Options
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
            {isInq && <InqPopup onPopupClose={handleIsInquiry} activityId={activityData.Activity_Id} packageOptionId={selectedOPT} />}
            <div className={styles.subWrapper}>
                <TitleContainer data={activityData} params={params}/>
                <ImageGallery data={activityData}/>
                <div className={styles.contContainer}>
                    <div className={styles.mainContent}>
                        <PackageOverview activityId={activityData.Activity_Id}/>
                        <PackageInc featureList={activityData.Featurs} />
                        <ActivityHighlights activityId={activityData.Activity_Id}/>
                        <Incl excl={activityData.Exclusions} incl={activityData.Inclusions} activityId={activityData.Activity_Id}/>
                        <Faq activityId={activityData.Activity_Id} faqList={activityData.Activity_FAQ}/>
                        <Policy />
                    </div>
                    <aside className={styles.aside}>
                        <Pricing optionChange={handleOptionChange} data={activityData} handleInquiry={handleIsInquiry}/>
                        <AsideInfo />
                    </aside>
                </div>
            </div>
        </div> 
    )
}
