// server.js
//
import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();
import {router} from './auth.routes';

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});