import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'

const BookingSummaryScreen = () => {
  return (
    <View style={styles.root}>
        <View>
        <Text style={styles.pickText}>You are scheduling pickup on </Text>
        <View style={styles.summaryContainer}>
            <View style={styles.summaryContainer2}>
                <View>
                    <Text style={styles.text}>Date</Text>
                    <Text>Tuesday 15 May</Text>
                </View>
                <View>
                    <Text style={styles.text}>Estimated fee</Text>
                    <Text>1100 - 1200</Text>
                </View>
            </View>
            <View  style={styles.summaryContainer2}>
                <View>
                    <Text style={styles.text}>Driver and Vehicle</Text>
                    <Text>Godwin, Toyota</Text>
                </View>
                <View>
                    <Text style={styles.text}>Items to recycle</Text>
                    <Text>9am-12pm</Text>
                </View>
            </View>
        </View>
        </View>

        <View>
            <PrimaryButton style={{width:'100%', marginHorizontal: 0, height: 60}}>
                Confirm
            </PrimaryButton>
            <PrimaryButton style={{width:'100%', marginHorizontal: 0, marginTop: 20,height: 60}}>
            Reschedule Pickup
            </PrimaryButton>
        </View>
    </View>
  )
}

export default BookingSummaryScreen

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
