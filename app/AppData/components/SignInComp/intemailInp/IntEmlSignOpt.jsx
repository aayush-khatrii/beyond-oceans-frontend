import Image from "next/image";
import styles from './intEmailInp.module.css'
import IconList from '../../IconComponent/IconList'

export default function phnSignOpt(props) {

    function handleOptionChange(){
        props.onOptclick("PHN")
    }
    function handleOptionChangeMail(){
        props.onOptclick("EML")
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
                <button onClick={handleOptionChangeMail}><IconList Icon="EmailSignin" /></button>
            </div>
        </div>
    </div>
  )
}
