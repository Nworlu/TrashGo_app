import { useContext, useEffect, useRef, useState } from "react";
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
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import PrimaryButton from "../../components/ui/PrimaryButton";
import colors from "../../constants/colors";
import { AuthContext } from "../../util/auth-context";
import { verifyOtp } from "../../util/http";

function VerifyOtpScreen({ route, navigation }) {
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
  const [OTP,setOTP] = useState()
  let forgotPassword = route.params?.forgotP;
  forgotPassword = !!forgotPassword;
//   console.log(forgotPassword);
  function backToLoginHandler() {
    navigation.goBack();
  }
  let data ={
    pin1,pin2,pin3,pin4
  }
  let objisValid=obj=>{
    // return Object.values(obj).every(val=>console.log(val))
    return Object.values(obj)
  }
 let otp =objisValid(data).join('').toString()
//  console.log(typeof parseInt(otp))
  async function verifyOtpHandler() {
    setIsAuthenticating(true)
    try {
        let user = await verifyOtp({otpCode:parseInt(otp)})
        authCtx.authenticate(user.token)
        authCtx.setUser(user.user)
        console.log(authCtx.userData)
        if(authCtx.userData.isActive === true){
            navigation.replace('LoginScreen')
        }
        
    } catch (error) {
        console.log(error)
        
    }
    setIsAuthenticating(false);

  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Verifying User's email" />;
  }
  if (isChangingPass) {
    return <LoadingOverlay message={"Changing password"} />;
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Verify That it is you</Text>
        </View>
        <Text style={styles.text}>
          We have sent a 4 digit otp to {authCtx.userData.email}
        </Text>
        <KeyboardAvoidingView behavior="position" style={styles.rootContainer}>
          <View style={styles.emailContainer}>
            <Input
              style={styles.input}
              textConfig={{
                ref:pin1Ref,
                keyboardType: "number-pad",
                maxLength: 1,
                onChangeText: (pin1)=>{
                    setPin1(pin1)
                    if(pin1 !== ""){
                        pin2Ref.current.focus()
                    }
                }
              }}
            />
            <Input
              style={styles.input}
              textConfig={{
                ref:pin2Ref,
                keyboardType: "number-pad",
                maxLength: 1,
                onChangeText: (pin2)=>{
                    setPin2(pin2)
                    if(pin2!==""){
                        pin3Ref.current.focus()
                    }
                }
              }}
            />
            <Input
              style={styles.input}
              textConfig={{
                ref:pin3Ref,
                keyboardType: "number-pad",
                maxLength: 1,
                onChangeText: (pin3)=>{
                    setPin3(pin3)
                    if(pin3!==""){
                        pin4Ref.current.focus()
                    }
                }
              }}
            />
            <Input
              style={styles.input}
              textConfig={{
                ref:pin4Ref,
                keyboardType: "number-pad",
                maxLength: 1,
                onChangeText: (pin4)=>{
                    setPin4(pin4)
                }
              }}
            />
          </View>
        </KeyboardAvoidingView>
        <View>
          <PrimaryButton onPress={verifyOtpHandler} style={styles.button}>
            Confirm
          </PrimaryButton>
          {/* {forgotPassword &&<FlatButton space={styles.margin} onPress={backToLoginHandler}>
            Back to Login
        </FlatButton>
        } */}
        </View>
      </View>
    </ScrollView>
  );
}

export default VerifyOtpScreen;

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
  titleContainer: {
    // marginTop: 20
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
  emailContainer: {
    flexDirection: "row",
    flex: 1,
    marginVertical: 140,
    justifyContent: "center",
    // marginBottom: 30
  },
  button: {
    justifyContent: "center",
  },
  input:{
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 20,
    width: 60,
    height: 60,
    backgroundColor: colors.gray200,
    textAlign: 'center',
    fontSize: 27,
    color: 'white'
  }
});
