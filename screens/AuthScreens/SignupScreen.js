import { useState, useEffect, useContext } from "react";
import axios from "axios";
import  AsyncStorage from '@react-native-async-storage/async-storage'
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { signup } from "../../util/http";
import { AuthContext } from "../../util/auth-context";
let apiUrl = "https://trashgo.onrender.com"

function SignupScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState()
  let authCtx = useContext(AuthContext)
 
  async function signupHandler({fullName, email, phoneNumber,password, passwordConfirm}){
      setIsAuthenticating(true)
      try {
          const user = await signup(fullName, email, phoneNumber,password, passwordConfirm)
          authCtx.authenticate(user.token)
          authCtx.setUser(user.data.user)
          if(user.data.user){
              if(user.data.user.isActive === false){
                navigation.navigate('EmailVerificationScreen')
              }
              console.log(user.token)
          } 
      } catch (error) {
        console.log(error)
      }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user" />;
  }

  return (
    <View style={styles.root}>
      <ScrollView style={styles.root}>
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <View>
              <Text style={styles.title}>Create Your Account</Text>
            </View>
            <View style={styles.form}>
              <AuthContent onAuthenticate={signupHandler} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  form: {
    flex: 1,
    marginTop: 80,
    // borderWidth: 1
    justifyContent: "space-between",
  },
});
