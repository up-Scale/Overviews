import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import Product from '../DB/mongoClient/client';

import { mysqlGetByProductName, mysqlInsertByProductName, mysqlUpdateShipping, mysqlUpdateDescriptions, mysqlAddImage, mysqlDeleteImage, mysqlDeleteDescription, mysqlAddDescriptions } from './controllers/mysqlControllers';


const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/mongo/getProduct/:productName', (req, res) => {
  const productName = req.params.productName;
  Product.find({productName}).then(data => {
    const product = data[0];
    const { included, specs, shippingDate, video, productName } = product.attributes;
    const { descriptions } = product;
    const html = renderToString(<Descriptions descriptions={descriptions} />);
    const initialState = { productName, included, specs, shippingDate, video, html };
    const overviewsHtml = renderToString(<Overviews initialState={initialState}/>);

    res.status(200).send({initialState, overviewsHtml});
  });
});

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

