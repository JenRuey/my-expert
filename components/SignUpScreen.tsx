import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RootStackParamList } from "../App";
import { css, gstyles } from "./GlobalStyles";
import { FormCheckBox, FormInput } from "./Input";

type SignUpFormValues = {
  username: string;
  password: string;
  agreeToTerms: boolean;
};

export default function SignUpScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "SignUp">) {
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const { handleSubmit, control } = useForm<SignUpFormValues>();

  const onSubmit = async (data: SignUpFormValues) => {
    if (data.username && data.password) {
      if (data.agreeToTerms) {
        await AsyncStorage.setItem("@user:" + data.username, data.password);
        navigation.navigate("Login");
      } else {
        Alert.alert("Please check", "Kindly agree to App's Term of Use & Privacy Policy.");
      }
    } else {
      Alert.alert("Please check", "Kindly enter your name and password.");
    }
  };

  return (
    <KeyboardAwareScrollView style={[{ backgroundColor: "white" }]}>
      <View style={[gstyles.container]}>
        <LinearGradient colors={["#173463", "#0f4c82"]} locations={[0.2, 0.5]} style={[{ width: "100%" }]}>
          <View style={[css.mt5, css.mb3, { alignItems: "center" }]}>
            <View style={[css.flex_center]}>
              <FontAwesome5 name="fantasy-flight-games" size={60} color="white" />
              <View style={[{ marginHorizontal: 16 }]}>
                <FontAwesome5 name="link" size={25} color="white" />
              </View>
              <SimpleLineIcons name="screen-smartphone" size={60} color="white" />
            </View>
            <Text style={[css.mt3, { color: "white" }]}>{"Connect to your app acccount"}</Text>
          </View>
        </LinearGradient>
        <View style={[{ width: "100%" }, css.p5]}>
          <FormInput name={"username"} control={control} style={[gstyles.textinput, css.mb3]} placeholder="Your Name" onSubmitEditing={() => inputRefs.current[0]?.focus()} />
          <FormInput name={"password"} control={control} style={[gstyles.textinput, css.mb3]} placeholder="Password" ref={(ref) => (inputRefs.current[0] = ref)} secureTextEntry={true} />
          <Text style={[{ color: "#5C757A" }]}>{"Use 7-10 characters with mix of letters, numbers & symbols."}</Text>
          <View style={[css.flex_center, css.my4]}>
            <FormCheckBox name={"agreeToTerms"} control={control} />
            <Text style={[css.mx3]}>{"By signing up, you agree to App's Term of Use & Privacy Policy."}</Text>
          </View>
          <View style={[css.flex_center_center, css.mb4]}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={[gstyles.button]}>{"SIGN UP"}</Text>
            </TouchableOpacity>
            <Text style={[css.mx3]}>{"or"}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={[gstyles.button_outline]}>{"CANCEL"}</Text>
            </TouchableOpacity>
          </View>
          <View style={[css.flex_center_center]}>
            <Text>{"Already signed up? "}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={[gstyles.linktext]}>{"Log in"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </KeyboardAwareScrollView>
  );
}
