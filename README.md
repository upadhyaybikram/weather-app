# Weather Application

## Overview

This is a simple weather application that allows users to search for a city and view the current weather conditions along with an hourly forecast for the next 24 hours. The application fetches data from [WeatherAPI](https://www.weatherapi.com/) and is built using React with Vite for fast development.

## Features

- **Search Functionality:** Users can search for any city to get weather details.
- **Current Weather Display:** Shows temperature, weather description, and an appropriate weather icon.
- **Hourly Forecast:** Displays hourly weather updates for the next 24 hours.
- **Default City:** The app loads with the weather details of Sydney by default.
- **Error Handling:** Displays a message when no results are found.

## Technologies Used

- **React** (with Hooks for state and effects)
- **Vite** (for fast builds and development)
- **WeatherAPI** (for fetching weather data)
- **CSS** (for styling the UI)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/upadhyaybikram/weather-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your WeatherAPI key:
   ```sh
   VITE_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## Project Structure

```
weather-app/
│── public/               # Static assets
│── src/
│   ├── components/       # Reusable components
│   │   ├── CurrentWeather.jsx
│   │   ├── HourlyWeatherItem.jsx
│   │   ├── SearchSection.jsx
│   │   ├── NoResultsDiv.jsx
│   ├── constants/        # Weather condition codes
│   ├── App.jsx           # Main application file
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│── .env                  # Environment variables
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

## How It Works

1. **Fetching Weather Data:**
   - The app fetches weather data from WeatherAPI when a user searches for a city.
   - It retrieves current weather conditions and hourly forecasts.
2. **Displaying Data:**
   - The `CurrentWeather` component displays temperature, description, and an icon.
   - The `HourlyWeatherItem` component lists hourly forecasts for the next 24 hours.
3. **Handling Errors:**
   - If the API call fails or the city is not found, a `NoResultsDiv` component is displayed.

## Usage

1. Open the app in your browser.
2. Enter a city name in the search bar and press enter.
3. View the current weather and hourly forecast.

## Future Enhancements

- **7-Day Weather Forecast**
- **User Location-Based Weather Fetching**
- **Dark Mode**
- **Additional Weather Details (Wind Speed, Humidity, etc.)**

## License

This project is licensed under the MIT License.

## Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/) for providing free weather data.
- React and Vite for making development smooth and efficient.

---

Enjoy using the weather app! 🌦️
