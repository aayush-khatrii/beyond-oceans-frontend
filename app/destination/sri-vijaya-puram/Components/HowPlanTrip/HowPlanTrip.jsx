import styles from './HowPlanTrip.module.css'

export default function HowPlanTrip() {

    const stepsList = [
        {
            id: 1,
            title: "Research and Itinerary Planning",
            desc: `Before setting off on your journey, delve into Port Blair's attractions, activities, climate, and local customs. Create a tentative itinerary outlining the places you wish to visit and the experiences you desire. Beyond Oceans offers personalized assistance in crafting your itinerary, ensuring that you don't miss out on any must-see attractions.`
        },
        {
            id: 2,
            title: "Booking Flights and Accommodation",
            desc: `With Beyond Oceans, booking flights to Port Blair is a breeze. Our user-friendly platform allows you to find the best deals and flexible options tailored to your preferences. Choose from a wide range of accommodation options, including hotels, resorts, and guesthouses, all conveniently listed on our website. Benefit from exclusive discounts and special offers when you book your flights and accommodation with Beyond Oceans.`
        },
        {
            id: 3,
            title: "Obtaining Permits and Documents",
            desc: `Navigating the permit requirements for visiting restricted areas in Port Blair can be daunting. Let Beyond Oceans handle the logistics for you. Our experienced team will assist Indian nationals in obtaining the necessary permits and guide foreign nationals through the process of acquiring Restricted Area Permits (RAP) or Protected Area Permits (PAP).`
        },
        {
            id: 4,
            title: "Packing Essentials",
            desc: `Pack your bags with confidence, knowing that Beyond Oceans has your back. Our comprehensive packing checklist ensures that you don't overlook any essentials, from sunscreen and insect repellent to swimwear and snorkeling gear. Travel light and hassle-free with our expert recommendations.`
        },
        {
            id: 5,
            title: "Transportation and Getting Around",
            desc: `Upon arrival in Port Blair, rely on Beyond Oceans for seamless transportation arrangements. Whether you prefer a private cab, rental car, or scooter, we've got you covered. Explore the island at your own pace with our hassle-free rental services. Additionally, take advantage of our guided tours and excursions to discover hidden gems and off-the-beaten-path destinations.`
        },
        {
            id: 6,
            title: "Embrace the Local Cuisine and Culture",
            desc: `Immerse yourself in the vibrant culture and culinary delights of Port Blair with Beyond Oceans. Indulge in authentic seafood delicacies and local specialties recommended by our knowledgeable staff. Respect local customs and traditions while engaging with the friendly locals, and enhance your travel experience with insider tips and recommendations.`
        },
        {
            id: 7,
            title: "Enjoy Outdoor Activities and Excursions",
            desc: `Experience the thrill of outdoor adventures and water activities with Beyond Oceans. From snorkeling and scuba diving to kayaking and trekking, we offer a plethora of exhilarating experiences to suit every traveler's interests. Book your activities in advance through our platform to secure your spot and make the most of your time in Port Blair.`
        },
    ]

    return (
        <div className={styles.mainWrapper} id='how-to-plan-trip'>
            <div className={styles.titleCont}>
                <h3>How to Plan a Trip to Port Blair</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.stepsList}>
                    {
                        stepsList.map((item, index) => (
                            <div className={styles.stepWrapper}>
                                <div className={styles.stepTitle}>
                                    <h4>{`Step ${index + 1}: ${item.title}`}</h4>
                                </div>
                                <div className={styles.stepDesc}>
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
