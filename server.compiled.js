"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();

var router = require('./auth.routes'); // Serve the static files from the React app


app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client/build'))); // Handles any requests that don't match the ones above

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/client/build/index.html'));
});
app.use("/", router);
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
