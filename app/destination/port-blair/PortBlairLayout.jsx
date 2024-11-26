import React from 'react'
import styles from './PortBlair.module.css'
import Image from 'next/image'

export default function PortBlairLayout() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/assets/destination/island/port_blair_island.webp"
                    fill={true}
                    sizes="100%"
                    alt="Sri Vijaya Puram island"
                    style={{zIndex: "-1",objectFit:"cover"}}
                />
            </div>
        </div>
        <div className={styles.subWrapper}>

        </div>
    </div>
  )
}
