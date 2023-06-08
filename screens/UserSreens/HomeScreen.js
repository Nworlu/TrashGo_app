import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constant/colors";
import { AuthContext } from "../../context/AuthContext";

function HomeScreen({ navigation }) {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  // authCtx.logout()
  function handleNav() {
    navigation.navigate("StackNavigator", { screen: "RequestScreen" });
  }
  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* </View> */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>Quick Actions</Text>
        <View style={styles.services}>
          <View>
            <Pressable
              onPress={handleNav}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.service}>
                <Ionicons />
              </View>
            </Pressable>
            <Text style={styles.servicesText}>Request pick up</Text>
          </View>
          <View>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <View style={styles.service}>
                <Ionicons />
              </View>
            </Pressable>
            <Text style={styles.servicesText}>Become a trasher</Text>
          </View>
          <View>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <View style={styles.service}>
                <Ionicons />
              </View>
            </Pressable>
            <Text style={styles.servicesText}>Earn Points</Text>
          </View>
        </View>
      </View>
      <View style={styles.intro}>
        <View style={styles.recycling}>
          <View style={styles.messageContainer}>
            <Text style={styles.title}>
              How you can earn rewards for recycling
            </Text>
            <Text>With you we can help ecology</Text>
          </View>
          <Image source={require("../../assets/trash.png")} />
        </View>
        <View style={styles.waste}>
          <View>
            <Text style={styles.wasteTitle}>Waste delivery</Text>
            <Text style={styles.wasteText}>Request for delivery of trash</Text>
          </View>
          <Ionicons name="eye" size={26} />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  intro: {
    marginBottom: 40,
    width: 340,
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    alignItems: "center",
  },
  recycling: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  messageContainer: {
    width: 220,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    width: 190,
    marginBottom: 10,
  },
  waste: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#F5F5F5",
    width: 280,
    height: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wasteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wasteText: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "400",
  },
  servicesContainer: {
    flex: 0.6,
    width: 380,
    paddingHorizontal: 20,
    marginTop: 30
  },
  servicesTitle: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
  },
  servicesText: {
    fontWeight: "bold",
    fontSize: 13,
    width:60,
    textAlign: 'center'
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  service: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#008000",
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.57,
  },

});
