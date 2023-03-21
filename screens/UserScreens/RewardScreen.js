const { Text, View, StyleSheet } = require("react-native");

function RewardScreen(){
    return <View style={styles.container}>
        <Text>Reward</Text>
    </View>
}

export default RewardScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    }
})