var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/person', function(req, res, next) {
  console.log('name', req.query.name);
  console.log('last name', req.query.lastName);
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
