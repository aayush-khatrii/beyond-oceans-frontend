import React from 'react'
import { notFound } from 'next/navigation'
import { getSingleActivity } from '@/app/AppData/http/activities'


export async function generateMetadata({ params }) {

    let activityData
    try {
        const {data} = await getSingleActivity({activityId: params.activityId})
        activityData = data.data
        console.log(activityData)
    } catch (error) {
        notFound()
    }

    const packageTitleURLFormat = activityData.Activity_Title.toLowerCase().replace(/\s+/g, '-');

    const OGUrl = activityData && `https://www.beyondoceans.in/packages/${activityData.Activity_Type.URL_Value}/${packageTitleURLFormat}/${activityData.Activity_Id}`
    const OGIMGUrl = activityData && `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/${activityData.Activity_Id}/images/${activityData.Img_Path[0]}`
    const OGdescription = `Explore our ${activityData.Activity_Type.Value}: ${activityData.Activity_Title}. Discover unique experiences and make unforgettable memories with our curated tours.`
    
    return {
        title: activityData.Activity_Title,
        description: activityData.description,
        keywords: "Family Package, Tour Package, Travel, Beyond Oceans, Unique Experiences, Unforgettable Memories, Affordable Travel",
        openGraph: {    
            url: OGUrl,
            title: activityData.Activity_Title,
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
                    amount: activityData.Price.BOP,
                    currency: 'INR'
                }
            }
        },
        twitter: {
            card: 'summary_large_image',
            title: activityData.Activity_Title,
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
