import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constant/colors";

function PrimaryButton({children, onPress, style}){
    return <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
    <View style={[styles.outerContainer, style]}>
        <Text style={styles.innerText}>{children}</Text>
    </View>
</Pressable>
}
export default PrimaryButton

const styles = StyleSheet.create({
    outerContainer: {
      backgroundColor: '#026937',
      marginHorizontal: 20,
      width: 70,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden'
    },
    innerText:{
      textAlign: 'center',
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    pressed: {
      opacity: 0.75,
    }
  });