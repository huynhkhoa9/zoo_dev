"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();

var mysql = require('mysql');

var db = mysql.createPool({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_HOSTNAME
}); // Serve the static files from the React app

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client/build'))); // Handles any requests that don't match the ones above

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/client/build/index.html'));
});
db.getConnection(function (err, connection) {
  if (err) {
    return console.error('error: ' + err.message);
  } // execute query
  // ...


  connnection.release();
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
