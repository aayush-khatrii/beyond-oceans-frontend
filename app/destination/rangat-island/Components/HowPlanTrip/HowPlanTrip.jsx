import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Accommodation",
            desc: `Rangat offers a range of accommodations, from eco-friendly resorts to budget guesthouses. Booking in advance, especially during peak tourist season, is recommended.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Plan your itinerary to include beach visits, nature walks, and turtle watching. Don’t forget to explore the mangroves and enjoy the scenic beauty of Panchavati Hills.`
        },
        {
            id: 3,
            title: "Packing Essentials",
            desc: `Bring light, breathable clothing, swimwear, sturdy walking shoes, sunscreen, insect repellent, and a hat. A good camera is essential to capture the island’s natural beauty.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Rangat Island</h3>
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
