import styles from './OrderSumSkeleton.module.css'

export default function OrderSumSkeleton() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.packageTitle}></div>
        <div className={styles.deatilsLists}>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
            <div className={styles.deatilsList}></div>
        </div>
    </div>
  )
}
