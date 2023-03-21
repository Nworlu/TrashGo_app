import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Auth/Input";
import FlatButton from "../../components/ui/FlatButton";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { resetPassword } from "../../util/http";

function CreateNewPasswordScreen({route, navigation}) {
    const [isChangingPass, setIsChangingPass] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')
    let forgotPassword = route.params?.forgotPassword
    forgotPassword = !!forgotPassword
    console.log(forgotPassword)
    
    function updateInput(inputType, enterdValue){
        switch(inputType){
            case "password":
                setPassword(enterdValue)
                break;
            case "passwordConfirm":
                setPasswordConfirm(enterdValue)
                break;
        }
    }

    async function ChangePasswordHandler(){
        setIsChangingPass(true)
        try {
            const user = await resetPassword({password:password,passwordConfirm:passwordConfirm})
            if(user){
                Alert.alert('Successful', "You have Created a new password Please login")
                navigation.replace('LoginScreen')
            }
            console.log(user)
        } catch (error) {
            console.log(error.response)
            Alert.alert('Failed', error.response.data.message)
        }
        setIsChangingPass(true)

    }
    if(isChangingPass){
        return <LoadingOverlay message={'Changing User password'} />
    }
    console.log(password, passwordConfirm)
  return (
<ScrollView style={styles.rootContainer}>
      <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
        Create New Password
        </Text>
      </View>
      <Text style={styles.text}>Create Your New Password</Text>
        <KeyboardAvoidingView behavior="position" style={styles.rootContainer}>
      <View style={styles.emailContainer}>
      <Input style textConfig={{
        keyboardType: 'default',
        placeholder: 'Password',
        value: password,
        secureTextEntry: true,
        onChangeText: updateInput.bind(this,'password')
      }} />
      <Input textConfig={{
        keyboardType: 'default',
        placeholder: 'Password Confirm',
        value: passwordConfirm,
        secureTextEntry: true,
        onChangeText: updateInput.bind(this,'passwordConfirm')
      }} />
      </View>
        </KeyboardAvoidingView>
      <View >
        <PrimaryButton onPress={ChangePasswordHandler} style={styles.button}>
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

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({
    root:{
        flex: 1,
        marginVertical: 40,
        padding: 20,
        justifyContent:'space-between'
    },
    rootContainer:{
        flex: 1
    },
    titleContainer:{
        // marginTop: 20
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'left'
    },
    emailContainer:{
        flex: 1,
        marginVertical: 100,
        justifyContent: 'center'
    },
    button:{
        justifyContent: 'center',
    },
})
