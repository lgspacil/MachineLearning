var express = require('express');
var path = require('path');
var app = express();

// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use("/public", express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './files')})
})

app.listen(8080, function(){
    console.log('listening to file on port 8080')
})