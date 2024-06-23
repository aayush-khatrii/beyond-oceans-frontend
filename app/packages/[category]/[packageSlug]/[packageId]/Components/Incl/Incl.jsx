import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import styles from './Incl.module.css'

export default function Incl() {
    const mdxSource = "https://my-assets-bkt.s3.ap-south-1.amazonaws.com/daydata.mdx"
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.inclusions}>
            <div className={styles.incTitle}>
                <span>Inclusions</span>
            </div>
            <div className={styles.mdxContent}>
                <MDXComp source={mdxSource} />
            </div>
        </div>
        <div className={styles.Exclusions}>
            <div className={styles.excTitle}>
                <span>Exclusions</span>
            </div>
            <div className={styles.mdxContent}>
                <MDXComp source={mdxSource} />
            </div>
        </div>
    </div>
  )
}
