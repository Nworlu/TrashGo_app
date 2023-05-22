import { useNavigation } from "@react-navigation/native"
import { useRef } from "react"
import { Image } from "react-native"
import Onboarding from "react-native-onboarding-swiper"
import PrimaryButton from "../components/PrimaryButton"
import colors from "../constant/colors"

function OnBoardingScreen(){
    const onb = useRef(null)
    let navigation = useNavigation()
    function SkipButton(){
        return <PrimaryButton style={{backgroundColor: colors.gray200}} onPress={()=>navigation.replace('WelcomeScreen')}>Skip</PrimaryButton>
    }
    function NextButton(){
        return <PrimaryButton style={{backgroundColor: colors.green500}} onPress={()=>{onb.current.goNext()}}>Next</PrimaryButton>
    }
    function DoneButton(){
        return <PrimaryButton onPress={()=>navigation.replace('WelcomeScreen')}>Done</PrimaryButton>
        
    }
    return <Onboarding
    ref={onb}
    DoneButtonComponent={DoneButton}
    NextButtonComponent={NextButton}
    SkipButtonComponent={SkipButton}
    
    pages={[
        {
            backgroundColor: "#fff",
            image:<Image/>,
            title: 'Recycle and Earn',
            subtitle: `Here at TrashGo Uses and create an account 
            and make earn money when they recycle their waste with our application.`
        },
        {
            backgroundColor: "#fff",
            image:<Image/>,
            title: 'Recycle and Earn',
            subtitle: `Here at TrashGo Uses and create an account 
            and make earn money when they recycle their waste with our application.`
        },
        {
            backgroundColor: "#fff",
            image:<Image/>,
            title: 'Recycle and Earn',
            subtitle: `Here at TrashGo Uses and create an account 
            and make earn money when they recycle their waste with our application.`
        }
    ]} />
}
export default OnBoardingScreen