import Image from 'next/image'
import IconList from '../IconComponent/IconList'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {

    const certificates = [
        {
            img: "anatd.webp",
            alt: "Registered with A&NATD"
        },
        {
            img: "motgoi.webp",
            alt: "Government Recognition"
        },
        {
            img: "ii-logo.webp",
            alt: "Incredible India"
        },
        {
            img: "aato.webp",
            alt: "AATO Membership"
        }
    ]
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.footerCTA}>
                <div className={styles.ctaLeft}>
                    <IconList Icon="FooterIcon" />
                </div>
                <div className={styles.ctaRight}>
                    <span className={styles.footerCtaTitle}>24/7 Hassle Free Support</span>
                    <address className={styles.contactWrapper}>
                      <p>Call Us At: <Link href="tel:+917908671247">+91 7908671247</Link></p>
                      <p>WhatsApp: <Link href="tel:+917908671247">+91 7908671247</Link></p>
                      <p>Email Us On: <Link href="mailto:info@beyondoceans.in">info@beyondoceans.in</Link></p>
                    </address>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.footLogoSec}>
                    <IconList Icon="FootLogo"/>
                    <p>Sign up now to receive exclusive offers, insider tips, and captivating travel tales.</p>
                    <div className={styles.footerSubForm}>
                        <input type="text" placeholder="Enter your full name"/>
                        <input type="text" placeholder="Enter your Email ID"/>
                        <button>Subscribe Now</button>
                    </div>
                </div>
                <div className={`${styles.footSec} ${styles.packageSec}`}>
                    <span>Best Tour Packages</span>
                    <ul>
                        <li>Honeymoon</li>
                        <li>Family Packages</li>
                        <li>Best Sellers</li>
                        <li>Explore By Budget</li>
                        <li>Explore By Islands</li>
                        <li>Explore By Duration</li>
                        <li>Activities Package</li>
                    </ul>
                </div>
                <div className={styles.footSec}>
                    <span>Our Services</span>
                    <ul>
                        <li>Weddings</li>
                        <li>Photography</li>
                        <li>Cab Booking</li>
                        <li>Personal Guide</li>
                        <li>Bike Rental</li>
                        <li>Tour Packages</li>
                        <li>Ferry Booking</li>
                    </ul>
                </div>
                <div className={styles.footSec}>
                    <span>Important Links</span>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Blogs</li>
                        <li>Career</li>
                        <li>My Account</li>
                        <li>Plan Your Trip</li>
                        <li><Link href="/content-disclaimer">Content Disclaimer</Link></li>
                    </ul>
                </div>
                <div className={`${styles.footSec} ${styles.footContactSec}`}>
                    <span>Contact Us</span>
                    <address>
                        <p className={styles.phone}>Phone: <Link href="tel:+917908671247">+91 7908671247</Link></p>
                        <p className={styles.email}>Email: <Link href="mailto:info@beyondoceans.in">info@beyondoceans.in</Link></p>
                        <p className={styles.address}>Address: <Link href="mailto:info@beyondoceans.in">No.1637/2, Ground Floor, Phoenix Bay, Port Blair - 744102</Link></p>
                    </address>
                    <div className={styles.socialMedia}>
                        <div><Link href="https://www.instagram.com/beyondoceansandaman/" target='_blank'><IconList Icon="Insta" /></Link></div>
                        <div><Link href="https://www.facebook.com/profile.php?id=61561083504785" target='_blank'><IconList Icon="FB" /></Link></div>
                        <div><Link href="https://www.youtube.com/@beyondoceansandaman" target='_blank'><IconList Icon="YT" /></Link></div>
                        <div><Link href="https://wa.me/917908671247" target='_blank'><IconList Icon="WP" /></Link></div>
                    </div>
                </div>
            </div>
            <div className={styles.certificate}>
                <div className={styles.text}>
                    <div className={styles.certificateTitle}><span>Certifications and Recognitions</span></div>
                    <div className={styles.certificateDesc}><p>At Beyond Oceans, your trust is paramount. We are proud members of the Andaman Association of Tour Operators (AATO), registered with the Andaman and Nicobar Administration Tourism Department, and recognized by the Ministry of Tourism, Government of India. As participants in the 'Incredible India' program, we are dedicated to offering you the highest standards of service and an unforgettable travel experience in the Andaman and Nicobar Islands.</p></div>
                </div>
                <div className={styles.images}>
                    {
                        certificates.map((item, index) => (
                            <div key={index} className={styles.imgCard}>
                                <div className={styles.imgCardWrapper}>
                                    <div className={styles.imgWrapper}>
                                        <Image
                                            src={`/assets/certificate/${item.img}`}
                                            fill={true}
                                            sizes="100%"
                                            alt={item.alt}
                                            style={{objectFit:"contain"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
		<div className={styles.copyrightWrapper}>
			<div className={styles.copySubWrapper}>
				<div><span>copywrite © &nbsp;2024 Beyond Oceans, All rights reserved.</span></div>
				<div className={styles.footNavList}>
                    <ul>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        
                        <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                        
                        <li><Link href="/cancellation-refund">Cancellation & Refund Policy</Link></li>
                        
                        <li><Link href="/payment-policy">Payment Policy</Link></li>
                        
                        <li><Link href="/packages">Sitemap</Link></li>
                    </ul>
                </div>
				<div className={styles.trustNote}>
                    <div className={styles.secureIcon}><IconList Icon="SecureIcon"/></div>
                    <span>100% Secure Payments</span>
                </div>
			</div>
        </div>
    </div>
  )
}
