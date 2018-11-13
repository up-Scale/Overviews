import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';


import { mysqlGetByProductName, mysqlInsertByProductName, mysqlUpdateShipping, mysqlUpdateDescriptions, mysqlAddImage, mysqlDeleteImage, mysqlDeleteDescription, mysqlAddDescriptions } from './controllers/mysqlControllers';

import { mongoGetByProductName, mongoInsertByProductName, mongoUpdateShipping, mongoDeleteProduct, mongoUpdateDescriptions } from './controllers/mongoControllers';

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

//mongo routes:
app.get('/mongo/getProduct/:productName', mongoGetByProductName);
app.post('/mongo/insertProduct', mongoInsertByProductName);
app.delete('/mongo/deleteProduct', mongoDeleteProduct);
app.post('/mongo/updateShipping', mongoUpdateShipping);
app.post('/mongo/updateDescriptions', mongoUpdateDescriptions)

//mysql routes;
app.get('/mysql/getProduct/:productName', mysqlGetByProductName);
app.post('/mysql/insertProduct', mysqlInsertByProductName);
app.post('/mysql/updateShipping', mysqlUpdateShipping);
app.post('/mysql/updateDescription', mysqlUpdateDescriptions);
app.post('/mysql/addDescription', mysqlAddDescriptions);
app.delete('/mysql/mysqlDeleteDescription', mysqlDeleteDescription);
app.post('/mysql/AddImage', mysqlAddImage);
app.delete('/mysql/deleteImage', mysqlDeleteImage);

app.listen(port, function() {
  console.log('listening on port 3001!');
});

