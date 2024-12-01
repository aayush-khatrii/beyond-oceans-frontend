import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Can I interact with the indigenous Jarwa tribe?",
            ans: `No, interactions with the Jarwa tribe are strictly regulated to protect their privacy and way of life. It’s important to respect their space and not attempt to engage with them.`
        },
        {
            id: 2,
            que: "Is it safe to visit the mud volcanoes?",
            ans: `Yes, visiting the mud volcanoes is safe, but it’s advisable to follow local guidelines and stay within designated areas to avoid any hazards.`
        },
        {
            id: 3,
            que: "What is the best time to see parrots at Parrot Island?",
            ans: `The best time to visit Parrot Island is in the evening, just before sunset, when thousands of parrots return to roost.`
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
