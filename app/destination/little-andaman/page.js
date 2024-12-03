import React from 'react'
import LittleAndamanLayout from './LittleAndamanLayout';

const seoKeywords = [
    "little andaman",
    "little andaman island",
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
const seoTitle = "Little Andaman Island Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Discover Little Andaman, a tropical haven in the Andaman & Nicobar Islands. Explore its stunning waterfalls, pristine beaches, lush rainforests, and surfing hotspots. Find travel tips, FAQs, and everything you need for an unforgettable island adventure."
const mainImage = "/assets/destination/island/little_andaman.webp"

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
          alt: 'Little Andaman Island',
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
        <LittleAndamanLayout />
    </div>
  )
}
