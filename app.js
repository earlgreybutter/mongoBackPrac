// app.js

// [LOAD PACKAGES]
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors"); // 교차통신 모듈 호출

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/earlgrey", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// DEFINE MODEL
var Book = require("./models/book");

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors()); // 교차통신 적용

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 3000;

// [CONFIGURE ROUTER]
var router = require("./routes")(app, Book);

// [RUN SERVER]
var server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
