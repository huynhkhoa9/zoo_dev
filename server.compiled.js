"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var bodyParser = require("body-parser");

var cors = require("cors");

var authroutes = require("./routes/auth.routes");

var mysql = require('mysql');

var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.use(cors()); // parse requests of content-type - application/json

app.use(bodyParser.json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/", authroutes);
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
