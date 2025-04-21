const express = require('express');

const app = express()

app.get('/',(re,res) => {
    res.send('THis is from backend')
});

const port = 5000;
app.listen(port,() => console.log(`server is started`))