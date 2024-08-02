import { Suspense } from 'react'
import { getAllPackages } from '../AppData/http/packages'
import PackagesLayout from './PackagesLayout'
import { cookies } from 'next/headers'

async function fetchAllPackages(){
    const {data} = await getAllPackages()
    return data.data
}

export default async function page() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')

    const packagesData = await fetchAllPackages()

    return (
    <>
        <Suspense fallback={<p>Loading feed...</p>}>
            <PackagesLayout data={packagesData} />
        </Suspense>
    </>
  )
}
