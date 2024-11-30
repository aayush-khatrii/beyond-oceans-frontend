import React from 'react'
import HavelockLayout from './HavelockLayout';

const seoKeywords = [
    "swaraj dweep",
    "havelock",
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
const seoTitle = "Swaraj Dweep (Havelock) Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Discover Swaraj Dweep (Havelock Island), the jewel of the Andaman Islands. Explore stunning beaches, thrilling water sports, serene sunsets, vibrant marine life, and essential travel tips in this comprehensive travel guide."
const mainImage = "/assets/destination/island/swaraj_dweep.webp"

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
          alt: 'Swaraj Dweep',
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
        <HavelockLayout />
    </div>
  )
}
