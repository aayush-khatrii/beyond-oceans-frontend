import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Accommodation",
            desc: `From beachside resorts to budget-friendly guesthouses, Neil Island offers a range of accommodations. Booking in advance, especially during peak seasons, is recommended.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Plan your itinerary to include snorkeling, scuba diving, cycling, and beach hopping. Additionally, take time to explore the island’s lush green fields and local markets.`
        },
        {
            id: 3,
            title: "Travel Essentials",
            desc: `Pack light, breathable clothing, swimwear, sunscreen, insect repellent, and any necessary medications. A good pair of walking shoes will also be useful for exploring the island on foot or by bicycle.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Shaheed Dweep</h3>
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
