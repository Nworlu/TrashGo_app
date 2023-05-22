import axios from 'axios'
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input"
import PrimaryButton from "../../../components/PrimaryButton"
import FlatButton from "../../../components/FlatButton";
import PhoneInput from 'react-native-phone-number-input';
1
import { useContext, useRef, useState } from "react";
import colors from "../../../constant/colors";
import LoadingOverlay from '../../../components/LoadingOverlay';
import { AuthContext } from '../../../context/AuthContext';
const apiURL = 'https://trashgo.onrender.com'
function SignupScreen({navigation}){
    const authCtx = useContext(AuthContext)
    const [enteredFullName, setEnteredFullName] = useState('') 
    const [enteredEmail, setEnteredEmail] = useState('') 
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('') 
    const [enteredPassword, setEnteredPassword] = useState('') 
    const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState('') 
    const [isAuthenticating, setIsAuthenticating] = useState(false) 
    const phoneInput = useRef(null)
    function switchAuth(){
        navigation.navigate('LoginScreen')
    }
    function updateInputHandler(inputType, enteredValue){
        switch (inputType) {
            case 'fullName':
                setEnteredFullName(enteredValue)
                break;
            case 'email':
                setEnteredEmail(enteredValue)
                break;
            case 'phoneNumber':
                setEnteredPhoneNumber(enteredValue)
                break;
            case 'password':
                setEnteredPassword(enteredValue)
                break;
            case 'passwordConfirm':
                setEnteredPasswordConfirm(enteredValue)
                break;
        }
    }
function inputValidation(){
    let fullName= enteredFullName !== ""
    let email = enteredEmail.includes('@')
    let phoneNumber = enteredPhoneNumber >= 15
    let password = enteredPassword >6
    let passwordConfirm = enteredPassword === enteredPasswordConfirm

    Alert.alert('Failed Authentication',  !fullName
    ? "Please provide your details"
    : !email
    ? "Please provide a valid email"
    : !phoneNumber
    ? "Your phone number must be 10"
    : !password
    ? "Your password must be more than 6 "
    : !passwordConfirm? "Your password must be the same":"" )
}
const data = {
    fullName: enteredFullName,
    email: enteredEmail,
    phoneNumber: enteredPhoneNumber,
    password: enteredPassword,
    passwordConfirm: enteredPasswordConfirm
  };
   async function submitHandler(){
        setIsAuthenticating(true)
        try {
            const response = await axios.post(`${apiURL}/api/v1/user/signup`, JSON.stringify(data),   {
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "https://trashgo.onrender.com", // replace with your own domain
                },
                mode: "cors",
                credentials: "include",
              })
              console.log(authCtx.userData)
              authCtx.setUserData(response.data.data.user)
              authCtx.authenicate(response.data.token)
             if(response.data.data.user.isActive !== true){
                navigation.navigate('VerifyOtpScreen')
             }
        } catch (error) {
            console.log(error.response)
            inputValidation()
        }
        setIsAuthenticating(false)
    }

    if(isAuthenticating){
        return <LoadingOverlay message='Creating User.......' />
    }
   
     return  <View style={styles.root}>
     <ScrollView style={styles.keyboard}>
     <View style={styles.loginContainer}>
        <KeyboardAvoidingView  behavior="position">
        <Text style={styles.text}>Create Your Account</Text>
        <View style={styles.inputContainer} >
            <Input textConfig={{
                inputMode: 'text',
                placeholder: 'Full Name',
                keyboardType: 'default',
                value: enteredFullName,
                onChangeText: updateInputHandler.bind(this,'fullName')
            }}/>
            <Input textConfig={{
                inputMode: 'email',
                placeholder: 'Email',
                keyboardType: 'email-address',
                value: enteredEmail,
                onChangeText: updateInputHandler.bind(this,'email')
            }}/>
          
            <Input style={{marginTop:19}} textConfig={{
                inputMode: 'none',
                placeholder: 'Password',
                keyboardType: 'default',
                value: enteredPassword,
                onChangeText: updateInputHandler.bind(this,'password'),
                secureTextEntry: true,
            }}/>
            <Input textConfig={{
                inputMode: 'none',
                placeholder: 'Password Confirm',
                keyboardType: 'default',
                value: enteredPasswordConfirm,
                onChangeText: updateInputHandler.bind(this,'passwordConfirm'),
                secureTextEntry: true,
            }}/>
              <PhoneInput
            ref={phoneInput}
            containerStyle={styles.phoneInput}
            placeholder="Enter phone number"
            defaultCode="NG"
            layout="first"
            autoFocus
            textContainerStyle={{ paddingVertical: 0, fontWeight: 'bold'}}
            value={enteredPhoneNumber}
            onChangeText={updateInputHandler.bind(this,'phoneNumber')} 
            />
            <View style={styles.button} >
                <PrimaryButton onPress={submitHandler} style={{width: "100%", marginHorizontal:0, height: 50, marginTop: 20}}>
                    Sign Up
                </PrimaryButton>
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
                Already Have An Account? Sign In
            </FlatButton>
        </View>
    </View>
    </ScrollView>
    </View>

}
export default SignupScreen

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    loginContainer:{
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    text:{
        fontSize: 35,
        fontWeight: 'bold',
        width: 230
    },
    keyboard:{
        flex:1,
    },
    inputContainer:{
        justifyContent: 'center',
        flex: 1,
        marginTop:0
    },
    phoneInput:{
        paddingVertical: 10,
        marginTop: 20,
        width: '100%',
        borderWidth:2,
        fontWeight: 'bold',
        borderRadius:10,
        // backgroundColor: colors.gray200
    },
    button:{
        marginVertical:10,
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
        marginTop: 20
    }
    
})