const express = require('express');
const app = express();

app.get("/", (req, res) => {
    return res.status(200).send(`<h1>Welcome To Get-IT-Job</h1>`);
})

module.exports = app;