import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../constants/colors";

function Input({ textConfig, style, isInvalid }) {
  return (
    <View style={styles.inputContainer}>
      {/* <Text style={styles.label}></Text> */}
      <TextInput style={[styles.input,style, isInvalid && styles.inputInvalid]} {...textConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 3,
    // marginVertical: 10
  },
  label: {},
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginVertical: 9,
  },
  inputInvalid: {
    backgroundColor: colors.error100,
  },
});
