import { View, Text } from "react-native";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const StatisticsSection: React.FC<any> = () => {
  return (
    <View className="flex-row justify-between mx-4">
      <View className="flex-row items-center space-x-2">
        <Feather name="wind" size={24} color="white" />
        <Text className="text-white font-semibold">22 km</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Ionicons name="sunny-outline" size={24} color="white" />

        <Text className="text-white font-semibold">14:56 PM</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <SimpleLineIcons name="drop" size={24} color="white" />
        <Text className="text-white font-semibold">26%</Text>
      </View>
    </View>
  );
};

export default StatisticsSection;
