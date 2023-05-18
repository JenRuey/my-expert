import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
  my4: {
    marginVertical: 32,
  },
  mt3: {
    marginTop: 16,
  },
  mt4: {
    marginTop: 32,
  },
  mt5: {
    marginTop: 48,
  },
  mb2: {
    marginBottom: 8,
  },
  mb3: {
    marginBottom: 16,
  },
  p4: {
    padding: 32,
  },
  p5: {
    padding: 48,
  },
});

export const gstyles = StyleSheet.create({
  linktext: {
    color: "#00D2FF",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#0f4c82",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 8,
    textTransform: "uppercase",
  },
  textinput: {
    borderWidth: 1,
    width: "100%",
    textAlign: "center",
    padding: 8,
    borderColor: "#aaa",
    height: 50,
    borderRadius: 8,
  },
  white_header1: {
    fontSize: 30,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    backgroundColor: "white",
  },
  darkblue_container: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#0f4c82",
  },
});
