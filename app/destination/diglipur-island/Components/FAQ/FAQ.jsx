import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Is Diglipur Island suitable for families?",
            ans: `Yes, Diglipur Island is suitable for families, offering a mix of adventure and relaxation. Beaches, trekking, and wildlife experiences are great for children and adults alike.`
        },
        {
            id: 2,
            que: "Can I witness turtle nesting at Kalipur Beach?",
            ans: `Yes, Kalipur Beach is known for its turtle nesting grounds. The best time to witness this is between December and March when the turtles come ashore to lay eggs.`
        },
        {
            id: 3,
            que: "What is the best way to explore Ross and Smith Islands?",
            ans: `A boat ride from Aerial Bay Jetty will take you to Ross and Smith Islands. Once there, you can walk across the sandbar connecting the two islands, swim, and snorkel in the clear waters.`
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
