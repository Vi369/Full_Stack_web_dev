const express = require('express');
require('dotenv').config();
const connectToDb = require('./dbConfig/db.js')

const app = express();
// conneted to database
connectToDb();
module.exports = app;