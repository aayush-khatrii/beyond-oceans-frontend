import React, { Suspense } from 'react'
import ActivityLayout from './ActivityLayout'
import { notFound } from 'next/navigation'
import { getSingleActivity } from '@/app/AppData/http/activities'

async function fetchSinglePackage(params){

    const categorys = ["water-sports", "trekking", "parasailing", "island-hopping"]

    if(!categorys.includes(params.category)){
        notFound()
    }
    
    try {
        const {data} = await getSingleActivity({activityId: params.activityId})
        return data.data
    } catch (error) {
        notFound()
    }
}

export default async function page({params}) {

    const activityData = await fetchSinglePackage(params)
    const categorys = ["water-sports", "trekking", "parasailing", "island-hopping"]

    const activityCategory = activityData.Activity_Type.URL_Value
    const activitySlug = activityData.Activity_Title.toLowerCase().replace(/\s+/g, '-');

    if(!categorys.includes(params.category) || !categorys.includes(activityCategory) || activitySlug !== params.activitySlug){
        notFound()
    }

  return (
    <div>
        <Suspense fallback={<p>Loading feed...</p>}>
            <ActivityLayout data={activityData} params={params}/>
        </Suspense>
    </div>
  )
}
