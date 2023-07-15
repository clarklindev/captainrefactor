import express from 'express';

import { getRoot, getCurrentTime, getUsers, login, downloadFile } from '../controllers';

const router = express.Router();

router.get('/', getRoot);
router.get('/currenttime', getCurrentTime);
router.get('/users', getUsers);
router.get('/download/:filename', downloadFile);

router.post('/login', login);

export default router;
