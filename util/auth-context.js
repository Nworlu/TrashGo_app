import { createContext, useState } from "react";
import  AsyncStorage from '@react-native-async-storage/async-storage'


export const AuthContext = createContext({
    userData: {},
    token: '',
    isAuthenticated: false,
    authenticate: (token)=>{},
    logout: ()=>{},
    setUser:(user)=>{}
})

function AuthContextProvider({children}){
    const [authUser, setAuthUser] = useState({})
    const [authToken, setAuthToken] = useState()

    function setUser(user){
        setAuthUser(user)
        // console.log(user)
        AsyncStorage.setItem('user', JSON.stringify(user))
    }
    function authenticate(token){
        setAuthToken(token)
        console.log(token)
        AsyncStorage.setItem('token', token)
    }
    function logout(){
        setAuthUser(null)
        setAuthToken(null)
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('user')
    }
    const value ={
        userData: authUser,
        token: authToken,
        isAuthenticated: !!authToken,
        logout:logout,
        authenticate:authenticate,
        setUser:setUser
    }
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

export default AuthContextProvider