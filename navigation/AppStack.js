import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { AuthContext } from "../context/AuthContext";
import HomeScreen from "../screens/UserSreens/HomeScreen";
import RequestPickup from "../screens/UserSreens/RequestPickup";
import RewardScreen from "../screens/UserSreens/RewardScreen";
import SettingScreen from "../screens/UserSreens/SettingScreen";
import BookingSummaryScreen from "../screens/UserSreens/BookingSummaryScreen";
import ProfileScreen from "../screens/UserSreens/ProfileScreen";
import CompletedRideScreen from "../screens/UserSreens/CompletedRideScreen";
import NotificationScreen from "../screens/UserSreens/NotificationScreen";

const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


function StackNavigator(){
    return <Stack.Navigator screenOptions={{
        headerShadowVisible: false,
    }}>
        <Stack.Screen name="RewardScreen" component={RewardScreen} options={{
            title:'',
        }} />
        <Stack.Screen name="RequestScreen" component={RequestPickup} options={{
            headerLeft:({canGoBack,tintColor})=><IconButton icon={'arrow-back'} color={tintColor} size={25} />,
            title:'',
            contentStyle:{
                backgroundColor: 'white'
            }
        }} />
        <Stack.Screen name="BookingSummaryScreen" component={BookingSummaryScreen} options={{
            headerLeft:({canGoBack,tintColor})=><IconButton icon={'arrow-back'} color={tintColor} size={25} />,
            title:'Booking Summary',
            contentStyle:{
                backgroundColor: 'white'
            }
        }} />
        <Stack.Screen name="CompletedRideScreen" component={CompletedRideScreen} options={({navigation})=>({
            headerLeft:({canGoBack,tintColor})=><IconButton icon={'arrow-back'} onPress={()=>navigation.navigate('ProfileScreen')} color={tintColor}  size={25} />,
            title:'Completed Pickups',
            contentStyle:{
                backgroundColor: 'white'
            }
        })} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={({navigation})=>({
            headerLeft:({canGoBack,tintColor})=><IconButton icon={'arrow-back'} onPress={()=>navigation.navigate('HomeScreen')} color={tintColor}  size={25} />,
            title:'Notification',
            contentStyle:{
                backgroundColor: 'white'
            }
        })} />
    </Stack.Navigator>
}

function AppStack(){
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    function handleNavigation(){
        navigation.navigate('StackNavigator', {screen: 'NotificationScreen'})
    }
    return <Tabs.Navigator screenOptions={{
        headerShadowVisible: false,
    }}>
        <Tabs.Screen options={({navigation})=>({
            headerShadowVisible: false,
            tabBarIcon: ({color,size})=><Ionicons name="home-outline" color={color} size={size} />,
            headerRight: ({})=><Ionicons name="notifications-outline" style={styles.icon} onPress={handleNavigation} color={'black'} size={36} />,
            headerLeft:()=><View style={styles.userContainer}>
                <Text style={styles.text}>Hi {authCtx.userData.fullName}</Text>
            </View>,
            title: '',
            tabBarLabel: 'Home'
        })} name="HomeScreen" component={HomeScreen}/>
        <Tabs.Screen  name="StackNavigator" component={StackNavigator} options={{
          headerShown: false,
          tabBarItemStyle:{
            display: 'none'
          },
          tabBarStyle:{
            display: 'none'
          }
        }} />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
}
export default AppStack
const styles = StyleSheet.create({
    userContainer:{
        marginLeft: 26
    },
    title:{
        fontSize:12
    },
    text:{
        fontSize: 19,
        fontWeight: 'bold'
    },
    icon:{
        marginRight:26
    }
})
