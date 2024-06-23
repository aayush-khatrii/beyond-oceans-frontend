import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './PackageInc.module.css'

export default function PackageInc({featureList}) {
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
                            <IconList Icon={`${item}FET`} />
                            <span>{item}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
