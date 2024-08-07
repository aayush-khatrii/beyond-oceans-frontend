"use client"
import styles from './activities.module.css'
import IconList from '../AppData/components/IconComponent/IconList'
import Select from '../AppData/components/Select/Select'
import { useState } from 'react'
import PackageBreadcrumb from './PackageBreadcrumb'
import ActivityCard from '../AppData/components/Card/ActivityCard/ActivityCard'



export default function page({data}) {

    const sortbyDL = ["Low to High", "High to Low", "Top Relevent", "Newest First"]
    const BudgetDL = ["₹10,000 - ₹15,000", "₹15,000 - ₹20,000", "₹20,000 - ₹25,000", "₹25,000 - ₹30,000", "+ ₹30,000"]
    const activityTypeDL = ["Water Sports", "Trekking", "Parasailing", "Island Hopping" ]
    const islandList = ["Port Blair", "Neil Island", "Baratang", "Diglipur", "Long Island"]


    const [sortBy, setSortBy] = useState()
    const [activityData, setActivityData] = useState(data)

    const handleSortBy = (data) =>{
        setSortBy(data)
    }

    function handleFilterSearch(){
        if(sortBy === "Low to High"){
            const LTHPackList = [...activityData].sort((a, b) => a.Price.BOP - b.Price.BOP);
            setActivityData(LTHPackList)

        }

        if(sortBy === "High to Low"){
            const LTHPackList = [...activityData].sort((a, b) => b.Price.BOP - a.Price.BOP);
            setActivityData(LTHPackList)
        }
    }

    return (
    <>
        <div className={styles.mainWrapper}>
            <PackageBreadcrumb />
            <div className={styles.contWrapper}>
                <div className={styles.categoryDetail}>
                    <span>Unleash Your Adventurous Spirit</span>
                    <p>Dive into a world of adventure and discovery as you explore our curated selection of thrilling activities in the breathtaking Andaman and Nicobar Islands. From mesmerizing scuba diving excursions in pristine waters to exhilarating snorkeling adventures amidst vibrant coral reefs, our platform offers an array of experiences to suit every traveler's taste. Whether you seek adrenaline-pumping water sports or serene nature walks through lush forests, Beyond Oceans is your gateway to unforgettable moments in this tropical paradise.</p>
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
                    <div className={styles.activityTypeOpts}>
                        <span className={styles.selectTitle}>Activity Type</span>
                        <div className={styles.selectCont}>
                            <Select datalist={activityTypeDL} placeholder="Activity Type" onData={handleSortBy} />
                        </div>
                    </div>
                    <div className={styles.tourTypeOpts}>
                        <span className={styles.selectTitle}>By Island</span>
                        <div className={styles.selectCont}>
                            <Select datalist={islandList} placeholder="By Island" onData={handleSortBy} />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {handleFilterSearch()}} className={styles.filterSearch}><IconList Icon="SearchIcon2" /></button>
                    </div>
                </div>
                <div className={styles.packageCardGrid}>
                    {
                        activityData &&
                        activityData.map((item, index) => (
                            <ActivityCard key={index} data={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}
