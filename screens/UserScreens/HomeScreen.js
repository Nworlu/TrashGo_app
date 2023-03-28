import { useContext } from "react";
import { AuthContext } from "../../util/auth-context";

const { Text, View, StyleSheet } = require("react-native");

function HomeScreen(){
    const { userInfo } = useContext(AuthContext);
    const authCtx = useContext(AuthContext);
    console.log(userInfo.data.user["fullName"])
    return <>
    <View style={styles.container}>
        <Text>{userInfo.data.user["fullName"]}</Text>
    </View>
    </>
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }
})