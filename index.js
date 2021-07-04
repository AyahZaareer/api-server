'use strict';
require('dotenv').config();
const server = require('./src/server');
const mongooes = require('mongoose');
const PORT = process.env.port || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongooes.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    server.start(PORT);
}).catch((e) => {
    console.error('connection error', e.message);

});


