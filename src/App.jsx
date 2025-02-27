import { useEffect, useRef, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";
import { weatherCodes } from "./constants";
import NoResultsDiv from "./components/NoResultsDiv";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [currentWeather, setCurrentWeather] = useState({});

  //55. create states for hourly forecast and pass hourlyforcast to componenets hourlyweatheritem
  const [hourlyForecasts, setHourlyForecasts] = useState([]);

  //the last part in the applicaiton
  const searchInputRef = useRef(null);

  const [hasNoResults, setHasNoResults] = useState(false);

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;

    const next24HoursData = hourlyData.filter(({ time }) => {
      const foreCastTime = new Date(time).getTime();
      return foreCastTime >= currentHour && foreCastTime <= next24Hours;
    });
    setHourlyForecasts(next24HoursData);
  };

  const getWeatherDetails = async (API_URL) => {
    //45 complete this function by making API call

    //47. create state

    setHasNoResults(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error();
      const data = await response.json();
      console.log(data);

      //46. important one, explain properly
      const temperature = data.current.temp_c; //get the tem
      const description = data.current.condition.text;

      //51. create weather icon and pass it to setCurrentWeather and got to current weather for 52
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({ temperature, description, weatherIcon });

      //54. get hourly data from forecast days
      const hourlyData = data.forecast.forecastday[0].hour;
      filterHourlyForecast(hourlyData);

      //if 2 days data from response, combine with spread operator as
      //   const combinedHourlyDataFor2Days = [
      //     ...data.forecast.forecastday[0].hour,
      //     ...data.forecast.forecastday[1].hour,
      //   ];
      // if 48 hours, need to filter for 24 hours
      // filterHourlyForecast(combinedHourlyDataFor2Days)
      console.log("hourly data", hourlyData);
      //last part ko add gareko
      searchInputRef.current.value = data.location.name;
    } catch {
      // console.log(error);
      //setHasNoResults state if there's an error
      setHasNoResults(true);
    }
  };

  //set the default location
  // Fetch default city (London) weather data on initial render
  useEffect(() => {
    const defaultCity = "Sydney";
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`;
    getWeatherDetails(API_URL);
  }, []);

  return (
    <div className="container">
      {/* Search Section */}
      <SearchSection
        getWeatherDetails={getWeatherDetails}
        searchInputRef={searchInputRef}
      />

      {/* Conditionally render based on hasNoResults state */}
      {hasNoResults ? (
        <NoResultsDiv />
      ) : (
        <div className="weather-section">
          <CurrentWeather currentWeather={currentWeather} />
          {/* 48. Now pass currentWeather state as props and read it from CurrentWeather (for 49) */}

          {/* 6. Hourly Forecast List */}
          <div className="hourly-forecast">
            <ul className="weather-list">
              {/* set hourlyforecast here  */}
              {/* 56. pass hourly weather as props and for 57 go to hourlyweatheritem */}
              {hourlyForecasts.map((hourlyWeather) => (
                <HourlyWeatherItem
                  key={hourlyWeather.time_epoch}
                  hourlyWeather={hourlyWeather}
                />
              ))}
              {/* <HourlyWeatherItem /> */}
            </ul>
          </div>
        </div>
      )}

      {/* 42. Now in 13, pass getWeatherDetails function through props */}
      {/* For 43, receive this props in search section */}
      {/* 5. Weather Section */}
    </div>
  );
};

export default App;
