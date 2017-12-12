var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

require('./modules/mongoose-connection');
var rent = require('./routes/rent');
var sale = require('./routes/sale');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static('server/public'));


//EXPRESS ROUTES
app.use('/rent', rent);
app.use('/sale', sale);


//START SERVER
app.listen(port, function () {
    console.log('listening on port', port);
});