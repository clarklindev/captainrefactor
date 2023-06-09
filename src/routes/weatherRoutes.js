const express = require('express');
const { getHighestTempCity, getCityTemperatures } = require('../controllers/weatherController');

const router = express.Router();

router.get('/city-with-highest-temperature/cities=:cityNames', getHighestTempCity);
router.get('/city-temperatures/cities=:cityNames', getCityTemperatures);

module.exports = router;
