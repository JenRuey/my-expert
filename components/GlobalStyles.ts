import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
  my2: {
    marginVertical: 8,
  },
  my3: {
    marginVertical: 16,
  },
  mx2: {
    marginHorizontal: 8,
  },
  mx3: {
    marginHorizontal: 16,
  },
  my4: {
    marginVertical: 32,
  },
  mt2: {
    marginTop: 8,
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
  mb4: {
    marginBottom: 32,
  },
  px4: {
    paddingHorizontal: 32,
  },
  px5: {
    paddingHorizontal: 48,
  },
  py2: {
    paddingVertical: 8,
  },
  py3: {
    paddingVertical: 16,
  },
  p3: {
    padding: 16,
  },
  p4: {
    padding: 32,
  },
  p5: {
    padding: 48,
  },
  flex_center_center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flex_center: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const gstyles = StyleSheet.create({
  linktext: {
    color: "#6BBAD0",
    textDecorationLine: "underline",
  },
  button: {
    borderColor: "#0f4c82",
    borderWidth: 2,
    backgroundColor: "#0f4c82",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    textTransform: "uppercase",
    textAlign: "center",
  },
  button_outline: {
    borderColor: "#0f4c82",
    borderWidth: 2,
    backgroundColor: "white",
    color: "#0f4c82",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 8,
    textTransform: "uppercase",
  },
  textinput: {
    borderWidth: 1,
    width: "100%",
    textAlign: "left",
    padding: 8,
    borderColor: "#aaa",
    height: 50,
    borderRadius: 8,
  },
  textinput_center: {
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
    textAlign: "center",
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
