import styles from './GeneralInfo.module.css'

export default function GeneralInfo() {

    return (
        <div className={styles.mainWrapper} id='general-information'>
            <div className={styles.titleCont}>
                <h3>General Information About Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><span>Language:</span>While Hindi and English are widely spoken, you may also hear Bengali and Tamil due to the diverse population.</li>
                    <li><span>Local Cuisine:</span>Savor the island’s fresh seafood, coconut-based dishes, and tropical fruits. Popular local eateries offer a variety of Indian, continental, and seafood delicacies.</li>
                    <li><span>Safety:</span>Havelock is generally safe for tourists, but it’s advisable to follow basic safety guidelines, respect local customs, and be mindful of the marine environment.</li>
                </ul>
            </div>
        </div>
    )
}
