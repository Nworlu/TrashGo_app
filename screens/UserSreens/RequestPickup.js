import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import FlatButton from '../../components/FlatButton'

const RequestPickup = ({navigation}) => {
    function handleNavigation() {
      navigation.navigate('StackNavigator', {screen: 'MapScreen'})
    }
  return (
    <View style={styles.root}>
      <View style={styles.selectItemContainer}>
      <Text>Let’s recycle</Text>
        <Text style={styles.selectItemText}>Please Select The Items you want to recycle</Text>
        <View style={styles.selectItemProduct}>
            <View style={styles.selectItemProductContent}>
                <Image source={require('../../assets/trash-pro.png')}/>
                <Text>Paper</Text>
            </View>
        </View>
      </View>
      <PrimaryButton onPress={handleNavigation} style={{width: '100%', marginHorizontal:0,height:60}} >
        Next
      </PrimaryButton>
    </View>
  )
}

export default RequestPickup

const styles = StyleSheet.create({
    root:{
        flex: 1,
        marginHorizontal:17,
        justifyContent: 'space-between',
        marginBottom: 27,
    },
    selectItemContainer:{
        marginVertical: 20
    },
    selectItemText:{
        fontSize: 17,
        fontWeight: 'bold'
    },
    selectItemProduct:{
        flexDirection: 'row',
    },
    selectItemProductContent:{
      backgroundColor: '#026937',
      width: 148,
      height: 148,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 10
    }

})
