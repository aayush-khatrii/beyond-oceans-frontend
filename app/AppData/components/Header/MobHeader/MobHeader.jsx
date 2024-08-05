import IconList from '../../IconComponent/IconList'
import styles from './MobHeader.module.css'

export default function MobHeader() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.leftHead}>
                    <div className={styles.menuButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.brandLogo}>
                        <IconList Icon="BOLogoColor"/>
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
