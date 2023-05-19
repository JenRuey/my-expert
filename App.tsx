import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import AccountScreen from "./components/AccountScreen";
import { css } from "./components/GlobalStyles";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Account: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, any>) => ({
  headerStyle: {
    backgroundColor: "#0f4c82",
  },
  headerBackVisible: false,
  headerLeft: () => (
    <View style={[css.flex_center]}>
      <TouchableOpacity onPress={() => {}}>
        <SimpleLineIcons style={{ color: "white" }} name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign style={[css.mx3, { color: "white" }]} name="left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  ),
  headerTitle: () => (
    <View style={[css.flex_center]}>
      <Text style={{ color: "white", fontSize: 24 }}>{route.name}</Text>
    </View>
  ),
  headerRight: () => (
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
  ),
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountScreen} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
