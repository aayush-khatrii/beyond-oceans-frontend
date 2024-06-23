import styles from '../CommanCSS/policys.module.css'
import PrivacyPolicy from '../AppData/mdx/privacy-policy.mdx'

export const metadata = {
  title: 'Privacy Policy',
}

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <PrivacyPolicy />
        </div>
    </div>
  )
}
