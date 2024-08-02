"use client"
import styles from './TitleContainer.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function TitleContainer({data, params}) {

    const tagPriority = {
        1: {br: "C1E7DA", bg: "EBF7F3", tx: "38B089"},
        2: {br: "FFE6B3", bg: "FFF7E6", tx: "FFAD01"},
        3: {br: "B9BED3", bg: "E9EAF1", tx: "1E2C70"},
    }

    function handleShare(){
        if(navigator.share){
            navigator.share({
                title: params.packageSlug,
                url:`http://localhost:3000/packages/${data.Tour_Type.URL_Value}/${params.packageSlug}/${data.Package_Id}`
            })
        }else{
            alert("web sharing not supported")
        }
    }

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    const discountPercent = Math.floor((data.Price.BOP * 100) / data.Price.MRP)

    return (
        <div className={styles.titleCont}>
            <div className={styles.titlePart}>
                <div className={styles.tags}>
                    <div className={styles.innerTag}>{data.Tour_Type.Value}</div>
                    <div style={{
                        borderColor: `#${(tagPriority[data.Tags.Card_Tag.Priority]).br}`, 
                        color: `#${(tagPriority[data.Tags.Card_Tag.Priority]).tx}`, 
                        backgroundColor: `#${(tagPriority[data.Tags.Card_Tag.Priority]).bg}`
                    }} 
                    className={styles.innerTag}>
                        <span>{data.Tags.Card_Tag.Value}</span>
                    </div>
                    {
                        data.Tags.Pack_Tag.map((item, index) => (
                            <div key={index} className={styles.innerTag}>{item}</div>
                        ))
                    }
                    <div onClick={handleShare} className={styles.shareLink}>Share Trip <IconList Icon="TRArrow"/></div>
                </div>
                <div className={styles.title}>
                    <h1>{data.Package_Title}</h1>
                </div>
                <div className={styles.infosec}>
                    <div className={styles.duration}>
                        <IconList Icon="DurationCalender" />
                        <span className={styles.lable}>Duration:</span>
                        <span className={styles.infoSecValue}>{data.Pack_Duration.Night} Nights and {data.Pack_Duration.Day} Days</span>
                    </div>
                    <div className={styles.ptv}>
                        <IconList Icon="PTVMapSearch" />
                        <span className={styles.lable}>Place To Visit:</span>
                        <div className={styles.infoSecValue}>
                        {
                                data.Pack_Schedule.map((item, index)=>(
                                    <div key={index} className={styles.scheduleList}>
                                        <span className={styles.scheduleDay}>{item.Days}N&nbsp;</span>
                                        <span className={styles.scheduleDest}>{item.Dest}</span>
                                        <div className={styles.scheduleSep}>&nbsp;|&nbsp;</div>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pricePart}>
                <div className={styles.saleTag}>
                    {discountPercent}% Off
                </div>
                <div className={styles.pricelabel1}>Starting From</div>
                <div className={styles.pricing}>
                    <h2 className={styles.bop}>₹{intPrice(data.Price.BOP)}</h2>
                    <div className={styles.mrp}>
                        <div className={styles.cross}></div>
                        <span>₹{intPrice(data.Price.MRP)}</span>
                    </div>
                </div>
                <div className={styles.pricelabel2}>/per person</div>
            </div>
        </div>
    )
}
