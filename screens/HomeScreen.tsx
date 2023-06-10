import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BackgroundImage from "../assets/images/clouds_background.webp";
import { AntDesign } from "@expo/vector-icons";
import WADismissKeyboard from "../components/WADismissKeyboard";

const HomeScreen = () => {
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
        <SafeAreaView className="flex flex-1 ">
          <View className="mx-4">
            <View className="rounded-full bg-slate-600  flex flex-row items-center justify-between">
              <TextInput
                placeholder="Search"
                value="Marian again"
                className="text-white h-10 pl-5 flex-1"
              />
              <Pressable className="bg-slate-300 rounded-full m-2 px-2 py-2">
                <AntDesign name="search1" size={22} color="black" />
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </WADismissKeyboard>
  );
};

export default HomeScreen;
