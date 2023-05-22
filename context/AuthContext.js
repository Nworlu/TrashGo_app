import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    userData: {},
    token: "",
    authenicate:(token)=>{},
    setUserData: (user)=>{},
    authenicated: false,
    logout:()=>{},
    isLoading:false
})

function AuthContextProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    // const [userInfo, setUserInfo] = useState({})
    const [userToken, setUserToken] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function setUserData(user){
        setUserInfo(user)
        AsyncStorage.setItem('userInfo', JSON.stringify(user))
    }

    function authenicate(token){
        setUserToken(token)
        AsyncStorage.setItem('userToken', token)
    }

    function logout(){
        setUserInfo(null)
        setUserToken(null)
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo')
    }

    const isLoggedIn = async ()=>{
        setIsLoading(true)
        try {
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)
            if(userInfo){
                setUserInfo(userInfo)
                setUserToken(userToken)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(`isLogged in error ${error}`)
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])


    let value={
        userData: userInfo,
        token: userToken,
        authenicated: !!userToken,
        authenicate:authenicate,
        setUserData: setUserData,
        logout:logout,
        isLoading:isLoading
    }



    return <AuthContext.Provider value={value}>
            {children}
    </AuthContext.Provider>
}

export default AuthContextProvider