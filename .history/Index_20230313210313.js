const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// meddleWare
app.use(cors());
app.use(express.json());


// mongo connect
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nnr4oym.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()
        const serviceCollection = client.db('doctors-portal').collection('services')
        const bookingCollection = client.db('doctors-portal').collection('bookings')


        app.get('/service', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services)
        });

        app.post('/booking', async (req, res) => {
            const booking = req.body;
            const result = bookingCollection
        })

    }
    finally {


    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hello doctor vai')
})
app.listen(port, () => {
    console.log(`listening to Doctor${port}`);
})
