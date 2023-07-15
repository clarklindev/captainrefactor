# captain-refactor

- This is a mentorship project where I learn, expand, revise and correct habbits of backend development under mentorship from Tech Principal Developer @captainmike

## express/typescript

- https://blog.logrocket.com/how-to-set-up-node-typescript-express/
- install and initialize dotenv in app.js
- test with postman
- add .env to .gitignore

## development build

- use eslint (.eslintrc.json) to show where errors / console.log()s are during development

```shell
npm run lint:fix
```

## production build

- dist/ folder is excluded from repository
- building the project 'npm run build' leaves the console.log()'s from codebase intact
- removes console.logs() with babel plugin: babel-plugin-transform-remove-console specified ini .babelrc
- package.json script:

```shell
npm run build
npm run removelogs
```

## routes

- "weather/" requires api key: https://openweathermap.org
- "contacts/" requires mongodb access details:
  - project: captainrefactor
  - user: clarkcookie

## CRUD / REST API setup (contacts/)

- mongodb/mongoose
- mongo atlas db

---

## mongodb/mongoose connection

- use mongo atlas - create user account, db, allow ip
- dont forget to configure .env with mongodb username/password
- connection string: <GET THIS FROM MONGODB ATLAS>
- use atlas node 2.12.2 connection url \*if 5.5 doesnt work

```js
// const mongoose = require('mongoose'); //commonjs
import mongoose from 'mongoose'; //esmodule

mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongodbURL`);
```

- mongodb schemas (inside /models) dont need "\_id" added, this is added automatically
- with model created... pass an object to Product - eg... { title (refers to title from schema) : title (refers to req.body.title) }

```js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// commonjs
// module.exports = mongoose.model('Product', productSchema);

// esmodules
const model = mongoose.model('Product', productSchema);
export default model;
```

## how are collections made with Mongoose?

- mongoose takes your model name eg. Product,
  - turns it to all lowercase
  - makes it plural form
  - so "Product" becomes "products"

## Mongoose GET

- Product.find() returns the actual products (not like mongodb which returns a cursor to products)

## Mongoose .populate() to get full object data using a field

```js
//here it only returns a the id string as part of what is stored in Product
const products = await Product.find();

//using populate() it can retrieve full object on the prop that is using a ref by using a prop as reference
const products = await Product.find().populate('userId');

//sometimes to get a prmise from .populate you need to call  .execPopulate();
const products = await Product.find().populate('userId').execPopulate();
```

## pulling data from only an id string via .\_doc

- via .\_doc then spread the return into an object

```js
// shop.js
const products = user.cart.items.map((i) => {
  return { quantity: i.quantity, product: { ...i.productId._doc } };
});
```

## Mongoose selective retrieval

- tells mongoose which props to retrieve (selective) or which not to retrieve

```js
Product.find().select('title price -_id'); //return title, price, not _id

//selective retrieval also works for .populate
const products = await Product.find().populate('userId', 'name'); //returns ALWAYS _id unless specified not to, and "name"
```

### install body-parser \*DEPRECATED

- note: since express 4.16 it is not necessary to import body-parser

#### NEW METHOD

```js
import express, { Express } from 'express';

app.use(express.json()); //parse incoming requests for json data
app.use(express.urlencoded({ extended: true })); //form data
```

#### OLD METHOD

```shell
npm i body-parser
```

```js
app.use(bodyParser.json()); //get data from form - by parsing the body of the
app.use(bodyParser.urlencoded({ extended: false }));
```

## mongodb id

- ids are strings stored using ObjectId() type

```js
const query = { _id: new mongodb.ObjectId(productId) };
```

## gotchas

mongodb uses '.\_id' as opposed to '.id'

---

### Google phone number library

- npm module: google-libphonenumber

https://www.npmjs.com/package/google-libphonenumber

```js
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = PhoneNumberUtil.getInstance();
```
