import styles from './CTAComp.module.css'
import { useState } from "react";
import SingleTrip from "../CTA/SingleTrip/SingleTrip";
import MultiTrip from "../CTA/MultiTrip/MultiTrip";

export default function CTAComp() {

    const [ctaType, setCtaType] = useState("STP")
    function handleCTAtypeRadio(e){
        setCtaType(e.target.value)
    }

    const CTAInputComponent = {
        STP: <SingleTrip />,
        MTP: <SingleTrip />,
    };

    // const CTAInputComponent = {
    //     STP: <SingleTrip />,
    //     MTP: <MultiTrip />,
    // };

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.heroCTAComponent}>
            <div className={styles.ctaSelection}>
                <label className={styles.radios}>
                    <input type="radio" name="CTARadio" value="STP" defaultChecked onChange={handleCTAtypeRadio} />
                    <div className={styles.radiochild}>
                        <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                        <span className={styles.radioText}>Single Trip</span>
                    </div>
                </label>
                <label className={styles.radios}>
                    <input type="radio" name="CTARadio" value="MTP" onChange={handleCTAtypeRadio} />
                    <div className={styles.radiochild}>
                        <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                        <span className={styles.radioText}>Multiple Trips</span>
                    </div>
                </label>
            </div>
            <div className={styles.ctaInputsection}>
                {CTAInputComponent[ctaType]}
            </div>
        </div>
    </div>
  )
}
