var express = require('express');
var router = express.Router();
var Listing = require('../models/listing.schema');

router.get('/', function (req, res) {
    // a get request for all for sale
    Listing.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with sale find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    // a post request for sale
    var addListing = new Listing(req.body);

    addListing.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with sale save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router; 