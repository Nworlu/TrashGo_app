import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constant/colors";

function FlatButton({children, onPress, style}){
    return <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
    <View style={[styles.outerContainer, style]}>
        <Text style={[styles.innerText]}>{children}</Text>
    </View>
</Pressable>
}
export default FlatButton

const styles = StyleSheet.create({
    outerContainer: {
      marginHorizontal: 20,
      width: 70,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'visible',
    },
    innerText:{
      textAlign: 'center',
      color: colors.green500,
      fontSize: 18,
    },
    pressed: {
      opacity: 0.75,
      backgroundColor: colors.gray200,
      overflow: 'visible',
      borderRadius: 10,
      color: 'white'

    }
  });