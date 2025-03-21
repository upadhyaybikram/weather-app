const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
  // 43. receive the props getWeatherDetails, if warning go to esling for 44
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    console.log(searchInput.value);
    // Now get the weather details of the entered city
    //const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
    //for 53, commpent above url and add the days on query parameter as well, for 54 go app and get hourly data
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;

    // get the weather details from the entered city
    //
    getWeatherDetails(API_URL);
  };

  // get user's location
  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;

        // get the weather details from the user's current location
        //
        getWeatherDetails(API_URL);
      },
      () => {
        alert(
          "Location access denied. Please enable permission to use this feature"
        );
      }
    );
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        {/* 2/ Put the search icon here */}
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-input"
          required
          ref={searchInputRef}
        />
      </form>
      {/* 3. Put a button here */}
      <button className="location-button" onClick={handleLocationSearch}>
        <span className="material-symbols-rounded">my_location</span>
      </button>
      {/* 4. Add a location button from google font, copy from above and change the name */}
    </div>
  );
};

export default SearchSection;
