var express = require('express');
var router = express.Router();
var Listing = require('../models/listing.schema');

//get for sale listings
router.get('/', function (req, res) {
    Listing.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with for sale find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

//add for sale listings
router.post('/', function (req, res) {
    var addListing = new Listing(req.body);
    addListing.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with new listing save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

//delete for sale listings
router.delete('/:id', function (req,res){
    Listing.remove({ _id: req.params.id }, function(errorMakingDatabaseQuery, result) {
        if (errorMakingDatabaseQuery) {
            console.log('error with listing delete', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log('result', result);
            res.sendStatus(200);
        }     
    }) 
});

module.exports = router; 