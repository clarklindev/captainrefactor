import express, { Express } from 'express';
import 'dotenv/config';

import path from 'path';
import mongoose from 'mongoose';

import weatherRoutes from './backend/apis/weatherapi/routes';
import testingRoutes from './backend/apis/testing/routes';
import contactRoutes from './backend/apis/contacts/routes';

const app: Express = express();
const MONGODB_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@ac-yztvzc4-shard-00-00.b5tvnqi.mongodb.net:27017,ac-yztvzc4-shard-00-01.b5tvnqi.mongodb.net:27017,ac-yztvzc4-shard-00-02.b5tvnqi.mongodb.net:27017/?ssl=true&replicaSet=atlas-dbcw9j-shard-0&authSource=admin&retryWrites=true&w=majority`;
app.use(express.json()); //parse incoming requests for json data (replaces body-parser)
app.use(express.urlencoded({ extended: true })); //form data
app.use(express.static(path.join(__dirname, 'public')));

app.use('/weather', weatherRoutes);
app.use('/testing', testingRoutes);
app.use('/contacts', contactRoutes);

app.use((req, res, next) => {
  res.status(404).json({ status: 'ERROR', message: 'Page Not Found' });
});

const startConnection = async () => {
  try {
    const dbName = 'contacts';

    await mongoose.connect(MONGODB_URI, { dbName });

    //Create indexes and shard the collection
    // await Contact.createIndexes();
    // mongoose.connection.db.admin().command({ shardCollection: `${dbName}.Contact`, key: { clientId: 1 } });

    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`server running at http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
};
startConnection();
