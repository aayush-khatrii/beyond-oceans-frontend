import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Lalaji Bay Beach:",
            image: "amkunj_beach.webp",
            desc: `Known for its crystal-clear waters and white sandy shores, Lalaji Bay Beach is perfect for swimming, sunbathing, and snorkeling.`
        },
        {
            id: 2,
            title: "Merk Bay Beach:",
            image: "cutbert_bay_beach.webp",
            desc: `Located on North Passage Island, accessible by boat, Merk Bay Beach offers serene surroundings and excellent opportunities for snorkeling and exploring marine life.`
        },
        {
            id: 3,
            title: "Guitar Island:",
            image: "panchavati_hills.webp",
            desc: `This small, uninhabited island, shaped like a guitar, is a great spot for day trips, picnics, and enjoying the untouched beauty of nature.`
        },
        {
            id: 4,
            title: "Forest Trails:",
            image: "dhani_nallah_mangrove_walkway.webp",
            desc: `Explore the lush forests of Long Island through various nature trails, perfect for bird watching and experiencing the island’s rich biodiversity.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Long Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Long Island offers a variety of attractions that cater to those seeking tranquility and natural beauty:</p>
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
