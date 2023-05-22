import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import Input from "../../../components/Input";
  import PrimaryButton from "../../../components/PrimaryButton";
  
  function CreateNewPasswordScreen() {
    return (
      <ScrollView style={styles.rootContainer}>
        <View style={styles.root}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create New Password</Text>
          </View>
          <Text style={styles.text}>Create Your New Password</Text>
          <KeyboardAvoidingView>
            <View style={styles.inputContainer}>
              <Input
                textConfig={{
                  inputMode: "email",
                  placeholder: "Password",
                  keyboardType: "default",
                  valu: "",
                  onChangeText: () => {},
                }}
              />
              <Input
              style={{marginTop: 60}}
                textConfig={{
                  inputMode: "email",
                  placeholder: "New Password",
                  keyboardType: "default",
                  valu: "",
                  onChangeText: () => {},
                }}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.button}>
            <PrimaryButton
              style={{
                width: "100%",
                marginHorizontal: 0,
                height: 55,
                marginTop: 20,
              }}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    );
  }
  export default CreateNewPasswordScreen;
  
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
      marginTop: 60,
      marginBottom: 60
    },
  });
  