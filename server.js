var express = require('express');
var app     = express();
var routes  = require('./src/routes');

// For testing if the thing works correctly
app.get('/', (req, res) => {
    console.log('Got a GET request!');
});

app.use('/api/v1/', routes);

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log("Listening on port " +port+ "!");
});
