import styles from '../CommanCSS/policys.module.css'
import ContentDisclaimer from '../AppData/mdx/content-disclaimer.mdx'

export const metadata = {
  title: 'Content Disclaimer',
}

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <ContentDisclaimer />
        </div>
    </div>
  )
}
