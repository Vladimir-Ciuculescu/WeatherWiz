import {
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import BackgroundImage from '../assets/images/clouds_background.webp';
import WADismissKeyboard from '../components/common/WADismissKeyboard';
import StatisticsSection from '../components/StatisticsSection';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ForecastItem from '../components/ForecastItem';
import { getForecast } from '../api/weather';
import { Days } from '../interfaces/Days';
import SearchSection from '../components/SearchSection';
import { DAYS } from '../consts';
import { weatherIcons } from '../assets/icons';
import { getLocation } from '../asyncStorage';

const HomeScreen = () => {
  const [weather, setWeather] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getInitialWeather();
  }, []);

  const getInitialWeather = async () => {
    setLoading(true);
    const location = await getLocation();

    const data = await getForecast(location!, DAYS);
    setWeather(data);
    setLoading(false);
  };

  const handleLoading = (e: boolean) => {
    setLoading(e);
  };

  const { current, location } = weather;

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
          {loading ? (
            <View className="flex flex-1  justify-around">
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <>
              <SearchSection
                handleLoading={handleLoading}
                setWeather={setWeather}
              />
              <View className="-z-50 flex flex-1 justify-around">
                <View className=" z-0 flex flex-row justify-center items-center">
                  <Text className="text-white text-2xl font-bold">
                    {location?.country},{' '}
                  </Text>
                  <Text className="text-lg font-semibold text-gray-300">
                    {location?.name}
                  </Text>
                </View>
                <View className="flex-row justify-center">
                  <Image
                    source={weatherIcons[current?.condition.text]}
                    className="w-52 h-52"
                  />
                </View>
                <View className="space-y-2">
                  <Text className="text-white text-center text-6xl">
                    {current?.temp_c}&#176;
                  </Text>
                  <Text className="text-white text-center text-xl">
                    {current?.condition.text}
                  </Text>
                </View>
                <StatisticsSection
                  wind={current?.wind_kph}
                  time={location?.localtime}
                  humidity={current?.humidity}
                />
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
                      {weather?.forecast?.forecastday.map(
                        (item: any, key: number) => {
                          const date = new Date(item.date);
                          const dayString = date.toLocaleDateString('en-US', {
                            weekday: 'long',
                          });
                          const day = dayString.split(',')[0] as Days;
                          return (
                            <ForecastItem
                              key={key}
                              day={day}
                              temperature={item.day.avgtemp_c}
                              condition={item.day.condition.text}
                            />
                          );
                        },
                      )}
                    </View>
                  </ScrollView>
                </View>
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
    </WADismissKeyboard>
  );
};

export default HomeScreen;
