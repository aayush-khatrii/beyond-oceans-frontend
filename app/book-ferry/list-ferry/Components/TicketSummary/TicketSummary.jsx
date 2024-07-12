import styles from './TicketSummary.module.css'
import Image from 'next/image'

export default function TicketSummary() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.titleSection}>
                <div className={styles.mainTitle}><span>Ticket Summary</span></div>
                <div className={styles.desc}><span>Start planning your ferry trip! Select the itinerary that fits your needs. This is where your order summary will appear.</span></div>
            </div>
            <div className={styles.bigferryIcon}>
                <div className={styles.imWrapper}>
                    <Image
                        src="/assets/ferry_summary.webp"
                        fill={true}
                        sizes="100%"
                        alt="BigFerryVector"
                        style={{objectFit:"cover", objectPosition:"bottom"}}
                    />
                </div>
            </div>
        </div>
    )
}
