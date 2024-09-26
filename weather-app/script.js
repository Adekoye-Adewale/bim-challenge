const apiKey = 'bf388e2c3ea7e809de1b520d765cf59e';

function getWeather() {
        const city = document.getElementById('city_input').value;
        const weatherResult = document.getElementById('weather_result');
        const errorMessage = document.getElementById('error_message');

        if (city === "") {
                alert("Please enter a city name");
                return;
        }

        fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
                .then(response => response.json())
                .then(data => {
                        if (data.error) {
                                throw new Error('City not found');
                        }
                        const { location, current } = data;

                        document.getElementById('city_name').innerText = location.name;
                        document.getElementById('temperature').innerText = current.temperature;
                        document.getElementById('condition').innerText = current.weather_descriptions[0];
                        document.getElementById('humidity').innerText = current.humidity;
                        document.getElementById('wind_speed').innerText = current.wind_speed;
                        document.getElementById('last_updated').innerText = current.observation_time;
                        document.getElementById('weather_icon').src = current.weather_icons[0];

                        console.log(location)

                        weatherResult.classList.remove('hidden');
                        errorMessage.classList.add('hidden');
                })
                .catch(error => {
                        weatherResult.classList.add('hidden');
                        errorMessage.classList.remove('hidden');
                });
}
