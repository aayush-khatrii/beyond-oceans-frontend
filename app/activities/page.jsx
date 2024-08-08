import { Suspense } from 'react'
import ActivitiesLayout from './ActivitiesLayout'
import { cookies } from 'next/headers'
import { getAllActivities } from '../AppData/http/activities'
import { notFound } from 'next/navigation'

// export const revalidate = 1800

async function fetchAllActivities(){

    try {
        const {data} = await getAllActivities()
        if(!data){
            notFound()
        }
        return data.data
    } catch (error) {
        notFound()
    }
}

export default async function page() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')

    const activitiesData = await fetchAllActivities()

    return (
    <>
        <Suspense fallback={<p>Loading feed...</p>}>
            <ActivitiesLayout data={activitiesData} />
        </Suspense>
    </>
  )
}
