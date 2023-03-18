import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function IconButton({icon,color,size,onPress,style}){
    return <View style={styles.outerContainer}>
        <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <View style={styles.innerContainer}>
        <Ionicons name={icon} style color={color} size={size} />
        </View>
    </Pressable>
    </View>
    
}

export default IconButton

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius: 10,
        paddingHorizontal: 1,
        paddingVertical: 1,
        marginHorizontal: 13,
        borderWidth: 1,
        
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        // padding: 10
    },
    button: {
        margin: 8,
        borderRadius: 20,
      },
      pressed: {
        opacity: 0.7,
      },
})