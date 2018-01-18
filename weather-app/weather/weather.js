const request = require('request');

const API_KEY = '850fa12ba8d1a7e7ceefc1af2e14a1a2';

var getWeather = (lat, lng, callback) => {
    request({
        uri: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {temperature: body.currently.temperature, apparentTemperature: body.currently.apparentTemperature});
        }
        else{
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;