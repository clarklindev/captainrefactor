exports.getHighestTempCity = async (req, res, next) => {
  const cityNames = req.params.cityNames.split(',');

  try {
    const promises = cityNames.map(async (cityName) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_API}&units=${process.env.WEATHER_UNITS}`
      );
      const responseData = await response.json();
      console.log('responseData: ', responseData);
      return responseData;
    });

    const responses = await Promise.all(promises);

    const higestTempCity = responses.reduce((accumulator, current) => {
      if (accumulator === undefined || accumulator.main.temp < current.main.temp) {
        accumulator = current;
      }
      return accumulator;
    });

    const returnVal = { city: higestTempCity.name, temperature: higestTempCity.main.temp };
    console.log('returnVal: ', returnVal);
    res.status(200).json(returnVal);
  } catch (err) {
    const error = new Error('Request invalid');
    error.status = 422;
    res.json({ error: 'request invalid' });
    next(error);
  }
};

exports.getCityTemperatures = async (req, res, next) => {
  const cityNames = req.params.cityNames.split(',');

  const promises = cityNames.map(async (cityName) => {
    let cityStat;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_API}&units=${process.env.WEATHER_UNITS}`
      );
      const responseData = await response.json();
      cityStat = { city: cityName, temperature: responseData.main.temp };
    } catch (err) {
      cityStat = { city: cityName, invalid: true };
    }
    return cityStat;
  });

  const responses = await Promise.all(promises);
  res.send({ responses });

  console.log('responses: ', responses);
};
