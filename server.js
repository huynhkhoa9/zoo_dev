// server.js
//
import path from 'path';
import express from 'express';

const bodyParser = require("body-parser");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")
const mysql = require('mysql')

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authroutes)
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});