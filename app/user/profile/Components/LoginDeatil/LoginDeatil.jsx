import IconList from '@/app/AppData/components/IconComponent/IconList'
import styles from './LoginDeatil.module.css'
import { useAppSelector } from '@/app/AppData/lib/store/hooks';
import contriesData from '../../../../AppData/Data/contries.json'


export default function ProfileSetting({title, desc}) {

    const userData = useAppSelector((state) => state.user.userData)

    const contrydata = contriesData;
    
    const phone = userData.phone
    const email = userData.email
    const country = userData.address.Country

    const getCountryByName = (countryName) => {
        if(!countryName) return
        return contrydata.find(country => country.name.toLowerCase() === countryName.toLowerCase());
    };

    const countryObj = getCountryByName(country)
    const phoneCode = countryObj?.phone
    const authLv = userData.authLv



  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headLeft}>
                <div className={styles.decorative}></div>
                <div className={styles.headContent}>
                    <span>{title}</span>
                    <p>{desc}</p>
                </div>
            </div>
        </div>

        <div className={styles.dataContainer}>
            <div className={styles.dataField}>
                <span>Mobile Number</span>
                <div className={styles.listContainer}>
                    <div className={styles.phoneCont}>
                        <p>{phone ? `+${phoneCode} ${phone}` : <button className={styles.addButton}>+ Add Your Number</button>}</p>
                        {authLv === "Lv1" && phone !== "" && Boolean(phone) ? <IconList Icon="Verified"/> : ""}
                    </div>
                    { phone ? <button>Remove Number</button> : ""}
                </div>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Email Id</span>
                <div className={styles.listContainer}>
                    <p>{email ? email : <button className={styles.addButton}>+ Add Your Email ID</button>}</p>
                </div>
            </div>
            <div className={styles.sepretor}></div>
            <div className={styles.dataField}>
                <span>Google Account</span>
                <div className={styles.listContainer}>
                    <p>{email ? email : <button className={styles.addButton}>+ Connect or Login with Google Account</button>}</p>
                </div>
            </div>
        </div>
        {
            !email ? 
            <div className={styles.notEmail}>
                <span>Add your Email ID and unlock the special offers and deals only for you. Don't miss a chance!</span>
            </div> 
            : ""
        }
    </div>
  )
}
