import { View, Text } from 'react-native';
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

interface StatisticsSectionProps {
  wind: number;
  time: any;
  humidity: number;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  wind,
  time,
  humidity,
}) => {
  return (
    <View className="flex-row justify-between mx-4">
      <View className="flex-row items-center space-x-2">
        <Feather name="wind" size={24} color="white" />
        <Text className="text-white font-semibold">{wind} km</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Ionicons name="sunny-outline" size={24} color="white" />

        <Text className="text-white font-semibold">{time} PM</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <SimpleLineIcons name="drop" size={24} color="white" />
        <Text className="text-white font-semibold">{humidity}%</Text>
      </View>
    </View>
  );
};

export default StatisticsSection;
