import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Barren Island</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Location:</span>Andaman Sea, part of the Andaman and Nicobar Islands.</li>
                    <li><span>Entry Permissions:</span>Managed by the Indian Government; landing is not allowed.</li>
                    <li><span>Best Time to Visit:</span>November to February.</li>
                    <li><span>Duration of Visit:</span>Half-day or full-day boat tours.</li>
                    <li><span>Activities:</span>Sightseeing, photography, and water sports like diving and snorkeling.</li>
                </ul>
            </div>
        </div>
    )
}
