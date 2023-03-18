import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './screens/AuthScreens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen/OnboardingScreen';
import  AsyncStorage from '@react-native-async-storage/async-storage'
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/AuthScreens/SignupScreen';
import EmailVerificationScreen from './screens/AuthScreens/EmailVerificationScreen';
import CreateNewPasswordScreen from './screens/AuthScreens/CreateNewPasswordScreen';
import HomeScreen from './screens/UserScreens/HomeScreen';
import VerifyOtpScreen from './screens/AuthScreens/VerifyOtpScreen';
import AuthContextProvider, { AuthContext } from './util/auth-context';
import IconButton from './components/ui/IconButton';
import LoadingOverlay from './components/ui/LoadingOverlay';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

function BottomTabPages(){
  
}



export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(false)
  const [role, setRole] = useState(false)

  useEffect(()=>{
    // setAuth(true)
      AsyncStorage.getItem('AlreadyLaunch').then(value=>{
        if(value === null){
          AsyncStorage.setItem('AlreadyLaunch', 'true')
          setFirstLaunch(true)
        }else{
          setFirstLaunch(false)
        }
      })
      AsyncStorage.getItem('role').then(value=>{
        if(value === null){
          AsyncStorage.setItem('role', 'true')
          setRole(true)
        }else{
          setRole(false)
        }
      })

  },[])
  // function FirstScreen(){
  //   return <Stack.Navigator>
  //   </Stack.Navigator>
  // }
  function AuthStack(){
    return <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {firstLaunch && <Stack.Screen name='onBoardingScreen' component={OnboardingScreen} />}
     {role && <Stack.Screen options={{
        // headerShown: false
      }} name='WelcomeScreen' component={WelcomeScreen} />}
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
      <Stack.Screen name='EmailVerificationScreen' component={EmailVerificationScreen} />
      <Stack.Screen name='CreateNewPasswordScreen' component={CreateNewPasswordScreen} />
      <Stack.Screen name='VerifyOtpScreen' component={VerifyOtpScreen} />
      {/* <Stack.Screen name='BottomTabs' component={AuthenticatedStack} /> */}
    </Stack.Navigator>
  }
  function AuthenticatedStack(){
  let authCtx = useContext(AuthContext)
    return <BottomTab.Navigator>
    <BottomTab.Screen name='HomePage' component={HomeScreen} options={{
      headerRight: ({tintColor})=><IconButton icon='exit' color={tintColor} style={styles.iconButton} size={24} onPress={authCtx.logout}/>
    }} />
  </BottomTab.Navigator>
  }
  function Navigation(){
  let authCtx = useContext(AuthContext)
  console.log(authCtx.userData)
  console.log(authCtx.isAuthenticated+"token")
    return <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack/>}
      {authCtx.isAuthenticated && <AuthenticatedStack/>}
      {/* {authCtx.userData.isActive ===false || !authCtx.isAuthenticated? <AuthStack/>:<AuthenticatedStack/>} */}
    </NavigationContainer>
  }
  function Root(){
    const [isTryingLogin, setIsTryingLogin] = useState(true)
    let authCtx = useContext(AuthContext)
    useEffect(()=>{
      async function fetchToken(){
       const storedToken = await AsyncStorage.getItem('token')
       if(storedToken){
        authCtx.authenticate(storedToken)
       }
       setIsTryingLogin(false)
      }
      fetchToken()
    },[])

    if(isTryingLogin){
      return <LoadingOverlay message={'Loading.........'} />
    }

    return <Navigation/>
  }
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
      <Root/>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
  iconButton:{
    justifyContent: 'center',
        alignItems: 'center'
  }
});
