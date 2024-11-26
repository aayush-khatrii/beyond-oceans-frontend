import React from 'react'
import TripCalculatorLayout from './TripCalculatorLayout'
import styles from './TripCalculator.module.css'

const seoKeywords = [
    "beyond oceans",
    "trip calculator",
    "andaman trip calculator",
    "budget trip calculatro",
    "andaman",
    "sri vijaya puram",
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
const seoTitle = "Trip Calculator | Andaman trip calculator"
const seoDesc = "Plan your Andaman trip with Beyond Oceans' exclusive trip calculator! Customize your budget by selecting duration, hotels, tour type, transport, sightseeing, activities, taxis, ferries, and more. Create your perfect Andaman adventure today!"


export const metadata = {
    title: seoTitle,
    description: seoDesc,
    keywords: seoKeywords,
}

export default function page() {

  return (
    <div style={{height: "100%", width: "100%"}}>
        <TripCalculatorLayout />
    </div>
  )
}
