import { useLayoutEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from "./AppData/lib/store/hooks";
import { setUserData } from "./AppData/lib/store/features/user/userSlice";
import { autoLogin } from "./AppData/http/auth";


export default function AutoAuth({children}) {

    const dispatch = useAppDispatch()
    const isUserAuth = useAppSelector((state) => state.user.userData.auth)

    useLayoutEffect(() => {
        if(isUserAuth) return
        const fetchAuth = async() => {

            let responseData

            try {
                const {data} = await autoLogin()
                responseData = data
            } catch (error) {
                if(error)
                return
            }

            const user = responseData.data
            const userAuth = responseData.ststus === 'success' && responseData.ststusCode === "200" && Boolean(user.User_Id)
    
            const userdata = {
                auth: userAuth || false,
                userId: user.User_Id || '',
                phone: user.User_Phone || '',
                email: user.User_Email || '',
                name: user.User_Name || '',
                address: user.User_Address || {}
            }
            dispatch(setUserData(userdata))

        }
        fetchAuth()

    }, [])
    
    return (
        <div style={{height: "100%", width: "100%"}}>{children}</div>
    )
}
