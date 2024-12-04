import { useState } from 'react' 
import { Icon } from '@iconify/react';
import styles from './intEmailInp.module.css';
import contriesData from '@/app/AppData/Data/contries.json'
import IconList from '@/app/AppData/components/IconComponent/IconList';
import { parsePhoneNumber } from 'libphonenumber-js';
import { sendIntEmailOTP } from '@/app/AppData/http/comm';
import { addIntEmailAuthData } from '@/app/AppData/lib/store/features/auth/authSlice';
import { useAppDispatch } from '@/app/AppData/lib/store/hooks';

export default function IntEmailInp(props) {

    const dispatch = useAppDispatch()

    const[isContryList, setIsContryList] = useState(false)
    const[selectedIndex, setSelectedIndex] = useState(-1);
    const[searchQuery, setSearchQuery] = useState('');
    const[countryObj, setCountryObj] = useState(props.prevCountry)
    const[contrydata, setCountryList] = useState(contriesData);
    const[isFalsePhone, setIsFalsePhn] = useState(false)
    const[phoneNumber, setPhoneNumber] = useState()
    const[isFalseEmail, setIsFalseEmail] = useState(false)
    const[email, setEmail] = useState(false)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const isDisabled = isFalseEmail || isFalsePhone

    const btnStyle = {
        color: isDisabled ? "#4C4C4C" : "",
        backgroundColor: isDisabled ? "#E9E9E9" : "",
        borderColor: isDisabled ? "#BABABA" : "",
        cursor: isDisabled ? "default" : "pointer"
    }

    function toggleContry(props){
        setIsContryList(!isContryList)
    }

    function phnToggleContry(){
        setIsContryList(false)
    }

    function handleCtrySelect(ctryName, ctryCode, ctryPhone){
        setIsContryList(!isContryList)
        setCountryObj({ name:ctryName, code:ctryCode, phone:ctryPhone });
        props.onContryChange({ name:ctryName, code:ctryCode, phone:ctryPhone })
        if(ctryName === 'India'){
            props.onCtryIND("PHN")
            props.onContryChange({ name:ctryName, code:ctryCode, phone:ctryPhone })
        }
        setSearchQuery('')
        setCountryList(contriesData)
    }

    function handleCtrySearch(e){
        const query = e.target.value.toLowerCase();
        setSelectedIndex(0)
        setSearchQuery(query)

        const filteredCountries = contrydata.filter((country) =>
            country.name.toLowerCase().includes(query) ||
            country.code.toLowerCase().includes(query)
        );

        setCountryList(filteredCountries);
        if(filteredCountries.length === 0 || !query){
            setCountryList(contriesData);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(selectedIndex < contrydata.length - 1 ? selectedIndex + 1 : selectedIndex)
        }

        if (e.key === 'ArrowUp') {
            setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0)
        }

        if (e.key === 'Enter') {
            setIsContryList(!isContryList)
            setCountryObj({ 
                name:contrydata[selectedIndex].name, 
                code:contrydata[selectedIndex].code, 
                phone:contrydata[selectedIndex].phone 
            });
            if(contrydata[selectedIndex].name === 'India'){
                props.onCtryIND("PHN")
            }
            setSearchQuery('')
            setCountryList(contriesData)
            setSelectedIndex(0)
        }
    }

    function handleEmailChange(e){
        const emailAdd = e.target.value
        setEmail(emailAdd)

        if(emailRegex.test(emailAdd)){
            setIsFalseEmail(false)
        }

        if(!emailRegex.test(emailAdd)){
            setIsFalseEmail(true)
        }
        
    }


    function handlePhoneChange(e){
        const phnNumber = e.target.value
        setPhoneNumber(phnNumber)

        try {
            const isValidphoneNumber = parsePhoneNumber(`+${countryObj.phone}${phnNumber}`, countryObj.code);
            if(isValidphoneNumber?.isValid() === false || isValidphoneNumber?.isPossible() === false){
                setIsFalsePhn(true)
            }
    
            if(isValidphoneNumber?.isValid() === true && isValidphoneNumber?.isPossible() === true){
                setIsFalsePhn(false)
            }
        } catch (error) {
            if(error.message === "NOT_A_NUMBER"){
                setIsFalsePhn(true)
            }
        }

    }

    async function handelSignUp(){
        
        setIsFalsePhn(!phoneNumber)

        try {
            const isValidphoneNumber = parsePhoneNumber(`+${countryObj.phone}${phoneNumber}`, countryObj.code);
            // console.log(isValidphoneNumber.isValid() === false || isValidphoneNumber.isPossible() === false)
            if(isValidphoneNumber?.isValid() === false || isValidphoneNumber?.isPossible() === false){
                setIsFalsePhn(true)
            }
            if(isValidphoneNumber?.isValid() === true && isValidphoneNumber?.isPossible() === true){
                setIsFalsePhn(false)
            }
            
        } catch (error) {
            if(error.message === "NOT_A_NUMBER"){
                setIsFalsePhn(true)
            }
        }

        setIsFalseEmail(!emailRegex.test(email))
        if(!emailRegex.test(email) || !countryObj.name || !countryObj.code || !countryObj.phone){
            return
        }

        let responseData
        try {
            const {data} = await sendIntEmailOTP({ phone: phoneNumber, email: email, country: countryObj.name.toLowerCase()})
            responseData = data
            // console.log(data)
        } catch (error) {
            console.log(error.response.data)
        }

        const stateData = {
            phone: phoneNumber,
            email: email,
            country: countryObj.name.toLowerCase(),
            hash: responseData?.hash
        }

        dispatch(addIntEmailAuthData(stateData))

        props.onINTEmailOTP("OTPINTEML", email)
    }


    return (
    <>
    <div className={styles.mainWrapper}>
        <div className={styles.PHNinputCont}>
            <div className={styles.inputBox}>
            
                <input autoFocus className={styles.PhoneInp} style={{borderColor: isFalsePhone ? '#ff0000' : ''}} type="tel" placeholder="Phone Number" autoComplete='on' onClick={phnToggleContry} onChange={(e) => handlePhoneChange(e)}/>
                <div className={styles.ctrCodeCont} onClick={toggleContry}>
                    <div>
                        <Icon icon={`flag:${countryObj.code.toLowerCase()}-4x3`} />
                        <div className={styles.drpIco} style={{ transform: isContryList ? 'rotate(180deg)' : '' }}><IconList Icon="downArrow" /></div>
                    </div>
                    <span className={styles.ctryCode}>{`+${countryObj.phone}`}</span>
                </div>

                <div className={styles.optionsList} style={{display: isContryList ? 'block' : ''}}>
                    <div className={styles.srchInpCont}>
                        <input type="text" value={searchQuery} onKeyDown={(e) => handleKeyDown(e)} placeholder='Country Name or Code' className={styles.ctrySearch} onChange={(e) => handleCtrySearch(e)}/>
                        <div className={styles.srchIcon}><IconList Icon="searchIcon" /></div>
                    </div>
                <ol>
                    {
                        contrydata.map((country, index) => (
                            <li key={index} className={styles.listItem} >
                                <div className={`${styles.contryListCont} ${selectedIndex === index ? styles.SlctcontryListCont : ''}`} onClick={() => handleCtrySelect(country.name, country.code, country.phone) }>
                                    <div className={`${styles.ctryIconName} listFlags`}>
                                        <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} />
                                        <span className={styles.countryListName}>{`${country.name} (+${country.phone})`}</span>
                                    </div>
                                    <span className={styles.countryListCode}>{country.code}</span>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
            </div>
        </div>
        <div className={styles.EMLinputCont}>
            <div className={styles.inputBox}>
                <input className={styles.EmailInp} style={{borderColor: isFalseEmail ? '#ff0000' : ''}} type="tel" placeholder='Email Address' autoComplete='on' onChange={(e) => handleEmailChange(e)}/>
            </div>
        </div>
        <button className={styles.signInBtn} style={btnStyle} onClick={handelSignUp} >Send OTP</button>
    </div>
    <div className={styles.wrongNoteCont}>
        {isFalseEmail && <div className={styles.wrongnote}><p>* Email Address is Invalid</p></div>}
        {isFalsePhone && <div className={`${styles.invalidPhn} ${styles.wrongnote}`}><p>* Phone Number is Invalid</p></div>}
    </div>
    </>
  )
}
