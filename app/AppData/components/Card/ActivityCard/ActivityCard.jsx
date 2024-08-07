import Link from 'next/link'
import FETIconList from '../../IconComponent/FETIconList'
import styles from './ActivityCard.module.css'
import Image from 'next/image'


export default function ActivityCard({data}) {

    const tagPriority = {
        1: {br: "A3DBC9", bg: "38B089", tx: "ffffff"},
        2: {br: "FFDE99", bg: "FFAD01", tx: "ffffff"},
        3: {br: "989EBD", bg: "1E2C70", tx: "ffffff"},
    }

    const activityIconListMap = {
        "Duration": "DurationClock",
        "Place": "Place",
        "Person": "Person",
        "Basic Training": "BasicTraining",
        "Scuba Diving": "ScubaDiving",
        "Personal Guide": "PersonalGuide",
        "Equipments": "Equipments",
        "Photoshoot": "Photoshoot",
        "Safety Guarantee": "SafetyGuarantee",
        "All Includes": "AllIncludes"
    }
    
    const activityTitleURLFormat = data.Activity_Title.toLowerCase().replace(/\s+/g, '-');

    function convertMinutes(minutes) {
        if (minutes >= 60) {
            
            const hours = Math.floor(minutes / 60);
            if(minutes === 60){
                return `${hours} hour`;
            }
            const remainingMinutes = minutes % 60;
            return `${hours}:${remainingMinutes.toString().padStart(2, '0')} hours`;
        } else {
            return `${minutes} minutes`;
        }
      }

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    const imgURL = `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/activities/${data.Activity_Id}/images/${data.Img_Path[0]}`

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.cardImgWrapper}>
                <Image
                    src={imgURL}
                    fill={true}
                    sizes='100%'
                    alt={data.Activity_Title}
                    priority
                    style={{objectFit:"cover"}}
                />
                {   
                    data.Tags.Card_Tag.Value && 
                    <div style={{
                        borderColor: `#${(tagPriority[data.Tags.Card_Tag.Priority]).br}`, 
                        color: `#${(tagPriority[data.Tags.Card_Tag.Priority]).tx}`, 
                        backgroundColor: `#${(tagPriority[data.Tags.Card_Tag.Priority]).bg}`
                    }} 
                    className={styles.cardTag}>
                        <span>{data.Tags.Card_Tag.Value}</span>
                    </div>
                }
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    <span>{data.Activity_Title}</span>
                </div>
                <div className={styles.activityFeatures}>
                    <div className={styles.featureList}>
                        <FETIconList Icon="DurationClock"/>
                        <div className={styles.featureText}>
                            <span>Time:</span>
                            <span>{convertMinutes(120)}</span>
                        </div>
                    </div>
                    <div className={styles.featureList}>
                        <FETIconList Icon="Place"/>
                        <div className={styles.featureText}>
                            <span>Place:</span>
                            <span>{data.Activity_Place}</span>
                        </div>
                    </div>
                    <div className={styles.featureList}>
                        <FETIconList Icon="Person"/>
                        <div className={styles.featureText}>
                            <span>Age:</span>
                            <span>{`${data.Activity_Age.Min_Age}-${data.Activity_Age.Max_Age} Yrs`}</span>
                        </div>
                    </div>
                    <div className={styles.featureList}>
                        <FETIconList Icon="AllIncludes"/>
                        <div className={styles.featureText}>
                            <span>Incl.:</span>
                            <span>{data.Activity_INC}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.priceCont}>
                <div className={styles.packPriceWrp}>
                    <div className={styles.prices}>
                        <span className={styles.bop}>₹{intPrice(data.Price.BOP)}</span>
                        <div className={styles.mrp}>
                            <div className={styles.cross}></div>
                            <span>₹{intPrice(data.Price.MRP)}</span>
                        </div>
                    </div>
                    <div className={styles.priceQty}>
                        <span>/price per person</span>
                    </div>
                </div>
                <Link href={`/activities/${data.Activity_Type.URL_Value}/${activityTitleURLFormat}/${data.Activity_Id}`} className={styles.BookBtn}>Book Now</Link>
            </div>
        </div>
  )
}
