import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Boat Booking",
            desc: `Book boat tours departing from Port Blair, Havelock Island, or Neil Island.`
        },
        {
            id: 2,
            title: "Activities",
            desc: `Include scuba diving sessions if you're certified, or plan for snorkeling excursions.`
        },
        {
            id: 3,
            title: "Plan Trips",
            desc: `Arrange early morning trips, as these provide the best chance to enjoy calm seas and clear weather.`
        },
        {
            id: 4,
            title: "Essentials",
            desc: `Carry essentials like sunscreen, light clothing, a hat, and motion-sickness tablets.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Barren Island</h3>
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
