import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Long Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Sea:</span>Government-operated ferries and private boats connect Port Blair to Long Island, offering a picturesque journey through the Andaman Sea.</p>
                </div>
            </div>
        </div>
    )
}
