var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create a new Schema for sale
//this will enforce our object properties
var saleSchema = new Schema({
    cost: { type: Number },
    sqft: { type: Number },
    city: { type: String },
});

module.exports = mongoose.model('Sale', saleSchema);