import Image from 'next/image'
import styles from './RedirectPopup.module.css'

export default function RedirectPopup() {
  return (
    <div className={styles.redirectPopup}>
        <div className={styles.popupSubWrapper}>
            <div className={styles.popupSubTop}>
                <div className={styles.redirectAnimation}>
                  <div className={styles.gifWrapper}>
                      <Image
                          src="/assets/gif/bo_loading.gif"
                          fill={true}
                          sizes='100%'
                          alt="Account is Verified"
                          unoptimized
                          priority
                          style={{objectFit:"cover"}}
                      />
                  </div>
                </div>
                <div className={styles.popupTitle}>Processing Your Payment</div>
                <div className={styles.popupDesc}><span>Hold tight! We’re packing your dream getaway. In just a few seconds, you'll be on your way to securing your spot in paradise. 🌴</span></div>
            </div>
            <div className={styles.popupNote}><span>Redirecting you to our secure payment gateway…</span></div>
        </div>
    </div>
  )
}
