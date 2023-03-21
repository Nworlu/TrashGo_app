const { Text, View, StyleSheet } = require("react-native");

function SettingsScreen(){
    return <View style={styles.container}>
        <Text>Settings </Text>
    </View>
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }
})