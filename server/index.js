var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3003;

var app = express();

app.use(express.static(path.join(__dirname, '/../react-client/dist')));



app.listen(port, function() {
  console.log('listening on port 3000!');
});

