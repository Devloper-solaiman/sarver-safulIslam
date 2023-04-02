const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT || 5000;
const app = express();


// meddleWare
app.use(cors());
app.use(express.json());


// mongo connect
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3wdrhgr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {


        await client.connect()
        const serviceCollection = client.db('service').collection('product')
        app.get('/service', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services)
        })
    }
    finally {


    }
}


app.get('/', (req, res) => {
    res.send('running genius car serves')
})


app.listen(port, () => {
    console.log('listening to port');
})
