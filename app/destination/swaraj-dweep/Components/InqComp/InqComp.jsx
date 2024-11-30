import Image from 'next/image'
import styles from './InqComp.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Link from 'next/link'

export default function InqComp() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.sectionTitle}>
                <span>Planning a Trip to Andaman?</span>
            </div>
            <div className={styles.sectionDesc}>
                <p>Beyond Oceans is the top-rated tour operator in Andaman Island, that offers packages at the lowest guaranteed rate. Contact us today!</p>
            </div>
        </div>
        <div className={styles.sectionImageWrapper}>
            <div className={styles.inqImage}>
                <div className={styles.gifWrapper}>
                    <Image
                        src="/assets/destination/plan_trip.gif"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
        </div>
        <div className={styles.subWrapper2}>
            <div className={styles.contactList}>
                <Link href="tel:+917908671247" target='_blank' className={styles.contanctCardCall}>
                    <div className={styles.cardIcon}><IconList Icon="CallV2"/></div>
                    <div className={styles.cardLable}><span>Call Us:</span></div>
                    <div className={styles.cardValue}><span>+91 79086 71247</span></div>
                </Link>
                <Link href="https://wa.me/917908671247" target='_blank' className={styles.contanctCardCall}>
                    <div className={styles.cardIcon}><IconList Icon="WPV3"/></div>
                    <div className={styles.cardLable}><span>WhatsApp:</span></div>
                    <div className={styles.cardValue}><span>+91 79086 71247</span></div>
                </Link>
                <Link href="mailto:info@beyonoceans.in" target='_blank' className={styles.contanctCardCall}>
                    <div className={styles.cardIcon}><IconList Icon="EmailV2"/></div>
                    <div className={styles.cardLable}><span>Mail Us:</span></div>
                    <div className={styles.cardValue}><span> info@beyonoceans.in</span></div>
                </Link>
            </div>
        </div>
    </div>
  )
}
