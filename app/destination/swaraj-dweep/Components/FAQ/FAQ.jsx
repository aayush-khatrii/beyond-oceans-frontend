import styles from './FAQ.module.css'

export default function FAQ() {

    const questionList = [
        {
            id: 1,
            que: "Can I rent a bike or scooter on Havelock Island?",
            ans: `Yes, bike and scooter rentals are available and are a convenient way to explore the island at your own pace.`
        },
        {
            id: 2,
            que: "Are there any ATMs on Havelock Island?",
            ans: `Yes, there are ATMs, but it’s wise to carry sufficient cash as sometimes ATMs may run out of money or be out of service.`
        },
        {
            id: 3,
            que: "What are the best souvenirs to buy from Havelock?",
            ans: `Look for handmade shell crafts, coconut products, and locally made jewelry as unique mementos of your visit.`
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
