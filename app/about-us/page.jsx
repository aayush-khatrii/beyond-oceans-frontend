import styles from './AboutPage.module.css'
import AboutDeatils from './Components/AboutDeatils/AboutDeatils'
import AboutDesc from './Components/AboutDesc/AboutDesc'
import AboutShape from './Components/AboutShape/AboutShape'
import AboutStatic from './Components/AboutStatic/AboutStatic'
import HeroSec from './Components/HeroSec/HeroSec'
import Testimonial from './Components/Testimonial/Testimonial'

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <HeroSec />
        <AboutDeatils />
        <AboutStatic />
        <AboutShape />
        <AboutDesc />
        <Testimonial />
    </div>
  )
}
