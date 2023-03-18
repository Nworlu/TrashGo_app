import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import SecondaryButton from "../../components/ui/SecondaryButton";

function OnboardingScreen() {
    const onb = useRef(null)
    let navigation = useNavigation()
   
    function nextButton(){
        return <SecondaryButton onPress={()=>{ onb.current.goNext()}}>Next</SecondaryButton>
    }
    function skipButton(){
        return <SecondaryButton onPress={()=>{ navigation.replace('WelcomeScreen')}} style={styles.skipButton}>Skip</SecondaryButton>
    }

    function dotComponent({selected}){
        return <View style={[styles.dotsComponent, selected? styles.dot: '']}>
            <View style={selected? styles.dot : ''}></View>
        </View>
    }
    function doneButton(){
        return <SecondaryButton onPress={()=>{ navigation.replace('WelcomeScreen')}}>Done</SecondaryButton>
    }


  return (
    <Onboarding
    ref={onb}
    NextButtonComponent={nextButton}
    SkipButtonComponent={skipButton}
    DotComponent={dotComponent}
    DoneButtonComponent={doneButton}
    bottomBarHighlight={false}
    bottomBarColor={'white'}
    transitionAnimationDuration={40}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/onboard.png")}
            //   style={styles.image}
            />
          ),
          title: "Recycle and Earn",
          subtitle: `Here at Trashers Uses and create an account 
        and make earn money when they recycle their waste with our application.`,
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/onboard.png")}
            //   style={styles.image}
            />
          ),
          title: "Pick Trash and Earn",
          subtitle: `We let drivers earn more as they pick up solid waste from users and drop it offer at their various destinations been assigned to them.`,
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/onboard.png")}
            //   style={styles.image}
            />
          ),
          title: "Help Us Improve Waste Management",
          subtitle: `Here at Trashers we want to build and mantain sustainable cities and communities around the world but we start with one city at a time and we start with you.`,
        },
      ]}
    />
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    skipButton:{
        backgroundColor: '#D9D9D9'
    },
    dotsComponent:{
        borderColor: '#D9D9D9',
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 20,
        marginHorizontal: 5,
        backgroundColor: '#D9D9D9'
    },
    dot:{
        backgroundColor: '#026937',
        width:40
    }
})