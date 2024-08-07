import Image from "next/image";
import styles from './emailInp.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList';

export default function phnSignOpt(props) {

    function handleOptionChange(){
        props.onOptclick("PHN")
    }
  return (
    <div>
        <div className={styles.signinOptions}>
            <div className={styles.authOptionBtnwrp}>
                <button onClick={handleOptionChange}><div className={styles.btnIcon}><IconList Icon="Call" /></div>Use Phone</button>
            </div>
        </div>
    </div>
  )
}
