import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Is Neil Island suitable for a family vacation?",
            ans: `Absolutely! Neil Island’s calm beaches, safe swimming areas, and family-friendly accommodations make it an excellent choice for families.`
        },
        {
            id: 2,
            que: "Can I rent a bicycle on Neil Island?",
            ans: `Yes, bicycles and scooters are available for rent, providing a convenient and enjoyable way to explore the island.`
        },
        {
            id: 3,
            que: "What is the best way to get around Neil Island?",
            ans: `Bicycles and scooters are popular options for getting around. You can also hire auto-rickshaws for a comfortable and convenient tour of the island.`
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
