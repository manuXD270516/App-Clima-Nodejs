const axios = require('axios');

const getWeather =async  (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6391a170da2cb2894d2fa6d2f9984d01&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getWeather
};
