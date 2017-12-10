var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema');

//get Rental properties
router.get('/', function (req, res) {
    Rental.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with rental find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

//add new rental properties
router.post('/', function (req, res) {
    var addRental = new Rental(req.body);

    addRental.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with rental save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

//delete rentals
router.delete('/:id', function (req,res){
    Rental.remove({ _id: req.params.id }, function(errorMakingDatabaseQuery, result) {
        if (errorMakingDatabaseQuery) {
            console.log('error with rental delete', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log('result', result);
            res.sendStatus(200);
        }     
    }) 
});
    
    
module.exports = router; 