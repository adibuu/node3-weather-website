const request = require("request");

const forecast = (lattitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e52434ec1f094c2b2a1a17add9b0765e&query=" +
    encodeURIComponent(lattitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          "."
      );
    }
  });
};

module.exports = forecast;
