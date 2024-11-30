import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Radhanagar Beach:",
            image: "radhanagar_beach.webp",
            desc: `Frequently listed among the best beaches in Asia, Radhanagar Beach is famed for its soft white sand, crystal-clear waters, and mesmerizing sunsets.`
        },
        {
            id: 2,
            title: "Elephant Beach:",
            image: "elephant_beach.webp",
            desc: `A hotspot for snorkeling and water sports, Elephant Beach is known for its vibrant coral reefs and diverse marine life. It's accessible by boat or a short trek through the forest.`
        },
        {
            id: 3,
            title: "Vijaynagar Beach:",
            image: "vijaynagar_beach.webp",
            desc: `A tranquil and less crowded beach, Vijaynagar Beach is perfect for those seeking solitude and relaxation amid natural beauty.`
        },
        {
            id: 4,
            title: "Kalapathar Beach:",
            image: "kalapathar_beach.webp",
            desc: `Named after the black rocks (kalapathar) that line its shore, this beach offers a picturesque setting ideal for photography and peaceful walks.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Nestled in the heart of the Andaman Islands, Port Blair beckons travelers with its pristine beaches, lush greenery, and rich cultural heritage. As the capital city of the Andaman and Nicobar Islands, Port Blair offers a perfect blend of natural beauty and historical significance. If you're planning a trip to this tropical paradise, here are some must-visit places that will make your journey unforgettable:</p>
                </div>
                <div className={styles.placeList}>
                    {
                        placeList.map((item, index) => (
                            <div key={index} className={styles.placeCard}>
                                <span className={styles.placeTitle}>{`${index+1}. ${item.title}`}</span>
                                <div className={styles.placeImage}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/destination/swaraj_dweep/${item.image}`}
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
