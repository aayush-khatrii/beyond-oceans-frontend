import Image from 'next/image'
import styles from './IslandList.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Link from 'next/link'

export default function IslandList() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.islandLists}>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>1. Port Blair Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/sri_vijaya_puram_island.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Port Blair, the capital of the Andaman and Nicobar Islands, is a vibrant blend of history, culture, and natural beauty. Visit the Cellular Jail National Memorial to delve into the region's colonial past and pay homage to India's freedom fighters. Enjoy panoramic views of the Andaman Sea from Corbyn's Cove Beach or take a stroll through the lush greenery of Mount Harriet National Park. Don't miss the chance to explore the bustling Aberdeen Bazaar for local souvenirs and delicious street food.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/sri-vijaya-puram">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>2. Havelock (Swaraj Dweep) Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/swaraj_dweep.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover", objectPosition: "100% 30%"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Renowned for its pristine beaches and crystal-clear waters, Havelock Island is a paradise for beach lovers and adventure seekers alike. Spend your days lounging on the white sands of Radhanagar Beach, often hailed as one of Asia's best beaches, or embark on thrilling water activities such as scuba diving and snorkeling to discover the vibrant marine life of the Andaman Sea. Trek through the dense forests of Havelock to reach Elephant Beach, where you can enjoy snorkeling amidst colorful coral reefs.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/swaraj-dweep">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>3. Shaheed Dweep (Neil Island)</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/shaheed_dweep.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Escape to the tranquil shores of Neil Island, a serene oasis known for its laid-back vibe and unspoiled beauty. Relax on the secluded beaches of Bharatpur and Laxmanpur, where the gentle waves and swaying palms create a picture-perfect setting. Marvel at the natural rock formations of Howrah Bridge during low tide or take a refreshing dip in the emerald waters of natural rock pools at Sitapur Beach. Neil Island offers the perfect retreat for those seeking solitude and natural splendor.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/shaheed-dweep">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>4. Baratang Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/baratang_island.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Baratang Island beckons adventurers with its untamed wilderness and unique attractions. Journey through dense mangrove forests and limestone caves to reach the iconic limestone formations of the Mud Volcano and the enchanting limestone caves of Parrot Island. Discover the indigenous Jarawa tribe's way of life on a guided excursion through the tribal reserve or cruise along the serene waters of the Baratang Creek amidst towering mangroves and abundant birdlife.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/baratang-island">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>5. Diglipur Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/diglipur_island.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Located in the northern part of the Andaman Islands, Diglipur offers a refreshing escape from the crowds with its lush landscapes and hidden treasures. Trek through the verdant forests of Saddle Peak National Park, the highest point in the Andaman Islands, for panoramic views of the surrounding islands and shimmering seas. Explore the twin beaches of Ross and Smith Islands, connected by a mesmerizing sandbar, or visit the serene waters of Kalipur Beach, known for its turtle nesting grounds.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/diglipur-island">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>6. Rangat Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/rangat_island.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Immerse yourself in the untouched beauty of Rangat Island, a haven for nature lovers and eco-tourists. Wander through the pristine shores of Amkunj Beach and Dhani Nallah Beach, where the azure waters meet verdant mangrove forests teeming with wildlife. Embark on a boat ride along the mangrove-lined creeks of Yerrata Mangrove Park or hike to the secluded waterfalls of Panchavati amidst dense tropical foliage. Rangat Island offers a glimpse into the Andaman's unspoiled wilderness.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/rangat-island">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>7. Long Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/long_island.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Long Island entices travelers with its secluded beaches, dense forests, and captivating marine life. Spend your days snorkeling in the vibrant coral reefs of Lalaji Bay or bask in the sun on the pristine sands of Merk Bay Beach. Explore the island's rich biodiversity on a trek through the lush rainforests of Long Island Wildlife Sanctuary, home to a variety of endemic flora and fauna. Experience the serenity of island life as you unwind in this remote paradise.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination/long-island">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>8. Little Andaman</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/little_andaman.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Little Andaman is a hidden gem waiting to be discovered, boasting expansive beaches, lush forests, and thrilling adventure opportunities. Surfing enthusiasts flock to the renowned surf breaks of Butler Bay and Whisper Wave Beach, while nature lovers can explore the verdant jungles of the island on treks to White Surf Waterfall and the charming lighthouse at the southern tip. Relax amidst the natural beauty of Netaji Nagar Beach or embark on a fishing excursion to reel in the day's catch.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>9. Barren Island</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/destination/island/barren_island.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Barren Island, an uninhabited volcanic island, offers a glimpse into the raw power of nature with its rugged landscapes and dramatic volcanic activity. Cruise around the island to witness the world's only active volcano in the Andaman Sea, emitting plumes of smoke and lava, creating a surreal backdrop against the azure sky. Dive into the crystalline waters surrounding Barren Island to explore vibrant coral reefs teeming with marine life, including manta rays, sharks, and exotic fish species.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/destination">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
        </div>
    </div>
  )
}
