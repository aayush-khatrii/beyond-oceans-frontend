import React from 'react'
import DiglipurLayout from './DiglipurLayout';

const seoKeywords = [
    "diglipur",
    "diglipur island",
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
const seoTitle = "Diglipur Island Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Explore Diglipur Island, the northern gem of the Andaman & Nicobar Islands. Discover its stunning beaches, unique twin-islands, active volcanoes, top attractions, travel tips, FAQs, and everything you need for an unforgettable tropical adventure."
const mainImage = "/assets/destination/island/diglipur_island.webp"

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
          alt: 'Diglipur Island',
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
        <DiglipurLayout />
    </div>
  )
}
