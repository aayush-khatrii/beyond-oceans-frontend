import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './NTKPopup.module.css'
import ClassSelectComp from './ClassSelectComp/ClassSelectComp'


export default function NTKPopup({handleClose, ferryData}) {



    return (

    <div className={styles.mainWrapper}>
        <div onClick={() => {handleClose()}} className={styles.closeIcon}><IconList Icon="Close" /></div>
        <div className={styles.subWrapper}>
            <ClassSelectComp ferryData={ferryData}/>
        </div>
    </div>
  )
}
