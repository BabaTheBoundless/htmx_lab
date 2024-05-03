document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/openweather?city=Missoula')
        .then(response => response.json())
        .then(weatherData => {
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const weatherContainer = document.getElementById('weather-container');

            weatherContainer.innerHTML = `
                <h2>Weather</h2>
                <p>Temperature: ${temperature}°F</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error FETCHING the weather data:', error);
        
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = `<p> ERROR LOADING WEATHER DATA</p>`;
        });
});
