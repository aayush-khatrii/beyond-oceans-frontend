"use client"
import styles from './Category.module.css'
import IconList from '../../AppData/components/IconComponent/IconList'
import Select from '../../AppData/components/Select/Select'
import PackageCard from '../../AppData/components/Card/PackageCard/PackageCard'
import CategoryPageData from '../../AppData/Data/CategoryData.json'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'


export default function page({data, params}) {

    const categoryData = CategoryPageData
    const categoryPageContent = categoryData.filter(item => item.category === params.category)[0];
    
    
    const sortbyDL = ["Low to High", "High to Low", "Top Relevent", "Newest First"]
    const BudgetDL = ["₹10,000 - ₹15,000", "₹15,000 - ₹20,000", "₹20,000 - ₹25,000", "₹25,000 - ₹30,000", "+ ₹30,000"]
    const DurationDL = ["2N and 3D", "3N and 4D", "4N and 5D", "5N and 6D", "6N and 7D", "7N and 8D", "8N and 9D", "9N and 10D" ]
    const TourTypeDL = ["Adventure", "Honeymoon", "Family"]

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const paramFilter = searchParams.get('filter')
    const paramBudget = searchParams.get('bud')
    const paramDuration = searchParams.get('time')
    const paramTourType = searchParams.get('tt')

    const [sortBy, setSortBy] = useState(paramFilter ? sortbyDL[paramFilter] : "")
    const [filterBudget, setFilterBudget] = useState(paramBudget ? BudgetDL[paramBudget] : "")
    const [filterDuration, setFilterDuration] = useState(paramDuration ? DurationDL[paramDuration] : "")
    const [filterTourType, setFilterTourType] = useState(paramTourType ? TourTypeDL[paramTourType] : "")

    const [packData, setPackData] = useState(data.data)
    const [packDatafilterd, setPackDatafilterd] = useState(data.data)

    useEffect(() => {
        if (paramFilter) {
            setSortBy(sortbyDL[paramFilter]);
        }
        if (paramBudget) {
            setFilterBudget(BudgetDL[paramBudget]);
        }
        if (paramDuration) {
            setFilterDuration(DurationDL[paramDuration]);
        }
        if (paramTourType) {
            setFilterTourType(TourTypeDL[paramTourType]);
        }

        if(sortBy || filterBudget || filterDuration || filterTourType){
            handleFilterSearch()
        }

    }, [paramDuration, paramBudget, paramDuration, paramTourType, sortBy, filterBudget, filterDuration, filterTourType])
    

    const handleSortBy = (data) =>{
        setSortBy(data)
    }

    const handlebudget = (data) =>{
        setFilterBudget(data)
    }

    const handleDuration = (data) =>{
        setFilterDuration(data)
    }

    const handleTourType = (data) =>{
        setFilterTourType(data)
    }

    function handleFilterSearch(){

        let filteredData = [...packData];

        if(sortBy === "Low to High"){
            filteredData = filteredData.sort((a, b) => a.Price.BOP - b.Price.BOP);
        }

        if(sortBy === "High to Low"){
            filteredData = filteredData.sort((a, b) => b.Price.BOP - a.Price.BOP);
        }

        if(filterBudget === "₹10,000 - ₹15,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 0 && item.Price.BOP <= 15000);
        }

        if(filterBudget === "₹15,000 - ₹20,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 15001 && item.Price.BOP <= 20000);
        }

        if(filterBudget === "₹20,000 - ₹25,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 20001 && item.Price.BOP <= 25000);
        }

        if(filterBudget === "₹25,000 - ₹30,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 25001 && item.Price.BOP <= 30000);
        }

        if(filterBudget === "+ ₹30,000"){
            filteredData = filteredData.filter(item => item.Price.BOP >= 30001);
        }


        if(filterDuration === "2N and 3D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 2 && item.Pack_Duration.Day === 3);
        }

        if(filterDuration === "3N and 4D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 3 && item.Pack_Duration.Day === 4);
        }

        if(filterDuration === "4N and 5D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 4 && item.Pack_Duration.Day === 5);
        }

        if(filterDuration === "5N and 6D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 5 && item.Pack_Duration.Day === 6);
        }

        if(filterDuration === "6N and 7D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 6 && item.Pack_Duration.Day === 7);
        }

        if(filterDuration === "7N and 8D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 7 && item.Pack_Duration.Day === 8);
        }

        if(filterDuration === "8N and 9D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 8 && item.Pack_Duration.Day === 9);
        }

        if(filterDuration === "9N and 10D"){
            filteredData = filteredData.filter(item => item.Pack_Duration.Night === 9 && item.Pack_Duration.Day === 10);
        }
        
        if(filterTourType === "Adventure" && pathname !== "/packages/best-sellers"){
            router.push(`packages/best-sellers?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&time=${filterDuration ? DurationDL.indexOf(filterDuration) : ""}&tt=${filterTourType ? TourTypeDL.indexOf(filterTourType) : ""}`)
        }

        if(filterTourType === "Honeymoon" && pathname !== "/packages/honeymoon"){
            router.push(`packages/honeymoon?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&time=${filterDuration ? DurationDL.indexOf(filterDuration) : ""}&tt=${filterTourType ? TourTypeDL.indexOf(filterTourType) : ""}`)
        }

        if(filterTourType === "Family" && pathname !== "/packages/family-package"){
            router.push(`packages/family-package?filter=${sortBy ? sortbyDL.indexOf(sortBy) : ""}&bud=${filterBudget ? BudgetDL.indexOf(filterBudget) : "" }&time=${filterDuration ? DurationDL.indexOf(filterDuration) : ""}&tt=${filterTourType ? TourTypeDL.indexOf(filterTourType) : ""}`)
        }

        setPackDatafilterd(filteredData)
    }

    return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.contWrapper}>
                <div className={styles.categoryDetail}>
                    <span>{categoryPageContent.title}</span>
                    <p>{categoryPageContent.desc}</p>
                </div>
                <div className={styles.filter}>
                    <div className={styles.sortbyOpts}>
                        <span className={styles.selectTitle}>Sort By</span>
                        <div className={styles.selectCont}>
                            <Select datalist={sortbyDL} placeholder={sortBy ? sortBy : "Sort By"} onData={handleSortBy} blankValue={true}/>
                        </div>
                    </div>
                    <div className={styles.budgetOpts}>
                        <span className={styles.selectTitle}>Select Budget</span>
                        <div className={styles.selectCont}>
                            <Select datalist={BudgetDL} placeholder={filterBudget ? filterBudget : "Select Budget"} onData={handlebudget} blankValue={true} />
                        </div>
                    </div>
                    <div className={styles.durationOpts}>
                        <span className={styles.selectTitle}>Select Duration</span>
                        <div className={styles.selectCont}>
                            <Select datalist={DurationDL} placeholder={filterDuration ? filterDuration : "Duration"} onData={handleDuration} blankValue={true} />
                        </div>
                    </div>
                    <div className={styles.tourTypeOpts}>
                        <span className={styles.selectTitle}>Tour Type</span>
                        <div className={styles.selectCont}>
                            <Select datalist={TourTypeDL} placeholder={filterTourType ? filterTourType : "Tour Type"} onData={handleTourType} blankValue={true} />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {handleFilterSearch()}} className={styles.filterSearch}><IconList Icon="SearchIcon2" /></button>
                    </div>
                </div>
                <div className={styles.packageCardGrid}>
                {
                        packDatafilterd.length !== 0 ? 
                        packDatafilterd.map((item, index) => (
                            <PackageCard key={index} data={item}/>
                        )) : <>No Packages! Sorry</>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
