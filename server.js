'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// Setup empty JS object to act as endpoint for all routes with data:
// temperature
// date
// user response
const projectData = {
    journalEntries:
        [
            {
                key: 4,
                temperatureCelsius: 45.5,
                date: new Date("2021-01-01"),
                userResponse: "SAD makes me sad...",
            }
        ]
};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/entries', (req, res) => {
    res.send(projectData.journalEntries);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});