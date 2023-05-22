import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import colors from '../constant/colors';
function RadioButton({onPress,roleOption, roles}){
    return <>
    {roles.map(role=>{
        return <View style={styles.outerContainer} key={role.role}>
    <Pressable onPress={()=>onPress(role.role)} style={({pressed})=> pressed && styles.pressed}>
        <View style={styles.imageWrapper}>
    <ImageBackground resizeMode="center" style={styles.image} source={role.imageUrl} >
    {role.role === roleOption?  <Ionicons
                  name="checkbox"
                  color={colors.green500}
                  style={{ position: "absolute", top: 10, right: 20 }}
                  size={16}
                />: ''}
        <Text style={styles.imageText}>{role.role.toUpperCase()}</Text>
    </ImageBackground>

        </View>
    </Pressable>
</View>
    })}
    </>
}
export default RadioButton

const styles = StyleSheet.create({
    outerContainer: {
        overflow: "hidden",
        // borderWidth: 1,
        padding: 20,
      },
      imageWrapper: {
        width: 160,
        height: 160,
        overflow: "visible",
        padding: 10,
        // borderWidth: 1,
        alignItems: "center",
      },
      image: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 3,
      },
      imageText: {
        textAlign: "center",
        padding: 40,
        color: "black",
        fontSize: 15,
        fontWeight: 'bold'
      },
      pressed: {
        opacity: 0.5,
        overflow: "hidden",
        width: "100%",
      },
})