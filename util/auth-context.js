import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
import { Alert } from "react-native";
import LoadingOverlay from "../components/ui/LoadingOverlay";

let apiUrl = "https://trashgo.onrender.com"

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const login = (email,password)=>{
    setIsLoading(true)
    axios.post(`${apiUrl}/api/v1/user/login`,{
        email,
        password
    },{headers:{"Content-Type":"application/json"}})
    .then(res=>{
        // console.log(res.data)
        let userInfo = res.data
        setUserInfo(userInfo)
        setUserToken(userInfo.token)
        Alert.alert("hello")
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        AsyncStorage.setItem('userToken', userInfo.token)

    })
    .catch(e=>{ 
        console.log(`login error ${e.response.data.error}`)
    })
    // setUserToken('jhhh')
    setIsLoading(false)
  }
 
  const logout=()=>{
    setIsLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('userInfo')
    AsyncStorage.removeItem('userToken')
    setIsLoading(false)
  }

  const isLoggedIn = async()=>{
    try {
        setIsLoading(true)
        let userToken = await AsyncStorage.getItem('userToken')
        let userInfo = await AsyncStorage.getItem('userInfo')
        userInfo = JSON.parse(userInfo)
        if( userInfo ){
            setUserToken(userToken)
            setUserInfo(userInfo)
        }
        setIsLoading(false )
    } catch (error) {
        console.log(`isLogged in error ${error}`)
    }
  }

  useEffect(()=>{
    isLoggedIn()
  },[])


  return <AuthContext.Provider value={{login,logout, isLoading, userToken, userInfo}}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
