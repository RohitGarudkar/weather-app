// API Configuration
const API_KEY = '78de202ec53a468e97d74106260301';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

// DOM Elements
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');
const weatherInfo = document.getElementById('weather-info');
const errorMsg = document.getElementById('error-msg');
const loading = document.querySelector('.loading');

// Fetch Weather Data
async function getWeather(location) {
    try {
        loading.style.display = 'block';
        weatherInfo.style.display = 'none';
        errorMsg.style.display = 'none';

        const response = await fetch(
            `${API_URL}?key=${API_KEY}&q=${location}&aqi=yes`
        );

        if (!response.ok) {
            throw new Error('Location not found');
        }

        const data = await response.json();
        displayWeather(data);
        loading.style.display = 'none';
    } catch (error) {
        loading.style.display = 'none';
        errorMsg.textContent = 'Unable to find location. Please try again.';
        errorMsg.style.display = 'block';
        weatherInfo.style.display = 'none';
    }
}

// Display Weather Data
function displayWeather(data) {
    const { location, current } = data;

    document.getElementById('location-name').textContent = 
        `${location.name}, ${location.country}`;
    document.getElementById('weather-icon').src = `https:${current.condition.icon}`;
    document.getElementById('temperature').textContent = 
        `${Math.round(current.temp_c)}°C`;
    document.getElementById('condition').textContent = current.condition.text;
    document.getElementById('feels-like').textContent = 
        `${Math.round(current.feelslike_c)}°C`;
    document.getElementById('humidity').textContent = `${current.humidity}%`;
    document.getElementById('wind-speed').textContent = 
        `${current.wind_kph} km/h`;
    document.getElementById('pressure').textContent = 
        `${current.pressure_mb} mb`;

    weatherInfo.style.display = 'block';
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        getWeather(location);
    }
});

locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const location = locationInput.value.trim();
        if (location) {
            getWeather(location);
        }
    }
});

// Load default location on page load
getWeather('Pune');