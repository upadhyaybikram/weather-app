const CurrentWeather = ({ currentWeather }) => {
  //49. read the current weather here
  //for 50 create a constants.js and go to App for 51
  return (
    <div className="current-weather">
      {/* <img src="icons/clouds.svg" className="weather-icon" /> */}
      {/* 52. Now read the image through color codes, For 53, work on next 24 hour forecast, so update API_URL in search section */}
      <img
        src={`icons/${currentWeather.weatherIcon}.svg`}
        className="weather-icon"
      />

      <h2 className="temperature">
        {/* 20 <span>°C</span> */}
        {/* comment the static one and pass the dynamic */}
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
