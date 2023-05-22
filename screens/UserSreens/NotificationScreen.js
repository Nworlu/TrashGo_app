import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const NotificationScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.notContainer}>
        <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 10}}>Today</Text>
        <View style={{justifyContent: 'space-evenly'}}>
        <View style={styles.notdiv}>
          <Ionicons name="wallet-outline" color={'white'} size={50}/>
          <View style={{width: 220}}>
            <Text style={{fontSize: 17,fontWeight: '700', color: 'white'}}>Payment Successful</Text>
            <Text style={{fontSize: 13,fontWeight: '400', color: 'white', marginTop: 10}}>You have made a recycling payment</Text>
          </View>
        </View>
        <View style={styles.notdiv}>
          <Ionicons name="wallet-outline" color={'white'} size={50}/>
          <View style={{width: 220}}>
            <Text style={{fontSize: 17,fontWeight: '700', color: 'white'}}>Credit Card Connected</Text>
            <Text style={{fontSize: 13,fontWeight: '400', color: 'white', marginTop: 10}}>Credit Card has been linked</Text>
          </View>
        </View>
        <View style={styles.notdiv}>
          <Ionicons name="wallet-outline" color={'white'} size={50}/>
          <View style={{width: 220}}>
            <Text style={{fontSize: 17,fontWeight: '700', color: 'white'}}>Account Setup Successful</Text>
            <Text style={{fontSize: 13,fontWeight: '400', color: 'white', marginTop: 10}}>Your account has been created</Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  notContainer:{
    marginTop:20,
    marginHorizontal: 20
  },
  notdiv:{
    backgroundColor: '#026937',
    width: 336,
    height: 104,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginVertical: 15
  }
})
