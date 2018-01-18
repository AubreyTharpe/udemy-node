const yargs =  require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
const API_KEY = '850fa12ba8d1a7e7ceefc1af2e14a1a2';

axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }
    else if(response.data.status === 'INVALID_REQUEST'){
        throw new Error('Not a valid address.');
    }
    else if(response.data.status === 'OVER_QUERY_LIMIT'){
        throw new Error('Geosearch query limit reached.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var windSpeed = response.data.currently.windSpeed;

    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
    console.log(`Wind speed of ${windSpeed} mph.`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else{
        console.log(e.message);
    }
});