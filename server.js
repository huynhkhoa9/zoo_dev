// server.js
//
const express = require('express');
const PORT = process.env.PORT || 4001;

const app = express();

app.get('/', (req, res) => {
    res.send('just gonna send it');
  });
  
  app.get('/flower', (req, res) => {
    res.json({
      name: 'Dandelion',
      colour: 'Blue-ish'
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});