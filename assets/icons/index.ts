//Sunny, Clear
import Sunny from '../icons/Sunny.png';
import Cloudy from '../icons/Cloudy.png';
import Partly_Cloudy from '../icons/Partly_Cloudy.png';
import HeavyRain from '../icons/HeavyRain.png';
import ModerateRain from '../icons/Moderate_Rain.png';

interface weatherIconsProps {
  [name: string]: any;
}

export const weatherIcons: weatherIconsProps = {
  Sunny: Sunny,
  Clear: Sunny,
  Cloudy: Cloudy,
  Overcast: Cloudy,
  'Partly Cloudy': Partly_Cloudy,
  'Heavy rain': HeavyRain,
  'Heavy rain at times': HeavyRain,
  'Moderate or heavy freezing rain': HeavyRain,
  'Moderate or heavy rain shower': HeavyRain,
  'Moderate or heavy rain with thuder': HeavyRain,
  'Light rain': ModerateRain,
  'Moderate rain': ModerateRain,
  'Patchy rain possible': ModerateRain,
};
