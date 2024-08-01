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
    const categorys = ["family-package", "couple"]

    if(!categorys.includes(params.category)){
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
