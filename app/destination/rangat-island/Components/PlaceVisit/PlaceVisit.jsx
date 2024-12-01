import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Amkunj Beach:",
            image: "amkunj_beach.webp",
            desc: `Known for its tranquil ambiance and clear waters, Amkunj Beach is perfect for swimming, sunbathing, and relaxing.`
        },
        {
            id: 2,
            title: "Cutbert Bay Beach:",
            image: "cutbert_bay_beach.webp",
            desc: `This beach is famous for turtle nesting, particularly between December and February, offering a unique wildlife experience.`
        },
        {
            id: 3,
            title: "Panchavati Hills:",
            image: "panchavati_hills.webp",
            desc: `Ideal for nature walks and trekking, Panchavati Hills are home to beautiful waterfalls and lush greenery.`
        },
        {
            id: 4,
            title: "Dhani Nallah Mangrove Walkway:",
            image: "dhani_nallah_mangrove_walkway.webp",
            desc: `A unique walkway through dense mangroves leading to a pristine beach, offering opportunities to spot various bird species and marine life.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Rangat Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Rangat Island offers a variety of attractions that cater to nature lovers and adventure seekers:</p>
                </div>
                <div className={styles.placeList}>
                    {
                        placeList.map((item, index) => (
                            <div key={index} className={styles.placeCard}>
                                <span className={styles.placeTitle}>{`${index+1}. ${item.title}`}</span>
                                <div className={styles.placeImage}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/destination/rangat_island/${item.image}`}
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
