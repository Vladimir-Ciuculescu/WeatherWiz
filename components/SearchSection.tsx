import React, { useRef, useState, useCallback } from 'react';
import {
  TextInput,
  Pressable,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getForecast, getLocation } from '../api/weather';
import { debounce } from 'lodash';
import { FontAwesome } from '@expo/vector-icons';
import { DAYS } from '../consts';

interface SearchSectionProps {
  setWeather: (e: any) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ setWeather }) => {
  const [input, setInput] = useState('');
  const width = useRef(new Animated.Value(0)).current;
  const [locations, setLocations] = useState<any[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const widthAnim = width.interpolate({
    inputRange: [0, 1],
    outputRange: ['12%', '100%'],
  });

  const toggleSearch = () => {
    Animated.timing(width, {
      toValue: !inputVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setInputVisible(!inputVisible);

    if (input === '') {
      setLocations([]);
    }
  };

  const searchLocation = async (location: string) => {
    if (location.length > 2) {
      const data = await getLocation(location);
      const results = data.map((item: any) => ({
        country: item.country,
        city: item.name,
      }));

      setLocations(results);
      setInputVisible(true);
    } else {
      setLocations([]);
      setInputVisible(false);
    }
  };

  const handleDebounce = useCallback(debounce(searchLocation, 1200), []);

  const handleInput = (e: string) => {
    setInput(e);
    handleDebounce(e);
  };

  const barWidth = { width: widthAnim };

  const getLocationForecast = async (city: string) => {
    const data = await getForecast(city, DAYS);
    setWeather(data);
    setInputVisible(false);
    Keyboard.dismiss();
    setInput('');
  };

  return (
    <View className="px-4 items-end h-12">
      <Animated.View
        className="rounded-full bg-slate-600 flex flex-row items-center justify-end h-full"
        style={[barWidth]}>
        <TextInput
          placeholder="Search country"
          value={input}
          onChangeText={handleInput}
          className={`text-white h-10 pl-0 ml-5 flex-1`}
          selectionColor="white"
          placeholderTextColor="white"
        />
        <Pressable
          onPress={toggleSearch}
          className="bg-slate-300 rounded-full mx-1 p-2">
          <AntDesign name="search1" size={22} color="black" />
        </Pressable>
      </Animated.View>
      {
        <View className="w-full bg-gray-300 rounded-3xl top-2 divide-y ">
          {inputVisible &&
            locations.map((location, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => getLocationForecast(location.city)}
                className="mb-1  py-2 px-4 flex-row items-center space-x-3 ">
                <FontAwesome name="location-arrow" size={24} color="black" />
                <Text className="text-lg">
                  {location.country}, {location.city}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      }
    </View>
  );
};

export default SearchSection;
