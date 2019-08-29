const options = {
    keepAlive: true,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
  };


const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/UserSchema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200
};




mongoose.connect('mongodb+srv://Teezolusegun:commando2244@teezy-jm6v2.mongodb.net/test?retryWrites=true&w=majority',  options )
	.then(() => console.log('connected'))
	.catch((err) => console.log('failed to connect', err));