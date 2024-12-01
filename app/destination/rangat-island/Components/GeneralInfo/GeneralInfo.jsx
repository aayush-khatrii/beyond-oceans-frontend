import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Rangat Island</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Language:</span>The primary languages spoken are Bengali, Hindi, Tamil, and English. English is widely understood and spoken in tourist areas.</li>
                    <li><span>Local Cuisine:</span>Enjoy fresh seafood and traditional Andamanese dishes at local eateries. The cuisine is a delightful blend of Indian and coastal flavors.</li>
                    <li><span>Safety:</span>Rangat is generally safe for tourists. However, it’s important to follow local guidelines, respect the environment, and take necessary precautions during outdoor activities.</li>
                </ul>
            </div>
        </div>
    )
}
