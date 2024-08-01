import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './HotelCardScl.module.css'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'

export default function HotelCardScl() {
  return (
    <div className={styles.HotelContent}>
    {   
        Array(2).fill().map((item, index) => (
            <div key={index} className={styles.hotelList}>
                <div className={styles.hotelInfoCont}>
                    <div className={styles.hotelIcon}></div>
                    <div className={styles.hotelInfo}>
                        <div className={styles.hotelTitle}><span></span></div>
                        <div className={styles.hotelDetail}>
                            <div className={styles.featureList}></div>
                            <div className={styles.featureList}></div>
                            <div className={styles.featureList}></div>
                            <div className={styles.featureList}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.hotelImages}>
                    {
                        Array(4).fill().map((item, index) => (
                            <div key={index} className={styles.imageList}></div>
                        ))
                    }
                </div>
            </div>
        ))
    }
    </div>
  )
}
