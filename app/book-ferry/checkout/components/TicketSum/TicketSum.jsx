import { useEffect, useState } from 'react'
import styles from './TicketSum.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Image from 'next/image'

export default function PriceBreak({ferryData, sessionData, tatalAmountFunc, onDiscount, onContribution}) {

    console.log(ferryData)

    const ferryCheckout = sessionData && sessionData.Ferry_Checkout
    const [discount, setDiscount] = useState(false)
    const [discountCode, setDiscountCode] = useState(false)
    const [contro, setContro] = useState(false)
    const [controValue, setControValue] = useState(10)
    const [UTGSTValue, setUTGSTValue] = useState(9)
    const [CGSTValue, setCGSTValue] = useState(9)

    const ferryLogo = {
        MAK: "max_ferry_logo.webp",
        NTK: "ntk_ferry_logo.webp"
    }

    const ferryOprName = {
        MAK: "Makruzz",
        NTK: "Nautika"
    }

    const IslandCode = {
        1: "Port Blair",
        2: "Swaraj Dweep",
        3: "Shaheed Dweep"
    }

    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }

    function filterFerryClass(classId){
        return ferryData?.Classes.filter(obj => obj.ship_class_id === classId)[0]
    }

    function handleControNo(){
        setContro(false)
    }

    
    const travelDate = ferryCheckout.Ferry_Data.Travel_Date

    const dateOptions = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      };

    const travelDateString = new Date(travelDate).toLocaleDateString('en-US', dateOptions)

    const NTKClassString = 
    ferryCheckout.Ferry_Operator === "NTK"
      ? ferryCheckout.Ferry_Data.Selected_Seats.pClass.length > 0 &&
        ferryCheckout.Ferry_Data.Selected_Seats.bClass.length > 0
        ? "Luxury Class and Royal Class"
        : ferryCheckout.Ferry_Data.Selected_Seats.pClass.length > 0
        ? "Luxury Class"
        : ferryCheckout.Ferry_Data.Selected_Seats.bClass.length > 0
        ? "Royal Class"
        : ""
      : "";

    const ferryDeptCode = ferryCheckout.Ferry_Operator === "NTK" ? ferryData.dept_code : ferryCheckout.Ferry_Operator === "MAK" ? ferryData.source_location_id : ""
    const ferryDestCode = ferryCheckout.Ferry_Operator === "NTK" ? ferryData.dest_code : ferryCheckout.Ferry_Operator === "MAK" ? ferryData.destination_location_id : ""

    const totalPax = ferryCheckout?.Traveler.Adults + (ferryCheckout.Ferry_Operator === "NTK" ? ferryCheckout?.Traveler.Infants : 0)
    const infantPrice = ferryCheckout.Ferry_Operator === "NTK" && ferryCheckout?.Traveler.Infants > 0 ? ferryData.fares.infantFare : 0
    const selectedFerryClassData = ferryCheckout.Ferry_Operator === "MAK" ? ferryData?.Classes.filter(obj => obj.ship_class_id.toString() === ferryCheckout?.Ferry_Data.Class_Id)[0] : ""
    const perPersonPrice = parseInt(selectedFerryClassData.ship_class_price, 10)

    const NtkPClassPrice = ferryCheckout.Ferry_Operator === "NTK" && parseInt(ferryData.fares.pBaseFare, 10)
    const NtkBClassPrice = ferryCheckout.Ferry_Operator === "NTK" && parseInt(ferryData.fares.bBaseFare, 10)

    const portFees = ferryCheckout.Ferry_Operator === "MAK" ? selectedFerryClassData.psf : 50
    // const ferryPT_CGST = selectedFerryClassData.cgst_amount
    // const ferryPT_UTGST = selectedFerryClassData.ugst_amount
    // const subTotalValue = (perPersonPrice + portFees - ferryPT_CGST - ferryPT_UTGST) * totalPax + (contro ? controValue : 0)
    const makSubTotalValue = ferryCheckout.Ferry_Operator === "MAK" && (perPersonPrice + portFees) * totalPax + (contro ? controValue : 0)
    const ntkSubTotalValue = ferryCheckout.Ferry_Operator === "NTK" && (NtkPClassPrice * ferryCheckout.Ferry_Data.Selected_Seats.pClass.length) + (NtkBClassPrice * ferryCheckout.Ferry_Data.Selected_Seats.bClass.length) + (infantPrice * ferryCheckout.Traveler.Infants) + (totalPax * portFees) + (contro ? controValue : 0)

    const UTGST = (perPersonPrice * totalPax) * (UTGSTValue / 100)
    const CGST = (perPersonPrice * totalPax) * (CGSTValue / 100)

    const totalTax = UTGST + CGST

    const totalAmount = ferryCheckout.Ferry_Operator === "MAK" ? makSubTotalValue : ferryCheckout.Ferry_Operator === "NTK" ? ntkSubTotalValue : 0;


    function convertTo12HourFormat(timeString) {
        let [hours, minutes, seconds] = timeString.split(':');
        hours = parseInt(hours, 10);
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${ampm}`;
    }

    function parseTimeString(timeString) {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return new Date(0, 0, 0, hours, minutes, seconds);
    }
      
    function getTimeDifference(time1, time2) {
        const time1Date = parseTimeString(time1);
        const time2Date = parseTimeString(time2);
      
        const diffMilliseconds = time2Date - time1Date;
        const diffMinutes = Math.floor(diffMilliseconds / 1000 / 60);
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
      
        return `${minutes < 1 ? `${hours} hour` : `${hours}h`} ${minutes > 1 ? `${minutes}m` : ""}`;
    }

    useEffect(()=>{
        tatalAmountFunc(totalAmount)
    }, [totalAmount])

    useEffect(()=>{
        if(discount){
            onDiscount(discountCode)
        }
    }, [discount])

    useEffect(()=>{
        if(contro){
            onContribution(controValue)
        }
        if(!contro){
            onContribution(0)
        }
    }, [contro])

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>Ticket Summary</div>
        <div className={styles.mainContent}>
            <div className={styles.ferryDeatil}>
                <div className={styles.ferryRouteDeatil}>
                    <div className={styles.ferryDeatilTital}>
                        <div className={styles.ferryTitleLeft}>
                            <div className={styles.tripDate}><span>{travelDateString}</span></div>
                            <div className={styles.ferryClassTitle}><span>{`${ferryData.ship_title} ${ferryCheckout.Ferry_Operator === "MAK" ? `(${selectedFerryClassData.class_title} Class)` : ""} ${ferryCheckout.Ferry_Operator === "NTK" ? `(${NTKClassString})` : ""}`}</span></div>
                        </div>
                        <div className={styles.ferryTitleRight}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src={`/assets/ferry_logo/${ferryLogo[ferryCheckout.Ferry_Operator]}`}
                                    fill={true}
                                    sizes="100%"
                                    alt={`${ferryOprName[ferryCheckout.Ferry_Operator]}`}
                                    style={{objectFit:"contain"}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.ferryRouteList}>
                        <div className={styles.locConnectorLine}></div>
                        <div className={styles.ferryRouteFrom}>
                            <div className={styles.fromDotIco}></div>
                            <div className={styles.ferryRouteFromWrapper}>
                                <div className={styles.ferryFromTop}>
                                    <span className={styles.routeFromTime}>{`${convertTo12HourFormat(ferryCheckout.Ferry_Data.Departure_Time)} - `}</span>
                                    <span className={styles.routeFromLocation}>{IslandCode[ferryDeptCode]}</span>
                                </div>
                                <div className={styles.ferryFromBottom}>
                                    <div className={styles.routeDurationLable}><span>Total Trip Duration: </span></div>
                                    <div className={styles.routeDurationValue}><span>{getTimeDifference(ferryCheckout.Ferry_Data.Departure_Time, ferryCheckout.Ferry_Data.Arrival_Time)}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ferryRouteTo}>
                            <div className={styles.fromDotIco}></div>
                            <div className={styles.ferryToTop}>
                                <span className={styles.routeToTime}>{`${convertTo12HourFormat(ferryCheckout.Ferry_Data.Arrival_Time)} - `}</span>
                                <span className={styles.routeFromLocation}>{IslandCode[ferryDestCode]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ferryNote}><span>Your ferry tickets will be delivered to you right away.</span></div>
            <div className={styles.paxTypeList}>
                {
                    ferryCheckout.Ferry_Operator === "MAK" && 
                    <div className={styles.adultPaxWrapper}>
                        <div className={styles.adultContTitle}>Adults</div>
                        <div className={styles.adultContainer}>
                            <div className={styles.packagePrice}>
                                <div className={styles.ppriceLeft}>
                                    <span className={styles.ppriceLable}>Ticket Price</span>
                                    <span className={styles.packageOption}>{`${ferryData.ship_title} (${selectedFerryClassData.class_title} Class)`}</span>
                                </div>
                                <div className={styles.ppriceRight}>
                                    <span className={styles.ppriceValue}>₹{intPrice(perPersonPrice)}</span>
                                    <span className={styles.ppriceNote}>Per Adult</span>
                                </div>
                            </div>
                            <div className={styles.packagePrice}>
                                <div className={styles.ppriceLeft}>
                                    <span className={styles.ppriceLable}>Port Service Fee</span>
                                    {/* <span className={styles.packageOption}>({filterFerryClass(ferryCheckout?.Ferry_Data.Class_Id)?.class_title})</span> */}
                                </div>
                                <div className={styles.ppriceRight}>
                                    <span className={styles.ppriceValue}>₹{intPrice(portFees)}</span>
                                    <span className={styles.ppriceNote}>Per Person</span>
                                </div>
                            </div>
                            <div className={styles.traveler}>
                                <div className={styles.travelerLable}><span>Total Adults</span></div>
                                <div className={styles.travelerValue}><span>X {ferryCheckout?.Traveler.Adults}</span></div>
                            </div>
                        </div>
                    </div>
                }
                {
                    ferryCheckout.Ferry_Operator === "NTK" && ferryCheckout.Ferry_Data.Selected_Seats.pClass.length > 0 &&
                    <div className={styles.adultPaxWrapper}>
                        <div className={styles.adultContTitle}>Adults</div>
                        <div className={styles.adultContainer}>
                            <div className={styles.packagePrice}>
                                <div className={styles.ppriceLeft}>
                                    <span className={styles.ppriceLable}>Ticket Price</span>
                                    <span className={styles.packageOption}>{`${ferryData.ship_title} (Luxury Class)`}</span>
                                </div>
                                <div className={styles.ppriceRight}>
                                    <span className={styles.ppriceValue}>₹{intPrice(NtkPClassPrice)}</span>
                                    <span className={styles.ppriceNote}>Per Adult</span>
                                </div>
                            </div>
                            <div className={styles.packagePrice}>
                                <div className={styles.ppriceLeft}>
                                    <span className={styles.ppriceLable}>Port Service Fee</span>
                                    {/* <span className={styles.packageOption}>({filterFerryClass(ferryCheckout?.Ferry_Data.Class_Id)?.class_title})</span> */}
                                </div>
                                <div className={styles.ppriceRight}>
                                    <span className={styles.ppriceValue}>₹{intPrice(portFees)}</span>
                                    <span className={styles.ppriceNote}>Per Person</span>
                                </div>
                            </div>
                            <div className={styles.traveler}>
                                <div className={styles.travelerLable}><span>Total Adults</span></div>
                                <div className={styles.travelerValue}><span>X {ferryCheckout?.Ferry_Data.Selected_Seats.pClass.length}</span></div>
                            </div>
                        </div>
                    </div>
                }
                {
                    ferryCheckout.Ferry_Operator === "NTK" && ferryCheckout.Ferry_Data.Selected_Seats.bClass.length > 0 &&
                    <div className={styles.adultPaxWrapper}>
                        <div className={styles.adultContTitle}>Adults</div>
                        <div className={styles.adultContainer}>
                            <div className={styles.packagePrice}>
                                <div className={styles.ppriceLeft}>
                                    <span className={styles.ppriceLable}>Ticket Price</span>
                                    <span className={styles.packageOption}>{`${ferryData.ship_title} (Royal Class)`}</span>
                                </div>
                                <div className={styles.ppriceRight}>
                                    <span className={styles.ppriceValue}>₹{intPrice(NtkBClassPrice)}</span>
                                    <span className={styles.ppriceNote}>Per Adult</span>
                                </div>
                            </div>
                            <div className={styles.packagePrice}>
                                <div className={styles.ppriceLeft}>
                                    <span className={styles.ppriceLable}>Port Service Fee</span>
                                    {/* <span className={styles.packageOption}>({filterFerryClass(ferryCheckout?.Ferry_Data.Class_Id)?.class_title})</span> */}
                                </div>
                                <div className={styles.ppriceRight}>
                                    <span className={styles.ppriceValue}>₹{intPrice(portFees)}</span>
                                    <span className={styles.ppriceNote}>Per Person</span>
                                </div>
                            </div>
                            <div className={styles.traveler}>
                                <div className={styles.travelerLable}><span>Total Adults</span></div>
                                <div className={styles.travelerValue}><span>X {ferryCheckout?.Ferry_Data.Selected_Seats.bClass.length}</span></div>
                            </div>
                        </div>
                    </div>
                }
                {/* Infant Ticket Price */}
                {   
                    ferryCheckout?.Traveler.Infants > 0 &&
                    <div className={styles.infantPaxWrapper}>
                        <div className={styles.infantContTitle}>Infants</div>
                        <div className={styles.infantContainer}>
                        <div className={styles.packagePrice}>
                            <div className={styles.ppriceLeft}>
                                <span className={styles.ppriceLable}>Ticket Price</span>
                                {ferryCheckout.Ferry_Operator === "MAK" && <span className={styles.packageOption}>{`${ferryData.ship_title} (${selectedFerryClassData.class_title} Class)`}</span>}
                            </div>
                            <div className={styles.ppriceRight}>
                                <span className={styles.ppriceValue}>₹{intPrice(infantPrice)}</span>
                                <span className={styles.ppriceNote}>Per Infant</span>
                            </div>
                        </div>
                        <div className={styles.packagePrice}>
                            <div className={styles.ppriceLeft}>
                                <span className={styles.ppriceLable}>Port Service Fee</span>
                                {/* <span className={styles.packageOption}>({filterFerryClass(ferryCheckout?.Ferry_Data.Class_Id)?.class_title})</span> */}
                            </div>
                            <div className={styles.ppriceRight}>
                                <span className={styles.ppriceValue}>₹{intPrice(ferryCheckout.Ferry_Operator === "MAK" ? 0 : portFees)}</span>
                                <span className={styles.ppriceNote}>Per Person</span>
                            </div>
                        </div>
                        <div className={styles.traveler}>
                            <div className={styles.travelerLable}><span>Total Infants</span></div>
                            <div className={styles.travelerValue}><span>X {ferryCheckout?.Traveler.Infants}</span></div>
                        </div>
                        </div>
                    </div>
                }
            </div>
            {   discount &&
                <div className={styles.discount}>
                    <div className={styles.travelerLable}><span>Total Discount</span></div>
                    <div className={styles.travelerValue}><span>- {intPrice(0)}</span></div>
                </div>
            }
           { contro &&
            <div className={styles.contro}>
                <div className={styles.controTitle}>
                    <IconList Icon="Contribution" />
                    <span className={styles.controTitleText}>Contribution to Cleaner Ocean</span>
                    <span className={styles.controTitletc}>T&C.</span>
                </div>
                <div className={styles.controPrice}>
                    <span className={styles.controValue}>₹10</span>
                    <span className={styles.controIDW} onClick={() => {handleControNo()}}>I don't want</span>
                </div>
            </div>}
            <div className={styles.sepretro}></div>
            <div className={styles.subTotal}>
                <div className={styles.totlaLable}><span>Sub Total</span></div>
                <div className={styles.totalValue}><span>₹ {ferryCheckout.Ferry_Operator === "MAK" ? intPrice(makSubTotalValue) : ""} {ferryCheckout.Ferry_Operator === "NTK" ? intPrice(ntkSubTotalValue) : ""}</span></div>
            </div>
            {/* <div className={styles.sepretro}></div> */}
            {/* <div className={styles.taxsComp}>
                <div className={styles.taxTitleComp}>
                    <div className={styles.taxLable}><span>Taxes and Fees</span></div>
                    <div className={styles.taxValue}><span>₹ {intPrice(totalTax)}</span></div>
                </div>
                <div className={styles.utGstBrackDown}>
                    <div className={styles.utGstLable}><span>UTGST @ 9%</span></div>
                    <div className={styles.utGstValue}><span>₹ {intPrice(UTGST)}</span></div>
                </div>
                <div className={styles.cgstBrackDown}>
                    <div className={styles.cgstLable}><span>CGST @ 9%</span></div>
                    <div className={styles.cgstValue}><span>₹ {intPrice(CGST)}</span></div>
                </div>
            </div>
            <div className={styles.taxNote}>*All taxes and fees are collected by the ferry operator</div> */}
        </div>
        <div className={styles.sepretro}></div>
        <div className={styles.totalAmt}>
            <div className={styles.totalAmtLable}><span>Total Amount Due</span></div>
            <div className={styles.totalAmtValue}><span>₹ {intPrice(totalAmount)}</span></div>
        </div>
    </div>
  )
}
