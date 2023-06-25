import express from 'express';

import { getHighestTempCity, getCityTemperatures } from '../controllers';

const router = express.Router();

router.get('/city-with-highest-temperature/cities=:cityNames', getHighestTempCity);
router.get('/city-temperatures/cities=:cityNames', getCityTemperatures);

export default router;
