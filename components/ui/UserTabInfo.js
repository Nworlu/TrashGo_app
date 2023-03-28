import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../util/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
function UserTabInfo({fullname}) {
    const authCtx = useContext(AuthContext);
    console.log('Home page', authCtx.userData)
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>Good Morning</Text>
      <Text style={styles.text}>hi</Text>
    </View>
  );
}

export default UserTabInfo;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical:12,
        marginHorizontal: 20
    },
    timeText:{
        fontSize: 14,
        fontWeight: '100'
    },
    text:{
        fontSize: 18,
        fontWeight: "bold"
    }
})