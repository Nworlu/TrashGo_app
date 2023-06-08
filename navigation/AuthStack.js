import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnBoardingScreen from "../screens/OnBoardingScreen"
import CreateNewPasswordScreen from "../screens/UserSreens/UserAuth/CreateNewPasswordScreen"
import EmailVerificationScreen from "../screens/UserSreens/UserAuth/EmailVerificationScreen"
import LoginScreen from "../screens/UserSreens/UserAuth/LoginScreen"
import SignupScreen from "../screens/UserSreens/UserAuth/SignupScreen"
import VerifyOtpScreen from "../screens/UserSreens/UserAuth/VerifyOtpScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import LoginDriverScreen from "../screens/DriverScreens/DriverAuth/LoginDriverScreen"
import SignupDriverScreen from "../screens/DriverScreens/DriverAuth/SignupDriverScreen"
import IconButton from "../components/IconButton"

const Stack = createNativeStackNavigator()

function AuthStack(){
    return <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}
        <Stack.Screen options={{
            headerShown: true,
            headerShadowVisible: false
        }} name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="EmailVerificationScreen" component={EmailVerificationScreen} />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />

        {/* Drvier Auth */}
        <Stack.Screen name="LoginDriverScreen" component={LoginDriverScreen} />
        <Stack.Screen name="SignupDriverScreen" component={SignupDriverScreen} />

        {/* <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} /> */}
    </Stack.Navigator>
}
export default AuthStack
