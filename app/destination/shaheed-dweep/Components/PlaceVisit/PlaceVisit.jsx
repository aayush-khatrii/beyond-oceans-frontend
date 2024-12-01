import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Bharatpur Beach:",
            image: "bharatpur_beach.webp",
            desc: `Ideal for swimming and water sports, Bharatpur Beach is known for its shallow, crystal-clear waters and vibrant coral reefs.`
        },
        {
            id: 2,
            title: "Laxmanpur Beach:",
            image: "laxmanpur_beach.webp",
            desc: `Famous for its stunning sunsets and natural rock formations, Laxmanpur Beach offers a perfect setting for evening strolls and relaxation.`
        },
        {
            id: 3,
            title: "Sitapur Beach:",
            image: "sitapur_beach.webp",
            desc: `Known for its tranquil environment and scenic beauty, Sitapur Beach is a great spot for watching sunrises and enjoying peaceful moments by the sea.`
        },
        {
            id: 4,
            title: "Natural Bridge:",
            image: "natural_bridge.webp",
            desc: `Also known as Howrah Bridge, this natural rock formation is a popular tourist spot, especially during low tide when it is easily accessible.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Shaheed Dweep</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Neil Island is home to several captivating attractions, each offering a unique experience:</p>
                </div>
                <div className={styles.placeList}>
                    {
                        placeList.map((item, index) => (
                            <div key={index} className={styles.placeCard}>
                                <span className={styles.placeTitle}>{`${index+1}. ${item.title}`}</span>
                                <div className={styles.placeImage}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/destination/shaheed_dweep/${item.image}`}
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
