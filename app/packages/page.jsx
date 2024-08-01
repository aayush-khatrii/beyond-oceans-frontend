import { Suspense } from 'react'
import { getAllPackages } from '../AppData/http/packages'
import PackagesLayout from './PackagesLayout'

async function fetchAllPackages(){
    const {data} = await getAllPackages()
    return data.data
}

export default async function page() {
    const packagesData = await fetchAllPackages()

    return (
    <>
        <Suspense fallback={<p>Loading feed...</p>}>
            <PackagesLayout data={packagesData} />
        </Suspense>
    </>
  )
}
