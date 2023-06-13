import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, TextInput, Pressable, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getLocation } from '../api/weather';
import { debounce } from 'lodash';

interface SearchBarProps {
  toggleInput: () => void;
  inputVisible: boolean;
  updateLocations: (e: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  toggleInput,
  inputVisible,
  updateLocations,
}) => {
  const [input, setInput] = useState('');
  const width = useRef(new Animated.Value(0)).current;

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

    toggleInput();
  };

  const searchLocation = async (location: string) => {
    if (location.length > 2) {
      const data = await getLocation(location);
      updateLocations(data);
    }
  };

  const handleDebounce = useCallback(debounce(searchLocation, 1200), []);

  const handleInput = (e: string) => {
    setInput(e);
    handleDebounce(e);
  };

  const barWidth = { width: widthAnim };

  return (
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
  );
};

export default SearchBar;
