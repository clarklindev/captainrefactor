const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const weatherRoutes = require('./src/routes/weatherRoutes');

require('dotenv').config();

app.use(bodyParser.json()); //parse incoming requests for json data

app.get('/currenttime', (req, res, next) => {
  const now = new Date();
  const dateObj = {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    time: now.toLocaleString('en-us', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  };
  res.send(dateObj);
});

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'clark',
    email: 'clark@test.com',
    password: 'password',
  },
  {
    id: 'u2',
    name: 'Ted',
    email: 'ted@test.com',
    password: 'password',
  },
  { id: 'u3', name: 'Ben', email: 'ben@test.com', password: 'password' },
  { id: 'u4', name: 'Sofie', email: 'sofie@test.com', password: 'password' },
];

app.get('/getusers', (req, res, next) => {
  res.json(DUMMY_USERS);
});

app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = DUMMY_USERS.find((u) => u.email === email);
  if (!foundUser || foundUser.password !== password) {
    return res.status(422).json({ message: 'Invalid data' });
  }
  return res.status(200).json({ message: 'Logged in!' });
});

app.use(weatherRoutes);

// Endpoint to download a specific file
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set the appropriate headers for the response
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Create a read stream from the file and pipe it to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    // File not found
    res.status(404).send('File not found');
  }
});

app.get('/', (req, res, next) => {
  res.send('Hello, world!');
});

//listen
app.listen(3000);
console.log('listening on port 3000');
