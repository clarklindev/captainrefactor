const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.b5tvnqi.mongodb.net/?retryWrites=true&w=majority`;

const weatherRoutes = require('./src/backend/weatherapi/routes');
const testingRoutes = require('./src/backend/testing/routes');
const contactsRoutes = require('./src/backend/contacts/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse incoming requests for json data
app.use(express.static(path.join(__dirname, 'public')));

app.use('/weather', weatherRoutes);
app.use('/testing', testingRoutes);
app.use('/contacts', contactsRoutes);

// app.use((req, res, next) => {
//   res.status(404).json({ status: 'ERROR', message: 'Page Not Found' });
// });

const startConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: 'contacts' });

    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`listening on port ${port}...`);
  } catch (err) {
    console.log(err);
  }
};
startConnection();
