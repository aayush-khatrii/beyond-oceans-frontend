import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './Hotels.module.css'
import Image from 'next/image'
import FETIconList from '@/app/AppData/components/IconComponent/FETIconList'
import { getHotelsData } from '@/app/AppData/http/packages'
import { useState, useEffect } from 'react'
import HotelCardScl from './HotelCardScl/HotelCardScl'

export default function Hotels({selectedOption, pacakgeOptions}) {
    const [ hotelLoading, setHotelLoading ] = useState(true)
    const [ hotelsData, setHotelsData ] = useState()
    const [ selectedHotel, setSelectedHotel ] = useState()

    const selectedOptionObj = pacakgeOptions.filter(option => option.Option_Id === selectedOption)[0]
    const hotelIds = selectedOptionObj.Option_Stay.map(obj => obj.Hotel_Id)
    
    async function getHotelData(){
        setHotelLoading(true)
        const {data} = await getHotelsData({hotelIds})
        setHotelsData(data.data)
        setHotelLoading(false)
        const selectedHotel = selectedOptionObj.Option_Stay.map(item1 => {
            const item2 = data && data.data.find(item => item.Hotel_Id === item1.Hotel_Id);
            return item2 ? { ...item1, ...item2 } : item1;
        });
        setSelectedHotel(selectedHotel)
    }

    useEffect(()=>{
        getHotelData()
    }, [selectedOption])


    function getRoomType(hotelId){
        return selectedHotel.filter(option => option.Hotel_Id === hotelId)[0].Room_Type
    }

    function getStayDuration(hotelId){
        return selectedHotel.filter(option => option.Hotel_Id === hotelId)[0].Stay_Duration
    }

    function getMealPlan(hotelId){
        return selectedHotel.filter(option => option.Hotel_Id === hotelId)[0].Hotel_Meal_Plan
    }

    function getHotelImageUrl(hotelId, imgSrc){
        return `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/hotels/${hotelId}/${imgSrc}`
    }

    return (
    <div className={styles.mainWrapper}>
        <div className={styles.title}>
            <span>Hotel or Resorts Stay</span>
        </div>
        <div className={styles.HotelContent}>
            {
                hotelsData && !hotelLoading ?
                hotelsData.map((hotel, index) => (
                    <div key={index} className={styles.hotelList}>
                        <div className={styles.hotelInfoCont}>
                            <div className={styles.hotelIcon}><IconList Icon={`${hotel.Stay_Type}Stay`}/></div>
                            <div className={styles.hotelInfo}>
                                <div className={styles.hotelTitle}><span>{hotel.Hotel_Name}</span></div>
                                <div className={styles.hotelDetail}>
                                    <div className={styles.LocationList}>
                                        <IconList Icon="StayLocation"/>
                                        <span>{hotel.Hotel_Destination}</span>
                                    </div>
                                    <div className={styles.RatingList}>
                                        <IconList Icon="StayRating"/>
                                        <span>{getRoomType(hotel.Hotel_Id)}</span>
                                    </div>
                                    <div className={styles.DurationList}>
                                        <IconList Icon="StayDuration"/>
                                        <span>Day {getStayDuration(hotel.Hotel_Id)}</span>
                                    </div>
                                    {   getMealPlan(hotel.Hotel_Id) !== "N/A" &&
                                        <div className={styles.MealPlanList}>
                                            <FETIconList Icon="MealsFET"/>
                                            <span>{getMealPlan(hotel.Hotel_Id)}</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.hotelImages}>
                            {
                                hotel.Hotel_Images.map((item, index) => (
                                    <div key={index} className={styles.imageList}>
                                        <div className={styles.HotelImageWrap}>
                                            <Image
                                                src={getHotelImageUrl(hotel.Hotel_Id, item)}
                                                fill={true}
                                                sizes="100%"
                                                alt="Hotel Image"
                                                style={{objectFit:"cover"}}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )) : <HotelCardScl />
            }
        </div>
    </div>
  )
}
