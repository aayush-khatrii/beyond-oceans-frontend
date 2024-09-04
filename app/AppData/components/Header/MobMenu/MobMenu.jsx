import { useState } from 'react'
import styles from './MobMenu.module.css'
import TourPackages from './TourPackages/TourPackages'
import Activities from './Activities/Activities'
import BookFerry from './BookFerry/BookFerry'
import Destinations from './Destinations/Destinations'
import ServicesMenu from './ServicesMenu/ServicesMenu'
import TripCalculator from './TripCalculator/TripCalculator'
import Company from './Company/Company'

export default function MobMenu({handleTouchStart, handleTouchMove, handleTouchEnd, handleMenuToggle}) {

    const [selectedItem, setSelectedItem] = useState(0)
    const menuListItems = [
        "Tour Packages",
        "Activities",
        "Book A Ferry",
        "Destinations",
        "Services",
        "Trip Calculator",
        "Company",
        // "My Account",
    ]

    const handleSelectItem = (index) => {
        console.log(index)
        setSelectedItem(index)
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.dragIconWrapper} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >
            <div className={styles.dragIcon}></div>
        </div>
        <div className={styles.linkSliderWrapper}>
            <div className={styles.linkSlider}>
                <ul className={styles.linksList}>
                    {
                        menuListItems.map((item, index) => (
                            <li key={index} onClick={() => {handleSelectItem(index)}} className={selectedItem === index ? styles.selectedItem : ""}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className={styles.menuContent}>
            {selectedItem === 0 ? <TourPackages handleMenuToggle={handleMenuToggle} /> : ""}
            {selectedItem === 1 ? <Activities handleMenuToggle={handleMenuToggle} /> : ""}
            {selectedItem === 2 ? <BookFerry handleMenuToggle={handleMenuToggle} /> : ""}
            {selectedItem === 3 ? <Destinations handleMenuToggle={handleMenuToggle} /> : ""}
            {selectedItem === 4 ? <ServicesMenu handleMenuToggle={handleMenuToggle} /> : ""}
            {selectedItem === 5 ? <TripCalculator handleMenuToggle={handleMenuToggle} /> : ""}
            {selectedItem === 6 ? <Company handleMenuToggle={handleMenuToggle} /> : ""}
        </div>
    </div>
  )
}
