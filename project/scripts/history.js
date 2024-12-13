// DOM Elements
const historyList = document.getElementById('history-list');

// Load History form localStorage
function loadHistory() {
    // Retrieve search history from LocalStorage
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

    if (history.length > 0) {
        // If there is search history, map and display it as <li> elements
        historyList.innerHTML = history.map(entry => `
            <li>
                <h3>${entry.city}, ${entry.country}</h3>
                <p>Temperature: ${entry.temperature}°F</p>
                <p>Weather: ${entry.weather}</p>
                <p>Humidity: ${entry.humidity}%</p>
                <p>Wind Speed: ${entry.windSpeed} MPH</p>
            </li>
        `).join('');
    } else {
        // If no history is present, show a default message
        historyList.innerHTML = `<p>No search history available</p>`;
    }
}

// Call function to load and display history when the page loads
loadHistory();