// DOM Elements
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

// OpenWeatherMap API Configuration
const API_KEY = '8b15c4423581e3b81a90a3c1acab337a'
const BASE_URL = 'https://weather-backend-e43n.onrender.com/weather'

// Fetch Weather Data
async function fetchWeather(location) {
    try {
        const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=imperial`);

        if  (!response.ok) {
            throw new Error('Location not found')
        }

        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        displayError(error.message);
    }
}

function displayWeather(data) {
    searchResults.innerHTML = `
        <h2>${data.city}, ${data.country}</h2>
        <p>Temperature: ${data.temperature}°F</p>
        <p>Weather: ${data.weather}</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.windSpeed}m/s</p>
    `;
    searchResults.style.color = "#333";
}


// Display Error
function displayError(message) {
    searchResults.innerHTML = `<p>${message}</p>`;
    searchResults.style.color = "red";
}

// Event Listener
searchButton.addEventListener('click', () => {
    const location = searchBar.value.trim();

    if (location) {
        fetchWeather(location);
    } else {
        displayError('Please enter a location');
    }
})