import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Little Andaman</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Sea:</span>Government-operated ferries and private boats connect Port Blair to Little Andaman, offering a scenic journey through the Andaman Sea. The ferry ride typically takes around 6-8 hours.</p>
                </div>
            </div>
        </div>
    )
}
