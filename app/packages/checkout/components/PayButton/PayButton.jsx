import Link from 'next/link'
import styles from './PayButton.module.css'
import { useState } from 'react'
import IconList from '@/app/AppData/components/IconComponent/IconList'

export default function PayButton({totalAmount}) {

    const [isAgree, setIsAgree] = useState(false)
    function intPrice(price){
        return Intl.NumberFormat('en-IN').format(price)
    }
    const partialPercentage = 40

    const partialAmount = totalAmount * (partialPercentage / 100)

    function handleAgreeTerms(){
        setIsAgree(!isAgree)
    }

  return (
    <div className={styles.mainWrapper}>
        <div className={styles.mainContent}>
            <div className={styles.partialSelector}>
                <div className={styles.payPartial}>
                <label className={styles.radios}>
                    <input type="radio" name="PAYRadio" value="PAY-FULL" defaultChecked />
                        <div className={styles.radiochild}>
                            <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                            <span className={styles.radioText}>Pay Total Amount ₹{intPrice(totalAmount)}</span>
                        </div>
                    </label>
                    <label className={styles.radios}>
                        <input type="radio" name="PAYRadio" value="PAY-PARTIAL" />
                        <div className={styles.radiochild}>
                            <div className={styles.radioStyle}><span className={styles.radioSelected}></span></div>
                            <span className={styles.radioText}>Pay Partial Amount ₹{intPrice(partialAmount)}</span>
                        </div>
                    </label>
                </div>
            </div>
            <div className={styles.acceptTerms}>
                <div className={ isAgree ? styles.checkBoxTrue : styles.checkBox } onClick={() => {handleAgreeTerms()}}>
                    {isAgree ? <IconList Icon="CheckMark" /> : null}
                </div>
                <div className={styles.termsAgree}>
                    <p>
                        I agree with the <Link href="/terms-conditions">Terms & Conditions</Link> and the <Link href="/cancellation-refund">Cancellation Policy</Link> of Beyond Ocenas.
                    </p>
                </div>
            </div>
            <button className={styles.payNowBTN}>Proceed To Payment</button>
        </div>
    </div>
  )
}
