"use client"
import styles from './Category.module.css'
import IconList from '../../AppData/components/IconComponent/IconList'
import Select from '../../AppData/components/Select/Select'
import PackageCard from '../../AppData/components/Card/PackageCard/PackageCard'
import CategoryPageData from '../../AppData/Data/CategoryData.json'
import { useState } from 'react'


export default function page({data, params}) {

    const sortbyDL = ["Low to High", "High to Low", "Top Relevent", "Newest First"]
    const BudgetDL = ["₹10,000 - ₹15,000", "₹15,000 - ₹20,000", "₹20,000 - ₹25,000", "₹25,000 - ₹30,000"]
    const DurationDL = ["2D and 3N", "3D and 4N", "4D and 5N", "5D and 6N", "6D and 7N", "7D and 8N", "8D and 9N", "9D and 10N", ]
    const TourTypeDL = ["Family Tour", "Couple Tour", "Friends Tour", "Solo Tour", "Group Tour", "Corporate Tour"]
    const TheamDL = ["Advanture", "Advanture", "Advanture", "Advanture"]
    const PackTypeDL = ["Essential", "Elite", "Signature"]

    const categoryData = CategoryPageData
    const categoryPageContent = categoryData.filter(item => item.category === params.category)[0];
    
    let categoryName = params.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')


    const [sortBy, setSortBy] = useState()
    const [packData, setPackData] = useState(data.data)

    const handleSortBy = (data) =>{
        setSortBy(data)
    }

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
                    <span>{categoryPageContent.title}</span>
                    <p>{categoryPageContent.desc}</p>
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
                            <Select datalist={TourTypeDL} placeholder={categoryName} onData={handleSortBy} />
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
                        packData !== "Not Found" ?
                        packData.map((item, index) => (
                            <PackageCard key={index} data={item}/>
                        )): 
                        <>
                            Cant find Packages for Category: 
                            <strong>{categoryName}</strong>
                        </>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
