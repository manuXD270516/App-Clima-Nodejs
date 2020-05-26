const location = require('./location/location');
const weather = require('./weather/weather');
const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            demand: true,
            desc: 'City Address for get weather'
        }
    }).argv;

//console.log(argv);
let {
    address
} = argv;


const getInfo = async (address) => {
    try {
        let locationResp = await location.getLocationLatLng(address);
        let {
            latRes,
            lngRes
        } = locationResp;
        let weatherResp = await weather.getWeather(latRes, lngRes);
        return `the clim of ${address} is ${weatherResp}`;
    } catch (error) {
        return 'the climate of place could not be determined';
    }
}


getInfo(address)
    .then(console.log)
    .catch(console.log);

/*weather.getWeather(41.389999, 2.160000)
    .then(console.log)
    .catch(console.log);*/

/*location.getLocationLatLng(address)
    .then(console.log);*/