import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Language:</span>Hindi, English, and Bengali are widely spoken.</li>
                    <li><span>Time Zone:</span>IST (Indian Standard Time) - UTC+5:30</li>
                    <li><span>Climate:</span>Tropical with hot and humid summers and pleasant winters.</li>
                </ul>
            </div>
        </div>
    )
}
