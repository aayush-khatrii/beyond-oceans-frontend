import styles from '../CommanCSS/policys.module.css'
import TermsConditions from '../AppData/mdx/terms-conditions.mdx'

export const metadata = {
    title: 'Terms & Conditions',
}

export default function page() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <TermsConditions />
        </div>
    </div>
  )
}
