var express = require("express");
var path = require('path');
var app = express();
app.use(express.static('./public/UI'));
app.get('/',function (request,response) {
    response.sendFile(path.resolve('./public/UI/index.html'));
});
app.listen(3005,function () {
    console.log('Server is running')});

