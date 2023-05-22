import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input from "../../../components/Input";
import PrimaryButton from "../../../components/PrimaryButton";

function EmailVerificationScreen() {
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Email verifcation</Text>
        </View>
        <Text style={styles.text}>Please fill in your valid email address</Text>
        <KeyboardAvoidingView>
          <View style={styles.inputContainer}>
            <Input
              textConfig={{
                inputMode: "email",
                placeholder: "Email",
                keyboardType: "email-address",
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
              height: 50,
              marginTop: 20,
            }}
          >
            Send Verification code
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}
export default EmailVerificationScreen;

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
    marginVertical: 140,
  },
});
