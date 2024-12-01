import React from 'react'
import NeilLayout from './NeilLayout';

const seoKeywords = [
    "shaheed dweep",
    "neil island",
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
const seoTitle = "Shaheed Dweep (Neil Island) Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Discover Shaheed Dweep (Neil Island), a tranquil gem in the Andaman & Nicobar Islands. Explore top attractions, must-visit places, island facts, travel tips, FAQs, and everything you need for your perfect tropical getaway."
const mainImage = "/assets/destination/island/shaheed_dweep.webp"

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
          alt: 'Shaheed Dweep',
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
        <NeilLayout />
    </div>
  )
}
