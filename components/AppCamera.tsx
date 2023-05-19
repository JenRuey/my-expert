import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TextLocType = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};
type TextRespType = {
  text: string;
  bounding_box: TextLocType;
};

export default function AppCamera() {
  const [text, setText] = useState("Text");
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
      <View style={[styles.container]}>
        <Text style={[{ textAlign: "center" }]}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takePhoto = async () => {
    if (_camera.current) {
      const data = await _camera.current.takePictureAsync({ base64: true });
      console.debug(data);
      if (data.base64) {
        const blob = await (await fetch(data.base64)).blob();
        var formData = new FormData();
        formData.append("image", blob);

        let resp = await fetch("https://api.api-ninjas.com/v1/imagetotext", {
          method: "POST",
          headers: {
            "X-Api-Key": "0K2tZCGSMimNDiMjjeoYZg==Eh20QbZod7tqd7zU",
          },
          body: formData,
        });
        if (resp.ok) {
          let textArray: Array<TextRespType> = await resp.json();
          setText(textArray.map((e) => e.text).join(" "));
        }
      }
    }
  };

  return (
    <View style={[styles.container]}>
      <Camera style={[styles.camera]} type={type} ref={_camera}>
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity style={[styles.button]} onPress={toggleCameraType}>
            <Text style={[styles.text]}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Text>{text}</Text>
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
    width: "100%",
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
