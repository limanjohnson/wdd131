// DOM Elements
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

// OpenWeatherMap API Configuration
const BASE_URL = 'https://weather-backend-e43n.onrender.com/weather'

// Fetch Weather Data
async function fetchWeather(location) {
    try {
        const response = await fetch(`${BASE_URL}?q=${location}`); // No API key in the frontend

        if (!response.ok) {
            const errorData = await response.json(); // Handle JSON error responses
            throw new Error(errorData.error || 'Location not found');
        }

        const weatherData = await response.json();
        displayWeather(weatherData);
        saveToLocalStorage(weatherData); // Save valid results
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
        <p>Wind Speed: ${data.windSpeed}MPH</p>
    `;
    searchResults.style.color = "#333";
}

// Save user searches to LocalStorage
function saveToLocalStorage(data) {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    if (!history.some(entry => entry.city === data.city)) {
        history.push(data);
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
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

// Add a loading message while after users begins search
function setLoading(isLoading) {
    if (isLoading) {
        searchResults.innerHTML = `<p>Loading...</p>`;
        searchResults.style.color = "#333";
    } else {
        searchResults.innerHTML = ''; // clear loading messages upon result load
    }
}
