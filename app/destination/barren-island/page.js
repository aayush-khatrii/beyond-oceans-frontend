import React from 'react'
import BarrenLayout from './BarrenLayout';

const seoKeywords = [
    "bareen",
    "bareen island",
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
const seoTitle = "Barren Island Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Explore Barren Island, home to India’s only active volcano in the Andaman & Nicobar Islands. Discover its dramatic landscapes, volcanic wonders, and pristine marine life. Find travel tips, FAQs, and everything you need for an extraordinary adventure."
const mainImage = "/assets/destination/island/barren_island.webp"

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
          alt: 'Barren Island',
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
        <BarrenLayout />
    </div>
  )
}
