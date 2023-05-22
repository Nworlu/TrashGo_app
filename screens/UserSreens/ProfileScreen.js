import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconButton from '../../components/IconButton'

const ProfileScreen = ({navigation}) => {
    function handleNav(){
        navigation.navigate('StackNavigator', { screen: 'CompletedRideScreen'})
    }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.profileDiv}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, borderColor: 'black', borderWidth: 2, marginRight: 12 }}>

                    </View>
                    <View>
                        <Text>Jehoshaphat Egbe</Text>
                        <Text>+2348112959740</Text>
                    </View>
                </View>

                <IconButton icon={'arrow-forward'} color={'black'} size={30} />
            </View>
            <View>
                <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Pickups</Text>
                    <View style={{marginTop: 10}}>
                        <Pressable style={({pressed})=> pressed && styles.pressed}>
                            <View style={styles.goingDiv}>
                                <Text style={{fontWeight: 'bold'}}>On going</Text>
                                <IconButton icon={'arrow-forward'} color={'black'} size={30} />
                            </View>
                        </Pressable>
                        <Pressable onPress={handleNav} style={({pressed})=> pressed && styles.pressed}>
                            <View style={styles.completedDiv}>
                                <Text style={{fontWeight: 'bold'}}>Completed</Text>
                                <IconButton icon={'arrow-forward'} color={'black'} size={30} />
                            </View>
                        </Pressable>

                    </View>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>My Data</Text>
                    <View style={{marginTop: 10}}>
                        <Pressable style={({pressed})=> pressed && styles.pressed}>
                            <View style={styles.goingDiv}>
                                <Text style={{fontWeight: 'bold'}}>TrashGo Token</Text>
                                <IconButton icon={'arrow-forward'} color={'black'} size={30} />
                            </View>
                        </Pressable>
                        <Pressable  style={({pressed})=> pressed && styles.pressed}>
                            <View style={styles.completedDiv}>
                                <Text style={{fontWeight: 'bold'}}>My wallet</Text>
                                <IconButton icon={'arrow-forward'} color={'black'} size={30} />
                            </View>
                        </Pressable>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#fff'
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileDiv: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressed:{
        opacity: 0.67
    },
    goingDiv:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 10,
        paddingVertical:5,
        borderBottomWidth:2
    },
    completedDiv:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        paddingVertical:5,
        borderBottomWidth:2

    }
})
