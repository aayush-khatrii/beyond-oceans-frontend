import { useState, useRef } from 'react' 
import { Icon } from '@iconify/react';
import styles from './emailInp.module.css';
import IconList from '../../IconComponent/IconList'
import contriesData from '../../../Data/contries.json'
import { sendEmailOTP } from '@/app/AppData/http/comm';
import { addEmailAuthData } from '@/app/AppData/lib/store/features/auth/authSlice';
import { PhoneNumber } from 'libphonenumber-js';
import { useAppDispatch } from '@/app/AppData/lib/store/hooks';

export default function emailInp(props) {

    const dispatch = useAppDispatch()

    const[isContryList, setIsContryList] = useState(false)
    const[selectedIndex, setSelectedIndex] = useState(-1);
    const[searchQuery, setSearchQuery] = useState('');
    const[countryObj, setCountryObj] = useState({ name: '', code: '', phone:'' })
    const[contrydata, setCountryList] = useState(contriesData);
    const[isEmptCtrySelect, setIsEmptCtrySelect] = useState(false)
    const[isFalseEmail, setIsFalseEmail] = useState(false)
    const[email, setEmail] = useState(false)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isDisabled = isFalseEmail || !countryObj.name || !countryObj.code || !countryObj.phone;

    const btnStyle = {
        color: isDisabled ? "#4C4C4C" : "",
        backgroundColor: isDisabled ? "#E9E9E9" : "",
        borderColor: isDisabled ? "#BABABA" : "",
        cursor: isDisabled ? "default" : "pointer"
    }

    function toggleContry(){
        setIsContryList(!isContryList)
    }

    function handleCtrySelect(ctryName, ctryCode, ctryPhone){
        setIsContryList(!isContryList)
        setCountryObj({ name:ctryName, code:ctryCode, phone:ctryPhone });
        setIsEmptCtrySelect(false)
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
            setIsEmptCtrySelect(false)
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

    
    async function handelSignUp(){
        setIsFalseEmail(!emailRegex.test(email))
        setIsEmptCtrySelect(!countryObj.name)
        if(!emailRegex.test(email) || !countryObj.name || !countryObj.code || !countryObj.phone){
            return
        }
        let responseData
        try {
            const {data} = await sendEmailOTP({ email: email, country: countryObj.name.toLowerCase() })
            responseData = data
            console.log(data)
        } catch (error) {
            console.log(error.response.data)
        }

        const stateData = {
            email: email,
            country: countryObj.name.toLowerCase(),
            hash: responseData?.hash
        }

        dispatch(addEmailAuthData(stateData))

        props.onEmailOTP("OTPEML", email)
    }


    return (
    <>
    <div>
        <div className={styles.contrySlctCont} style={{borderColor: isEmptCtrySelect ? '#ff0000' : ''}}>
            <div className={styles.seletedCtryCont} onClick={toggleContry}>
                {
                    countryObj.name ? (<>
                    <Icon icon={`flag:${countryObj?.code.toLowerCase()}-4x3`} /> 
                    <span>{countryObj?.name}</span>
                    </>) : (<span className={styles.ctryPlace}>Select Country</span>)
                }
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
                                        <span className={styles.countryListName}>{country.name}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
  
        <div className={styles.emailinputCont}>
            <div className={styles.inputBox}>
                <input autoFocus className={styles.EmailInp} style={{borderColor: isFalseEmail ? '#ff0000' : ''}} type="tel" placeholder='Enter your Email Address' autoComplete='on' onChange={(e) => handleEmailChange(e)}/>
                {isFalseEmail && <div className={styles.wrongnote}><p>* Email Address is Invalid</p></div>}
                {isEmptCtrySelect && <div className={`${styles.wrongnote} ${styles.emptCtry}`}><p>* Please Select Country</p></div>}
            </div>
        </div>
    </div>
    <button style={btnStyle} className={styles.signInBtn} onClick={handelSignUp} >Continue To Verification</button>
    </>
  )
}
