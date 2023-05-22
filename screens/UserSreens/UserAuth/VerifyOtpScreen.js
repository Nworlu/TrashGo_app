import axios from 'axios'
import { useContext, useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import Input from "../../../components/Input";
import LoadingOverlay from "../../../components/LoadingOverlay";
  import PrimaryButton from "../../../components/PrimaryButton";
import colors from "../../../constant/colors";
import { AuthContext } from "../../../context/AuthContext";
const apiURL = 'https://trashgo.onrender.com'
  
  function VerifyOtpScreen({navigation}) {
    const authCtx = useContext(AuthContext)
    const [isChangingPass, setIsChangingPass] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [pin1,setPin1] = useState("")
    const [pin2,setPin2] = useState("")
    const [pin3,setPin3] = useState("")
    const [pin4,setPin4] = useState("")
    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)
    let data ={
      pin1,pin2,pin3,pin4
    }
    let objisValid=obj=>{
      return Object.values(obj)
    }
   let otp =objisValid(data).join('').toString()
   async function verifyOtpHandler() {
    setIsAuthenticating(true)
    try {
      const response = await axios.post(`${apiURL}/api/v1/user/verify`, JSON.stringify({otpCode:otp}),   {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://trashgo.onrender.com", // replace with your own domain
        },
        mode: "cors",
        credentials: "include",
      })
      authCtx.authenicate(response.data.token)
      authCtx.setUserData(response.data.data.user)
      if(response.data.data.user.isActive !== false){
          navigation.navigate('LoginScreen')
      }
      console.log('Verify Otp')
    } catch (error) {
        console.log(error.response.data)
        Alert.alert('Failed',error.response.data.message)
        
    }
    setIsAuthenticating(false);
  }

if (isAuthenticating) {
  return <LoadingOverlay message="Verifying User's email" />;
}
    return (
      <ScrollView style={styles.rootContainer}>
        <View style={styles.root}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Verification Otp code</Text>
          </View>
          <Text style={styles.text}>Please enter the 4 digit code sent to {authCtx.userData.email}</Text>
          <KeyboardAvoidingView>
            <View style={styles.inputContainer}>
              <Input
                inputDesign={styles.input}
                textConfig={{
                  ref: pin1Ref,
                  inputMode: "numeric",
                  keyboardType: "number-pad",
                  value: pin1,
                  maxLength:1,
                  onChangeText: (pin1)=>{
                    setPin1(pin1)
                    if(pin1 !== ""){
                        pin2Ref.current.focus()
                    }
                }
              }}
              />
              <Input
                inputDesign={styles.input}
                textConfig={{
                  ref: pin2Ref,
                  inputMode: "numeric",
                  keyboardType: "number-pad",
                  valu: pin3,
                  maxLength:1,
                  onChangeText: (pin2)=>{
                    setPin2(pin2)
                    if(pin2 !== ""){
                        pin3Ref.current.focus()
                    }
                }
              }}
              />
              <Input
                inputDesign={styles.input}
                textConfig={{
                  ref: pin3Ref,
                  inputMode: "numeric",
                  keyboardType: "number-pad",
                  value: pin3,
                  maxLength:1,
                  onChangeText: (pin3)=>{
                    setPin3(pin3)
                    if(pin3 !== ""){
                        pin4Ref.current.focus()
                    }
                }
              }}
              />
              <Input
              inputDesign={styles.input}
              textConfig={{
                  ref: pin4Ref,
                  inputMode: "numeric",
                  keyboardType: "number-pad",
                  value: pin4,
                  maxLength:1,
                  onChangeText: (pin4)=>{
                    setPin4(pin4)
                }
              }}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.button}>
            <PrimaryButton
            onPress={verifyOtpHandler}
              style={{
                width: "100%",
                marginHorizontal: 0,
                height: 50,
                marginTop: 20,
              }}
            >
              Verify
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    );
  }
  export default VerifyOtpScreen;
  
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: "white",
    },
    root: {
      flex: 1,
      marginVertical: 50,
      padding: 20,
      justifyContent: "space-between",
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      fontSize: 40,
      width: 330,
      fontWeight: "bold",
    },
    text: {
      fontSize: 20,
      marginTop: 50,
      textAlign: "center",
    },
    inputContainer: {
      flex: 1,
      justifyContent: "space-between",
      marginVertical: 120,
      flexDirection: 'row'
    },
    input:{
        fontSize: 30,
        width: 60,
        height: 70,
        textAlign: 'center',
        color: 'black'
    }
  });
  