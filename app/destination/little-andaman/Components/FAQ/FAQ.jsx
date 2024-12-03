import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Is Little Andaman Island suitable for families?",
            ans: `Yes, Little Andaman Island is suitable for families, offering a mix of relaxing beach spots, waterfall excursions, and opportunities for surfing and nature walks.`
        },
        {
            id: 2,
            que: "Can I surf at Butler Bay Beach?",
            ans: `Yes, Butler Bay Beach is known for its excellent surfing conditions. Surfing enthusiasts will find the waves challenging and enjoyable.`
        },
        {
            id: 3,
            que: "What is the best way to explore the waterfalls on the island?",
            ans: `The best way to explore the waterfalls is by taking guided tours or hiring local guides who can provide insights and ensure a safe and enjoyable experience.`
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
