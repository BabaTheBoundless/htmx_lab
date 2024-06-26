document.addEventListener('DOMContentLoaded', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Missoula&appid=8d9db8e4bb0ce2768fc37dd27eb2be40')
        .then(response => response.json())
        .then(weatherData => {
            
            const kelvinTemperature = weatherData.main.temp;
            const FahTemperature = (kelvinTemperature - 273.15) * 9/5 + 32;
            const temperature = FahTemperature.toFixed(0);
            const description = weatherData.weather[0].description;
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = 
                `<h2>Weather in Missoula: </h2>
                <p>Temperature: ${temperature}°F</p>
                <p>Description: ${description}</p>`
            ;
        })
        .catch(error => {
            console.error('Error with fetching the weather data: ', error);
        
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = `<p>Error with loadng the weather data</p>`;
        });




});
