import React from 'react'
import PortBlairLayout from './PortBlairLayout';

const seoKeywords = [
    "sri vijaya puram",
    "port blair",
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
const seoTitle = "Sri Vijaya Puram (Port Blair) Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Explore Sri Vijaya Puram (formerly Port Blair), the heart of the Andaman & Nicobar Islands. Discover top attractions, must-visit places, island facts, travel tips, FAQs, and more in this ultimate guide to your tropical getaway."
const mainImage = "/assets/destination/island/sri_vijaya_puram_island.webp"

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
          alt: 'Sri Vijaya Puram',
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
        <PortBlairLayout />
    </div>
  )
}
