import React from 'react'
import LongLayout from './LongLayout';

const seoKeywords = [
    "long",
    "long island",
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
const seoTitle = "Long Island Travel Guide: Top Attractions & Island Facts"
const seoDesc = "Escape to Long Island, a hidden paradise in the Andaman & Nicobar Islands. Explore its untouched beaches, lush forests, and serene lagoons. Discover top attractions, travel tips, FAQs, and everything you need for a peaceful tropical getaway."
const mainImage = "/assets/destination/island/long_island.webp"

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
          alt: 'Long Island',
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
        <LongLayout />
    </div>
  )
}
