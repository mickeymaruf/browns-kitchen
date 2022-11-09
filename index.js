const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: "unauthorized access" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Forbidden access" });
        }
        req.decoded = decoded;
    })
    next();
}


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ld8a5ol.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const run = async () => {
    try {
        const database = client.db("brownsKitchen");
        const serviceCollection = database.collection("services");
        const reviewCollection = database.collection("reviews");

        // 
        app.post('/jwt', (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ token });
        })

        // get services
        app.get('/services', async (req, res) => {
            const size = parseInt(req.query.size);
            const cursor = serviceCollection.find({}).sort({ _id: -1 }).limit(size);
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

        // get reviews by service id
        app.get('/reviews/:service_id', async (req, res) => {
            const service_id = req.params.service_id;
            const query = { service: service_id };
            const cursor = reviewCollection.find(query).sort({ _id: -1 });
            const reviews = await cursor.toArray();
            res.send({
                "status": "success",
                "data": reviews
            });
        })
        // get reviews by user email
        app.get('/reviews', verifyJWT, async (req, res) => {
            const email = req.query.email;
            if (req.decoded?.user !== email) {
                return res.status(401).send({ message: "unauthorized access" });
            }
            const query = { 'user.email': email };
            const cursor = reviewCollection.find(query).sort({ createdAt: -1 });
            const reviews = await cursor.toArray();
            res.send({
                "status": "success",
                "data": reviews
            });
        })
        // get user single review by review_id
        app.get('/myReviews/:id', verifyJWT, async (req, res) => {
            const query = { _id: ObjectId(req.params.id) };
            const review = await reviewCollection.findOne(query);
            res.json({
                "status": "success",
                "data": review
            })
        })
        // create review
        app.post('/reviews', async (req, res) => {
            const review = req.body;
            review.createdAt = new Date();
            const result = await reviewCollection.insertOne(review);
            res.send({ result, review });
        })
        // update review
        app.put('/reviews/:_id', async (req, res) => {
            const review = req.body.review;
            const query = { _id: ObjectId(req.params._id) };
            const updateReview = {
                $set: {
                    review: review
                }
            };
            const result = await reviewCollection.updateOne(query, updateReview);
            res.send(result);
        })
        // delete review
        app.delete('/reviews/:_id', async (req, res) => {
            const _id = req.params._id;
            const result = await reviewCollection.deleteOne({ _id: ObjectId(_id) });
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