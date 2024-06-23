import styles from './Offers.module.css'
import Image from 'next/image'

export default function Offers() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.slider}>
                    <div className={styles.navButton}>
                        <button className={styles.leftNav}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73205 18.5833L1.01666 10L9.73204 1.41668M2.22713 10L19.9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className={styles.rightNav}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.268 1.41667L19.9833 10L11.268 18.5833M18.7729 10H1.10001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.slideWrapper}>
                        <div className={styles.slideImgWrapper}>
                            <Image
                                src="/assets/Banner-1.png"
                                fill={true}
                                sizes="100%"
                                priority={true}
                                alt="Picture of the author"
                                style={{zIndex: "-1",objectFit:"cover"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
