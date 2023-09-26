import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sidebar: {
    height: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
  },
  sidebarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  customIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
