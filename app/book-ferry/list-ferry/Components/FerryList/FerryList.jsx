import styles from './FerryList.module.css'
import FerryCard from '../FerryCard/FerryCard'

export default function FerryList({tripData}) {


  return (
    <div className={styles.mainWrapper}>
        <div className={styles.ferryListCont}>
            <FerryCard tripData={tripData} />
            <FerryCard tripData={tripData} />
            <FerryCard tripData={tripData} />
            <FerryCard tripData={tripData} />
            <FerryCard tripData={tripData} />
            <FerryCard tripData={tripData} />
        </div>
    </div>
  )
}
