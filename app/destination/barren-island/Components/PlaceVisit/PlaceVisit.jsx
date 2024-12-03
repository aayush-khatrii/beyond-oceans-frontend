import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Manta Rays' Alley:",
            image: "amkunj_beach.webp",
            desc: `Known for spotting manta rays and reef sharks.`
        },
        {
            id: 2,
            title: "Lava Flow:",
            image: "cutbert_bay_beach.webp",
            desc: `Dive into waters near ancient solidified lava formations.`
        },
        {
            id: 3,
            title: "Coral Gardens:",
            image: "panchavati_hills.webp",
            desc: `Explore the thriving coral ecosystems around the island.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Barren Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>While you can't set foot on the island, the boat tours provide spectacular views. The volcanic crater is the primary attraction, and the surrounding waters are teeming with marine life. Popular dive sites near the island include:</p>
                </div>
                <div className={styles.placeList}>
                    {
                        placeList.map((item, index) => (
                            <div key={index} className={styles.placeCard}>
                                <span className={styles.placeTitle}>{`${index+1}. ${item.title}`}</span>
                                <div className={styles.placeImage}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/destination/long_island/${item.image}`}
                                            fill={true}
                                            sizes="100%"
                                            alt={item.title}
                                            style={{zIndex: "1",objectFit:"cover"}}
                                        />
                                    </div>
                                </div>
                                <div className={styles.placeDesc}>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
