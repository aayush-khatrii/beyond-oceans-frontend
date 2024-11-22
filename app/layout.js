import { DM_Sans } from "next/font/google";
import "./globals.css";
import Layoutextended from "./layoutextended";
import DevMode from "./DevMode/DevMode";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

const DMSans = DM_Sans({ subsets: ["latin"] });

const seoTitle = "Beyond Oceans | Book Andaman Tour Package At The Best Price"
const seoDesc = "Beyond Oceans, The specialized andaman tour experts, offering unforgettable travel experiences in the stunning andaman islands"
const seoSiteURL = "https://www.beyondoceans.in"
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


export const metadata = {
    manifest: "/manifest.json",
    title: seoTitle,
    description: seoDesc,
    keywords: seoKeywords,
    url: seoSiteURL,
    openGraph: {    
        url: seoSiteURL,
        title: seoTitle,
        description: seoDesc,
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
        title: seoTitle,
        description: seoDesc,
        image: ogImageURL
    }
}


export default function RootLayout({ children }) {
    //To activate site change from DEV to PROD
    const mode = "PROD"
  return (
    <html lang="en">
        <head>
            <GoogleTagManager gtmId="GTM-558H87X3" />
            <GoogleAnalytics gaId="G-92BW0V2HBT" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
            <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
        </head>
        <body className={DMSans.className} style={{height: "100%", width: "100%"}}>
            {
                mode === "DEV" ?
                <DevMode /> : ""
            }
            {
                mode === "PROD" ?
                <Layoutextended>{children}</Layoutextended> : ""
            }
        </body>
    </html>
  );
}
