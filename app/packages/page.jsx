"use client"
import styles from './packages.module.css'
import IconList from '../AppData/components/IconComponent/IconList'
import Select from '../AppData/components/Select/Select'
import PackageCard from '../AppData/components/Card/PackageCard/PackageCard'
import { useEffect, useState } from 'react'
import { getAllPackages } from '../AppData/http/packages'



export default function page() {
    const sortbyDL = ["Low to High", "High to Low", "Top Relevent", "Newest First"]
    const BudgetDL = ["₹10,000 - ₹15,000", "₹15,000 - ₹20,000", "₹20,000 - ₹25,000", "₹25,000 - ₹30,000"]
    const DurationDL = ["2D and 3N", "3D and 4N", "4D and 5N", "5D and 6N", "6D and 7N", "7D and 8N", "8D and 9N", "9D and 10N", ]
    const TourTypeDL = ["Family Tour", "Couple Tour", "Friends Tour", "Solo Tour", "Group Tour", "Corporate Tour"]
    const TheamDL = ["Advanture", "Advanture", "Advanture", "Advanture"]
    const PackTypeDL = ["Essential", "Elite", "Signature"]


    const [sortBy, setSortBy] = useState()
    const [packData, setPackData] = useState()

    const handleSortBy = (data) =>{
        console.log(data)
        setSortBy(data)
    }

    useEffect(()=>{
        async function fetchAllPackages(){
            const {data} = await getAllPackages()
            const packagesData = data
            setPackData(packagesData)
        }
        fetchAllPackages()
    },[])

    function handleFilterSearch(){
        if(sortBy === "Low to High"){
            const LTHPackList = [...packData].sort((a, b) => a.Price.BOP - b.Price.BOP);
            setPackData(LTHPackList)

        }

        if(sortBy === "High to Low"){
            const LTHPackList = [...packData].sort((a, b) => b.Price.BOP - a.Price.BOP);
            setPackData(LTHPackList)
        }
    }

    return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.contWrapper}>
                <div className={styles.categoryDetail}>
                    <span>Family Adventures Await: Explore Andaman with Beyond Oceans!</span>
                    <p>Discover unforgettable family adventures in the pristine beauty of Andaman and Nicobar Islands with Beyond Oceans. Explore our curated selection of family tour packages, designed to immerse you in the natural wonders and cultural delights of this exotic destination. Let us create cherished memories for you and your loved ones amidst the turquoise waters, white sandy beaches, and lush greenery of Andaman. Book your family getaway today and embark on a journey of joy, laughter, and togetherness with Beyond Oceans, the leading tour and travel company in Andaman and Nicobar.</p>
                </div>
                <div className={styles.filter}>
                    <div className={styles.sortbyOpts}>
                        <span className={styles.selectTitle}>Sort By</span>
                        <div className={styles.selectCont}>
                            <Select datalist={sortbyDL} placeholder="Sort By" onData={handleSortBy} />
                        </div>
                    </div>
                    <div className={styles.budgetOpts}>
                        <span className={styles.selectTitle}>Select Budget</span>
                        <div className={styles.selectCont}>
                            <Select datalist={BudgetDL} placeholder="Select Budget" onData={handleSortBy} />
                        </div>
                    </div>
                    <div className={styles.durationOpts}>
                        <span className={styles.selectTitle}>Select Duration</span>
                        <div className={styles.selectCont}>
                            <Select datalist={DurationDL} placeholder="Duration" onData={handleSortBy} />
                        </div>
                    </div>
                    <div className={styles.tourTypeOpts}>
                        <span className={styles.selectTitle}>Tour Type</span>
                        <div className={styles.selectCont}>
                            <Select datalist={TourTypeDL} placeholder="Tour Type" onData={handleSortBy} />
                        </div>
                    </div>
                    <div className={styles.theamOpts}>
                        <span className={styles.selectTitle}>Select Theme</span>
                        <div className={styles.selectCont}>
                            <Select datalist={TheamDL} placeholder="Theme" onData={handleSortBy} />
                        </div>
                    </div>
                    <div className={styles.packTypeOpts}>
                        <span className={styles.selectTitle}>Package type</span>
                        <div className={styles.selectCont}>
                            <Select datalist={PackTypeDL} placeholder="Pack type" onData={handleSortBy} />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {handleFilterSearch()}} className={styles.filterSearch}><IconList Icon="SearchIcon2" /></button>
                    </div>
                </div>
                <div className={styles.packageCardGrid}>
                    {
                        packData &&
                        packData.map((item, index) => (
                            <PackageCard key={index} data={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}
