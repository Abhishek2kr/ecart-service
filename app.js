// import express from 'express';
// import dotenv from 'dotenv';
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
dotenv.config();
const app = express();
const router = require('./routes/index');


app.use(express.json())

app.use('/v1/ec', router);

const port = process.env.port || 3001;
app.listen(port, ()=>{
    console.log('Server is running on port:', port);
});

mongoose.connect(process.env.db_url);

mongoose.connection.on('error', console.error.bind(console, 'MongoDb Connection error'));


