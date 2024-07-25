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
import { useLayoutEffect, useState } from 'react'
import { getSinglePackage } from '@/app/AppData/http/packages'



export default function page({params}) {
    
    const categorys = ["family-package", "couple"]
    const [selectedOPT, setSelectedOPT] = useState(0)
    const [packageData, setPackageData] = useState()

    if(!categorys.includes(params.category)){
        notFound()
    }

    function handleOptionChange(id){
        setSelectedOPT(id)
    }

    async function getPackageData(){
        const {data} = await getSinglePackage({packageId: params.packageId})
        console.log(data.data)
        setPackageData(data.data)
    }

    useLayoutEffect(()=>{
        getPackageData()
    }, [])

    const featureList = ["Hotel", "Meals", "Sightseeing", "Island", "Boat", "Transfer", "Activities", "Guide"]
    const OGUrl = packageData && `https://www.beyondoceans.in/packages/${packageData.Tour_Type.URL_Value}/${params.packageSlug}/${packageData.PackageId}`
    const OGIMGUrl = packageData && `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/${packageData.Package_Id}/images/${packageData.Img_Path[0]}`

    if(!packageData){
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.mainWrapper}>
                <title>{packageData.Package_Title}</title>
                <meta name="description" content={`Explore our family package: ${packageData.Package_Title}. Discover unique experiences and make unforgettable memories with our curated tours.`}/>
                <meta name="keywords" content="Family Package, Tour Package, Travel, Beyond Oceans, Unique Experiences, Unforgettable Memories, Affordable Travel"/>
                <meta name="author" content="Beyond Oceans"/>
                
                <link rel="canonical" href={OGUrl} />
                <meta property="og:title" content={packageData.Package_Title} />
                <meta property="og:description" content={`Explore our family package: ${packageData.Package_Title}. Discover unique experiences and make unforgettable memories with our curated tours.`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={OGUrl} />
                <meta property="og:image" content={OGIMGUrl}/>
                <meta property="og:site_name" content="Beyond Oceans" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={packageData.Package_Title} />
                <meta name="twitter:description" content={`Explore our family package: ${packageData.Package_Title}. Discover unique experiences and make unforgettable memories with our curated tours.`} />
                <meta name="twitter:image" content={OGIMGUrl} />


                <div className={styles.subWrapper}>
                    <TitleContainer data={packageData} params={params}/>
                    <ImageGallery data={packageData}/>
                    <div className={styles.contContainer}>
                        <div className={styles.mainContent}>
                            <PackageOverview packageId={packageData.Package_Id}/>
                            <PackageInc featureList={featureList} />
                            <Itinerary scheduleData={packageData.DW_Itinerary} packageId={packageData.Package_Id}/>
                            <Hotels selectedOption={selectedOPT}/>
                            {/* <Transport /> */}
                            <Incl excl={packageData.Exclusions} incl={packageData.Inclusions} packageId={packageData.Package_Id}/>
                            <Policy />
                        </div>
                        <aside className={styles.aside}>
                            <Pricing optionChange={handleOptionChange} data={packageData} />
                            <AsideInfo />
                        </aside>
                    </div>
                </div>
            </div> 
    )
}
