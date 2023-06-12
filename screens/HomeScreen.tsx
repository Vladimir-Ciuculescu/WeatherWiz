import { Text, SafeAreaView, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import BackgroundImage from "../assets/images/clouds_background.webp";
import WADismissKeyboard from "../components/common/WADismissKeyboard";
import SearchBar from "../components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";
import FoggySun from "../assets/icons/Foggy_Sun.png";

const HomeScreen = () => {
  const [locations, setLocations] = useState<any[]>([
    "United Kingdom",
    "Turkey",
    "Canada",
  ]);

  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

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
            <SearchBar
              toggleInput={toggleInput}
              inputVisible={isInputVisible}
            />
            {isInputVisible && (
              <View className="w-full bg-gray-300 rounded-3xl top-2 divide-y ">
                {locations.map((location, index) => (
                  <Pressable
                    key={index}
                    className="mb-1  py-2 px-4 flex-row items-center space-x-3 "
                  >
                    <FontAwesome
                      name="location-arrow"
                      size={24}
                      color="black"
                    />
                    <Text className="text-lg">{location}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
          <View className="-z-50 flex flex-1 justify-around">
            <View className=" z-0 flex flex-row justify-center items-center">
              <Text className="text-white text-2xl font-bold">Romania, </Text>
              <Text className="text-lg font-semibold text-gray-300">
                Timisoara
              </Text>
            </View>
            <View className="flex-row justify-center">
              <Image source={FoggySun} className="w-52 h-52" />
            </View>
            <View className="space-y-2">
              <Text className="text-white text-center text-6xl">23&#176;</Text>
              <Text className="text-white text-center text-xl">
                Partly cloudy !
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </WADismissKeyboard>
  );
};

export default HomeScreen;
