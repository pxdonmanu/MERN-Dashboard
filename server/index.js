//Imports 

//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
import express from 'express';

//Body-parser is a Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.
import bodyParser from 'body-parser';

//Cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
import cors from 'cors';

//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
import mongoose from 'mongoose';

//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
import dotenv from 'dotenv';

//Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
import helmet from 'helmet';

//Morgan is a HTTP request logger middleware for node.js
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin" }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT=process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}). then(()=> {
    app.listen(PORT, () => console.log('Server running on port: ' + PORT));
}).catch((error) => console.log(`${error} did not connect`));