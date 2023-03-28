import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input from "../../components/Auth/Input";
import FlatButton from "../../components/ui/FlatButton";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { forgotPass, generateOtp, signup } from "../../util/http";
import { useState } from "react";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import colors from "../../constants/colors";
let apiUrl = "https://trashgo.onrender.com"

function EmailVerificationScreen({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  let forgotPassword = route.params?.forgotP;
  forgotPassword = !!forgotPassword;
  console.log(forgotPassword);
  function backToLoginHandler() {
    navigation.goBack();
  }
  function emailInputHandler(enterdValue) {
    setEmail(enterdValue);
  }

  async function confirmHandler() {
    setIsAuthenticating(true)
    try {
      const user = await generateOtp({email:email});
      Alert.alert('Verification', user.message)
      if(user){
        navigation.navigate('VerifyOtpScreen')
      }
    } catch (error) {
        console.log(error.response.data.message)
      Alert.alert('Verification', error.response.data.message)
    }
    setIsAuthenticating(false);
  }

  async function forgotPasswordHandler(){
    setIsAuthenticating(true)
    try {
        const user = await forgotPass({email:email})
        Alert.alert('Reset Password', user.message)
        if(user){
            navigation.navigate('VerifyOtpScreen',{
                forgotPassword,
                email
            })
        }
        console.log(user.message)
    } catch (error) {
        Alert.alert('Failed', error.response.data.error)
    }
    setIsAuthenticating(false);

  }

//   async function confirmHandler() {
//     //   console.log(email)
//    const response = await axios.post(`${apiUrl}/api/v1/user/auth/generatotp/verifyemail`,JSON.stringify({email}), {headers:{"Content-Type":"application/json"}})

//    console.log(response)
//   }
if (isAuthenticating) {
    return <LoadingOverlay message="Sending otp code to your email" />;
  }
  // AsyncStorage.getItem('user').then(value=>{
  //     console.log(value)
  //   })
  //   AsyncStorage.getItem('token').then(value=>{
  //     console.log(value)
  //   })
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {forgotPassword ? "Forgot Password?" : "Email Verification"}
          </Text>
        </View>
        <Text style={styles.text}>Please fill in your valid email address</Text>
        <KeyboardAvoidingView behavior="position" style={styles.rootContainer}>
          <View style={styles.emailContainer}>
            <Input
              textConfig={{
                keyboardType: "email-address",
                placeholder: "Email",
                value: email,
                onChangeText: emailInputHandler,
              }}
            />
            <Text>{errorMessage}</Text>
          </View>
        </KeyboardAvoidingView>
        <View>
            {!forgotPassword && <PrimaryButton onPress={confirmHandler} style={styles.button}>
            Verify 
          </PrimaryButton>}
          
          {forgotPassword && <PrimaryButton onPress={forgotPasswordHandler} style={styles.button}>
            Continue
          </PrimaryButton>}
          
          {forgotPassword && (
            <FlatButton space={styles.margin} onPress={backToLoginHandler}>
              Back to Login
            </FlatButton>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 40,
    padding: 20,
    justifyContent: "space-between",
  },
  rootContainer: {
    flex: 1,
  },
  titleContainer: {},
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    textAlign: "center",
  },
  emailContainer: {
    flex: 1,
    marginVertical: 140,
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
  },
  margin: {
    marginTop: 20,
  },
  error:{
    textAlign: 'center',
    color: colors.error100
  }
});
