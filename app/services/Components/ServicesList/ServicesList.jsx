import Image from 'next/image'
import styles from './ServicesList.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'
import Link from 'next/link'

export default function ServicesList() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.islandLists}>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>1. Wedding Service</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/wedding_service.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Exchange vows amidst the breathtaking beauty of Andaman and Nicobar Islands with Beyond Oceans. Our expert team ensures every detail, from venue to decor, reflects your dream wedding. Say "I do" against azure waters and pristine beaches for an unforgettable experience. Let us tailor-make your special day, creating memories to last a lifetime. Trust Beyond Oceans to make your Andaman wedding truly magical.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/services">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>2. Photography Services</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/photography_service.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Capture the essence of your Andaman adventure with Beyond Oceans' professional photography services. Our skilled photographers immortalize your moments against stunning island backdrops. From romantic sunsets to underwater explorations, we ensure every image tells a story. Let us turn your Andaman memories into timeless treasures. Trust Beyond Oceans to frame your island memories perfectly.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/services">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>3. Cab Booking</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/cab_services.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Explore the wonders of Andaman and Nicobar Islands at your own pace with Beyond Oceans' cab booking. Our reliable fleet and experienced drivers ensure safe and comfortable travels. Our fleet of vehicles, driven by experienced local chauffeurs, ensures comfortable and safe travels as you navigate through the island's hidden gems. Let us be your trusted companion in island exploration. Trust Beyond Oceans for seamless island transportation.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/services">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>4. Personal Guide</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/personal_guide.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Uncover the secrets of Andaman and Nicobar Islands with Beyond Oceans' knowledgeable guides. Our local experts craft bespoke itineraries tailored to your interests. Also we help to discover the best-kept secrets and off-the-beaten-path treasures of this paradise. Dive deep into island culture and hidden treasures with insider insights. Let us turn your Andaman adventure into an unforgettable journey. Trust Beyond Oceans for personalized island exploration.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/services">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>5. Bike Rental</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/bike_rental.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Feel the freedom of the open road as you explore the picturesque landscapes of Andaman and Nicobar Islands with Beyond Oceans' bike rental services. Cruise along scenic routes, pause to soak in panoramic vistas, and embark on spontaneous adventures, all at your own pace and on two wheels.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/services">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>6. Tour Packages Booking</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/tour_package_booking.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Embark on a curated journey of discovery with Beyond Oceans' tour packages for Andaman and Nicobar Islands. From thrilling water sports to tranquil beach retreats, our meticulously crafted itineraries cater to every traveler's desires, ensuring a seamless and unforgettable island experience from start to finish.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/packages">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>7. Ferry Booking</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/ferry_booking.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Sail effortlessly between the captivating islands of Andaman and Nicobar with Beyond Oceans' hassle-free ferry booking services. Streamlined and reliable, our booking process ensures smooth transitions, allowing you to focus on embracing the natural beauty and serenity of this idyllic archipelago.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/book-ferry">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>8. Activities Booking</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/activities_booking.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>From exhilarating scuba dives to immersive rainforest treks, Beyond Oceans offers a diverse range of activities to elevate your Andaman and Nicobar experience. Let us ignite your sense of adventure as we guide you through thrilling experiences and unforgettable moments on these pristine and enchanting islands.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/activities">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
            <div className={styles.islandListCard}>
                <div className={styles.islandTitle}>
                    <span>9. Andaman and Nicobar Trip Budget Calculator</span>
                </div>
                <div className={styles.islandImage}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/assets/services/services/trip_calculater.webp"
                            fill={true}
                            sizes="100%"
                            priority={true}
                            style={{zIndex: "-1", objectFit:"cover"}}
                        />
                    </div>
                </div>
                <div className={styles.islandDesc}>
                    <p>Plan your dream getaway to Andaman and Nicobar Islands with ease using Beyond Oceans' trip budget calculator. With just a few clicks, estimate expenses for accommodation, activities, dining, and transportation, ensuring a memorable vacation that aligns perfectly with your desired budget and preferences.</p>
                </div>
                <div className={styles.islandBtn}><Link href="/services">Know More <IconList Icon="TRArrow" /></Link></div>
            </div>
        </div>
    </div>
  )
}
