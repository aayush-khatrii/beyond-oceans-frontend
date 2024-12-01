import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Shaheed Dweep</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Language:</span>The primary languages spoken are Bengali, Hindi, and English. English is widely understood and spoken in tourist areas.</li>
                    <li><span>Local Cuisine:</span>Relish the island’s fresh seafood, coconut-based dishes, and local fruits. Restaurants and eateries offer a mix of Indian, continental, and seafood specialties.</li>
                    <li><span>Safety:</span>Neil Island is generally safe for tourists. However, always adhere to local guidelines, respect the environment, and be cautious while engaging in water activities.</li>
                </ul>
            </div>
        </div>
    )
}
