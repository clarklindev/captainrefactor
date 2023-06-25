const express = require('express');

const { getRoot, getCurrentTime, getUsers, login, downloadFile } = require('../controllers');

const router = express.Router();

router.get('/', getRoot);
router.get('/currenttime', getCurrentTime);
router.get('/getusers', getUsers);
router.post('/login', login);
router.get('/download/:filename', downloadFile);

module.exports = router;
