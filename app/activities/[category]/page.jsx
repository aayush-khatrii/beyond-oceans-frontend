import { notFound } from 'next/navigation'
import PackageBreadcrumb from '../PackageBreadcrumb'
import CategoryLayout from './CategoryLayout'
import { getFilterActivities } from '@/app/AppData/http/activities'


async function fetchFilterActivities(params) {

    const categorys = ["water-sports", "trekking", "parasailing", "island-hopping"]

    if(!categorys.includes(params.category)){
       return
    }

    try {
        const {data} = await getFilterActivities({category: params.category})
        if(!data){
            notFound()
        }
        return data
    } catch (error) {
        notFound()
    }
}

export async function generateMetadata({ params }) {

    const categorys = ["water-sports", "trekking", "parasailing", "island-hopping"]

    if(!categorys.includes(params.category)){
       return
    }

    let categoryName = params.category.replace(/-/g, ' ')
    const OGUrl = `https://www.beyondoceans.in/packages/${params.category}`
    const OGdescription = `Explore beyond oceans ${categoryName} activities.`
    const ogImageURL = "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/seo/bo_seo_og.webp"
    const seoKeywords = [
        "beyond oceans",
        "andaman",
        "andaman tour packages",
        "andaman travel",
        "andaman beaches",
        "andaman adventure",
        "andaman marine life",
        "andaman vacation",
        "beyond oceans",
        "andaman islands",
        "andaman tour",
        "andaman travel",
        "beyond oceans",
        "beach",
        "rainforest",
        "marine life",
        "water sports",
        "andaman tour company"
    ];
    seoKeywords.unshift(categoryName)
    seoKeywords.unshift(`andaman ${categoryName}`)
    seoKeywords.unshift(`${categoryName} pacakge`)
    seoKeywords.unshift(`${categoryName} pacakges`)
    seoKeywords.unshift(`andaman pacakge ${categoryName}`)
    seoKeywords.unshift(`${categoryName} andaman pacakge`)
    seoKeywords.unshift(`andaman ${categoryName} pacakges`)
    seoKeywords.unshift(`andaman ${categoryName} pacakge`)


    return {
        title: `andaman ${categoryName} pacakges`,
        description: OGdescription,
        keywords: "Family Package, Tour Package, Travel, Beyond Oceans, Unique Experiences, Unforgettable Memories, Affordable Travel",
        openGraph: {    
            url: OGUrl,
            title: `andaman ${categoryName} pacakges`,
            description: OGdescription,
            keywords: seoKeywords,
            site_name: 'Beyond Oceans',
            images: [
                {
                    url: ogImageURL,
                    width: 800,
                    height: 600,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `andaman ${categoryName} pacakges`,
            description: OGdescription,
            image: ogImageURL
        }
    }
}

export default async function page({params}) {

    const categorys = ["water-sports", "trekking", "parasailing", "island-hopping"]

    if(!categorys.includes(params.category)){
        notFound()
    }

    const filterActivityData = await fetchFilterActivities(params)

    return (
        <div>
            <PackageBreadcrumb />
            <CategoryLayout data={filterActivityData} params={params} />
        </div>
    )
}
