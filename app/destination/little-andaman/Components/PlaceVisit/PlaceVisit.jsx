import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Butler Bay Beach:",
            image: "amkunj_beach.webp",
            desc: `Known for its clear blue waters and surfing opportunities, Butler Bay Beach is perfect for swimming, sunbathing, and surfing.`
        },
        {
            id: 2,
            title: "Whisper Wave Waterfall:",
            image: "cutbert_bay_beach.webp",
            desc: `A stunning waterfall located in the heart of the rainforest, Whisper Wave offers a refreshing retreat and opportunities for trekking.`
        },
        {
            id: 3,
            title: "White Surf Waterfall:",
            image: "panchavati_hills.webp",
            desc: `Another beautiful waterfall, White Surf is easily accessible and ideal for a day trip with family and friends.`
        },
        {
            id: 4,
            title: "Hut Bay:",
            image: "dhani_nallah_mangrove_walkway.webp",
            desc: `The island’s main town, Hut Bay, is the gateway to exploring Little Andaman. It offers basic amenities, local markets, and a glimpse into the island’s daily life.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Little Andaman</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Little Andaman Island offers a variety of attractions that cater to nature lovers and adventure seekers:</p>
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
