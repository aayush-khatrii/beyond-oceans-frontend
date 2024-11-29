import Link from 'next/link'
import styles from './TOC.module.css'

export default function TOC() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.titleCont}>
                <h3>Table of Content</h3>
            </div>
            <div className={styles.mainContent}>
                <ul>
                    <li><Link href="#know-before-visiting">What To Know Before Visiting Port Blair Islands</Link></li>
                    <li><Link href="#facts">Facts About Port Blair</Link></li>
                    <li><Link href="#best-places-to-visit">The Best Places To Visit in Port Blair</Link></li>
                    <li><Link href="#how-to-plan-trip">How To Plan A Trip To Port Blair</Link></li>
                    <li><Link href="#how-to-reach">How To Reach Port Blair</Link></li>
                    <li><Link href="#general-information">General Information About Port Blair</Link></li>
                    <li><Link href="#faq">Frequently Asked Questions</Link></li>
                </ul>
            </div>
        </div>
    )
}
