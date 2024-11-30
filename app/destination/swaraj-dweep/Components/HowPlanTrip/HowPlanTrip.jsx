import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Accommodation",
            desc: `Havelock offers a range of accommodations from luxury resorts to budget guesthouses. It's advisable to book your stay in advance, especially during peak tourist seasons.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Plan your itinerary to include snorkeling, scuba diving, kayaking, and beach hopping. Additionally, don’t miss out on experiencing the local cuisine and interacting with the friendly locals.`
        },
        {
            id: 3,
            title: "Packing Essentials",
            desc: `Bring lightweight and breathable clothing, swimwear, sunscreen, insect repellent, and waterproof bags for your belongings during water activities.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Port Blair</h3>
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
