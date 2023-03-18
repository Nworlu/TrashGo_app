import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Auth/Input";
import FlatButton from "../../components/ui/FlatButton";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import PrimaryButton from "../../components/ui/PrimaryButton";

function CreateNewPasswordScreen({route, navigation}) {
    const [isChangingPass, setIsChangingPass] = useState(false)
    let forgotPassword = route.params?.forgotP
    forgotPassword = !!forgotPassword
    console.log(forgotPassword)
    function backToLoginHandler(){
        navigation.goBack()
    }
    async function ChangePasswordHandler(){
        setIsChangingPass(true)
        try {
            // setTimeout(()=>{
                if(!isChangingPass){
                    navigation.navigate('LoginScreen')
                    Alert.alert('SuccessFully')
                }
            // },4000)
        } catch (error) {
            Alert.alert('Failed')
            setIsChangingPass(false)
        }
    }
    if(isChangingPass){
        return <LoadingOverlay message={'Changing password'} />
    }
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
        keyboardType: 'email-address',
        placeholder: 'Password',
      }} />
      <Input textConfig={{
        keyboardType: 'default',
        placeholder: 'Password Confirm'
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
