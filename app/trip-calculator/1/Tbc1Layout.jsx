"use client"
import { useEffect, useLayoutEffect } from 'react'
import styles from './Tbc1Layout.module.css'
import { useAppSelector } from '@/app/AppData/lib/store/hooks';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import IconList from '@/app/AppData/components/IconComponent/IconList';
import Link from 'next/link';

export default function Tbc1Layout() {

    const router = useRouter()
    const tbcStatusData = useAppSelector((state) => state.tbc)
    const durationList = [
        {
            id: "1",
            duration: {
                Day: "3",
                Night: "2"
            },
            imageLink: "2n3d.webp"
        },
        {
            id: "2",
            duration: {
                Day: "4",
                Night: "3"
            },
            imageLink: "3n4d.webp"
        },
        {
            id: "3",
            duration: {
                Day: "5",
                Night: "4"
            },
            imageLink: "4n5d.webp"
        },
        {
            id: "4",
            duration: {
                Day: "6",
                Night: "5"
            },
            imageLink: "5n6d.webp"
        },
        {
            id: "5",
            duration: {
                Day: "7",
                Night: "6"
            },
            imageLink: "6n7d.webp"
        },
        {
            id: "6",
            duration: {
                Day: "8",
                Night: "7"
            },
            imageLink: "7n8d.webp"
        },
        {
            id: "7",
            duration: {
                Day: "9",
                Night: "8"
            },
            imageLink: "8n9d.webp"
        },
        {
            id: "8",
            duration: {
                Day: "10",
                Night: "9"
            },
            imageLink: "9n10d.webp"
        }
    ]

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault(); // Required in some browsers
        };
      
        window.addEventListener('beforeunload', handleBeforeUnload);
      
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.leftCont}>
                <div className={styles.imgWrapper}>
                    <Image
                        src="/assets/tbc/tbc_left_cover_2.webp"
                        fill={true}
                        sizes="100%"
                        alt="trip calculator get started"
                        style={{zIndex: "-1", objectFit:"cover"}}
                    />
                </div>
                <div className={styles.leftContWrapper}>
                    <div className={styles.leftTopIcon}>
                        <div className={styles.brandIcon}>
                            <IconList Icon="BOLogo" />
                        </div>
                    </div>
                    <div className={styles.leftBottom}>
                        <div className={styles.paginations}>
                            {
                                Array(9).fill().map((item, index) => (
                                    <div className={`${index + 1 === 1 ? styles.activePagination : ""} ${styles.paginationBox}`}></div>
                                ))
                            }
                        </div>
                        <div className={styles.paginationText}>
                            <span>Step 1 of 9</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightCont}>
                <div className={styles.rightContWrapper}>
                    <div className={styles.rightTop}>
                        <div className={styles.tbcTitleSec}>
                            <div className={styles.TbcMainTitle}>
                                <span>Step 1:</span>
                                <span>Choose Your Trip Duration</span>
                            </div>
                            <div className={styles.TbcSubTitle}>
                                <span>How long do you plan to stay?</span>
                            </div>
                        </div>
                        <Link href="/" className={styles.homeBtnCircle}>
                            <IconList Icon="HomeIcon" />
                        </Link>
                    </div>
                    <div className={styles.rightBottom}>
                        <div className={styles.durationsCardList}>
                            {
                                durationList.map((item, index) => (
                                    <div key={index} >{`${item.duration.Night} Nights, ${item.duration.Day} Days`}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
