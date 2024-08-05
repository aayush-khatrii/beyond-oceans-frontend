import styles from '../CommanCSS/policys.module.css'
import PrivacyPolicy from '../AppData/mdx/payment-policy.mdx'

export const metadata = {
  title: 'Payment Policy',
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
