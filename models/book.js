var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  Name: String,
  API_Name: String,
  Memory: String,
});

module.exports = mongoose.model("book", bookSchema);
