import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import Input from '../../components/Input'

const ConfirmWasteScreen = () => {
  return (
    <View style={styles.root}>
        <View>
        <Text style={styles.pickText}>Confirm The type of waste and the weight </Text>
        <View style={styles.summaryContainer}>
            <View style={styles.summaryContainer2}>
                <View>
                    <Text style={styles.text}>weight of the waste</Text>
                    <Input textConfig={{
                        placeHolder: 'Kg'
                    }} />
                </View>
            </View>
        </View>
        </View>

        <View>
            <PrimaryButton style={{width:'100%', marginHorizontal: 0, height: 60}}>
                Confirm
            </PrimaryButton>
        </View>
    </View>
  )
}

export default ConfirmWasteScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        marginHorizontal: 12,
        marginVertical:27,
        justifyContent: 'space-between'
    },
    summaryContainer:{
        borderTopWidth:2,
        borderBottomWidth:2,
        marginTop:30
    },
    pickText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryContainer2:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:15
    },
    text:{
        fontSize: 17,
        fontWeight: "bold",
      }
})
