import axios from 'axios'
import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, View } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { AuthContext } from '../../util/auth-context';
import { login } from "../../util/http";
let apiUrl = "https://trashgo.onrender.com"

function LoginScreen({navigation}) {
    const authCtx = useContext(AuthContext)
    const [error,setError] = useState()
  const [isAuthenticating, setIsAuthenticating] = useState(false);


 

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
      </View>
      <View style={styles.form}>
        <AuthContent isLogin onAuthenticate={authCtx.login} />
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
