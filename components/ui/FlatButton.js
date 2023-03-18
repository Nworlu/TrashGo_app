import { Pressable, StyleSheet, Text, View } from "react-native"
import colors from "../../constants/colors"

function FlatButton({children, onPress, style,space}){
    return <View style={[styles.outerContainer, space]}>
        <Pressable onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={[styles.text, style]}>{children}</Text>
            </View>
        </Pressable>
    </View>
}

export default FlatButton

const styles = StyleSheet.create({
    outerContainer:{
        borderColor: 'black',
        // borderWidth: 2,
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 19,
        color: 'black',
        textAlign: 'center'
    }
})