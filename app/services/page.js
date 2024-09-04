import HeroSec from './Components/HeroSec/HeroSec'
import InqComp from './Components/InqComp/InqComp'
import ServicesList from './Components/ServicesList/ServicesList'
import TopActivity from './Components/TopActivity/TopActivity'
import VisitTime from './Components/VisitTime/VisitTime'
import styles from './services.module.css'

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <HeroSec />
        <div className={styles.subWrapper}>
            <div className={styles.mainContent}>
                <ServicesList />
                <VisitTime />
            </div>
            <div className={styles.aside}>
                <TopActivity />
                <InqComp />
            </div>
        </div>
    </div>
  )
}
