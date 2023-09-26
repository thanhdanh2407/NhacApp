import { StyleSheet } from "react-native";

export const home = StyleSheet.create({
  fullscreens: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "black",
  },
});

export const albumHome = StyleSheet.create({
  album: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    margin: 10,
  },
  albumSong: {
    width: "30%",
    backgroundColor: "black",
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    marginLeft: 50,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 5,
    resizeMode: "cover",
  },
  text: {
    color: "white",
  },
});
