import { Pressable, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import IconButton from '../../components/IconButton'
import PrimaryButton from '../../components/PrimaryButton'
import LoadingOverlay from '../../components/LoadingOverlay'
import { AuthContext } from '../../context/AuthContext'

const apiURL = 'https://trashgo.onrender.com'
const ProfileScreen = ({navigation}) => {
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext)
    function handleNav(){
        navigation.navigate('StackNavigator', { screen: 'CompletedRideScreen'})
    }
    console.log(authCtx.token)
    const token = authCtx.token
    async function handleLogout(){
        setIsAuthenticating(true)
        try {
            const response = await axios.get(`${apiURL}/api/v1/auth/logout`, {headers:{
                Authorization: `Bearer ${token}`
            }} )
            if(response.data){
                authCtx.logout()
                navigation.replace('LoginScreen')
            }
            console.log(response)
        } catch (error) {
            console.log(error.response)
        }
        setIsAuthenticating(false)
    }
    if(isAuthenticating){
        return <LoadingOverlay message={'Logging out user'} />
    }
    return (
        <View style={styles.rootContainer}>
            <View>
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

            <PrimaryButton style={{width: '100%',marginHorizontal: 0}} onPress={handleLogout}>
                Log Out
            </PrimaryButton>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
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
