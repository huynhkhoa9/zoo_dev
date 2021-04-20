// server.js
//
import path from 'path';
import express from 'express';

const authroutes = require("./routes/auth.routes")
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use("/", authroutes)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});