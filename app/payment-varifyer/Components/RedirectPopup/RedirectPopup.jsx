import Image from 'next/image'
import styles from './RedirectPopup.module.css'

export default function RedirectPopup() {
  return (
        <div className={styles.popupSubWrapper}>
            <div className={styles.popupSubTop}>
                <div className={styles.redirectAnimation}>
                    <div className={styles.gifWrapper}>
                        <Image
                            src="/assets/gif/bo_loading.gif"
                            fill={true}
                            sizes='100%'
                            alt="Verifying your Payment"
                            unoptimized
                            priority
                            style={{objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.popupTitle}>Verifying your Payment</div>
                <div className={styles.popupDesc}><span>Hold tight! We’re packing your dream getaway.</span></div>
                <div className={styles.popupDesc}><span>Check your whatsapp and Email where you get your invoice.</span></div>
            </div>
            <div className={styles.popupNote}><span>Don't close or go back from the page untile we verify your payment</span></div>
        </div>
  )
}
