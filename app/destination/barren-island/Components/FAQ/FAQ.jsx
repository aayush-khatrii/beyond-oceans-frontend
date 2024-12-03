import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Can we land on Barren Island?",
            ans: `No, landing is prohibited due to safety and environmental concerns. Tours are conducted by boats that maintain a safe distance.`
        },
        {
            id: 2,
            que: "Is Barren Island safe for tourists?",
            ans: `Yes, as long as you follow the guidelines provided by tour operators and do not attempt to go ashore.`
        },
        {
            id: 3,
            que: "What is the cost of visiting Barren Island?",
            ans: `Costs vary based on tour operators and activities. Scuba diving packages may be higher due to specialized equipment and guides.`
        },
        {
            id: 4,
            que: "Do we need special permits to visit?",
            ans: `Yes, permissions are managed by the Andaman administration, but tour operators generally handle this for visitors.`
        },
        {
            id: 5,
            que: "Are there accommodations near Barren Island?",
            ans: `No, accommodations are available in Port Blair, Havelock Island, or Neil Island.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id="faq">
            <div className={styles.titleCont}>
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.questionList}>
                    {
                        questionList.map((item, index) => (
                            <div key={index} className={styles.faqQuestionCard}>
                                <div className={styles.queTitle}>
                                    <ul><li>{item.que}</li></ul>
                                </div>
                                <div className={styles.faqAns}>
                                    <p>{item.ans}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
