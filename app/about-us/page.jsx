import styles from './AboutPage.module.css'
import AboutDeatils from './Components/AboutDeatils/AboutDeatils'
import HeroSec from './Components/HeroSec/HeroSec'

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <HeroSec />
        <AboutDeatils />
    </div>
  )
}
