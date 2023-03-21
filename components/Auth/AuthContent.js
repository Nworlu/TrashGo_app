import { useNavigation, CommonActions } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import FlatButton from "../ui/FlatButton";
import IconButton from "../ui/IconButton";
import AuthForm from "./AuthForm";

function AuthContent({ isLogin, onAuthenticate }) {
  let navigation = useNavigation();
  const [forgotPassword, setForgotpassword] = useState(true);
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    password: false,
    passwordConfirm: false,
  });
  function sumbitHandler(credentials) {
    let { fullName, email, phoneNumber, password, passwordConfirm } =
      credentials;
    isLogin ? "" : (fullName = fullName.trim());
    email = email.trim();
    password = password.trim();

    // const fullNameIsValid = fullName !== ''
    // const emailIsvalid = email.includes('@')
    // const passwordIsValid = password.length > 8
    // const phoneNumberIsVaild = isLogin?"":phoneNumber.length >=11
    // const passwordAreEqual = isLogin?"":password === passwordConfirm
    // if(!emailIsvalid || !passwordIsValid || (!isLogin && !fullNameIsValid|| !phoneNumberIsVaild || !passwordAreEqual )){
    //         Alert.alert('Invalid input', 'Please check your entered credentials.');
    //     setCredentialsInvalid({
    //         fullName: !fullNameIsValid,
    //         email: !emailIsvalid,
    //         phoneNumber: !phoneNumberIsVaild,
    //         password: !passwordIsValid,
    //         passwordConfirm: !passwordAreEqual
    //     })
    //     return
    // }
    isLogin
      ? onAuthenticate({ email, password })
      : onAuthenticate({
          fullName,
          email,
          phoneNumber,
          password,
          passwordConfirm,
        });
    // onAuthenticate()
  }
  function switchAuthMode() {
    if (isLogin) {
      navigation.replace("SignupScreen");
    } else {
      navigation.replace("LoginScreen");
    }
  }
  function forgotButton() {
    navigation.navigate("EmailVerificationScreen", {
      forgotP: forgotPassword,
    });
  }
  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSumbit={sumbitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={isLogin && styles.option}>
        {isLogin && (
          <FlatButton style={styles.forgot} onPress={forgotButton}>
            Forgot password
          </FlatButton>
        )}

        <View style={styles.iconContainer}>
          <Text style={styles.innerText}>or continue with</Text>
          <View style={styles.iconInnerContainer}>
            <IconButton icon="logo-facebook" size={30} />
            <IconButton icon="logo-facebook" size={30} />
            <IconButton icon="logo-facebook" size={30} />
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <FlatButton onPress={switchAuthMode}>
          {isLogin
            ? "Don’t Have An Account? Sign Up"
            : "Already Have An Account? Sign In"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1
  },
  option: {
    // borderWidth: 1,
    flex: 0.6,
    paddingVertical: 50,
    marginTop: 10
  },
  button: {
    marginTop: 20,
    flex: 0.2,
  },
  forgot: {
    color: colors.green500,
    fontSize: 25,
  },
  iconContainer: {
    flex: 0,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  innerText: {
    marginVertical: 20,
    fontSize: 18,
  },
  iconInnerContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between'
    // borderWidth: 1,
  },
});
