import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { albumHome, home } from "./css";
import SideBar from "../SidebarBottom/sidebarbottom";
import { useNavigation } from "@react-navigation/native";

const albumApiURL = "http://192.168.2.23:4000/api/albums/getAll";

const HomeScreens = () => {
  const [album, setAlbum] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(albumApiURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setAlbum(json.data);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  const handleAlbumPress = (albumId) => {
    setSelectedAlbum(albumId);
    navigation.navigate("AlbumDetail", { albumId: albumId });
  };

  return (
    <SafeAreaView style={home.fullscreens}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={albumHome.album}>
          <FlatList
            data={album}
            keyExtractor={(item) => (item.id ? item.id.toString() : item.name)}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={albumHome.albumSong}
                onPress={() => handleAlbumPress(item.id)}
              >
                <Image src={item.imageURL} style={albumHome.img} />
                <Text style={albumHome.text}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <SideBar></SideBar>
    </SafeAreaView>
  );
};

export default HomeScreens;
