import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Hotels.module.css'
import Image from 'next/image'

export default function Hotels() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Hotel or Resorts Stay</span>
        </div>
        <div className={styles.HotelContent}>
            <div className={styles.hotelList}>
                <div className={styles.hotelInfoCont}>
                    <div className={styles.hotelIcon}><IconList Icon="HotelStay"/></div>
                    <div className={styles.hotelInfo}>
                        <div className={styles.hotelTitle}><span>Hotel Vedanta Palace</span></div>
                        <div className={styles.hotelDetail}>
                            <div className={styles.LocationList}>
                                <IconList Icon="StayLocation"/>
                                <span>Port Blair</span>
                            </div>
                            <div className={styles.RatingList}>
                                <IconList Icon="StayRating"/>
                                <span>3 Star Hotel</span>
                            </div>
                            <div className={styles.DurationList}>
                                <IconList Icon="StayDuration"/>
                                <span>Day 1 and 2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.hotelImages}>
                    <div className={styles.imageList}>
                        <div className={styles.HotelImageWrap}>
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
                        <div className={styles.HotelImageWrap}>
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
                        <div className={styles.HotelImageWrap}>
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
                        <div className={styles.HotelImageWrap}>
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

            <div className={styles.hotelList}>
                <div className={styles.hotelInfoCont}>
                    <div className={styles.hotelIcon}><IconList Icon="ResortStay"/></div>
                    <div className={styles.hotelInfo}>
                        <div className={styles.hotelTitle}><span>Coconhuts Beach Resort</span></div>
                        <div className={styles.hotelDetail}>
                            <div className={styles.LocationList}>
                                <IconList Icon="StayLocation"/>
                                <span>Havelock</span>
                            </div>
                            <div className={styles.RatingList}>
                                <IconList Icon="StayRating"/>
                                <span>3 Star Hotel</span>
                            </div>
                            <div className={styles.DurationList}>
                                <IconList Icon="StayDuration"/>
                                <span>Day 2 and 3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.hotelImages}>
                    <div className={styles.imageList}>
                        <div className={styles.HotelImageWrap}>
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
                        <div className={styles.HotelImageWrap}>
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
                        <div className={styles.HotelImageWrap}>
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
                        <div className={styles.HotelImageWrap}>
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
