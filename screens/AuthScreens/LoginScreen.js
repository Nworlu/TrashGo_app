import axios from 'axios'
import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { AuthContext } from '../../util/auth-context';
import { login } from "../../util/http";
let apiUrl = "https://trashgo.onrender.com"

function LoginScreen({navigation}) {
    let authCtx = useContext(AuthContext)
    const [error,setError] = useState()
  const [isAuthenticating, setIsAuthenticating] = useState(false);
    async function loginHandler({email, password}){
      setIsAuthenticating(true)
        try {
            const response = await axios.post(`${apiUrl}/api/v1/user/login`, JSON.stringify({email,password}), {headers:{"Content-Type":"application/json"}})
            if(response.data.data.user){
              authCtx.authenticate(response.data.token)
              authCtx.setUser(response.data.data.user)
              console.log(response.data.data)
                    // navigation.replace('HomeScreen')
            }
            // if(response.data.data.user.isActive === true){
            //         navigation.replace('HomeScreen')
            // } 
        } catch (error) {
            // console.log(authCtx.userData)
            Alert.alert('Authentication failed', `${error.response.data.error}`)
            setError(error.response.data.error)
            if(error.response.data.error === 'Please verifty your account before you can login'){
                navigation.replace('EmailVerificationScreen')
            }
        }
        setIsAuthenticating(false);
    }
    if (isAuthenticating) {
        return <LoadingOverlay message="Logging in user" />;
    }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
      </View>
      <View style={styles.form}>
        <AuthContent isLogin onAuthenticate={loginHandler} />
      </View>
      <View>
        
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30
  },
  form: {
    flex: 1,
    marginTop: 20,
    // borderWidth: 1
    justifyContent: "space-between",
  },
});
