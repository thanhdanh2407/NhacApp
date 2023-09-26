import React, { useEffect } from "react";
import { SplashScreen } from "expo";
import HomeScreens from "./src/components/screens/Home/HomeScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./src/components/screens/Search/Search";
import ListSong from "./src/components/screens/ListSongs/List";
import AlbumDetail from "./src/components/screens/songs/detailSong";
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    if (SplashScreen) {
      setTimeout(() => {
        SplashScreen.hide();
        console.log("Music App");
      }, 3000);
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreens}
          options={{ headerShown: false }} // Ẩn thanh header
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }} // Ẩn thanh header cho trang Tìm kiếm
        />
        <Stack.Screen
          name="ListSong"
          component={ListSong}
          options={{ headerShown: false }} // Ẩn thanh header cho trang Tìm kiếm
        />
        <Stack.Screen
          name="AlbumDetail"
          component={AlbumDetail}
          options={{ headerShown: false }} // Ẩn thanh header cho trang Tìm kiếm
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
