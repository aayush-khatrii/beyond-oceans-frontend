import Link from 'next/link'
import FETIconList from '../../IconComponent/FETIconList'
import styles from './PackageCard.module.css'
import Image from 'next/image'


export default function PackageCard({data}) {
    const tagPriority = {
        1: {br: "C1E7DA", bg: "EBF7F3", tx: "38B089"},
        2: {br: "FFE6B3", bg: "FFF7E6", tx: "FFAD01"},
        3: {br: "B9BED3", bg: "E9EAF1", tx: "1E2C70"},
    }
    
    const packageTitleURLFormat = data.Package_Title.toLowerCase().replace(/\s+/g, '-');

    console.log(data)

    const boPrice = Intl.NumberFormat('en-IN').format(data.Price.BOP)
    const mrPrice = Intl.NumberFormat('en-IN').format(data.Price.MRP)

    return (
        <Link href={`/packages/${data.Tour_Type.URL_Value}/${packageTitleURLFormat}/${data.Package_Id}`} className={styles.mainWrapper}>
            <div className={styles.cardImgWrapper}>
                <Image
                    src={data.Img_Path[0]}
                    fill={true}
                    sizes='100%'
                    alt="Picture of the author"
                    priority
                    style={{objectFit:"cover"}}
                />
                <div className={styles.durationTag}>{data.Pack_Duration.Day}D/{data.Pack_Duration.Night}N</div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    <span>{data.Package_Title}</span>
                </div>
                <div className={styles.packFeatures}>
                    {
                        data.Featurs.map((item, index) => (
                            <div key={index} className={styles.featureCont}>
                                <FETIconList Icon={`${item}FET`}/>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.destinationCont} data-tooltip={data.Pack_Schedule.map((item) => `${item.Days}N ${item.Dest}`).join(' • ')}>
                    <div className={styles.destContainerWrapper}>
                        {
                            data.Pack_Schedule.map((item, index) => (
                                <div key={index} className={styles.destItemlist}>
                                    <span className={styles.days}>{`${item.Days}N`}</span>
                                    <span className={styles.dest}>{item.Dest}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.priceCont} style={{justifyContent: data.Tags.Card_Tag.Value ? "" : "flex-end"}}>
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
                <div className={styles.packPriceWrp}>
                    <div className={styles.prices}>
                        <div className={styles.mrp}>
                            <div className={styles.cross}></div>
                            <span>₹{mrPrice}</span>
                        </div>
                        <span className={styles.bop}>₹{boPrice}</span>
                    </div>
                    <div className={styles.priceQty}>
                        <span>/price per person</span>
                    </div>
                </div>
            </div>
        </Link>
  )
}
