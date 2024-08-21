
import styles from './PackageInc.module.css'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'

export default function PackageInc({featureList}) {

    const activityIconListMap = {
        "Duration": "DurationClock",
        "Place": "Place",
        "Person": "Person",
        "Basic Training": "BasicTraining",
        "Scuba Diving": "ScubaDiving",
        "Guide": "PersonalGuide",
        "Equipments": "Equipments",
        "Photoshoot": "Photoshoot",
        "Safety Briefing": "SafetyGuarantee",
        "Safety Breiefing": "SafetyGuarantee",
        "Safety": "SafetyGuarantee",
        "Boat Ride": "CruiseRides",
        "AC viewing cabin": "ACCabin",
        "Refreshments": "Refreshments",
        "Video": "Photoshoot",
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
                            <FETIconList Icon={activityIconListMap[item]}/>
                            <span>{item}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
