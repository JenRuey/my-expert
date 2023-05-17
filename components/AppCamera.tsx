import { Camera, CameraType } from "expo-camera";
import { LegacyRef } from "react";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tesseract from "tesseract.js";

export default function AppCamera() {
  const [text, setText] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const _camera = useRef<Camera>(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takePhoto = async () => {
    if (_camera.current) {
      const data = await _camera.current.takePictureAsync();
      console.debug(data);
      let resp = await Tesseract.recognize(
        // require("../assets/newspaper.jpg"),
        data.base64,
        "eng",
        { logger: (m) => console.log(m) }
      );

      //"eng","chi_sim","chi_tra"
      let text = resp.data.text;
      console.log(text);
      setText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={_camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <div>{text}</div>
      <Button onPress={takePhoto} title="Take" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
