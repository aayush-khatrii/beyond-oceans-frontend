import React from 'react'
import PackagesLayout from './PackagesLayout'
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
        <PackagesLayout data={packageData} params={params}/>
    </div>
  )
}
