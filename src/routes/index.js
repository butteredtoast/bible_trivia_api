var express     = require('express');
var app         = express.Router();
var questions   = require('./questions');

// Test that the routes pack is fine
app.get('/', function(req, res) {
    res.send("Got a GET request to the home URL");
});

app.use('/questions', questions);

module.exports = app;