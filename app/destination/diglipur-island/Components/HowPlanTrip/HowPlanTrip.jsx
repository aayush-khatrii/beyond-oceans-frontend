import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Accommodation",
            desc: `Diglipur offers a range of accommodations, from eco-friendly resorts to budget guesthouses. Booking in advance, especially during peak seasons, is recommended.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Plan your itinerary to include trekking, snorkeling, scuba diving, beach hopping, and cave exploration. Make sure to include time for relaxation and enjoying the island’s natural beauty.`
        },
        {
            id: 3,
            title: "Packing Essentials",
            desc: `Pack light, breathable clothing, swimwear, sturdy trekking shoes, sunscreen, insect repellent, and a hat. A good camera is essential to capture the island’s stunning landscapes.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Diglipur Island</h3>
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
