"use client"
import styles from './TitleContainer.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function TitleContainer() {

    function handleShare(){
        if(navigator.share){
            navigator.share({
                title:"Hello",
                url:"https://localhost:3000/packages/family-packages/andaman-nicobar-island"
            })
        }else{
            alert("web sharing not supported")
        }
    }

    return (
        <div className={styles.titleCont}>
            <div className={styles.titlePart}>
                <div className={styles.tags}>
                    <div className={styles.innerTag}>Best Seller</div>
                    <div className={styles.innerTag}>4.5 Star Rated</div>
                    <div onClick={handleShare} className={styles.shareLink}>Share Trip <IconList Icon="TRArrow"/></div>
                </div>
                <div className={styles.title}>
                    <h1>Andaman and Nicobar Family Tour Package</h1>
                </div>
                <div className={styles.infosec}>
                    <div className={styles.duration}>
                        <IconList Icon="DurationCalender" />
                        <span className={styles.lable}>Duration:</span>
                        <span className={styles.infoSecValue}>6 Nights and 7 Days</span>
                    </div>
                    <div className={styles.ptv}>
                        <IconList Icon="PTVMapSearch" />
                        <span className={styles.lable}>Place To Visit:</span>
                        <span className={styles.infoSecValue}>2N Port Blair | 2N Havelock | 2N Neil Island</span>
                    </div>
                </div>
            </div>
            <div className={styles.pricePart}>
                <div className={styles.saleTag}>
                    50% Off
                </div>
                <div className={styles.pricelabel1}>Starting From</div>
                <div className={styles.pricing}>
                    <h2 className={styles.bop}>₹25,000</h2>
                    <div className={styles.mrp}>
                        <div className={styles.cross}></div>
                        <span>₹50,000</span>
                    </div>
                </div>
                <div className={styles.pricelabel2}>/per person</div>
            </div>
        </div>
    )
}
