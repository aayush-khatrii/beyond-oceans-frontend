import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Baratang Island</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Language:</span>The primary languages spoken are Bengali, Hindi, and Tamil. English is also widely understood and spoken in tourist areas.</li>
                    <li><span>Local Cuisine:</span>Enjoy fresh seafood and traditional Andamanese dishes at local eateries. The island’s cuisine is a blend of Indian and coastal flavors.</li>
                    <li><span>Safety:</span>While Baratang is generally safe for tourists, it’s important to follow local guidelines, respect the natural environment, and avoid restricted areas inhabited by indigenous tribes.</li>
                </ul>
            </div>
        </div>
    )
}
