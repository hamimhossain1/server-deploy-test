const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require('./data/hotels.json')


app.get('/hotels', (req, res) =>{
    res.send(hotels);
})

app.get('/', (req, res) =>{
    res.send('Hello fff wffforld')
})


app.listen(port, () =>{
    console.log(`This is test api: ${port}`);
})


module.exports = app;