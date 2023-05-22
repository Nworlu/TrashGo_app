import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
 
function IconButton({onPress,icon,color,size,styless}){
    return <View>
        <Pressable onPress={onPress} style={({pressed})=> pressed &&  styles.pressed} >
            <Ionicons name={icon} color={color} size={size} style={styless} />
        </Pressable>
    </View>
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity:0.65,
        
    }
})