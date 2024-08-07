import Image from 'next/image'
import styles from './LoginDone.module.css'

export default function LoginDone() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.iconAsset}>
                <div className={styles.gifWrapper}>
                    <Image
                        src="/assets/gif/login_done.gif"
                        fill={true}
                        sizes='100%'
                        alt="Account is Verified"
                        unoptimized
                        priority
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
            <div className={styles.iconSepretor}></div>
            <div className={styles.content}>
                <div className={styles.title}>Your Account is Verified</div>
                <div className={styles.desc}>Welcome aboard! Your Andaman adventure starts now.</div>
            </div>
            <div className={styles.timer}>
                <div className={styles.loaderBar}></div>
            </div>
        </div>
    </div>
  )
}
