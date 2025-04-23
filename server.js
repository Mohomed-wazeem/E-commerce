const express = require('express');

const app = express();

var dbconnect = require('./db');

const productRoutes = require('./routes/productsRoute');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api/products', productRoutes); 

app.get('/',(req,res) => {
    res.send('This is from backend')
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
  

