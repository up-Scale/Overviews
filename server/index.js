const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3003;
const db = require('../database-mongo/index.js')

const app = express();

app.use(cors());


app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/buy/:prod_name/overview', (req, res) => {
  db.getOverviewData(req.params.prod_name)
  .then((data) => {
    res.status(201).send(data);
  })
  .catch((err) => {
    console.error(err);
  });

});



  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'))
  });

  app.listen(port, function() {
    console.log('listening on port 3003!');
  });

