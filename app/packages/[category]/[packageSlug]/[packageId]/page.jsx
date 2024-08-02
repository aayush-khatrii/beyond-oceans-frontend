import React, { Suspense } from 'react'
import PackageLayout from './PackageLayout'
import { notFound } from 'next/navigation'
import { getSinglePackage } from '@/app/AppData/http/packages'

async function fetchSinglePackage(params){
    const {data} = await getSinglePackage({packageId: params.packageId})
    return data.data
}

export default async function page({params}) {

    const packageData = await fetchSinglePackage(params)
    const categorys = ["family-package", "honeymoon", "budget-tours", "best-sellers", "offbeat"]

    const packageCategory = packageData.Tour_Type.URL_Value
    const packageSlug = packageData.Package_Title.toLowerCase().replace(/\s+/g, '-');

    if(!categorys.includes(params.category) || !categorys.includes(packageCategory) || packageSlug !== params.packageSlug){
        notFound()
    }

  return (
    <div>
        <Suspense fallback={<p>Loading feed...</p>}>
            <PackageLayout data={packageData} params={params}/>
        </Suspense>
    </div>
  )
}
