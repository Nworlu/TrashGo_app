import axios from 'axios'
import { useContext } from 'react';
import { StyleSheet, Text, View } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import { AuthContext } from '../../util/auth-context';
import { login } from "../../util/http";
let apiUrl = "https://trashgo.onrender.com"

function LoginScreen() {
    let authCtx = useContext(AuthContext)
    async function loginHandler({email, password}){
        try {
            const response = await axios.post(`${apiUrl}/api/v1/user/auth/login`, JSON.stringify({email,password}), {headers:{"Content-Type":"application/json"}})
            authCtx.authenticate(response.data.token)
            authCtx.setUser(response.data.data.user)
            // if(response.data)
            // const user = await login(email, password)
            // console.log(user)
            console.log(response.data)
        } catch (error) {
            
        }
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
