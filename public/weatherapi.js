import('node-fetch').then(({ default: fetch }) => {
    const express = require('express');
    
    const app = express();
    const port = 3000;
    //ATTENTION ---- might need to store this in separate git file for security 
    const OPENWEATHER_API_KEY = '8d9db8e4bb0ce2768fc37dd27eb2be40';
    app.get('/api/openweather', async (req, res) => {
        try {
            const city = req.query.city || 'Missoula';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    
            const response = await fetch(apiUrl);
            const weatherData = await response.json();
            
            res.json(weatherData);
        } catch (error) {
            console.error('FETCH ERROR!: ', error);
            res.status(500).send('Error fetching the weather data');
        }
    });
    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Error importing node-fetch:', error);
});
