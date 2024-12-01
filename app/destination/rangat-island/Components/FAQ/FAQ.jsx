import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Is Rangat Island suitable for families?",
            ans: `Yes, Rangat Island is suitable for families, offering a mix of relaxing beach spots, nature walks, and wildlife experiences.`
        },
        {
            id: 2,
            que: "Can I witness turtle nesting at Cutbert Bay Beach?",
            ans: `Yes, Cutbert Bay Beach is known for its turtle nesting grounds. The best time to witness this is between December and February when turtles come ashore to lay eggs.`
        },
        {
            id: 3,
            que: "What is the best way to explore the mangroves at Dhani Nallah?",
            ans: `The best way to explore the mangroves is by taking a walk along the Dhani Nallah Mangrove Walkway, which provides an immersive experience of the island’s rich ecosystem.`
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
