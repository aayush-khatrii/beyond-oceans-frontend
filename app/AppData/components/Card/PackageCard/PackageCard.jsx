import IconList from '../../IconComponent/IconList'
import styles from './PackageCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PackageCard({featuresList, destDuration, title}) {
    const router = useRouter()
    function handlePackageClick(){
        router.push('/packages/family-packages/andaman-nicobar-island')
    }
    return (
        <div onClick={handlePackageClick} className={styles.mainWrapper}>
            <div className={styles.cardImgWrapper}>
                <Image
                    src="/assets/singlepro1.jpg"
                    fill={true}
                    sizes='100%'
                    alt="Picture of the author"
                    style={{objectFit:"cover"}}
                />
                <div className={styles.durationTag}>6D/5N</div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    <span>{title}</span>
                </div>
                <div className={styles.packFeatures}>
                    {
                        featuresList.map((item, index) => (
                            <div key={index} className={styles.featureCont}>
                                <IconList Icon={`${item}FET`}/>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.destinationCont} data-tooltip={destDuration.map((item) => `${item.Days}N ${item.Dest}`).join(' • ')}>
                    <div className={styles.destContainerWrapper}>
                        {
                            destDuration.map((item, index) => (
                                <div key={index} className={styles.destItemlist}>
                                    <span className={styles.days}>{`${item.Days}N`}</span>
                                    <span className={styles.dest}>{item.Dest}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.priceCont}>
                <div className={styles.cardTag}>
                    <span>Recommended</span>
                </div>
                <div className={styles.packPriceWrp}>
                    <div className={styles.prices}>
                        <div className={styles.mrp}>
                            <div className={styles.cross}></div>
                            <span>₹28,500</span>
                        </div>
                        <span className={styles.bop}>₹25,000</span>
                    </div>
                    <div className={styles.priceQty}>
                        <span>/price per person</span>
                    </div>
                </div>
            </div>
        </div>
  )
}
