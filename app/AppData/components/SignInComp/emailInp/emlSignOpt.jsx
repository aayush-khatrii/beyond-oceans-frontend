import Image from "next/image";
import styles from './emailInp.module.css'
import IconList from '../../IconComponent/IconList'

export default function phnSignOpt(props) {

    function handleOptionChange(){
        props.onOptclick("PHN")
    }
  return (
    <div>
        <div className={styles.signinOptions}>
            <div className={styles.signinopttitle}>
                <div className={styles.signOptSapline}></div>
                <span>or login / signup with</span>
                <div className={styles.signOptSapline}></div>
            </div>
            <div className={styles.authOptionBtnwrp}>
                <button>
                    <div className={styles.GoogleIcon}>
                        <Image
                            src='/assets/GoogleLogo.png'
                            fill={true}
                            sizes="100%"
                            alt='Google Logo'
                            draggable={false}
                            style={{objectFit:"cover"}}
                        />
                    </div>
                </button>
                <button onClick={handleOptionChange}><IconList Icon="Call" /></button>
            </div>
        </div>
    </div>
  )
}
