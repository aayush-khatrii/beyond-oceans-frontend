import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './NoBookings.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NoBookings() {
    const router = useRouter()

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.emptyBookingsIcon}>
            <div className={styles.gifWrapper}>
                <Image
                    src="/assets/gif/no_data.gif"
                    fill={true}
                    sizes='100%'
                    alt="No booking Data"
                    unoptimized
                    priority
                    style={{objectFit:"cover"}}
                />
            </div>
        </div>
        <div className={styles.emptyBookingText}>
            You do not have any bookings currently!
        </div>
        <div className={styles.redirectButtons}>
            <button className={styles.expPackBtn} onClick={() => {router.push("/packages")}}>Explore Packages</button>
            <button className={styles.expActBtn} onClick={() => {router.push("/activities")}}>Explore Activities</button>
            <button className={styles.expSightBtn} onClick={() => {router.push("/sightseeings")}}>Explore Sightseeings</button>
        </div>
    </div>
  )
}
