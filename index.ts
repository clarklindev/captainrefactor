import express, { Express } from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';

import weatherRoutes from './src/backend/weatherapi/routes';
import testingRoutes from './src/backend/testing/routes';
import contactRoutes from './src/backend/contacts/routes';

dotenv.config();

const app: Express = express();
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.b5tvnqi.mongodb.net/?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse incoming requests for json data
app.use(express.static(path.join(__dirname, 'public')));

app.use('/weather', weatherRoutes);
app.use('/testing', testingRoutes);
app.use('/contacts', contactRoutes);

// app.use((req, res, next) => {
//   res.status(404).json({ status: 'ERROR', message: 'Page Not Found' });
// });

const startConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: 'contacts' });

    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`server running at http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
};
startConnection();
