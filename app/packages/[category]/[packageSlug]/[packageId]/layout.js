import React from 'react'
import { getSinglePackage } from '@/app/AppData/http/packages'


export async function generateMetadata({ params }) {
    const {data} = await getSinglePackage({packageId: params.packageId})
    const packageData = data.data

    const OGUrl = packageData && `https://www.beyondoceans.in/packages/${packageData.Tour_Type.URL_Value}/${params.packageSlug}/${packageData.PackageId}`
    const OGIMGUrl = packageData && `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/${packageData.Package_Id}/images/${packageData.Img_Path[0]}`
    const OGdescription = `Explore our ${packageData.Tour_Type.Value}: ${packageData.Package_Title}. Discover unique experiences and make unforgettable memories with our curated tours.`
    
    return {
        title: packageData.Package_Title,
        description: packageData.description,
        keywords: "Family Package, Tour Package, Travel, Beyond Oceans, Unique Experiences, Unforgettable Memories, Affordable Travel",
        openGraph: {    
            url: OGUrl,
            title: packageData.Package_Title,
            description: OGdescription,
            images: [
                {
                    url: OGIMGUrl,
                    width: 800,
                    height: 600,
                }
            ],
            site_name: 'Beyond Oceans',
            product: {
                price: {
                    amount: packageData.Price.BOP,
                    currency: 'UINRSD'
                }
            }
        },
        twitter: {
            card: 'summary_large_image',
            title: packageData.Package_Title,
            description: OGdescription,
            image: OGIMGUrl
        }
    }
}

export default function layout({children}) {
  return (
    <div>{children}</div>
  )
}
