import MDXComp from '@/app/AppData/components/MDXLoader/MDXComp'
import styles from './PolicyPopup.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function PolicyPopup({title, sourceURL, onClose}) {
  return (
    <div  className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.title}>
                <span>{title}</span>
                <button className={styles.CloseBTN} onClick={() => {onClose()}}><IconList Icon="Close" /></button>
            </div>
            <div className={styles.mdxWrapper}>
                <div className={styles.mdxContent}>
                    <MDXComp source={sourceURL}/>
                </div>
            </div>
        </div>
    </div>
  )
}
