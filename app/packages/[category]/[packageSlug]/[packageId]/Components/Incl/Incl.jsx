import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import styles from './Incl.module.css'

export default function Incl() {
    const mdxSourceINC = "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/inclusions.mdx"
    const mdxSourceEXC = "https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/packages/3e142f17-dc88-435c-98a0-bf542836f961/exclusions.mdx"

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.inclusions}>
            <div className={styles.incTitle}>
                <span>Inclusions</span>
            </div>
            <div className={styles.mdxContent}>
                <MDXComp source={mdxSourceINC} />
            </div>
        </div>
        <div className={styles.Exclusions}>
            <div className={styles.excTitle}>
                <span>Exclusions</span>
            </div>
            <div className={styles.mdxContent}>
                <MDXComp source={mdxSourceEXC} />
            </div>
        </div>
    </div>
  )
}
