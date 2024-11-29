import styles from './Reach.module.css'

export default function Reach() {

    return (
        <div className={styles.mainWrapper} id='how-to-reach'>
            <div className={styles.titleCont}>
                <h3>How to Reach Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={`${styles.paragraph} ${styles.firstPara}`}>
                    <p><span>By Air:</span>For most travelers, flying is the most convenient and time-saving option to reach Port Blair. The Veer Savarkar International Airport (IXZ) serves as the primary gateway to the Andaman Islands. Numerous domestic airlines operate regular flights from major Indian cities like Delhi, Mumbai, Chennai, Kolkata, and Bangalore to Port Blair. The flight duration varies depending on the departure city, with direct flights typically taking around 2 to 5 hours. Beyond Oceans offers comprehensive booking services for air travel, providing customers with convenient options to secure their flights to Port Blair hassle-free.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.secondPara}`}>
                    <p><span>By Sea:</span>Embarking on a sea voyage to Port Blair offers a unique and adventurous experience, allowing travelers to witness the vastness of the ocean and the beauty of the Andaman Islands gradually unfold before their eyes. Passenger ships and ferries operated by the government as well as private cruise liners connect Port Blair with mainland India. The journey by sea is longer compared to air travel, taking approximately 50 to 60 hours from Chennai and 60 to 70 hours from Kolkata. Beyond Oceans facilitates booking services for sea travel, ensuring that travelers have access to a range of options for their journey to Port Blair, whether by government-operated ships or private cruise liners.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.thiredPara}`}>
                    <p><span>Government-operated Ships:</span>The Directorate of Shipping Services (DSS) under the Andaman and Nicobar Administration manages regular ship services between Port Blair and the mainland ports of Chennai, Kolkata, and Visakhapatnam. These ships offer different classes of accommodation, including deluxe cabins, first-class cabins, second-class cabins, and dormitories, catering to various budget preferences. Beyond Oceans simplifies the booking process for government-operated ships, providing travelers with convenient access to secure their tickets and accommodations for a comfortable journey to Port Blair.</p>
                </div>
                <div className={`${styles.paragraph} ${styles.forthPara}`}>
                    <p><span>Private Cruise Liners:</span>For travelers seeking a luxurious and leisurely journey to Port Blair, private cruise liners provide an enticing option. Several private companies operate cruise services offering comfortable cabins, gourmet dining, entertainment facilities, and onboard activities. These cruises typically depart from major coastal cities like Chennai and Kolkata, providing a more relaxed and indulgent way to reach the Andaman Islands. Beyond Oceans facilitates booking services for private cruise liners, allowing travelers to embark on a memorable voyage to Port Blair with ease and convenience.</p>
                </div>
            </div>
        </div>
    )
}
