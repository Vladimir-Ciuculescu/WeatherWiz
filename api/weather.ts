import { APP_KEY } from '@env';
import axios from 'axios';

export const getForecast = async (city: string, days: number) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (city: string) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: `http://api.weatherapi.com/v1/search.json?key=${APP_KEY}&q=${city}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
