import styles from './contact.module.css'
import Image from "next/image";
import Link from 'next/link';
import IconList from '@/app/AppData/components/IconComponent/IconList';

export const metadata = {
    title: 'Contact Us'
}

export default function page() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.heroImgSec}>
                <div className={styles.heroImg}> 
                    <Image
                        src="/assets/contact_bg.png"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        alt="Picture of the author"
                        style={{zIndex: "-1",objectFit:"cover"}}
                    />
                    <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.heroCont}>
                    <h1 className={styles.heroTitle}>
                        Contact Us
                    </h1>
                    <h4 className={styles.heroDesc}>
                        Get in touch with Beyond Oceans today!
                    </h4>
                    <span className={styles.breadcrumbCU}>Home &nbsp; &gt; &nbsp; Contact Us</span>
                </div>
            </div>
            <div className={styles.subWrapper}>
                <div className={styles.contactCont}>
                    <div className={styles.left}>
                        <h3 className={styles.contactContTitle}>Get In Touch</h3>
                        <p className={styles.descGIT}>
                            Reach out via phone, email, visit our office, or connect with us on social media. <br/>Our dedicated team is here to assist you every step of the way, ensuring a <br />seamless and unforgettable travel experience.
                        </p>
                        <div className={styles.addressGIT}>
                            <address className={styles.callComp}>
                                <div className={styles.compIcon}>
                                    <IconList Icon="Call" />
                                </div>
                                <div className={styles.compContent}>
                                    <span>Call Us</span>
                                    <div style={{height: '7px'}}></div>
                                    <p>Customer support: <Link href="tel:+917908671247">+91 79086 71247</Link></p>
                                    <p>Booking enquiry: <Link href="tel:+9179086 71247">+91 79086 71247</Link></p>
                                </div>
                            </address>
                            <address className={styles.mailComp}>
                                <div className={styles.compIcon}>
                                    <IconList Icon="Email" />
                                </div>
                                <div className={styles.compContent}>
                                    <span>Email Us</span>
                                    <div style={{height: '7px'}}></div>
                                    <p><Link href="mailto:travel@beyondoceans.in">travel@beyondoceans.in</Link></p>
                                    <p><Link href="mailto:help@beyondoceans.in">help@beyondoceans.in</Link></p>
                                </div>
                            </address>
                            <address  className={styles.addressComp}>
                                <div className={styles.compIcon}>
                                    <IconList Icon="AddressPin" />
                                </div>
                                <div className={styles.compContent}>
                                    <span>Head Office</span>
                                    <div style={{height: '7px'}}></div>
                                    <p><Link href="https://maps.app.goo.gl/sYbxEDSWdS9V7hKt5">No.1637/2, Ground Floor, Phoenix Bay, <br />Port Blair - 744102</Link></p>
                                </div>
                            </address>
                        </div>
                        <div className={styles.leftSepretorLine}></div>
                        <div className={styles.ContactSocial}>
                            <span>Follow our social media</span>
                            <div>
                                <Link href="https://www.instagram.com/beyondoceansandaman/" target='_blank'><IconList Icon="InstaThin" /></Link>
                                <Link href="https://www.facebook.com/profile.php?id=61561083504785" target='_blank'><IconList Icon="FBThin" /></Link>
                                <Link href="https://www.youtube.com/@beyondoceansandaman" target='_blank'><IconList Icon="YTThin" /></Link>
                                <Link href="https://wa.me/917908671247" target='_blank'><IconList Icon="WPThin" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.contactContTitle}>Send Us A Message</h3>
                        <form action="/cont" className={styles.ContactForm}>
                            <div className={styles.formRow}>
                                <div className={styles.InputFrame}>
                                    <input className={styles.InputBox} placeholder="" type="text" required/>
                                    <span className={styles.InputPlace}>Your Name *</span>
                                </div>
                                <div className={styles.InputFrame}>
                                    <input className={styles.InputBox} placeholder="" type="text" required/>
                                    <span className={styles.InputPlace}>Your Email *</span>
                                </div>
                            </div>
                            <div className={`${styles.formRowSpace} ${styles.formRow}`}>
                                <div className={styles.InputFrame}>
                                    <input className={styles.InputBox} placeholder="" type="text" required/>
                                    <span className={styles.InputPlace}>Your Phone Number *</span>
                                </div>
                                <div className={styles.InputFrame}>
                                    <input className={styles.InputBox} placeholder="" type="text" required/>
                                    <span className={styles.InputPlace}>Enter Subject *</span>
                                </div>
                            </div>
                            <div className={`${styles.formRowSpace} ${styles.formRow}`}>
                                <div className={styles.InputFrame}>
                                    <input className={styles.InputBox} placeholder="" type="text" required/>
                                    <span className={styles.InputPlace}>Booking Reference ID *</span>
                                </div>
                                <div className={styles.InputFrame}>
                                    <input className={styles.InputBox} placeholder="" type="text"/>
                                    <span className={styles.InputPlace}>Attachments</span>
                                </div>
                            </div>
                            <div className={`${styles.formRowSpace} ${styles.formRow}`}>
                                <div className={styles.InputFrame}>
                                    <textarea className={`${styles.InputBox} ${styles.Tarea}`} placeholder="" rows="4" cols="50"/>
                                    <span className={styles.InputPlace}>Write a message</span>
                                </div>
                            </div>
                            <button className={styles.formBtn}>Submit Now</button>
                        </form>
                    </div>
                </div>
                <div className={styles.mapsContainer}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9292.586105366056!2d92.72673020949607!3d11.670507876981665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64934595ed8219ab%3A0x5114f4ac1ea81aef!2sBeyond%20Oceans%2C%20Destination%20Management%20Company!5e0!3m2!1sen!2sin!4v1714844210871!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
