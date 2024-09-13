import styles from './ImageGallery.module.css'
import Image from 'next/image'

export default function ImageGallery({data}) {

    function packageImgUrl(imgSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/activities/${data.Activity_Id}/images/${imgSrc}`
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.leftimgs}>
                <div className={styles.imgWrapper}>
                    <Image
                        src={packageImgUrl(data.Img_Path[0])}
                        fill={true}
                        sizes='100%'
                        unoptimized
                        alt="Picture of the author"
                        style={{zIndex: "1" ,objectFit:"cover"}}
                    />     
                </div>
            </div>
            <div className={styles.rightimgs}>
                <div className={styles.rightTopimg}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src={packageImgUrl(data.Img_Path[1])}
                            fill={true}
                            sizes='100%'
                            unoptimized
                            alt="Picture of the author"
                            style={{zIndex: "1" ,objectFit:"cover"}}
                        />     
                    </div>
                </div>
                <div className={styles.rightBotimg}>
                    <div className={styles.rightBotLeft}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src={packageImgUrl(data.Img_Path[2])}
                                fill={true}
                                sizes='100%'
                                unoptimized
                                alt="Picture of the author"
                                style={{zIndex: "1" ,objectFit:"cover"}}
                            />     
                        </div>
                    </div>
                    <div className={styles.rightBotRight}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src={packageImgUrl(data.Img_Path[3])}
                                fill={true}
                                sizes='100%'
                                unoptimized
                                alt="Picture of the author"
                                style={{zIndex: "-1" ,objectFit:"cover"}}
                            />     
                        </div>
                        <button className={styles.seeAllBtn}>See All Photos</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mobSubWrapper}>
            <div className={styles.topImage}>
                <div className={styles.imgWrapper}>
                    <Image
                        src={packageImgUrl(data.Img_Path[0])}
                        fill={true}
                        sizes='100%'
                        unoptimized
                        alt="Picture of the author"
                        style={{zIndex: "1" ,objectFit:"cover"}}
                    />
                </div>
            </div>
            <div className={styles.bottomImages}>
                <div className={styles.bottomF}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src={packageImgUrl(data.Img_Path[1])}
                            fill={true}
                            sizes='100%'
                            unoptimized
                            alt="Picture of the author"
                            style={{zIndex: "1" ,objectFit:"cover"}}
                        />     
                    </div>
                </div>
                <div className={styles.bottomS}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src={packageImgUrl(data.Img_Path[2])}
                            fill={true}
                            sizes='100%'
                            unoptimized
                            alt="Picture of the author"
                            style={{zIndex: "1" ,objectFit:"cover"}}
                        />     
                    </div>
                </div>
                <div className={styles.bottomT}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src={packageImgUrl(data.Img_Path[3])}
                            fill={true}
                            sizes='100%'
                            unoptimized
                            alt="Picture of the author"
                            style={{zIndex: "-1" ,objectFit:"cover"}}
                        />     
                    </div>
                    <button className={styles.seeAllBtn}>All Photos</button>
                </div>
            </div>
        </div>
    </div>
  )
}
