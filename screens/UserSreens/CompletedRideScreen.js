import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CompletedRideScreen = () => {
  return (
    <View style={styles.rootContainer}>
        <View style={styles.rootDiv}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, fontWeight: '600'}}>Tuesday, 15 May </Text>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600'}}>Token Earned</Text>
                    <View style={{backgroundColor:'#008000', width: 62,height: 20, }}>
                        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>5</Text>
                    </View>
                </View>
            </View>
            <View style={{marginVertical: 12}}>
                <Text style={{color:'#808080', fontWeight: '500', fontSize: 15}}>Pickup address</Text>
                <Text style={{fontWeight: '500', fontSize: 15}}>f close first avenue gwarinpa</Text>
            </View>
            <View>
                <Text style={{color:'#808080', fontWeight: '500', fontSize: 15}}>Total Bill</Text>
                <Text style={{fontWeight: '500', fontSize: 15}}>1100</Text>
            </View>
        </View>
    </View>
  )
}

export default CompletedRideScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rootDiv:{
        width: 336,
        height: 190,
        borderRadius: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        padding: 16,
    }
})
