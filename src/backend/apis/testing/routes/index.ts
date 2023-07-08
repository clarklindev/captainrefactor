import express from 'express';

import { getRoot, getCurrentTime, getUsers, login, downloadFile } from '../controllers';

const router = express.Router();

router.get('/', getRoot);
router.get('/currenttime', getCurrentTime);
router.get('/getusers', getUsers);
router.post('/login', login);
router.get('/download/:filename', downloadFile);

export default router;
