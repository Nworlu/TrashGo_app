import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from 'axios'
import Input from "../../../components/Input";
import { AuthContext } from '../../../context/AuthContext';
import PrimaryButton from "../../../components/PrimaryButton";
import { useContext, useState } from "react";
import LoadingOverlay from "../../../components/LoadingOverlay";

let apiUrl = "https://trashgo.onrender.com"
function EmailVerificationScreen() {
  const [enteredEmail,setEnteredEmail] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)
  function updateInputHandler(inputType, enteredValue){
    switch (inputType) {
        case 'email':
            setEnteredEmail(enteredValue)
            break;
}
  }
 async function resendEmail(){
    setIsAuthenticating(true)
    try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/resendverification`, JSON.stringify({email:enteredEmail}),   {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://trashgo.onrender.com", // replace with your own domain
      },
      mode: "cors",
      credentials: "include",
    })
    console.log(response)
    } catch (error) {
      console.log(error.response.data)
    }
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <LoadingOverlay message='Sending Otp code to user'/>
}

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Email verifcation</Text>
        </View>
        <Text style={styles.text}>Please fill in your valid email address</Text>
        <KeyboardAvoidingView>
          <View style={styles.inputContainer}>
            <Input
              textConfig={{
                inputMode: "email",
                placeholder: "Email",
                keyboardType: "email-address",
                value: enteredEmail,
                onChangeText: updateInputHandler.bind(this,'email')
              }}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.button}>
          <PrimaryButton
            style={{
              width: "100%",
              marginHorizontal: 0,
              height: 50,
              marginTop: 20,
            }}
            onPress={resendEmail}
          >
            Send Verification code
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}
export default EmailVerificationScreen;

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
    justifyContent: "center",
    marginVertical: 140,
  },
});
