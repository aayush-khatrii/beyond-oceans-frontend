import React from 'react'
import BaratangLayout from './BaratangLayout';

const seoKeywords = [
    "baratang",
    "baratang island",
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
const seoTitle = "Baratang Island Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Discover Baratang Island, home to mesmerizing limestone caves, lush mangroves, and volcanic wonders. Explore top attractions, must-visit places, island facts, travel tips, FAQs, and everything you need for an unforgettable adventure in the Andaman & Nicobar Islands."
const mainImage = "/assets/destination/island/baratang_island.webp"

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
          alt: 'Baratang Island',
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
        <BaratangLayout />
    </div>
  )
}
