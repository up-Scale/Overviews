import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { renderToString } from "react-dom/server";
import React from 'react';
import Product from '../DB/mongoClient/client';

import Descriptions from './client/Descriptions';
import Overviews from '../react-client/src/components/Overviews.jsx';

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/mongo/:productName', (req, res) => {
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
})

app.listen(port, function() {
  console.log('listening on port 3001!');
});

