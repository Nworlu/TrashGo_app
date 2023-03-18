import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native"
import colors from "../../constants/colors"

function PrimaryButton({children, style, onPress}){
    return <View style={styles.outerContainer}>
        <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
            <View style={[styles.innerContainer, style]}>
                <Text style={styles.text}>{children}</Text>
            <Ionicons name="arrow-forward" color={'white'} size={19} />
            </View>
        </Pressable>
    </View>
}

export default PrimaryButton

const styles = StyleSheet.create({
    outerContainer:{
        backgroundColor: colors.accent500,
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text:{
        fontSize: 19,
        color: 'white'
    },
    pressed:{
        opacity: 0.75
    }
})