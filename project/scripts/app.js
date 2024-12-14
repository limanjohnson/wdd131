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
            displayError(errorData.error || 'Location not found'); // Directly call displayError
            return; // Exit function as no valid response needs further action
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
        <p>Wind Speed: ${data.windSpeed} MPH</p>
    `;
    searchResults.style.color = "#333";
}

// Save user searches to LocalStorage
function saveToLocalStorage(data) {
    // Retrieve search history or initialize an empty array
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

    // Add if city is not already in history
    if (!history.some(entry => entry.city === data.city)) {
        history.push(data);

        // Only keep the latest 10 entries
        if (history.length > 10) history.shift();

        // Save back to localStorage
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
}

// Display Error
function displayError(message) {
    searchResults.innerHTML = `<p>${message}</p>`;
    searchResults.style.color = "red";
}

// Event Listener
searchButton.addEventListener('click', async () => {
    const location = searchBar.value.trim();

    if (location) {
        try {
            await fetchWeather(location); // Wait for fetchWeather to complete
        } catch (error) {
            console.error(error);
            displayError('Location not found');
        }
    } else {
        displayError('Please enter a location');
    }
})

// Event Listener "enter" key
searchBar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("search-button").click();
    }
});

