import DiscountComp from './Components/DiscountComp/DiscountComp'
import ThankYouComp from './Components/ThankYouComp/ThankYouComp'
import styles from './Success.module.css'

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <ThankYouComp />
        <DiscountComp />
    </div>
  )
}
