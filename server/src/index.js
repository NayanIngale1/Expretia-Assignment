const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const jobController = require('./controllers/jobs.controller')


app.get("/", (req, res) => {
    return res.status(200).send(`<h1>Welcome To Get-IT-Job</h1>`);
})

app.use('/jobs', jobController);


module.exports = app;