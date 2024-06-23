import styles from './ImageGallery.module.css'
import Image from 'next/image'

export default function ImageGallery() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.leftimgs}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/singlepro1.jpg"
                        fill={true}
                        sizes='100%'
                        alt="Picture of the author"
                        style={{zIndex: "1" ,objectFit:"cover"}}
                    />     
                </div>
            </div>
            <div className={styles.rightimgs}>
                <div className={styles.rightTopimg}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/Radhanagar-Beach-and-Sunset.jpg"
                            fill={true}
                            sizes='100%'
                            alt="Picture of the author"
                            style={{zIndex: "1" ,objectFit:"cover"}}
                        />     
                    </div>
                </div>
                <div className={styles.rightBotimg}>
                    <div className={styles.rightBotLeft}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src="/assets/Category-Img-3.png"
                                fill={true}
                                sizes='100%'
                                alt="Picture of the author"
                                style={{zIndex: "1" ,objectFit:"cover"}}
                            />     
                        </div>
                    </div>
                    <div className={styles.rightBotRight}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src="/assets/6605.jpg"
                                fill={true}
                                sizes='100%'
                                alt="Picture of the author"
                                style={{zIndex: "-1" ,objectFit:"cover"}}
                            />     
                        </div>
                        <button className={styles.seeAllBtn}>See All Photos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
