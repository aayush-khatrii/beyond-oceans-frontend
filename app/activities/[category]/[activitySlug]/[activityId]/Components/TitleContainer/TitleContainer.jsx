"use client"
import styles from './TitleContainer.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function TitleContainer({data}) {

    const tagPriority = {
        1: {br: "C1E7DA", bg: "EBF7F3", tx: "38B089"},
        2: {br: "FFE6B3", bg: "FFF7E6", tx: "FFAD01"},
        3: {br: "B9BED3", bg: "E9EAF1", tx: "1E2C70"},
    }

    function handleShare(){

        const packageTitleURLFormat = data.Package_Title.toLowerCase().replace(/\s+/g, '-');
        if(navigator.share){
            navigator.share({
                title: data.Package_Title,
                text: `Explore beyond oceans ${data.Tour_Type.Value} category's : ${data.Package_Title}`,
                url:`https://www.beyondoceans.in/packages/${data.Tour_Type.URL_Value}/${packageTitleURLFormat}/${data.Package_Id}`
            })
        }else{
            alert("web sharing not supported")
        }
    }

    function convertMinutes(minutes) {
        if (minutes >= 60) {
            
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            if(remainingMinutes === 0){
                return `${hours} Hour${hours>1 ? "s" : ""}`;
            }
            return `${hours} Hour${hours>1 ? "s" : ""} & ${remainingMinutes.toString()} Minutes`;
        } else {
            return `${minutes} Minutes`;
        }

      }

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    const increaseAmount = data.Price.MRP - data.Price.BOP;
    const discountPercent = Math.floor((increaseAmount / data.Price.BOP) * 100);

    return (
        <div className={styles.titleCont}>
            <div className={styles.titlePart}>
                <div className={styles.tags}>
                    <div className={styles.innerTag}>{data.Activity_Type.Value}</div>
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
                    <div onClick={handleShare} className={styles.shareLink}>Share Activity <IconList Icon="TRArrow"/></div>
                </div>
                <div className={styles.title}>
                    <h1>{data.Activity_Title}</h1>
                </div>
                <div className={styles.infosec}>
                    <div className={styles.duration}>
                        <IconList Icon="DurationCalender" />
                        <span className={styles.lable}>Duration:</span>
                        <span className={styles.infoSecValue}>{convertMinutes(data.Activity_Duration)}</span>
                    </div>
                    <div className={styles.ptv}>
                        <IconList Icon="PTVMapSearch" />
                        <span className={styles.lable}>Place:</span>
                        <span className={styles.infoSecValue}>{data.Activity_Place}</span>
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
