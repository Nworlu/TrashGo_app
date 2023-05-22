import { StyleSheet, TextInput, View } from "react-native"
import colors from "../constant/colors"

function Input({textConfig,style,inputDesign}){
    return <View style={[styles.inputContainer, style]}>
        <TextInput {...textConfig} style={[styles.input,inputDesign]} />
    </View>
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 20
    },
    input:{
        borderWidth: 2,
        paddingVertical: 15,
        borderRadius:10,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: 'bold'
    }
})