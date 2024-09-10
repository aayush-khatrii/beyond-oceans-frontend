import Image from 'next/image'
import styles from './DiscountComp.module.css'

export default function DiscountComp() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.dicountLeft}>
                <div className={styles.title}>
                    <span>Shhh! Don't tell anyone, but you just got a surprise discount</span>
                </div>
                <div className={styles.desc}>
                    <span>You did it! To show our thanks, here's a special gift: <br/><strong>30%</strong> off on your next purchase. Just use code <span className={styles.offerCode}>THANKYOU30</span> at checkout. Happy shopping!</span>
                </div>
                <div className={styles.descMob}>
                    <span>You did it! To show our thanks, here's a special gift: <strong>30%</strong> off on your next purchase. Just use code <span className={styles.offerCode}>THANKYOU30</span> at checkout. Happy shopping!</span>
                </div>
            </div>
            <div className={styles.dicountRight}>
                <div className={styles.gifWrapper}>
                    <Image
                        src="/assets/gif/surprise.gif"
                        fill={true}
                        sizes='100%'
                        alt="Verifying your Payment"
                        unoptimized
                        priority
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
