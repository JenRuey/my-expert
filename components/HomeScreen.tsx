import { FontAwesome, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RootStackParamList } from "../App";
import { css, gstyles } from "./GlobalStyles";

export default function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "Home">) {
  return (
    <KeyboardAwareScrollView style={[{ backgroundColor: "white" }]}>
      <View style={[gstyles.container]}>
        <LinearGradient colors={["#173463", "#0f4c82"]} locations={[0.2, 0.5]} style={[{ width: "100%" }]}>
          <View style={[css.flex_center, css.mx3, css.mt4, { justifyContent: "space-between" }]}>
            <View style={[css.flex_center]}>
              <TouchableOpacity onPress={() => {}}>
                <SimpleLineIcons style={{ color: "white" }} name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={[css.flex_center]}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("Logout", "Please confirm if you want to logout?", [
                    {
                      text: "OK",
                      onPress: () => navigation.navigate("Login"),
                      isPreferred: false,
                      style: "destructive",
                    },
                    {
                      text: "Cancel",
                      isPreferred: true,
                      style: "default",
                    },
                  ]);
                }}
              >
                <Ionicons style={[{ color: "white" }]} name="settings" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[css.p3, { alignItems: "center" }]}>
            <FontAwesome name="user-circle" size={120} color="white" />
            <Text style={[gstyles.white_header1, css.mt3]}>{"Your Name"}</Text>
            <Text style={[{ color: "white" }]}>{"your-email@email.com"}</Text>
            <View style={[css.mt3, css.py2, css.px5, { backgroundColor: "white", borderRadius: 10, alignItems: "center" }]}>
              <Text style={[{ color: "#6BBAD0", textTransform: "uppercase" }]}>{"Balance"}</Text>
              <Text style={[css.mb2, { color: "#0f4c82", fontSize: 30, fontWeight: "bold" }]}>{"$ 4,180.20"}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Text style={[gstyles.button]}>{"TRANSFER"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
      <StatusBar style="light" />
    </KeyboardAwareScrollView>
  );
}
