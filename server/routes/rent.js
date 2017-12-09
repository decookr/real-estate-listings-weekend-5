var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema');

router.get('/', function (req, res) {
    // a get request for all for sale
    Rental.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with rental find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    // a post request for sale
    var addRental = new Rental(req.body);

    addRental.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with sale save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.delete('/:id', function (req, res) {

    var id = req.params.id;
    console.log(id);

    Rental.remove({ _id: ObjectId(id) }, function (err, result) { //undefined??
        if (err) return res.status(500).send({ err: 'Error: Could not delete robot' });
        if (!result) return res.status(400).send({ err: 'Robot bot deleted from firebase database' });
        console.log('deleted!!!');
        res.send(result);
    });
});
// router.delete('/:id', function (req,res){
//     Rental.remove({ _id: req.body.id }, function(errorConnectingToDatabase, client, done){
//         if(errorConnectingToDatabase){
//             console.log('Error connecting to database', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {( function(errorMakingQuery, result){
//                 done();
//                 if(errorMakingQuery){
//                     console.log('Error making query', errorMakingQuery);
//                     res.sendStatus(500);
//                 } else{
//                     res.sendStatus(200);
//                 }
//             });
//         }
//     });
// })
module.exports = router; 