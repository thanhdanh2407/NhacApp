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
import { useRoute } from "@react-navigation/native";
import SideBar from "../SidebarBottom/sidebarbottom";

const AlbumDetail = () => {
  const route = useRoute();
  const { albumId } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const songsAPI = `http://192.168.2.23:4000/api/albums/${albumId}/songs/`;

  useEffect(() => {
    fetch(songsAPI)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setAlbums(json.album);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{ marginTop: 850 }}>
            <Text>ádasda</Text>
          </Text>
          <FlatList
            album={albums}
            keyExtractor={(item) => (item.id ? item.id.toString() : item.name)}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <SideBar></SideBar>
    </SafeAreaView>
  );
};

export default AlbumDetail;
