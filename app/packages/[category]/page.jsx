import { notFound } from 'next/navigation'
import styles from './Category.module.css'
import PackageBreadcrumb from '../PackageBreadcrumb'
import Category from '@/app/AppData/components/sections/Category/Category'
import CategoryLayout from './CategoryLayout'
import { getFilterPackages } from '@/app/AppData/http/packages'


async function fetchFilterPackages(params) {
    try {
        const {data} = await getFilterPackages({category: params.category})
        return data
    } catch (error) {
        notFound()
    }
}

export async function generateMetadata({ params }) {

    const categorys = ["family-package", "honeymoon", "budget-tours", "best-sellers", "offbeat"]

    if(!categorys.includes(params.category)){
       return
    }

    let categoryName = params.category.replace(/-/g, ' ')
    const OGUrl = `https://www.beyondoceans.in/packages/${params.category}`
    const OGdescription = `Explore beyond oceans ${categoryName} Category Packages. Discover unique experiences and make unforgettable memories of Andaman with beyond oceans.`
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
    seoKeywords.unshift(`andaman ${categoryName} tour`)
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

    const categorys = ["family-package", "honeymoon", "budget-tours", "best-sellers", "offbeat"]

    if(!categorys.includes(params.category)){
        notFound()
    }

    const filterPackageData = await fetchFilterPackages(params)

    return (
        <div>
            <PackageBreadcrumb />
            <CategoryLayout data={filterPackageData} params={params} />
        </div>
    )
}
