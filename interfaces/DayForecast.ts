import { Days } from './Days';

export interface DayForecast {
  day: Days;
  temperature: number;
  condition: string;
}
