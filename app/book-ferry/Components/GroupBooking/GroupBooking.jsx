import styles from './GroupBooking.module.css'
import Image from 'next/image'

export default function GroupBooking() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.imgWrapper}>
                <Image
                    src="/assets/ferrygroupbooking.jpg"
                    fill={true}
                    sizes="100%"
                    alt="Nautika"
                    style={{objectFit:"cover", objectPosition: "0 20%"}}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.boldContent}>
                    <span>Planning a Group Trip? Save Up <br/> To 40% With Exclusive Offers!</span>
                </div>
                <div className={styles.lightContent}>
                    <span>Get an unforgettable adventure with our specially <br/> customized deals for your group. Request a call back now. </span>
                </div>
                <button className={styles.callBackBtn}>Get A Callback</button>
            </div>
        </div>
    </div>
  )
}
