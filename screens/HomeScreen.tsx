import { Text, SafeAreaView, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import BackgroundImage from "../assets/images/clouds_background.webp";
import WADismissKeyboard from "../components/common/WADismissKeyboard";
import SearchBar from "../components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  const [locations, setLocations] = useState<any[]>([
    "United Kingdom",
    "Turkey",
    "Canada",
  ]);

  return (
    <WADismissKeyboard>
      <View className="flex-1 relative">
        <StatusBar style="light" />
        <Text className="text-red-500 text-3xl">Weather app</Text>
        <Image
          source={BackgroundImage}
          className="absolute w-full h-full"
          blurRadius={5}
        />
        <SafeAreaView className="flex flex-1">
          <View className="px-4 items-end h-12">
            <SearchBar />
            <View className="w-full bg-gray-300 rounded-3xl top-2 divide-y">
              {locations.map((location, index) => (
                <Pressable
                  key={index}
                  className="mb-1  py-2 px-4 flex-row items-center space-x-3 "
                >
                  <FontAwesome name="location-arrow" size={24} color="black" />
                  <Text className="text-lg">{location}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </WADismissKeyboard>
  );
};

export default HomeScreen;
