const express = require('express');
const cors = require('cors');
const db = require('./db/db'); // Correct relative path to db.js
const {readdirSync} = require('fs')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

//Routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

// Define the server function
const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('listening on port:', PORT);
    });
};

// Start the server
server();
