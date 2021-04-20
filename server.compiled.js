"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();

var router = _express["default"].router(); // Serve the static files from the React app


app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client/build'))); // Handles any requests that don't match the ones above

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/client/build/index.html'));
});
router.post("/api/auth/signin", controller.signin);
router.post("/api/auth/signup", controller.signup);
router.post("/api/auth/employeesignin", controller.employeesignin);
router.post("/api/auth/addanimal", controller.addanimal);
router.post("/api/auth/addemployee", controller.addemployee);
router.post("/api/auth/addrevenue", controller.addrevenue);
router.post("/api/auth/getAnimals", controller.getAnimals);
app.use("/", router);
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
