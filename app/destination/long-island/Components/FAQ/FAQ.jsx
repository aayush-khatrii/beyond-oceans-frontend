import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Is Long Island suitable for families?",
            ans: `Yes, Long Island is suitable for families, offering a mix of relaxing beach spots, nature trails, and opportunities for snorkeling and picnics.`
        },
        {
            id: 2,
            que: "Can I witness turtle nesting at Long Island?",
            ans: `While Long Island is not particularly known for turtle nesting, you can explore nearby islands and beaches for potential sightings.`
        },
        {
            id: 3,
            que: "What is the best way to explore the nearby islands like Guitar Island?",
            ans: `The best way to explore nearby islands is by taking a boat trip from Long Island. Local operators offer day trips and excursions to these beautiful, uninhabited spots.`
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
