import React from 'react';
import { View, Image, Text } from 'react-native';
import CloudyRain from '../assets/icons/Cloudy_Rain.png';
import { DayForecast } from '../interfaces/DayForecast';

const ForecastItem: React.FC<DayForecast> = ({ day, temperature }) => {
  return (
    <View className="bg-[#213f45] rounded-2xl w-24 flex-column justify-center items-center space-y-2 py-2">
      <Image source={CloudyRain} className="w-12 h-12" />
      <Text className="text-white">{day}</Text>
      <Text className="text-white text-lg font-bold">{temperature}&#176;</Text>
    </View>
  );
};

export default ForecastItem;
