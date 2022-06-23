const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');
const mongoose = require('mongoose');

// Configure the environment variable to hide api keys from public
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to database
const databaseAPI = `${process.env.API_KEY}`;
mongoose.connect(databaseAPI)
.then(result => app.listen(`${process.env.PORT}`, () => {
    console.log(`server is running on port ${process.env.PORT}`)
}))
.catch(err => console.log(err));



app.get('/', (req, res) => {
    res.status(200).json({message: "Successful"})
})

app.use('/', userRoutes)