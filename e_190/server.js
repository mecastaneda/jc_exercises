var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/person', function(req, res, next) {
  console.log('sending person');
  var person = {
    name: 'Moises',
    address: '1142 Evergreen Terrece',
    email: 'moicez@me.com',
    phone: '(555) 358-1321'
  }
  setTimeout(function() {
    res.json(person);
  }, 2000);
});

app.get('/contacts', function(req, res) {
  console.log('sending contacts');
  var ctcs = {names:['John', 'Pedro', 'Sri', 'Naine']};
  setTimeout(function() {
    res.json(ctcs);
  }, 1000);
});

app.get('/settings', function(req, res) {
  console.log('sending settings');
  var settings =  {display: '20', search: 'off'};
  setTimeout(function() {
    res.json(settings);
  }, 10000);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
