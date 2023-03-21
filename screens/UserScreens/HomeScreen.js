import { useContext } from "react";
import { AuthContext } from "../../util/auth-context";

const { Text, View, StyleSheet } = require("react-native");

function HomeScreen(){
    const authCtx = useContext(AuthContext);
    console.log(authCtx.token)
    return <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }
})