var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/add', function(req, res, next) {
  var person = {
    name: req.query.name,
    address: req.query.address,
    email: req.query.email,
    phone: req.query.phone
  }
  console.log('person', person);
  res.json(person);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
