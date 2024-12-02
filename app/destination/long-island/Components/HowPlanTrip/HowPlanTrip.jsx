import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Accommodation",
            desc: `Long Island offers a few accommodations, including eco-friendly resorts and budget guesthouses. Booking in advance, especially during peak tourist season, is recommended.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Plan your itinerary to include beach visits, snorkeling, forest trails, and day trips to nearby islands. Ensure you leave time for relaxation and enjoying the island’s natural beauty.`
        },
        {
            id: 3,
            title: "Packing Essentials",
            desc: `Bring light, breathable clothing, swimwear, sturdy walking shoes, sunscreen, insect repellent, and a hat. A good camera is essential to capture the island’s stunning landscapes.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Long Island</h3>
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
