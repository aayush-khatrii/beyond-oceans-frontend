
import styles from './phoneInp.module.css'
import IconList from '@/app/AppData/components/IconComponent/IconList';

export default function phnSignOpt(props) {

    function handleOptionChange(){
        props.onOptclick("EML")
    }
  return (
    <div>
        <div className={styles.signinOptions}>
            <div className={styles.authOptionBtnwrp}>
                <button onClick={handleOptionChange}><div className={styles.btnIcon}><IconList Icon="EmailSignin" /></div>Use Email</button>
            </div>
        </div>
    </div>
  )
}
