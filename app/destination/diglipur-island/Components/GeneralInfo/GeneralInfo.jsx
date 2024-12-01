import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Diglipur Island</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Language:</span>The primary languages spoken are Bengali, Hindi, and English. English is widely understood and spoken in tourist areas.</li>
                    <li><span>Local Cuisine:</span>Enjoy the island’s fresh seafood and traditional Andamanese dishes at local eateries. The cuisine is a delightful blend of Indian and coastal flavors.</li>
                    <li><span>Safety:</span>Diglipur is generally safe for tourists. However, it’s important to follow local guidelines, respect the environment, and take necessary precautions during adventure activities.</li>
                </ul>
            </div>
        </div>
    )
}
