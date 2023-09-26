import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./css";
import {
  Feather,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SideBar = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const handleHomePress = () => {
    navigation.navigate("Home");
  };

  const handleListSongPress = () => {
    navigation.navigate("ListSong");
  };
  const handleSongPress = () => {
    navigation.navigate("ListSong");
  };

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity style={styles.sidebarItem} onPress={handleHomePress}>
        <Feather name="home" size={24} color="white" />
        <Text style={styles.sidebarText}>Trang chủ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem} onPress={handleSearchPress}>
        <AntDesign name="search1" size={24} color="white" />
        <Text style={styles.sidebarText}>Tìm kiếm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={handleListSongPress}
      >
        <Ionicons name="library-outline" size={24} color="white" />
        <Text style={styles.sidebarText}>Thư Viện</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem}>
        <MaterialCommunityIcons name="account-circle" size={24} color="white" />
        <Text style={styles.sidebarText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarItem} onPress={handleSongPress}>
        <AntDesign name="search1" size={24} color="white" />
        <Text style={styles.sidebarText}>Song</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;
