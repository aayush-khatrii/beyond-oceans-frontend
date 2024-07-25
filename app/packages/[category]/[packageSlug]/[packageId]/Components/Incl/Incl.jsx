import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import styles from './Incl.module.css'

export default function Incl({incl, excl, packageId}) {

    function awsUrlGen(fileSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/${packageId}/${fileSrc}`
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.inclusions}>
            <div className={styles.incTitle}>
                <span>Inclusions</span>
            </div>
            <div className={styles.mdxContent}>
                <MDXComp source={awsUrlGen(incl)} />
            </div>
        </div>
        <div className={styles.Exclusions}>
            <div className={styles.excTitle}>
                <span>Exclusions</span>
            </div>
            <div className={styles.mdxContent}>
                <MDXComp source={awsUrlGen(excl)} />
            </div>
        </div>
    </div>
  )
}
