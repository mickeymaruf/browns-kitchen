const express = require('express');
const cors = require('cors');
require('dotenv').config();
const datetime = require('node-datetime')
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ld8a5ol.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const run = async () => {
    try {
        const database = client.db("brownsKitchen");
        const serviceCollection = database.collection("services");

        // get services
        app.get('/services', async (req, res) => {
            const size = parseInt(req.query.size);
            const cursor = serviceCollection.find({}).limit(size);
            const services = await cursor.toArray();
            res.json({
                "status": "success",
                "data": services
            })
        })
        // get service by id
        app.get('/services/:id', async (req, res) => {
            const query = { _id: ObjectId(req.params.id) };
            const service = await serviceCollection.findOne(query);
            res.json({
                "status": "success",
                "data": service
            })
        })
        // create services
        app.post('/services', async (req, res) => {
            const service = req.body;
            service.is_new = true;
            const result = await serviceCollection.insertOne(service);
            res.send(result);
        })
    }
    finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send({
        status: "success",
        message: "Browns kitchen is running..."
    })
})

app.listen(port, () => {
    console.log('App is running on port', port);
})