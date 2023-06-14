import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLocation = async (value: string) => {
  try {
    await AsyncStorage.setItem('location', value);
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async () => {
  try {
    const location = AsyncStorage.getItem('location');
    return location;
  } catch (error) {
    console.log(error);
  }
};
