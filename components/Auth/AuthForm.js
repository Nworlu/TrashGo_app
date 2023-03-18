import { useState } from "react";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import Input from "./Input";

function AuthForm({ isLogin, credentialsInvalid, onSumbit }) {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState("");

  const {
    fullName: fullNameIsInVaild,
    email: emailIsInvalid,
    phoneNumber: phoneNumberIsInvalid,
    password: passwordIsInvalid,
    passwordConfirm: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInput(inputType, enterdValue) {
    switch (inputType) {
      case "fullname":
        setEnteredFullName(enterdValue);
        break;
      case "email":
        setEnteredEmail(enterdValue);
        break;
      case "phonenumber":
        setEnteredPhoneNumber(enterdValue);
        break;
      case "password":
        setEnteredPassword(enterdValue);
        break;
      case "passwordconfirm":
        setEnteredPasswordConfirm(enterdValue);
        break;
    }
  }

  function sumbitHandler() {
    isLogin
      ? onSumbit({
          email: enteredEmail,
          password: enteredPassword,
        })
      : onSumbit({
          fullName: enteredFullName,
          email: enteredEmail,
          phoneNumber: enteredPhoneNumber,
          password: enteredPassword,
          passwordConfirm: enteredPasswordConfirm,
        });

    // console.log(enteredFullName)
  }

  return (
    <View style={styles.form}>
      <View>
        {!isLogin && (
          <Input
            isInvalid={fullNameIsInVaild}
            textConfig={{
              keyboardType: "default",
              placeholder: "Full Name",
              value: enteredFullName,
              onChangeText: updateInput.bind(this, "fullname"),
            }}
          />
        )}
        <Input
          isInvalid={emailIsInvalid}
          textConfig={{
            keyboardType: "email-address",
            placeholder: "Email",
            value: enteredEmail,
            onChangeText: updateInput.bind(this, "email"),
          }}
        />
        <Input
          isInvalid={passwordIsInvalid}
          textConfig={{
            keyboardType: "default",
            placeholder: "Password",
            value: enteredPassword,
            secureTextEntry: true,
            onChangeText: updateInput.bind(this, "password"),
          }}
        />
        {!isLogin && (
          <Input
            isInvalid={passwordsDontMatch}
            textConfig={{
              keyboardType: "default",
              placeholder: "Password Confirm",
              value: enteredPasswordConfirm,
              secureTextEntry: true,
              onChangeText: updateInput.bind(this, "passwordconfirm"),
            }}
          />
        )}
        {!isLogin && (
          <Input
            isInvalid={phoneNumberIsInvalid}
            textConfig={{
              keyboardType: "phone-pad",
              placeholder: "Phone number",
              value: enteredPhoneNumber,
              onChangeText: updateInput.bind(this, "phonenumber"),
            }}
          />
        )}
        <View style={styles.button}>
          <PrimaryButton onPress={sumbitHandler}>
            {isLogin ? "Sign in" : "Sign up"}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "space-around",
  },
  button: {
    marginTop: 20,
  },
});
