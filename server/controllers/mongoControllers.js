import { renderToString } from "react-dom/server";
import React from 'react';
import Descriptions from './../client/Descriptions';
import Overviews from '../../react-client/src/components/Overviews.jsx';
import Product from '../../DB/mongoClient/client';

export const mongoInsertByProductName = function(req, res) {
  const {productName, category, attributes, descriptions } = req.body;

  Product.create({
    productName,
    category,
    attributes,
    descriptions
  }, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
};

export const mongoGetByProductName = function(req, res) {
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
};

export const mongoUpdateShipping = function(req, res) {
  const { shippingDate, productName } = req.body;
  
  Product.findOneAndUpdate({productName}, {$set: {'attributes.shippingDate': shippingDate}}, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
};

export const mongoUpdateDescriptions = function(req, res) {
  const { descriptions, productName } = req.body;

  Product.findOneAndUpdate({productName}, {$set: {descriptions}}, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
}

export const mongoDeleteProduct = function(req, res) {
  console.log('req body: ', req.body)
  const { productName } = req.body;
  console.log('product name: ', productName)

  Product.deleteOne({productName}, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
}