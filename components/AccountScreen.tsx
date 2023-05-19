import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RootStackParamList } from "../App";
import { gstyles } from "./GlobalStyles";
import AppCamera from "./AppCamera";

export default function AccountScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "Account">) {
  return (
    <KeyboardAwareScrollView style={[{ backgroundColor: "white" }]}>
      <View style={[gstyles.container]}>
        <Text>Account</Text>
        <AppCamera />
      </View>
      <StatusBar style="light" />
    </KeyboardAwareScrollView>
  );
}
