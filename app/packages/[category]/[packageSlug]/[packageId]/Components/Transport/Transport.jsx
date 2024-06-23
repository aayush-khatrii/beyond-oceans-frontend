import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Transport.module.css'
import Image from 'next/image'

export default function TransportIcon() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Transportation Modes</span>
        </div>
        <div className={styles.TransportContent}>
            <div className={styles.TransportList}>
                <div className={styles.TransportInfoCont}>
                    <div className={styles.TransportIcon}><IconList Icon="FerryTransport"/></div>
                    <div className={styles.transportInfo}>
                        <div className={styles.transportTitle}><span>Nautika Lite</span></div>
                        <div className={styles.transportDetail}>
                            <div className={styles.LocationList}>
                                <IconList Icon="StayLocation"/>
                                <span>Port Blair to Havelock</span>
                            </div>
                            <div className={styles.RatingList}>
                                <IconList Icon="StayRating"/>
                                <span>Premium Class</span>
                            </div>
                            <div className={styles.DurationList}>
                                <IconList Icon="StayDuration"/>
                                <span>On Day 4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.transportImages}>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_1.jpg'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_2.jpg'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_3.jpg'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_4.jfif'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.TransportList}>
                <div className={styles.TransportInfoCont}>
                    <div className={styles.TransportIcon}><IconList Icon="TexiTransposrt"/></div>
                    <div className={styles.transportInfo}>
                        <div className={styles.transportTitle}><span>Ertiga CNG Taxi</span></div>
                        <div className={styles.transportDetail}>
                            <div className={styles.LocationList}>
                                <IconList Icon="StayLocation"/>
                                <span>Havelock Sightseeing</span>
                            </div>
                            <div className={styles.RatingList}>
                                <IconList Icon="StayRating"/>
                                <span>Tour Guide</span>
                            </div>
                            <div className={styles.DurationList}>
                                <IconList Icon="StayDuration"/>
                                <span>Day 5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.transportImages}>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_1.jpg'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_2.jpg'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_3.jpg'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <div className={styles.TransportImageWrap}>
                            <Image
                                src='/assets/hotel_1/hotel_img_4.jfif'
                                fill={true}
                                sizes="100%"
                                alt="Hotel Image"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                    </div>
                </div>
            </div>

        


        </div>
    </div>
  )
}
