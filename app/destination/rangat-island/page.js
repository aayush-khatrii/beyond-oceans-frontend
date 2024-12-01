import React from 'react'
import RangatLayout from './RangatLayout';

const seoKeywords = [
    "rangat",
    "rangat island",
    "beyond oceans",
    "andaman",
    "andaman tour company",
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
const seoTitle = "Rangat Island Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Discover Rangat Island, a tranquil escape in the Andaman & Nicobar Islands. Explore its unspoiled beaches, vibrant mangroves, and eco-friendly attractions. Find travel tips, FAQs, and all you need for a serene tropical adventure."
const mainImage = "/assets/destination/island/rangat_island.webp"

export const metadata = {
    title: seoTitle,
    description: seoDesc,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      images: [
        {
          url: mainImage,
          width: 1200, // Set the width of the image
          height: 630, // Set the height of the image
          alt: 'Rangat Island',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDesc,
      images: [mainImage],
    },
}

export default function page() {
  return (
    <div>
        <RangatLayout />
    </div>
  )
}
