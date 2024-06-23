import styles from '../CommanCSS/policys.module.css'
import CancellationRefund from '../AppData/mdx/cancellation-refund.mdx'


export const metadata = {
    title: 'Cancellation & Refund Policy',
}

export default function page() {
  return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <CancellationRefund />
            </div>
        </div>
  )
}
