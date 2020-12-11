import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
    width: "95%",
    // height: 100,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 19,
  },
  taskDetailsRow: {
    flex: 1,
    flexDirection: "row",
  },
  taskDetailsText: {
    flex: 1,
    fontSize: 13,
    marginLeft: 30,
  },
  taskDialogText: {
    flex: 1,
    fontSize: 14,
  },
  myTasksDetailsTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 12,
  },
  myTasksDetailsRow: {
    paddingVertical: 5,
    flexDirection: "row",
  },
  myTasksDetailsText: {
    flex: 1,
    fontSize: 14,
  },
  myTasksDetailsDescriptionText: {
    marginLeft: 16,
    fontSize: 13,
    color: "#575757",
    fontStyle: "italic",
  },
});

export default styles;
