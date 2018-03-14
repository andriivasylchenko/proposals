var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/proposalsRoutes');
routes(app);

app.listen(port);

console.log('Sample RESTful API server started on: ' + port);