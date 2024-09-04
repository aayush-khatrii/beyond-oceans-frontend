import Link from 'next/link'
import IconList from '../../IconComponent/IconList'
import styles from './MobHeader.module.css'
import { useEffect, useRef, useState } from 'react'
import MobMenu from '../MobMenu/MobMenu'

export default function MobHeader() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [sheetPosition, setSheetPosition] = useState(100)
    const sheetRef = useRef(null);
    const startY = useRef(0);

    useEffect(() => {
        setToggleMenu(false)
        setSheetPosition(100)
    }, [])

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu)
        setSheetPosition(!toggleMenu ? 0 : 100)
    }

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
      };
    
      const handleTouchMove = (e) => {
            const touchY = e.touches[0].clientY;
            const distanceMoved = touchY - startY.current;
            const windowHeight = window.innerHeight;
            const movedPercentage = (distanceMoved / windowHeight) * 100;        

        if (movedPercentage > 0) {
          setSheetPosition(movedPercentage);
        }
      };
    
      const handleTouchEnd = () => {
        console.log(window.innerHeight)
        const threshold = 20; // 20% of the sheet's height
        if (sheetPosition > threshold) {
            setToggleMenu(false);
            setSheetPosition(100); // Reset the position
        } else {
            setToggleMenu(true);
            setSheetPosition(0); // Fully open the sheet
        }
      };

    return (
        <div className={styles.mainWrapper}>

            <div className={styles.subWrapper}>
            <div className={`${styles.overlay} ${toggleMenu ? styles.overlayShow : ""}`}></div>
            <div className={`${styles.menuWrapper} ${toggleMenu ? styles.menuWrapperShow : ""}`} ref={sheetRef}
                style={{transform: `translateY(${sheetPosition}%)`}}
            >
                <MobMenu 
                    handleTouchStart={handleTouchStart}
                    handleTouchMove={handleTouchMove}
                    handleTouchEnd={handleTouchEnd}
                    handleMenuToggle={handleMenuToggle}
                />
            </div>
            {/* {toggleMenu ? "true" : "false"} */}
                <div className={styles.leftHead}>
                    <div className={styles.menuButton} onClick={() => {handleMenuToggle()}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.brandLogo}>
                        <Link href="/">
                            <IconList Icon="BOLogoColor"/>
                        </Link>
                    </div>
                </div>
                <div className={styles.rightHead}>
                    <div className={styles.currency}>INR</div>
                    <div className={styles.profile}><IconList Icon="ProfileSet"/></div>
                </div>
            </div>
        </div>
    )
}
