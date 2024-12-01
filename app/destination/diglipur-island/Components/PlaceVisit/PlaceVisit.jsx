import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Ross and Smith Islands:",
            image: "ross_smith_island.webp",
            desc: `These twin islands are connected by a natural sandbar, offering stunning views and clear blue waters perfect for swimming and snorkeling.`
        },
        {
            id: 2,
            title: "Saddle Peak National Park:",
            image: "saddle_peak_national_park.webp",
            desc: `Home to the highest peak in the Andamans, this park offers excellent trekking opportunities through dense forests, with breathtaking views from the summit.`
        },
        {
            id: 3,
            title: "Kalipur Beach:",
            image: "kalipur_beach.webp",
            desc: `Known for its turtle nesting grounds, Kalipur Beach is a great spot to witness the hatching of turtle eggs and explore vibrant coral reefs.`
        },
        {
            id: 4,
            title: "Alfred Caves:",
            image: "alfred_caves.webp",
            desc: `A network of 41 caves, Alfred Caves are a thrilling destination for adventure seekers. These caves are home to swiftlets and fruit bats, adding to the excitement of exploration.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Diglipur Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Diglipur Island boasts numerous attractions, each offering a unique experience:</p>
                </div>
                <div className={styles.placeList}>
                    {
                        placeList.map((item, index) => (
                            <div key={index} className={styles.placeCard}>
                                <span className={styles.placeTitle}>{`${index+1}. ${item.title}`}</span>
                                <div className={styles.placeImage}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/destination/diglipur_island/${item.image}`}
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
