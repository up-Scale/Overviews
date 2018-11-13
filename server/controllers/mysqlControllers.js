import { renderToString } from "react-dom/server";
import React from 'react';
import Descriptions from './../client/Descriptions';
import Overviews from '../../react-client/src/components/Overviews.jsx';
import connection from '../../DB/mysqlClient/client';

export const mysqlInsertByProductName = function(req, res) {
  const {productName, category, attributes: {video, shippingDate, included, specs}, descriptions } = req.body;

  connection.query(`insert into attributes (productName, category, video, shippingDate, included, specs) values (?, ?, ?, ?, ?, ?);`, [
    productName, category, video, shippingDate, JSON.stringify(included), JSON.stringify(specs)
  ], function(err, {insertId: productId}) {
    console.log('product id: ', productId);
    descriptions.forEach(description => {
      connection.query(`insert into descriptions (header, content, productId) values (?, ?, ?);`, [description.header, description.content, productId], function(err, {insertId: descriptionId}) {
        description.images.forEach(image => {
          connection.query(`insert into images (url, descriptionId) values (?, ?)`, [image, descriptionId])
        })
      })
    })
  })

  res.status(200).send('temporary confirmation')
}


export const mysqlGetByProductName = function(req, res) {
  const productName = req.params.productName;
  
  const query = `
    select a.productName, a.productId, a.video, a.shippingDate, a.included, a.specs, d.header, d.content, d.id, i.url from (attributes a inner join descriptions d on a.productId = d.productId) inner join images i on d.id = i.descriptionId where a.productName = '${productName}'; 
  `

  connection.query(query, function(err, results) {
    const descriptions = Object.values(results.reduce(function(accumulator, current) {
      if (accumulator[current.id]) accumulator[current.id].images.push(current.url);
      else accumulator[current.id] = {
        header: current.header,
        content: current.content,
        images: [current.url]
      }
      return accumulator;
    }, {}));

    const html = renderToString(<Descriptions descriptions={descriptions} />);
    
    const initialState = {
      productName, 
      included: results[0].included.split(','),
      specs: results[0].specs.split(','),
      shippingDate: results[0].shippingDate,
      video: results[0].video,
      html
    };
    const overviewsHtml = renderToString(<Overviews initialState={initialState}/>);

    res.status(200).send({initialState, overviewsHtml});
  });
};

export const mysqlUpdateShipping = function(req, res) {
  const { shippingDate, productName } = req.body;
  
  connection.query(`update attributes set shippingDate = '${shippingDate}' where productName = '${productName}'`, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
};

export const mysqlUpdateDescriptions = function(req, res) {
  const {header, content, descriptionId} = req.body;

  connection.query(`update descriptions set header = '${header}', content = '${content}' where id = ${descriptionId};`, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  });
};

export const mysqlDeleteDescription = function(req, res) {
  const { id } = req.body;

  connection.query(`delete from descriptions where id = ${id}`, function(err, result) {
    if (err) res.status(404);
    else connection.query(`delete from images where descriptionId = ${id}`, function(err, result) {
      res.status(200).send(result);
    })
  })
};

export const mysqlAddDescriptions = function(req, res) {
  const {header, content, productId} = req.body;

  connection.query(`insert into descriptions (header, content, productId) values (?,?,?);`, [header, content, productId], function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
}

export const mysqlAddImage = function(req, res) {
  const { url, descriptionId } = req.body;

  connection.query(`insert into images (url, descriptionId) values (?,?);`, [url, descriptionId], function(err, result){
    if (err) res.status(404);
    else res.status(200).send(result);
  })
};

export const mysqlDeleteImage = function(req, res) {
  const { id } = req.body;

  connection.query(`delete from images where id = ${id}`, function(err, result) {
    if (err) res.status(404);
    else res.status(200).send(result);
  })
};