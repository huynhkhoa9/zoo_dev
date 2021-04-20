// server.js
//
import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});