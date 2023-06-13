import {
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import BackgroundImage from '../assets/images/clouds_background.webp';
import WADismissKeyboard from '../components/common/WADismissKeyboard';
import SearchBar from '../components/SearchBar';
import { FontAwesome } from '@expo/vector-icons';
import FoggySun from '../assets/icons/Foggy_Sun.png';
import StatisticsSection from '../components/StatisticsSection';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ForecastItem from '../components/ForecastItem';
import { Days } from '../Days';
import { DayForecast } from '../interfaces/DayForecast';

const HomeScreen = () => {
  const [locations, setLocations] = useState<any[]>([]);

  const [days, setDays] = useState<DayForecast[]>([
    { day: Days.Monday, temperature: 11 },
    { day: Days.Tuesday, temperature: 23 },
    { day: Days.Wednesday, temperature: 19 },
    { day: Days.Thursday, temperature: 32 },
    { day: Days.Friday, temperature: 17 },
    { day: Days.Saturday, temperature: 25 },
    { day: Days.Sunday, temperature: 36 },
  ]);

  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  const updateLocations = (locations: any[]) => {
    const results = locations.map((item) => ({
      country: item.country,
      city: item.name,
    }));

    setLocations(results);
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
              updateLocations={updateLocations}
              toggleInput={toggleInput}
              inputVisible={isInputVisible}
            />
            {isInputVisible && (
              <View className="w-full bg-gray-300 rounded-3xl top-2 divide-y ">
                {locations.map((location, index) => (
                  <Pressable
                    key={index}
                    className="mb-1  py-2 px-4 flex-row items-center space-x-3 ">
                    <FontAwesome
                      name="location-arrow"
                      size={24}
                      color="black"
                    />
                    <Text className="text-lg">
                      {location.country}, {location.city}
                    </Text>
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
            <StatisticsSection />
            <View className="space-y-2 mx-6">
              <View className="space-x-2 flex-row items-center">
                <MaterialCommunityIcons
                  name="calendar-month-outline"
                  size={24}
                  color="white"
                />
                <Text className="text-white">Daily forecast</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  className="flex-row flex flex-1"
                  style={{ gap: 10 }}
                  onStartShouldSetResponder={() => true}>
                  {days.map((item, key) => (
                    <ForecastItem
                      key={key}
                      day={item.day}
                      temperature={item.temperature}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </WADismissKeyboard>
  );
};

export default HomeScreen;
