
import styles from './PackageInc.module.css'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'

export default function PackageInc({featureList}) {

    const iconListMap = {
        "AC Cab": "RoadTransfer",
        "Stay": "Hotel",
        "Accommodation": "Hotel",
        "Meal": "Meals",
        "Cruise Ride": "CruiseRides",
        "Sightseeing": "Sightseeing",
        "Water Activity": "WaterActivity",
        "Coordinator": "Coordinator",
        "Ferry Transfer": "FerryTransfer",
        "Island Tour": "IslandTour"
    }

    const activityIconListMap = {
        "Duration": "DurationClock",
        "Place": "Place",
        "Person": "Person",
        "Basic Training": "BasicTraining",
        "Scuba Diving": "ScubaDiving",
        "Personal Guide": "PersonalGuide",
        "Equipments": "Equipments",
        "Photoshoot": "Photoshoot",
        "Safety Guarantee": "SafetyGuarantee",
        "All Includes": "AllIncludes"
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Package Includes</span>
        </div>
        <div className={styles.overviewContent}>
            <div className={styles.contentSubWrapper}>
                {
                    featureList.map((item, index) => (
                        <div key={index} className={styles.itemContainer}>
                            <FETIconList Icon={iconListMap[item]}/>
                            <span>{item}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
