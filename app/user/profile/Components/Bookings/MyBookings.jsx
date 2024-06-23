
import BookingCard from '@/app/AppData/components/Card/BookingCard/BookingCard'
import styles from './MyBookings.module.css'


export default function MyBookings({title, desc}) {

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headLeft}>
                <div className={styles.decorative}></div>
                <div className={styles.headContent}>
                    <span>{title}</span>
                    <p>{desc}</p>
                </div>
            </div>
        </div>

        <div className={styles.dataContainer}>
            <BookingCard />
            <BookingCard />
        </div>
    </div>
  )
}
