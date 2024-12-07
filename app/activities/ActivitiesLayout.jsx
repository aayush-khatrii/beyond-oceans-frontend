"use client"
import styles from './activities.module.css'
import IconList from '../AppData/components/IconComponent/IconList'
import Select from '../AppData/components/Select/Select'
import { useState } from 'react'
import PackageBreadcrumb from './PackageBreadcrumb'
import ActivityCard from '../AppData/components/Card/ActivityCard/ActivityCard'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'



export default function page({data}) {

    const sortbyDL = ["Low to High", "High to Low", "Top Relevent", "Newest First"]
    const BudgetDL = ["₹1,000 - ₹2,000", "₹2,000 - ₹3,000", "₹3,000 - ₹4,000", "₹4,000 - ₹5,000", "+ ₹5,000"]
    const ActivityTypeDL = ["Water Sports", "Trekking", "Parasailing", "Island Hopping", "All Activities" ]
    const islandList = ["Port Blair", "Neil Island", "Baratang", "Diglipur", "Long Island"]

    const [activityData, setActivityData] = useState(data)
    const [activityDatafilterd, setActivityDatafilterd] = useState(data)

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const paramFilter = searchParams.get('filter')
    const paramBudget = searchParams.get('bud')
    const paramActivityType = searchParams.get('at')

    const [sortBy, setSortBy] = useState(paramFilter ? sortbyDL[paramFilter] : "")
    const [filterBudget, setFilterBudget] = useState(paramBudget ? BudgetDL[paramBudget] : "")
    const [filterActivityType, setFilterActivityType] = useState(paramActivityType ? ActivityTypeDL[paramActivityType] : "")

    
    const handleSortBy = (data) =>{
        setSortBy(data)
    }

    const handlebudget = (data) =>{
        setFilterBudget(data)
    }

    const handleCategotyType = (data) =>{
        setFilterActivityType(data)
    }

    function handleFilterSearch(){
        
        let filteredData = [...activityData];

        if(sortBy === "Low to High"){
            filteredData = filteredData.sort((a, b) => a.Price.BOP - b.Price.BOP);
        }

        if(sortBy === "High to Low"){
            filteredData = filteredData.sort((a, b) => b.Price.BOP - a.Price.BOP);
        }

        if(filterBudget === "₹1,000 - ₹2,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 0 && item.Price.BOP <= 2000);
        }

        if(filterBudget === "₹2,000 - ₹3,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 2000 && item.Price.BOP <= 3000);
        }

        if(filterBudget === "₹3,000 - ₹4,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 3000 && item.Price.BOP <= 4000);
        }

        if(filterBudget === "₹4,000 - ₹5,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 4000 && item.Price.BOP <= 5000);
        }

        if(filterBudget === "+ ₹5,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 5000);
        }

        
        if(filterActivityType === "Water Sports" && pathname !== "/activities/water-sports"){
            router.push(`/activities/water-sports?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&at=${filterActivityType ? ActivityTypeDL.indexOf(filterActivityType) : ""}`)
        }

        if(filterActivityType === "Trekking" && pathname !== "/activities/trekking"){
            router.push(`/activities/trekking?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&at=${filterActivityType ? ActivityTypeDL.indexOf(filterActivityType) : ""}`)
        }

        if(filterActivityType === "Parasailing" && pathname !== "/activities/parasailing"){
            router.push(`/activities/parasailing?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&at=${filterActivityType ? ActivityTypeDL.indexOf(filterActivityType) : ""}`)
        }

        if(filterActivityType === "Island Hopping" && pathname !== "/activities/island-hopping"){
            router.push(`/activities/island-hopping?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&at=${filterActivityType ? ActivityTypeDL.indexOf(filterActivityType) : ""}`)
        }

        if(filterActivityType === "All Activities" && pathname !== "/activities"){
            router.push(`/activities?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&at=${filterActivityType ? ActivityTypeDL.indexOf(filterActivityType) : ""}`)
        }

        setActivityDatafilterd(filteredData)
    }

    function handleFilterClear(){

        setSortBy("")
        setFilterBudget("")
        setFilterActivityType("")
        setActivityDatafilterd(data)

        if(pathname === "/activities"){
            router.push(`/activities`)
        }

        if(filterActivityType === "Water Sports" && pathname !== "/activities/water-sports"){
            router.push(`/activities/water-sports`)
        }

        if(filterActivityType === "Trekking" && pathname !== "/activities/trekking"){
            router.push(`/activities/trekking`)
        }

        if(filterActivityType === "Parasailing" && pathname !== "/activities/parasailing"){
            router.push(`/activities/parasailing`)
        }

        if(filterActivityType === "Island Hopping" && pathname !== "/activities/island-hopping"){
            router.push(`/activities/island-hopping`)
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
                    <div className={styles.filterOptions}>
                        <div className={styles.sortbyOpts}>
                            <span className={styles.selectTitle}>Sort By</span>
                            <div className={styles.selectCont}>
                                <Select datalist={sortbyDL} placeholder={sortBy ? sortBy : "Sort By"} onData={handleSortBy} blankValue={true}/>
                            </div>
                        </div>
                        <div className={styles.budgetOpts}>
                            <span className={styles.selectTitle}>Select Budget</span>
                            <div className={styles.selectCont}>
                                <Select datalist={BudgetDL} placeholder={filterBudget ? filterBudget : "Select Budget"} onData={handlebudget} blankValue={true}/>
                            </div>
                        </div>
                        <div className={styles.activityTypeOpts}>
                            <span className={styles.selectTitle}>Activity Type</span>
                            <div className={styles.selectCont}>
                                <Select datalist={ActivityTypeDL} placeholder={filterActivityType ? filterActivityType : "Activity Type"} onData={handleCategotyType} blankValue={true}/>
                            </div>
                        </div>
                        <div className={styles.tourTypeOpts}>
                            <span className={styles.selectTitle}>By Island</span>
                            <div className={styles.selectCont}>
                                <Select datalist={islandList} placeholder="By Island" onData={handleSortBy} blankValue={true}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.filterBtnWrapper}>
                        <button onClick={() => {handleFilterClear()}} className={styles.filterClear}><span>Clear Filter</span></button>
                        <button onClick={() => {handleFilterSearch()}} className={styles.filterSearch}><IconList Icon="searchIcon" /><span>Search</span></button>
                    </div>
                </div>
                <div className={styles.packageCardGrid}>
                    {/* {
                        activityData &&
                        activityData.map((item, index) => (
                            <ActivityCard key={index} data={item}/>
                        ))
                    } */}

                    {
                        Array.isArray(activityDatafilterd) && activityDatafilterd.length !== 0  ? 
                        activityDatafilterd.map((item, index) => (
                            <ActivityCard key={index} data={item}/>
                        )) : <>No Activity! Sorry</>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
