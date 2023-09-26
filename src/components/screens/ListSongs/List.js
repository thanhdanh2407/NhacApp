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
import SideBar from "../SidebarBottom/sidebarbottom";
const songApiURL = "http://192.168.2.23:4000/api/songs/getAll";

const ListSong = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(songApiURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json.data);
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
          <FlatList
            data={data}
            keyExtractor={(item) => (item.id ? item.id.toString() : item.name)}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <SideBar />
    </SafeAreaView>
  );
};

export default ListSong;
