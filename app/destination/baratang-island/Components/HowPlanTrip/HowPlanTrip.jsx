import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Accommodation",
            desc: `While Baratang has limited accommodation options, it’s advisable to book in advance. Alternatively, many visitors choose to stay in Port Blair and take a day trip to Baratang.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Include visits to the limestone caves, mud volcanoes, and Parrot Island in your itinerary. Don’t forget to explore the mangrove creeks and enjoy the pristine beaches.`
        },
        {
            id: 3,
            title: "Packing Essentials",
            desc: `Bring lightweight clothing, sturdy shoes for trekking, sunscreen, insect repellent, and a hat. A good camera is also recommended to capture the island’s natural beauty.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Baratang Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.stepsList}>
                    {
                        stepsList.map((item, index) => (
                            <div className={styles.stepWrapper}>
                                <div className={styles.stepTitle}>
                                    <h4>{`Step ${index + 1}: ${item.title}`}</h4>
                                </div>
                                <div className={styles.stepDesc}>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
