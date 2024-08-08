import Image from "next/image";
import styles from './HomeCard.module.css'
import Link from "next/link";

export default function HomeCard({cardData, category}) {

  const pageSlug = cardData.Package_Title.toLowerCase().replace(/\s+/g, '-')
  const awsImageUrl = `https://beyond-oceans-2024.s3.ap-south-1.amazonaws.com/${category}/${cardData.Package_Id}/images/${cardData.Img_Path[0]}`
  function intPrice(price){
      return Intl.NumberFormat('en-IN').format(price)
  }

  return (
    <Link href={`/${category}/${cardData.Tour_Type.URL_Value}/${pageSlug}/${cardData.Package_Id}`} className={styles.cardWrapper}>
        <div className={styles.cardImage}>
            <Image
                src={awsImageUrl}
                fill={true}
                unoptimized
                sizes="100%"
                alt={cardData.Package_Title}
                style={{zIndex: "-1",objectFit:"cover"}}
            />
        </div>
        <div className={styles.cardContent}>
            <span>{cardData.Package_Title}</span>
            <span>Starting At ₹{intPrice(cardData.Price.BOP)}/per person</span>
        </div>
    </Link>
  )
}
