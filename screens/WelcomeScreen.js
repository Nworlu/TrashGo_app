import { useState } from "react";
import { Alert, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import RadioButton from "../components/RadioButton";

function WelcomeScreen({navigation}) {
    const [roleOption,setRoleOption] = useState(null)
    let data = [
        { role: 'driver',imageUrl:require('../assets/driver.png') },
        { role: 'user', imageUrl:require('../assets/user.png') }
    ]

    function userButton(value){
        setRoleOption(value)
        Alert.alert(`You have selected the ${value} role`, `please sign in to continue`)
        if(value === 'driver'){
            navigation.navigate('LoginScreen')
            console.log(value)
        } else{
            console.log(value)
            navigation.navigate('LoginScreen')
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>TrashGo</Text>
        <Text style={styles.textHeader}>Choose a role</Text>
        <Text style={styles.text}>Who do you want to register as?</Text>
      </View>
      <View style={styles.roleContainer}>
        <RadioButton onPress={userButton} roleOption={roleOption}  roles={data} />
      </View>
    </View>
  );
}
// lil float
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  textContainer:{
    justifyContent: 'space-between',
    alignContent: 'center',
    flex: 0.3
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },
  text:{
    textAlign: 'center',
    fontSize: 17,
  },
  roleContainer:{
    flexDirection: 'row',
    alignContent: 'center',
    overflow: 'hidden',
    marginVertical: 20

  }
});
