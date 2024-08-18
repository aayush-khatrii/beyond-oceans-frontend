import FailedComp from './FailedComp/FailedComp'
import styles from './Success.module.css'

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <FailedComp />
    </div>
  )
}
