import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Is it safe to swim in Port Blair's beaches?",
            ans: `While swimming is generally safe, it's essential to adhere to safety precautions and avoid swimming in areas with strong currents.`
        },
        {
            id: 2,
            que: "Are there ATMs available in Port Blair?",
            ans: `Yes, ATMs are available in Port Blair, but it's advisable to carry sufficient cash, especially if you plan to visit remote areas where banking facilities may be limited.`
        },
        {
            id: 3,
            que: "What are the must-buy souvenirs from Port Blair?",
            ans: `Look out for unique souvenirs such as shell crafts, pearl jewelry, and local handicrafts that showcase the rich cultural heritage of the Andaman and Nicobar Islands.`
        },
        {
            id: 4,
            que: "Is Port Blair safe for tourists?",
            ans: `Yes, Port Blair is generally safe for tourists. However, exercise caution as you would in any new place.`
        },
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
