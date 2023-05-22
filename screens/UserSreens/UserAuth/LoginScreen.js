import axios from 'axios'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input"
import PrimaryButton from "../../../components/PrimaryButton"
import FlatButton from "../../../components/FlatButton";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import LoadingOverlay from '../../../components/LoadingOverlay';
let apiUrl = "https://trashgo.onrender.com"

function LoginScreen({navigation}){
    const [enteredEmail,setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext)
    function switchAuth(){
        navigation.navigate('SignupScreen')
    }
    function updateInputHandler(inputType, enteredValue){
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue)
                break;
            case 'password':
                setEnteredPassword(enteredValue)
                break
        }

    }
    async function loginHandler(){
        setIsAuthenticating(true)
        try {
            const response = await axios.post(`${apiUrl}/api/v1/user/login`, JSON.stringify({email:enteredEmail,password:enteredPassword}),   {
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "https://trashgo.onrender.com", // replace with your own domain
                },
                mode: "cors",
                credentials: "include",
              })
              authCtx.setUserData(response.data.data.user)
              authCtx.authenicate(response.data.token)
              console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
        setIsAuthenticating(false)
    }

    if(isAuthenticating){
        return <LoadingOverlay message='Logging in user'/>
    }


     return  <ScrollView style={styles.keyboard}>
     <View style={styles.loginContainer}>
        <Text style={styles.text}>Welcome Back</Text>
        <KeyboardAvoidingView  behavior="position">
        <View style={styles.inputContainer} >
            <Input textConfig={{
                inputMode: 'email',
                placeholder: 'Email',
                keyboardType: 'email-address',
                value: enteredEmail,
                onChangeText: updateInputHandler.bind(this,'email')
            }}/>
            <Input textConfig={{
                inputMode: 'none',
                placeholder: 'Password',
                keyboardType: 'email-address',
                value: enteredPassword,
                onChangeText: updateInputHandler.bind(this,'password'),
                secureTextEntry: true,
            }}/>
            <View style={styles.button} >
                <PrimaryButton onPress={loginHandler} style={{width: 335, marginHorizontal:0, marginBottom:30, height: 50, marginTop: 20}}>
                    Sign In
                </PrimaryButton>
            <FlatButton style={{width: 335,marginHorizontal:0,}}>
                Forgot Password
            </FlatButton>
            </View>
        </View>
        </KeyboardAvoidingView>
        <View style={styles.socialContainer}>
            <Text style={styles.socialText}>or continue with</Text>
            <View style={styles.icons}>
                <Ionicons style={styles.icon} name="logo-facebook" size={24} color="black" />
                <Ionicons style={styles.icon} name="logo-facebook" size={24} color="black" />
                <Ionicons style={styles.icon} name="logo-facebook" size={24} color="black" />
            </View>
        </View>
        <View style={styles.bottomScreen}>
            <FlatButton onPress={switchAuth} style={{width: 335,marginHorizontal:0}}>
                Don’t Have An Account? Sign Up
            </FlatButton>
        </View>
    </View>
    </ScrollView>
}
export default LoginScreen

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20,
    },
    text:{
        fontSize: 40,
        fontWeight: 'bold',
        width: 200
    },
    keyboard:{
        flex:1,
    },
    inputContainer:{
        justifyContent: 'center',
        flex: 1,
        marginTop:70
    },
    button:{
        marginVertical:30,
        justifyContent: 'space-between',
    },
    socialContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialText:{
        fontSize: 20,
        fontWeight: '200',
        marginBottom: 30
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: '70%'
    },
    icon:{
        padding:20,
        borderWidth: 1,
        borderRadius: 10
    },
    bottomScreen:{
        marginTop: 30
    }
    
})