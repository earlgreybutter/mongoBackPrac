var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    Name: String,
    API_Name: String,
    Memory: String
});

var temp = mongoose.model('book', bookSchema);

module.exports = { temp };