import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import RadioButton from "../components/ui/RadioButton";

function WelcomeScreen({navigation}){
    const [roleOption,setRoleOption] = useState(null)
    let data = [
        { role: 'driver',imageUrl:require('../assets/driver.png') },
        { role: 'user', imageUrl:require('../assets/user.png') }
    ]

    function userButton(value){
        setRoleOption(value)
        Alert.alert(`You have selected the ${value} role`, `please sign in to continue`)
        if(value === 'driver'){
            navigation.replace('LoginScreen')
            console.log(value)
        } else{
            console.log(value)
            navigation.replace('LoginScreen')
        }
    }

    return <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>TrashGo</Text>
                <Text style={styles.title}>Choose a role</Text>
                <Text style={styles.title}>Who do you want to register as?</Text>
            </View>
            <View style={styles.roleContainer}>
                <RadioButton onPress={userButton} roleOption={roleOption}  roles={data}/>
              {/* <RadioButton roles={data} onPress={driverButton} imageUrl={require('../assets/driver.png')} >Driver</RadioButton>
              <RadioButton onPress={userButton} imageUrl={require('../assets/user.png')} >User</RadioButton> */}
            </View>
    </View>
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleContainer:{
        justifyContent: 'space-between',
        flex: 0.3
    },
    roleContainer:{
        marginVertical: 20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
  
})