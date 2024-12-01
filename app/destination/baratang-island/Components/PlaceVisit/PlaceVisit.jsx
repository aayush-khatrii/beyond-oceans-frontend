import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Limestone Caves:",
            image: "limestone_caves.webp",
            desc: `A visit to the limestone caves is a must. Accessible by a boat ride through dense mangroves and a short trek, these caves feature fascinating stalactite and stalagmite formations.`
        },
        {
            id: 2,
            title: "Mud Volcanoes:",
            image: "mud_volcanoes.webp",
            desc: `The mud volcanoes of Baratang are a rare natural phenomenon. These volcanoes occasionally spew mud and gases, creating a unique landscape worth witnessing.`
        },
        {
            id: 3,
            title: "Parrot Island:",
            image: "parrot_island.webp",
            desc: `This small island is famous for its evening spectacle, where thousands of parrots return to roost. It’s a paradise for bird watchers and nature enthusiasts.`
        },
        {
            id: 4,
            title: "Baludera Beach:",
            image: "baludera_beach.webp",
            desc: `A serene and less crowded beach, Baludera offers a tranquil environment ideal for relaxation and swimming.`
        }
    ]

    return (
        <div className={styles.mainWrapper} id='best-places-to-visit'>
            <div className={styles.titleCont}>
                <h3>The Best Places to Visit in Baratang Island</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.paragraph}>
                    <p>Baratang Island offers a variety of attractions that cater to adventurous spirits and nature lovers alike:</p>
                </div>
                <div className={styles.placeList}>
                    {
                        placeList.map((item, index) => (
                            <div key={index} className={styles.placeCard}>
                                <span className={styles.placeTitle}>{`${index+1}. ${item.title}`}</span>
                                <div className={styles.placeImage}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/destination/baratang_island/${item.image}`}
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
