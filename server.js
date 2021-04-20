// server.js
//
import path from 'path';
import express from 'express';

const authroutes = require("./routes/auth.routes")
const mysql = require('mysql')
const PORT = process.env.PORT || 8080;
const app = express();

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});