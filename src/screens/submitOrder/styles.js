import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    marginTop: 7,
    borderRadius: 10,
    color: "#05375a",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    height: 40,
    paddingHorizontal: 15,
  },
  appButtonContainer: {
    flex: 1,
    elevation: 8,
    // width: 180,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f7a21a",
    margin: 10,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 5,
    textTransform: "uppercase",
  },
});

export default styles;
