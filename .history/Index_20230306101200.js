
const express = require('express');
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT || 5000;
const app = express();


// meddleWare
app.use(cors());
app.use(express.json());


// mongo connect


app.get('/', (req, res) => {
    res.send('running genius car serves')
})


app.listen(port, () => {
    console.log('listening to port');
})
