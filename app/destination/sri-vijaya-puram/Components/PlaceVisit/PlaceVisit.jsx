import Image from 'next/image'
import styles from './PlaceVisit.module.css'

export default function PlaceVisit() {

    const placeList = [
        {
            id: 1,
            title: "Cellular Jail National Memorial:",
            image: "cellular_jail.webp",
            desc: `Begin your exploration of Port Blair with a visit to the Cellular Jail National Memorial, also known as "Kala Pani." This infamous colonial-era prison serves as a poignant reminder of India's struggle for independence. Explore the museum inside to learn about the harrowing experiences of freedom fighters imprisoned here during British rule.`
        },
        {
            id: 2,
            title: "Corbyn's Cove Beach:",
            image: "corbyns_cove_beach.webp",
            desc: `For a relaxing day by the sea, head to Corbyn's Cove Beach, just a short drive from the city center. With its soft golden sands and clear blue waters, this beach offers the perfect setting for sunbathing, swimming, and water sports such as jet skiing and banana boat rides.`
        },
        {
            id: 3,
            title: "Ross Island:",
            image: "ross_island.webp",
            desc: `Take a short ferry ride from Port Blair to Ross Island, once the administrative headquarters of the British in the Andaman Islands. Today, it stands as a ghostly reminder of its colonial past, with overgrown ruins and wandering deer. Explore the historic buildings, including the British Commissioner's residence and the old church, amidst lush greenery and panoramic views of sea.`
        },
        {
            id: 4,
            title: "North Bay Island:",
            image: "north_bay_island.webp",
            desc: `Adventure enthusiasts shouldn't miss a trip to North Bay Island, famous for its vibrant coral reefs and diverse marine life. Embark on a snorkeling or scuba diving excursion to discover the underwater wonders of the Andaman Sea, including colorful coral gardens, exotic fish species, and even sightings of sea turtles and rays.`
        },
        {
            id: 5,
            title: "Chidiya Tapu:",
            image: "chidiya_tapu.webp",
            desc: `Nature lovers will be enchanted by the scenic beauty of Chidiya Tapu, also known as "Bird Island." This tranquil paradise is renowned for its stunning sunsets, lush mangrove forests, and diverse birdlife. Take a leisurely stroll along the nature trails, go birdwatching, or simply relax and soak in the serenity of this idyllic retreat.`
        },
        {
            id: 6,
            title: "Anthropological Museum:",
            image: "anthropological_museum.webp",
            desc: `Gain insight into the indigenous cultures of the Andaman and Nicobar Islands at the Anthropological Museum in Port Blair. Explore fascinating exhibits showcasing the traditional lifestyles, crafts, and rituals of the region's indigenous tribes, including the Jarawas, Sentinelese, and Great Andamanese.`
        },
        {
            id: 7,
            title: "Samudrika Marine Museum:",
            image: "samudrika_marine_museum.webp",
            desc: `Delve into the marine biodiversity of the Andaman Islands at the Samudrika Marine Museum, operated by the Indian Navy. Discover a wealth of exhibits featuring rare coral specimens, endemic fish species, and informative displays on the ecology and conservation of the Andaman Sea.`
        },
        {
            id: 8,
            title: "Mahatma Gandhi Marine National Park:",
            image: "mahatma_gandhi_marine_national_park.webp",
            desc: `Embark on a boat tour to the Mahatma Gandhi Marine National Park, located near Wandoor Beach, to explore its stunning coral reefs and pristine islands. Snorkel or dive among the colorful coral gardens of Jolly Buoy and Red Skin Islands, teeming with a dazzling array of marine life, including clownfish, parrotfish, and butterflyfish.`
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
                                            src={`/assets/destination/sri_vijaya_puram/${item.image}`}
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
