// const HourlyWeatherItem = () => {
//   return (
//     <li className="weather-item">
//       <p className="time">00:00</p>
//       <img src="icons/clouds.svg" className="weather-icon" />
//       <p className="temperature">20° </p>
//     </li>
//   );
// };

import { weatherCodes } from "../constants";

// export default HourlyWeatherItem;

// 56. for original code comment above and update the above function to get HourlyWeatherItem

const HourlyWeatherItem = ({ hourlyWeather }) => {
  const temperature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(hourlyWeather.condition.code)
  );
  
  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src={`icons/${weatherIcon}.svg`} className="weather-icon" />
      <p className="temperature">{temperature}° </p>
    </li>
  );
};

export default HourlyWeatherItem;
