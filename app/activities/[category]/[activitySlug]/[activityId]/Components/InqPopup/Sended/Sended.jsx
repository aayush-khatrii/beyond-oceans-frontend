import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Sended.module.css'
import Image from 'next/image'

export default function Sended({onClose}) {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <button className={styles.closeBtn} onClick={onClose}><IconList Icon="Close" /></button>
            <div className={styles.assetGif}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/gif/contact_form.gif"
                        fill={true}
                        sizes='100%'
                        alt="Inquiry has been recived"
                        unoptimized
                        priority
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
            <div className={styles.desc}>
                <p>
                Success Ahoy! 🎉 Your enquiry has been received. Sit back and relax as we plan your Andaman and Nicobar adventure. Expect a reply shortly!
                </p>
            </div>
        </div>
    </div>
  )
}
